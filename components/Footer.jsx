import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export const Footer = () => {
  return (
    <div class="footer">
      <div class="footer__content-top mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
        {/* <!-- Logo Column --> */}
        <div class="footer-block flex items-center justify-center">
          <img
            src="//surfacesnouvelleere.ca/cdn/shop/files/favicon_surfaces_nouvelle_ere_png.png?v=1669513855&amp;width=200"
            alt="Surfaces Nouvelle Ère"
            loading="lazy"
            width="200"
            height="144"
          />
        </div>
        {/* <!-- Mission Column --> */}
        <div class="footer-block flex-col ">
          <h2 class="footer-block__heading text-white font-bold text-2xl mb-4">
            NOTRE MISSION
          </h2>
          <p class="text-gray-300 font-normal text-lg leading-relaxed mb-8">
            Notre mission est de vous accompagner dans la réalisation de vos
            projets de rénovations.
          </p>
          <p class="text-gray-300 font-normal text-lg leading-relaxed mb-8">
            Obtenir le comptoir de cuisine ou de salle de bain de vos rêves
            n'aura jamais été aussi simple et rapide qu'avec Surfaces Nouvelle
            Ère.
          </p>
          <p class="text-gray-300 font-normal text-lg leading-relaxed mb-8">
            Nos professionnels s'engagent à vous offrir un service de qualité
            complet et efficace.
          </p>
        </div>
        {/* <!-- Navigation Links Column --> */}
        <div class="footer-block mx-auto">
          <h2 class="footer-block__heading text-white font-bold text-2xl mb-4">
            Passez à l'action
          </h2>
          <ul class="list-unstyled">
            <li>
              <a
                href="/pages/nos-realisations"
                class="text-white block mb-3 hover:underline"
              >
                Consultez nos réalisations
              </a>
            </li>
            <li>
              <a
                href="/pages/contact"
                class="text-white block mb-3 hover:underline"
              >
                Faites une soumission
              </a>
            </li>
            <li>
              <a
                href="/pages/nous-joindre"
                class="text-white block mb-3 hover:underline"
              >
                Contactez-nous
              </a>
            </li>
          </ul>
          {/* <!-- Social Links --> */}
          <div class="footer__list-social mx-auto max-w-7xl py-4">
            <ul class="list-unstyled flex">
              <li class="list-social__item px-4">
                <a
                  href="https://www.facebook.com/profile.php?id=100088187185568"
                  class="text-white"
                >
                  <FacebookIcon />
                </a>
              </li>
              <li class="list-social__item">
                <a
                  href="https://www.instagram.com/surfacesnouvelleere/?hl=fr"
                  class="text-white"
                >
                  <InstagramIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* <!-- Bottom Content --> */}
      <div class="footer__content-bottom mx-auto max-w-7xl py-4">
        <div class="footer__column flex-col">
          <div class="copyright__content text-white flex justify-center">
            © 2024,{" "}
            <a href="/" class="text-white">
              Surfaces Nouvelle Ère
            </a>
          </div>
          <div class="copyright__content flex justify-center">
            <a target="_blank" rel="nofollow" href="" class="text-white">
              Développé par Digitale Evolution
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
