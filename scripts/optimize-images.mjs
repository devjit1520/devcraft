import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";

import sharp from "sharp";

/* =========================================================
   DEVCRAFT IMAGE OPTIMIZER
========================================================= */

const PUBLIC_DIRECTORY =
  path.resolve(
    process.cwd(),
    "public",
  );

const IMAGE_DIRECTORY =
  path.join(
    PUBLIC_DIRECTORY,
    "images",
  );

/* =========================================================
   SUPPORTED SOURCE FILES
========================================================= */

const supportedExtensions =
  new Set([
    ".jpg",
    ".jpeg",
    ".png",
  ]);

/* =========================================================
   FILES WE GENERATE

   These should NOT be processed again.
========================================================= */

const generatedExtensions =
  new Set([
    ".webp",
    ".avif",
  ]);

/* =========================================================
   IMAGE SETTINGS
========================================================= */

const settings = {
  /*
    Maximum width for normal website images.

    Project screenshots rarely need to be
    3000–5000px wide on a portfolio page.
  */

  maxWidth: 1800,

  /*
    WebP provides very good quality with
    significantly smaller file sizes.
  */

  webpQuality: 82,

  /*
    AVIF generally produces even smaller files.
  */

  avifQuality: 58,

  /*
    Keep PNG transparency when appropriate.
  */

  effort: 4,
};

/* =========================================================
   FORMAT BYTES
========================================================= */

const formatBytes = (
  bytes,
) => {
  if (!bytes) {
    return "0 KB";
  }

  const kilobytes =
    bytes / 1024;

  if (kilobytes < 1024) {
    return `${kilobytes.toFixed(
      1,
    )} KB`;
  }

  const megabytes =
    kilobytes / 1024;

  return `${megabytes.toFixed(
    2,
  )} MB`;
};

/* =========================================================
   FIND IMAGES RECURSIVELY
========================================================= */

const findImages = async (
  directory,
) => {
  const files = [];

  const entries =
    await fs.readdir(
      directory,
      {
        withFileTypes: true,
      },
    );

  for (const entry of entries) {
    const fullPath =
      path.join(
        directory,
        entry.name,
      );

    if (entry.isDirectory()) {
      const nestedFiles =
        await findImages(
          fullPath,
        );

      files.push(
        ...nestedFiles,
      );

      continue;
    }

    if (!entry.isFile()) {
      continue;
    }

    const extension =
      path
        .extname(
          entry.name,
        )
        .toLowerCase();

    if (
      generatedExtensions.has(
        extension,
      )
    ) {
      continue;
    }

    if (
      supportedExtensions.has(
        extension,
      )
    ) {
      files.push(
        fullPath,
      );
    }
  }

  return files;
};

/* =========================================================
   CREATE OUTPUT PATH
========================================================= */

const createOutputPath = (
  inputPath,
  extension,
) => {
  const parsed =
    path.parse(
      inputPath,
    );

  return path.join(
    parsed.dir,
    `${parsed.name}.${extension}`,
  );
};

/* =========================================================
   RESIZE STRATEGY
========================================================= */

const createPipeline = async (
  inputPath,
) => {
  const image =
    sharp(
      inputPath,
      {
        failOn: "none",
      },
    );

  const metadata =
    await image.metadata();

  const sourceWidth =
    metadata.width || 0;

  /*
    Never enlarge small images.

    Only resize when the image is wider
    than our maximum required width.
  */

  if (
    sourceWidth >
    settings.maxWidth
  ) {
    return image.resize({
      width:
        settings.maxWidth,

      withoutEnlargement:
        true,

      fit: "inside",
    });
  }

  return image;
};

/* =========================================================
   OPTIMIZE SINGLE IMAGE
========================================================= */

