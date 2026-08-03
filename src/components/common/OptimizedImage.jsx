import {
  useState,
} from "react";

/* =========================================================
   CREATE OPTIMIZED IMAGE PATHS

   Example:

   /images/projects/fintrack-pro.jpg

   becomes:

   AVIF
   /images/projects/fintrack-pro.avif

   WebP
   /images/projects/fintrack-pro.webp

   Original fallback
   /images/projects/fintrack-pro.jpg
========================================================= */

const getOptimizedSources = (
  src,
) => {
  if (!src) {
    return {
      original: "",
      webp: "",
      avif: "",
      canOptimize: false,
    };
  }

  /*
    Preserve query strings or hashes if
    they are ever added later.
  */

  const match =
    src.match(
      /^([^?#]+)([?#].*)?$/,
    );

  const pathname =
    match?.[1] || src;

  const suffix =
    match?.[2] || "";

  /*
    Only automatically create WebP / AVIF
    paths when the source is JPG, JPEG or PNG.
  */

  const extensionMatch =
    pathname.match(
      /\.(jpg|jpeg|png)$/i,
    );

  if (!extensionMatch) {
    return {
      original: src,
      webp: "",
      avif: "",
      canOptimize: false,
    };
  }

  const basePath =
    pathname.replace(
      /\.(jpg|jpeg|png)$/i,
      "",
    );

  return {
    original: src,

    webp:
      `${basePath}.webp${suffix}`,

    avif:
      `${basePath}.avif${suffix}`,

    canOptimize: true,
  };
};

/* =========================================================
   OPTIMIZED IMAGE
========================================================= */

const OptimizedImage = ({
  src,
  alt = "",

  className = "",
  pictureClassName = "",

  width,
  height,

  loading = "lazy",
  decoding = "async",

  fetchPriority = "auto",

  sizes,

  draggable = false,

  fallback = null,

  onLoad,
  onError,

  ...imageProps
}) => {
  const [
    hasError,
    setHasError,
  ] = useState(false);

  const {
    original,
    webp,
    avif,
    canOptimize,
  } =
    getOptimizedSources(
      src,
    );

  /* =======================================================
     IMAGE ERROR
  ======================================================= */

  const handleError = (
    event,
  ) => {
    setHasError(true);

    if (onError) {
      onError(event);
    }
  };

  /* =======================================================
     CUSTOM FALLBACK

     Example:

     fallback={
       <div>
         Project preview unavailable
       </div>
     }
  ======================================================= */

  if (hasError) {
    if (fallback) {
      return fallback;
    }

    return (
      <div
        role="img"
        aria-label={
          alt ||
          "Image unavailable"
        }
        className={`
          flex
          h-full
          w-full
          items-center
          justify-center
          bg-gradient-to-br
          from-[#f7f3f1]
          via-[#fffaf8]
          to-white
          p-5
          text-center

          ${pictureClassName}
        `}
      >
        <div>
          <span
            aria-hidden="true"
            className="
              mx-auto
              block
              h-8
              w-8
              rounded-[10px]
              border
              border-[#eadfda]
              bg-white
              shadow-[0_8px_22px_rgba(55,37,30,0.05)]

              sm:h-10
              sm:w-10
              sm:rounded-[12px]
            "
          />

          <p
            className="
              mt-3
              text-[8px]
              font-extrabold
              uppercase
              tracking-[0.15em]
              text-[#aaa29d]

              sm:text-[9px]
              sm:tracking-[0.17em]
            "
          >
            Image unavailable
          </p>
        </div>
      </div>
    );
  }

  /* =======================================================
     NO SOURCE
  ======================================================= */

  if (!original) {
    return null;
  }

  /* =======================================================
     IMAGE DOES NOT USE JPG / PNG

     SVG, GIF, existing WebP etc. can still
     use this component. We simply render the
     original image without generating source paths.
  ======================================================= */

  if (!canOptimize) {
    return (
      <img
        src={original}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        decoding={decoding}
        fetchPriority={
          fetchPriority
        }
        sizes={sizes}
        draggable={
          draggable
        }
        onLoad={onLoad}
        onError={
          handleError
        }
        className={`
          block
          max-w-full

          ${className}
        `}
        {...imageProps}
      />
    );
  }

  /* =======================================================
     AVIF → WEBP → ORIGINAL
  ======================================================= */

  return (
    <picture
      className={`
        block
        max-w-full

        ${pictureClassName}
      `}
    >
      {/* ===================================================
          AVIF

          Modern browsers supporting AVIF
          should normally choose this first.
      =================================================== */}

      <source
        srcSet={avif}
        type="image/avif"
        sizes={sizes}
      />

      {/* ===================================================
          WEBP

          Used when AVIF is unsupported but
          WebP is available.
      =================================================== */}

      <source
        srcSet={webp}
        type="image/webp"
        sizes={sizes}
      />

      {/* ===================================================
          ORIGINAL FALLBACK

          JPG / PNG remains available for
          compatibility and as the final source.
      =================================================== */}

      <img
        src={original}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        decoding={decoding}
        fetchPriority={
          fetchPriority
        }
        sizes={sizes}
        draggable={
          draggable
        }
        onLoad={onLoad}
        onError={
          handleError
        }
        className={`
          block
          max-w-full

          ${className}
        `}
        {...imageProps}
      />
    </picture>
  );
};

export default OptimizedImage;