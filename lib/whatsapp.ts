export const WHATSAPP_PHONE_NUMBER = "51923806156";

export const buildWhatsAppUrl = (message: string) => {
  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodedMessage}`;
};
