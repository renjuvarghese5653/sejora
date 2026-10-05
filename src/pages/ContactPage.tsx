import React, { useState } from "react";
import { Phone, Mail, Instagram, MapPin, MessageCircle, Clock, ExternalLink } from "lucide-react";
import { STORE_CONFIG } from "../config/store";

export const ContactPage: React.FC = () => {
  const [subject, setSubject] = useState("Bespoke Styling Assistance");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = `Hello Sejora,

My name is: ${name || "A valued client"}
Subject: ${subject}

Message:
${message || "I would like to enquire about your collection and bespoke services."}

Thank you.`;

    const url = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(formattedMessage)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <p className="text-xs uppercase tracking-[0.25em] text-[#8A642D] font-semibold">
          Client Concierge
        </p>
        <h1 className="font-editorial text-4xl sm:text-6xl text-[#171411]">
          Contact Sejora
        </h1>
        <p className="text-xs sm:text-sm text-[#3A3027]/75 font-light leading-relaxed">
          We welcome your inquiries regarding piece availability, bridal appointments, custom saree blouse tailoring, and international deliveries.
        </p>
        <div className="w-12 h-0.5 bg-[#D4AF6A] mx-auto mt-4" />
      </div>

      {/* Main Grid: Direct Contact Channels Left + WhatsApp Message Form Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        
        {/* Left: Contact Details Cards */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Primary WhatsApp Card */}
          <div className="p-6 sm:p-8 bg-[#FAF6F0] border-2 border-[#D4AF6A]/60 shadow-xs space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0">
                <MessageCircle className="w-5 h-5 fill-current" />
              </div>
              <div>
                <h3 className="font-editorial text-2xl text-[#171411] font-semibold">
                  WhatsApp Concierge
                </h3>
                <span className="text-[11px] uppercase tracking-wider text-[#8A642D] font-medium">
                  Fastest Response · Sizing & Video Previews
                </span>
              </div>
            </div>

            <p className="text-xs text-[#3A3027]/85 leading-relaxed">
              Connect directly with our styling consultants in London & Cochin. We can share high-resolution drape videos, border close-ups, and color matching advice.
            </p>

            <a
              href={`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent("Hello Sejora, I would like personal assistance with your collection.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 shadow-xs transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Chat with Us on WhatsApp</span>
            </a>
          </div>

          {/* Contact Details List */}
          <div className="p-6 sm:p-8 bg-white border border-[#D4AF6A]/25 space-y-5">
            <h4 className="font-editorial text-xl text-[#171411] font-semibold border-b border-[#D4AF6A]/20 pb-3">
              Direct Channels
            </h4>

            {/* Phone */}
            <div className="flex items-start gap-3.5">
              <Phone className="w-4 h-4 text-[#8A642D] mt-1 shrink-0" />
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#8A642D] block font-medium">
                  Direct Line
                </span>
                <a
                  href={`tel:${STORE_CONFIG.phoneTel}`}
                  className="text-sm font-semibold text-[#171411] hover:text-[#8A642D] transition-colors"
                >
                  {STORE_CONFIG.displayPhone}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3.5">
              <Mail className="w-4 h-4 text-[#8A642D] mt-1 shrink-0" />
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#8A642D] block font-medium">
                  Email Inquiries
                </span>
                <a
                  href={`mailto:${STORE_CONFIG.email}`}
                  className="text-sm font-semibold text-[#171411] hover:text-[#8A642D] transition-colors"
                >
                  {STORE_CONFIG.email}
                </a>
              </div>
            </div>

            {/* Instagram */}
            <div className="flex items-start gap-3.5">
              <Instagram className="w-4 h-4 text-[#8A642D] mt-1 shrink-0" />
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#8A642D] block font-medium">
                  Instagram Journal
                </span>
                <a
                  href={STORE_CONFIG.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-[#171411] hover:text-[#8A642D] transition-colors inline-flex items-center gap-1"
                >
                  <span>{STORE_CONFIG.instagramHandle}</span>
                  <ExternalLink className="w-3 h-3 text-[#8A642D]" />
                </a>
              </div>
            </div>

            {/* Boutique Location */}
            <div className="flex items-start gap-3.5">
              <MapPin className="w-4 h-4 text-[#8A642D] mt-1 shrink-0" />
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#8A642D] block font-medium">
                  London & Kerala Presence
                </span>
                <p className="text-xs text-[#3A3027]">{STORE_CONFIG.address}</p>
                <a
                  href={STORE_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-[#8A642D] underline hover:text-[#171411] inline-flex items-center gap-1 mt-1 font-medium"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-3.5 pt-2 border-t border-[#D4AF6A]/15">
              <Clock className="w-4 h-4 text-[#8A642D] mt-1 shrink-0" />
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#8A642D] block font-medium">
                  Consultation Hours
                </span>
                <p className="text-xs text-[#3A3027]">{STORE_CONFIG.workingHours}</p>
              </div>
            </div>

          </div>

        </div>

        {/* Right: Direct WhatsApp Inquiry Form */}
        <div className="lg:col-span-7 bg-[#FAF6F0] border border-[#D4AF6A]/30 p-6 sm:p-10 shadow-xs">
          <div className="space-y-2 mb-6 border-b border-[#D4AF6A]/20 pb-4">
            <h3 className="font-editorial text-2xl sm:text-3xl text-[#171411] font-semibold">
              Send an Inquiry
            </h3>
            <p className="text-xs text-[#3A3027]/75">
              Complete the fields below to instantly generate and launch your personalized WhatsApp message.
            </p>
          </div>

          <form onSubmit={handleSendMessage} className="space-y-5">
            {/* Subject Select */}
            <div>
              <label htmlFor="inquirySubject" className="block text-xs uppercase tracking-wider text-[#8A642D] font-semibold mb-2">
                Inquiry Focus
              </label>
              <select
                id="inquirySubject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full bg-white border border-[#D4AF6A]/40 text-xs sm:text-sm py-2.5 px-3.5 text-[#171411] focus:outline-none focus:border-[#8A642D]"
              >
                <option value="Bespoke Styling Assistance">Bespoke Styling Assistance</option>
                <option value="Bridal Lehenga / Wedding Ensemble">Bridal Lehenga / Wedding Ensemble</option>
                <option value="Kerala Kasavu Traditional Saree">Kerala Kasavu Traditional Saree</option>
                <option value="22k Temple Jewellery Selection">22k Temple Jewellery Selection</option>
                <option value="Blouse Stitching & Measurements">Blouse Stitching & Measurements</option>
                <option value="International Dispatch & Delivery">International Dispatch & Delivery</option>
                <option value="Other Question">Other Question</option>
              </select>
            </div>

            {/* Name Input */}
            <div>
              <label htmlFor="clientName" className="block text-xs uppercase tracking-wider text-[#8A642D] font-semibold mb-2">
                Your Name
              </label>
              <input
                id="clientName"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Priya Sharma"
                className="w-full bg-white border border-[#D4AF6A]/40 text-xs sm:text-sm py-2.5 px-3.5 text-[#171411] placeholder:text-[#3A3027]/40 focus:outline-none focus:border-[#8A642D]"
              />
            </div>

            {/* Message Area */}
            <div>
              <label htmlFor="clientMessage" className="block text-xs uppercase tracking-wider text-[#8A642D] font-semibold mb-2">
                Your Details & Questions
              </label>
              <textarea
                id="clientMessage"
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us about the occasion, preferred colors, delivery date, or questions about specific pieces..."
                className="w-full bg-white border border-[#D4AF6A]/40 text-xs sm:text-sm p-3.5 text-[#171411] placeholder:text-[#3A3027]/40 focus:outline-none focus:border-[#8A642D]"
              />
            </div>

            {/* Submit via WhatsApp */}
            <button
              type="submit"
              className="w-full py-4 px-6 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs sm:text-sm font-bold tracking-[0.16em] uppercase flex items-center justify-center gap-2.5 shadow-md transition-colors"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>SEND VIA WHATSAPP</span>
            </button>

            <p className="text-[11px] text-[#8A642D] text-center leading-relaxed">
              Your message will open directly in WhatsApp on your phone or WhatsApp Web on desktop. No login or registration required.
            </p>
          </form>
        </div>

      </div>

    </div>
  );
};
