import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export const Footer = () => {
  return (
    <div className="footer px-2">
      <div className="footer__content-top mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 py-8">
        {/* <!-- Logo Column --> */}
        <div className="footer-block flex items-center justify-end col-span-1 md:col-span-1">
          <a href="/">
            <img
              src="/images/favicon_surfaces_nouvelle_ere.png"
              alt="Surfaces Nouvelle Ère"
              loading="lazy"
              className="w-full max-w-xs"
            />
          </a>
        </div>
        {/* <!-- Mission Column --> */}
        <div className="footer-block flex-col text-center  md:text-left lg:text-left col-span-1 md:col-span-1">
          <h2 className="footer-block__heading text-white font-bold text-lg sm:text-xl md:text-2xl lg:text-2xl mb-4">
            NOTRE MISSION
          </h2>
          <p className="text-gray-300 font-normal text-sm sm:text-base md:text-lg lg:text-lg leading-relaxed mb-4">
            Notre mission est de vous accompagner dans la réalisation de vos
            projets de rénovations.
          </p>
          <p className="text-gray-300 font-normal text-sm sm:text-base md:text-lg lg:text-lg leading-relaxed mb-4">
            Obtenir le comptoir de cuisine ou de salle de bain de vos rêves
            n'aura jamais été aussi simple et rapide qu'avec Surfaces Nouvelle
            Ère.
          </p>
          <p className="text-gray-300 font-normal text-sm sm:text-base md:text-lg lg:text-lg leading-relaxed mb-4">
            Nos professionnels s'engagent à vous offrir un service de qualité
            complet et efficace.
          </p>
        </div>
        {/* <!-- Navigation Links Column --> */}
        <div className="footer-block text-center md:text-left lg:text-left col-span-1 md:col-span-1">
          <h2 className="footer-block__heading text-white font-bold text-lg sm:text-xl md:text-2xl lg:text-2xl mb-4">
            Passez à l'action
          </h2>
          <ul className="list-unstyled">
            <li>
              <a
                href="/portfolio"
                className="text-white block mb-3 hover:underline"
              >
                Consultez nos réalisations
              </a>
            </li>
            <li>
              <a
                href="/quote"
                className="text-white block mb-3 hover:underline"
              >
                Faites une soumission
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-white block mb-3 hover:underline"
              >
                Contactez-nous
              </a>
            </li>
          </ul>
          {/* <!-- Social Links --> */}
          <div className="flex justify-center md:justify-start py-4">
            <ul className="list-unstyled flex justify-center sm:justify-start">
              <li className="list-social__item px-4 hover:scale-110">
                <a
                  href="https://www.facebook.com/profile.php?id=100088187185568"
                  className="text-white"
                >
                  <FacebookIcon />
                </a>
              </li>
              <li className="list-social__item hover:scale-110">
                <a
                  href="https://www.instagram.com/surfacesnouvelleere/?hl=fr"
                  className="text-white"
                >
                  <InstagramIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* <!-- Bottom Content --> */}
      <div className="footer__content-bottom mx-auto max-w-7xl py-4">
        <div className="footer__column text-center">
          <div className="copyright__content text-white">
            © 2024,{" "}
            <a href="/" className="text-white">
              Surfaces Nouvelle Ère
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
