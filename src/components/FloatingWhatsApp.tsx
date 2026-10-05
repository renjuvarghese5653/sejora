import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { STORE_CONFIG } from "../config/store";

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = () => {
    const message = `Hello Sejora, I would like to enquire about your women's fashion and jewellery collection.`;
    const url = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Optional elegant tooltip bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#FAF6F0] border border-[#D4AF6A] shadow-lg py-2 px-3 text-xs text-[#171411] animate-in fade-in slide-in-from-right-2">
          <span>Need styling advice? Chat on WhatsApp</span>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-[#8A642D] hover:text-[#171411]"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Circular Gold Button */}
      <button
        type="button"
        onClick={handleClick}
        onMouseEnter={() => setShowTooltip(true)}
        className="group relative w-14 h-14 rounded-full bg-[#171411] hover:bg-[#3A3027] text-[#D4AF6A] border-2 border-[#D4AF6A] shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-105 focus:outline-none"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp with Sejora Concierge"
      >
        {/* Subtle breathing ripple */}
        <span className="absolute -inset-1 rounded-full bg-[#D4AF6A]/20 animate-ping opacity-60 -z-10 group-hover:opacity-100" />
        
        <MessageCircle className="w-6 h-6 stroke-[1.8] group-hover:scale-110 transition-transform" />
      </button>
    </div>
  );
};
