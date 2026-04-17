"use client";

import { motion } from "framer-motion";
import { FaWhatsapp, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

function handleSendMessage() {
  const mensaje =
    "Hola, vengo desde la web de SuperAcademy y me interesa obtener mas informacion sobre sus servicios.";
  window.open(
    buildWhatsAppUrl(mensaje),
    "_blank",
    "noopener,noreferrer",
  );
}

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = () => {
    setIsOpen((currentValue) => !currentValue);
  };

  return (
    <motion.div
      className="group fixed bottom-4 right-4 z-50 flex items-end gap-2 sm:bottom-8 sm:right-8 sm:gap-3"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {!isOpen && (
        <div className="pointer-events-none hidden translate-x-2 rounded-lg bg-white px-4 py-2 text-sm shadow-lg opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 lg:block">
          ¿Necesitas ayuda? ¡Contáctanos ahora!
        </div>
      )}

      <motion.button
        type="button"
        aria-expanded={isOpen}
        aria-controls="whatsapp-widget-panel"
        aria-label={isOpen ? "Cerrar ayuda por WhatsApp" : "Abrir ayuda por WhatsApp"}
        className="cursor-pointer rounded-full bg-gradient-to-r from-[#2ef4ed] to-[#01b8db] p-3 text-white shadow-[0_0_22px_rgba(46,244,237,.55)] shadow-lg sm:p-4"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleWhatsAppClick}
      >
        {isOpen ? (
          <FaTimes size={24} className="sm:w-8 sm:h-8" />
        ) : (
          <FaWhatsapp size={24} className="sm:w-8 sm:h-8" />
        )}
      </motion.button>

      {isOpen && (
        <motion.div
          id="whatsapp-widget-panel"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="absolute bottom-16 right-0 w-[min(20rem,calc(100vw-1rem))] rounded-lg bg-white p-4 shadow-xl sm:bottom-20 sm:w-80 sm:p-6"
        >
          <div className="text-center mb-3 sm:mb-4">
            <h3 className="font-semibold text-lg sm:text-xl mb-2">¡Hola! 👋</h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              ¿En qué podemos ayudarte? Estamos aquí para resolver tus dudas
              sobre Super Academy.
            </p>
          </div>
          <button
            type="button"
            onClick={handleSendMessage}
            className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#2ef4ed] to-[#01b8db] py-2 text-sm text-white shadow-[0_0_22px_rgba(46,244,237,.55)] transition-colors hover:bg-secondary sm:py-3 sm:text-base"
          >
            <FaWhatsapp size={18} className="sm:w-5 sm:h-5" />
            Iniciar conversación
          </button>
          <p className="mt-3 text-center text-xs leading-5 text-slate-500">
            Respuesta habitual dentro del horario de atención.
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}
