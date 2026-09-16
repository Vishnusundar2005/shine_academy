import React from "react";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919840970732?text=Book%20your%20free%20demo%20session%2C"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.6)] transition-transform hover:scale-105 sm:bottom-6 sm:right-6"
    >
      <svg viewBox="0 0 32 32" className="size-5" fill="currentColor" aria-hidden="true">
        <path d="M16.003 3C9.374 3 4 8.373 4 15c0 2.385.69 4.617 1.886 6.51L4 29l7.71-1.847A11.94 11.94 0 0 0 16.003 27C22.63 27 28 21.627 28 15S22.63 3 16.003 3Zm0 21.6a9.55 9.55 0 0 1-4.87-1.337l-.349-.207-4.576 1.097 1.116-4.46-.227-.36A9.6 9.6 0 1 1 16.003 24.6Zm5.522-7.18c-.302-.151-1.787-.882-2.064-.983-.276-.1-.477-.151-.678.151-.2.302-.777.983-.952 1.183-.176.2-.351.226-.653.075-.302-.151-1.275-.47-2.43-1.498-.898-.8-1.504-1.79-1.68-2.092-.176-.302-.019-.465.132-.616.135-.135.302-.351.452-.527.151-.176.2-.302.302-.502.1-.2.05-.377-.025-.527-.075-.151-.678-1.636-.929-2.241-.245-.589-.495-.51-.678-.519l-.578-.01a1.11 1.11 0 0 0-.804.377c-.276.302-1.054 1.029-1.054 2.508 0 1.48 1.079 2.91 1.229 3.111.151.2 2.124 3.246 5.146 4.55.72.31 1.281.495 1.719.633.722.23 1.379.198 1.898.12.579-.086 1.787-.731 2.039-1.437.252-.706.252-1.31.176-1.437-.075-.126-.276-.2-.578-.351Z" />
      </svg>
      <span className="hidden sm:inline">WhatsApp Us</span>
    </a>
  );
}
