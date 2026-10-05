import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Compass } from "lucide-react";

export const NotFoundPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-24 sm:py-36 text-center space-y-6">
      <div className="w-16 h-16 rounded-full bg-[#EFE4D2]/60 text-[#8A642D] mx-auto flex items-center justify-center">
        <Compass className="w-8 h-8 stroke-1" />
      </div>

      <p className="text-xs uppercase tracking-[0.3em] text-[#8A642D] font-semibold">
        Error 404 · Page Not Found
      </p>

      <h1 className="font-editorial text-4xl sm:text-6xl text-[#171411]">
        A Moment Beyond the Loom
      </h1>

      <p className="text-xs sm:text-sm text-[#3A3027]/75 max-w-md mx-auto leading-relaxed">
        The destination you are looking for does not exist or may have been repositioned within our collection.
      </p>

      <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          to="/"
          className="w-full sm:w-auto py-3 px-8 bg-[#3A3027] hover:bg-[#171411] text-[#EFE4D2] text-xs uppercase tracking-widest font-semibold transition-colors border border-[#D4AF6A]/40"
        >
          Return to Home
        </Link>
        <Link
          to="/shop"
          className="w-full sm:w-auto py-3 px-8 bg-transparent hover:bg-[#EFE4D2]/40 text-[#171411] text-xs uppercase tracking-widest font-semibold border border-[#D4AF6A] transition-colors inline-flex items-center justify-center gap-2"
        >
          <span>Explore The Shop</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#8A642D]" />
        </Link>
      </div>
    </div>
  );
};
