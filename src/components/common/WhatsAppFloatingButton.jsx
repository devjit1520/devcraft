import { FaWhatsapp } from "react-icons/fa";

function WhatsAppFloatingButton() {
  const phoneNumber = "+918515016686";
  const message =
    "Hi DevCraft, I visited your website and I would like to discuss a project.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        group
        fixed
        bottom-5
        right-5
        z-[120]
        flex
        items-center
        gap-3
      "
    >
      <span
        className="
          hidden
          rounded-full
          border
          border-[#d9f3df]
          bg-white
          px-4
          py-3
          text-[12px]
          font-bold
          text-[#1f1c1a]
          shadow-[0_16px_40px_rgba(0,0,0,0.10)]
          transition-all
          duration-300
          group-hover:-translate-x-1
          sm:inline-flex
        "
      >
        Let&apos;s chat
      </span>

      <span
        className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-[#25D366]
          text-white
          shadow-[0_18px_40px_rgba(37,211,102,0.35)]
          transition-all
          duration-300
          group-hover:scale-105
        "
      >
        <FaWhatsapp size={28} />
      </span>
    </a>
  );
}

export default WhatsAppFloatingButton;