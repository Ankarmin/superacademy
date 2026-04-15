"use client";

import { motion } from "framer-motion";
import { FaWhatsapp, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export const handleSendMessage = () => {
  const mensaje =
    "Hola, vengo desde la web de SuperAcademy y me interesa obtener mas informacion sobre sus servicios.";
  window.open(
    buildWhatsAppUrl(mensaje),
    "_blank",
    "noopener,noreferrer",
  );
};

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      className="fixed bottom-10 sm:bottom-10 right-4 sm:right-10 z-50 flex items-center gap-2 sm:gap-4"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {!isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          className="hidden sm:block bg-white px-4 py-2 rounded-lg shadow-lg text-sm"
        >
          ¿Necesitas ayuda? ¡Contáctanos ahora!
        </motion.div>
      )}

      <motion.button
        type="button"
        className="bg-gradient-to-r from-[#2ef4ed] to-[#01b8db] shadow-[0_0_22px_rgba(46,244,237,.55)] text-white p-3 sm:p-4 rounded-full shadow-lg cursor-pointer"
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="absolute bottom-16 sm:bottom-20 right-0 bg-white rounded-lg shadow-xl p-4 sm:p-6 w-[280px] sm:w-80"
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
            className="w-full bg-gradient-to-r from-[#2ef4ed] to-[#01b8db] shadow-[0_0_22px_rgba(46,244,237,.55)] text-white py-2 sm:py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-secondary transition-colors cursor-pointer text-sm sm:text-base"
          >
            <FaWhatsapp size={18} className="sm:w-5 sm:h-5" />
            Iniciar conversación
          </button>
        </motion.div>
      )}
    </motion.div>
  );
}
