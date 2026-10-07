/**
 * Sejora Store Configuration
 * Central source of truth for contact details, WhatsApp integration, and brand info.
 */

export interface CartItemWhatsApp {
  id: string;
  name: string;
  price: number;
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
}

export const STORE_CONFIG = {
  storeName: "Sejora",
  tagline: "Women's Wear & Heritage Jewellery",
  websiteUrl: "https://sejora.uk",
  // Standard international WhatsApp number without symbols (country code + number)
  // e.g. 447400000000 (UK) or 919876543210 (India). Configurable here:
  whatsappNumber: "447448460302",
  displayPhone: "+44 (0) 7448 460302",
  phoneTel: "+447448460302",
  email: "hello@sejora.uk",
  instagram: "https://instagram.com/sejora.uk",
  instagramHandle: "@sejora.uk",
  googleMapsUrl: "https://maps.google.com/?q=London,+Mayfair,+United+Kingdom",
  currencySymbol: "₹",
  address: "Simms Garden, East Finchley, London, N28HT, United Kingdom",
  workingHours: "Monday – Saturday: 10:00 AM – 7:00 PM GMT",
};

/**
 * Generates the official WhatsApp order enquiry link for the cart
 */
export function generateWhatsAppCartUrl(items: CartItemWhatsApp[], total: number): string {
  if (items.length === 0) {
    const emptyMsg = `Hello Sejora,\n\nI would like to enquire about your women's fashion and jewellery collection.\n\nThank you.`;
    return `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(emptyMsg)}`;
  }

  const itemsList = items
    .map((item, index) => {
      const details = [
        item.selectedSize ? `Size: ${item.selectedSize}` : null,
        item.selectedColor ? `Color: ${item.selectedColor}` : null,
      ].filter(Boolean).join(", ");

      const detailStr = details ? ` (${details})` : "";
      return `${index + 1}. ${item.name}${detailStr}\n   Price: ${STORE_CONFIG.currencySymbol}${item.price.toLocaleString("en-IN")}\n   Quantity: ${item.quantity}`;
    })
    .join("\n\n");

  const formattedTotal = `${STORE_CONFIG.currencySymbol}${total.toLocaleString("en-IN")}`;

  const message = `Hello Sejora,

I would like to enquire about the following products:

${itemsList}

Total: ${formattedTotal}

Please confirm availability and delivery details.

Thank you.`;

  return `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Generates the official WhatsApp product-level enquiry link
 */
export function generateWhatsAppProductUrl(
  productName: string,
  price: number,
  size?: string,
  color?: string
): string {
  const variantDetails = [
    size ? `Size: ${size}` : null,
    color ? `Color: ${color}` : null,
  ].filter(Boolean).join(", ");

  const variantText = variantDetails ? `\nVariant: ${variantDetails}` : "";

  const message = `Hello Sejora,

I am interested in:

Product: ${productName}
Price: ${STORE_CONFIG.currencySymbol}${price.toLocaleString("en-IN")}${variantText}

Please let me know about availability and delivery.

Thank you.`;

  return `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Generates a general WhatsApp message for customer assistance
 */
export function generateWhatsAppGeneralUrl(inquiryType: string = "General"): string {
  const message = `Hello Sejora,

I am browsing your collection online and would like some assistance regarding ${inquiryType}.

Thank you.`;

  return `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
