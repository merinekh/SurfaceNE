"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const path = usePathname();

  useEffect(() => {
    const cookieAccepted = localStorage.getItem("cookieAccepted");
    if (!cookieAccepted && path === "/") {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieAccepted", "true");
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.removeItem("cookieAccepted"); // Supprimer le consentement
    localStorage.removeItem("userData"); // Supprimer les données utilisateur
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-0 w-full bg-gray-800 text-white p-4 flex flex-col sm:flex-row justify-between items-center">
      <p className="text-sm sm:text-base">
        Ce site utilise des cookies pour améliorer l'expérience utilisateur et
        collecter des données anonymes pour l'analyse. En continuant à utiliser
        ce site, vous acceptez notre utilisation des cookies et notre politique
        de confidentialité.
      </p>

      <div className="m-2 flex">
        <button
          className="flex-grow bg-white text-black px-4 py-2 rounded-full mr-2"
          onClick={handleAccept}
        >
          Accepter
        </button>
        <button
          className="flex-grow bg-white text-black px-4 py-2 rounded-full"
          onClick={handleReject}
        >
          Rejeter
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