const optimizeImage = async (
  inputPath,
) => {
  const relativePath =
    path.relative(
      PUBLIC_DIRECTORY,
      inputPath,
    );

  const sourceStats =
    await fs.stat(
      inputPath,
    );

  const webpPath =
    createOutputPath(
      inputPath,
      "webp",
    );

  const avifPath =
    createOutputPath(
      inputPath,
      "avif",
    );

  /* =======================================================
     WEBP
  ======================================================= */

  const webpPipeline =
    await createPipeline(
      inputPath,
    );

  await webpPipeline
    .webp({
      quality:
        settings.webpQuality,

      effort:
        settings.effort,

      smartSubsample:
        true,
    })
    .toFile(
      webpPath,
    );

  /* =======================================================
     AVIF
  ======================================================= */

  const avifPipeline =
    await createPipeline(
      inputPath,
    );

  await avifPipeline
    .avif({
      quality:
        settings.avifQuality,

      effort:
        settings.effort,
    })
    .toFile(
      avifPath,
    );

  /* =======================================================
     OUTPUT INFORMATION
  ======================================================= */

  const [
    webpStats,
    avifStats,
  ] =
    await Promise.all([
      fs.stat(
        webpPath,
      ),

      fs.stat(
        avifPath,
      ),
    ]);

  const webpSaving =
    sourceStats.size > 0
      ? (
          100 -
          (webpStats.size /
            sourceStats.size) *
            100
        ).toFixed(1)
      : "0";

  const avifSaving =
    sourceStats.size > 0
      ? (
          100 -
          (avifStats.size /
            sourceStats.size) *
            100
        ).toFixed(1)
      : "0";

  console.log(
    "\n────────────────────────────────────────",
  );

  console.log(
    `✓ ${relativePath}`,
  );

  console.log(
    `  Original : ${formatBytes(
      sourceStats.size,
    )}`,
  );

  console.log(
    `  WebP     : ${formatBytes(
      webpStats.size,
    )} (${webpSaving}% smaller)`,
  );

  console.log(
    `  AVIF     : ${formatBytes(
      avifStats.size,
    )} (${avifSaving}% smaller)`,
  );
};

/* =========================================================
   MAIN
========================================================= */

const run = async () => {
  console.log(
    "\nDevCraft Image Optimizer",
  );

  console.log(
    "Searching public/images...\n",
  );

  /* =======================================================
     CHECK DIRECTORY
  ======================================================= */

  try {
    await fs.access(
      IMAGE_DIRECTORY,
    );
  } catch {
    console.error(
      "❌ public/images directory was not found.",
    );

    console.error(
      "\nExpected:",
    );

    console.error(
      "public/images/",
    );

    process.exit(1);
  }

  /* =======================================================
     FIND FILES
  ======================================================= */

  const images =
    await findImages(
      IMAGE_DIRECTORY,
    );

  if (
    images.length === 0
  ) {
    console.log(
      "No JPG, JPEG or PNG images were found.",
    );

    return;
  }

  console.log(
    `Found ${images.length} source image${
      images.length === 1
        ? ""
        : "s"
    }.`,
  );

  /* =======================================================
     PROCESS IMAGES ONE AT A TIME

     Sequential processing keeps memory usage
     lower than processing many large images
     simultaneously.
  ======================================================= */

  let completed = 0;

  for (const imagePath of images) {
    try {
      await optimizeImage(
        imagePath,
      );

      completed += 1;
    } catch (error) {
      console.error(
        "\n❌ Failed:",
        imagePath,
      );

      console.error(
        error.message,
      );
    }
  }

  /* =======================================================
     COMPLETE
  ======================================================= */

  console.log(
    "\n========================================",
  );

  console.log(
    "DevCraft image optimization complete.",
  );

  console.log(
    `Optimized ${completed}/${images.length} images.`,
  );

  console.log(
    "========================================\n",
  );
};

/* =========================================================
   RUN SCRIPT
========================================================= */

run().catch(
  (error) => {
    console.error(
      "\nUnexpected optimizer error:",
    );

    console.error(
      error,
    );

    process.exit(1);
  },
);