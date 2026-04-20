import { useEffect, useState } from "react";
import i18n from "../i18n/config";
import "/src/LanguageSelector.css";
import friends from "/src/assets/language/friends.jpg";
import logo from "/src/assets/language/logo.png";

interface LanguageSelectorProps {
  onLanguageSelect: (language: string) => void;
}

const WA_URL =
  "https://api.whatsapp.com/send/?phone=77788100900&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!+%D0%9C%D0%B5%D0%BD%D1%8F+%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82+%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D0%B0%D1%8F+%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%86%D0%B8%D1%8F+%D0%BF%D0%BE+%D0%B7%D0%B0%D0%B2%D0%B8%D1%81%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D0%B8&type=phone_number&app_absent=0";

export default function LanguageSelector({ onLanguageSelect }: LanguageSelectorProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [floatOpen, setFloatOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleLanguageSelect = (language: "ru" | "kz") => {
    i18n.changeLanguage(language);
    setTimeout(() => {
      onLanguageSelect(language);
    }, 250);
  };

  return (
    <div className={`ls${isVisible ? " ls--visible" : ""}`}>
      {/* T1272 – Fixed header */}
      <div className="ls__nav">
        <div className="ls__nav-logo">
          <img className="ls__nav-logo-img" src={logo} alt="CZM Freedom" />
          <div className="ls__nav-logo-text">CZM Freedom</div>
        </div>
        <div className="ls__nav-menu">
          <ul className="ls__nav-list" role="list">
            <li>
              <a className="ls__nav-link" href="tel:87788100900">
                тел. +7 778 810 09 00
              </a>
            </li>
          </ul>
        </div>
        <button
          className={`ls__hamburger${mobileMenuOpen ? " ls__hamburger--open" : ""}`}
          aria-label="Открыть меню"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        {mobileMenuOpen && (
          <div className="ls__mobile-menu">
            <a className="ls__mobile-link" href="tel:87788100900">тел. +7 778 810 09 00</a>
            <div className="ls__mobile-socials">
              <a href="https://instagram.com/czmfreedom?utm_medium=copy_link" target="_blank" rel="nofollow noopener" aria-label="instagram" className="ls__socials-link">
                <svg width="30" height="30" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" role="presentation">
                  <path fillRule="evenodd" clipRule="evenodd" d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100ZM25 39.3918C25 31.4558 31.4566 25 39.3918 25H60.6082C68.5442 25 75 31.4566 75 39.3918V60.8028C75 68.738 68.5442 75.1946 60.6082 75.1946H39.3918C31.4558 75.1946 25 68.738 25 60.8028V39.3918ZM36.9883 50.0054C36.9883 42.8847 42.8438 37.0922 50.0397 37.0922C57.2356 37.0922 63.0911 42.8847 63.0911 50.0054C63.0911 57.1252 57.2356 62.9177 50.0397 62.9177C42.843 62.9177 36.9883 57.1252 36.9883 50.0054ZM41.7422 50.0054C41.7422 54.5033 45.4641 58.1638 50.0397 58.1638C54.6153 58.1638 58.3372 54.5041 58.3372 50.0054C58.3372 45.5066 54.6145 41.8469 50.0397 41.8469C45.4641 41.8469 41.7422 45.5066 41.7422 50.0054ZM63.3248 39.6355C65.0208 39.6355 66.3956 38.2606 66.3956 36.5646C66.3956 34.8687 65.0208 33.4938 63.3248 33.4938C61.6288 33.4938 60.2539 34.8687 60.2539 36.5646C60.2539 38.2606 61.6288 39.6355 63.3248 39.6355Z" fill="#000000"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/help.addiction.kz/" target="_blank" rel="nofollow noopener" aria-label="facebook" className="ls__socials-link">
                <svg width="30" height="30" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" role="presentation">
                  <path fillRule="evenodd" clipRule="evenodd" d="M50 100c27.6142 0 50-22.3858 50-50S77.6142 0 50 0 0 22.3858 0 50s22.3858 50 50 50Zm3.431-73.9854c-2.5161.0701-5.171.6758-7.0464 2.4577-1.5488 1.4326-2.329 3.5177-2.5044 5.602-.0534 1.4908-.0458 2.9855-.0382 4.4796.0058 1.1205.0115 2.2407-.0085 3.3587-.6888.005-1.3797.0036-2.0709.0021-.9218-.0019-1.8441-.0038-2.7626.0096 0 .8921.0013 1.7855.0026 2.6797.0026 1.791.0052 3.5853-.0026 5.3799.9185.0134 1.8409.0115 2.7627.0096.6912-.0015 1.382-.0029 2.0708.0021.0155 3.5565.0127 7.1128.0098 10.669-.0036 4.4452-.0072 8.8903.0252 13.3354 1.8903-.0134 3.7765-.0115 5.6633-.0095 1.4152.0014 2.8306.0028 4.2484-.0022.0117-4.0009.0088-7.9986.0058-11.9963-.0029-3.9979-.0058-7.9957.0059-11.9964.9533-.005 1.9067-.0036 2.86-.0021 1.2713.0019 2.5425.0038 3.8137-.0096.396-2.679.7335-5.3814.9198-8.0947-1.2576-.0058-2.5155-.0058-3.7734-.0058-1.2578 0-2.5157 0-3.7734-.0059 0-.4689-.0007-.9378-.0014-1.4066-.0022-1.4063-.0044-2.8123.0131-4.2188.198-1.0834 1.3158-1.9104 2.3992-1.8403h5.1476c.0117-2.8069.0117-5.602 0-8.4089-.6636 0-1.3273-.0007-1.9911-.0014-1.9915-.0022-3.9832-.0044-5.975.0131Z" fill="#000000"/>
                </svg>
              </a>
              <a href="https://t.me/CZM_Freedom" target="_blank" rel="nofollow noopener" aria-label="telegram" className="ls__socials-link">
                <svg width="30" height="30" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" role="presentation">
                  <path fillRule="evenodd" clipRule="evenodd" d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50Zm21.977-68.056c.386-4.38-4.24-2.576-4.24-2.576-3.415 1.414-6.937 2.85-10.497 4.302-11.04 4.503-22.444 9.155-32.159 13.734-5.268 1.932-2.184 3.864-2.184 3.864l8.351 2.577c3.855 1.16 5.91-.129 5.91-.129l17.988-12.238c6.424-4.38 4.882-.773 3.34.773l-13.49 12.882c-2.056 1.804-1.028 3.35-.129 4.123 2.55 2.249 8.82 6.364 11.557 8.16.712.467 1.185.778 1.292.858.642.515 4.111 2.834 6.424 2.319 2.313-.516 2.57-3.479 2.57-3.479l3.083-20.226c.462-3.511.993-6.886 1.417-9.582.4-2.546.705-4.485.767-5.362Z" fill="#000000"/>
                </svg>
              </a>
            </div>
          </div>
        )}

        <div className="ls__nav-socials" aria-label="Social media links">
          <a href="https://instagram.com/czmfreedom?utm_medium=copy_link" target="_blank" rel="nofollow noopener" aria-label="instagram" className="ls__socials-link">
            <svg width="30" height="30" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" role="presentation">
              <path fillRule="evenodd" clipRule="evenodd" d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100ZM25 39.3918C25 31.4558 31.4566 25 39.3918 25H60.6082C68.5442 25 75 31.4566 75 39.3918V60.8028C75 68.738 68.5442 75.1946 60.6082 75.1946H39.3918C31.4558 75.1946 25 68.738 25 60.8028V39.3918ZM36.9883 50.0054C36.9883 42.8847 42.8438 37.0922 50.0397 37.0922C57.2356 37.0922 63.0911 42.8847 63.0911 50.0054C63.0911 57.1252 57.2356 62.9177 50.0397 62.9177C42.843 62.9177 36.9883 57.1252 36.9883 50.0054ZM41.7422 50.0054C41.7422 54.5033 45.4641 58.1638 50.0397 58.1638C54.6153 58.1638 58.3372 54.5041 58.3372 50.0054C58.3372 45.5066 54.6145 41.8469 50.0397 41.8469C45.4641 41.8469 41.7422 45.5066 41.7422 50.0054ZM63.3248 39.6355C65.0208 39.6355 66.3956 38.2606 66.3956 36.5646C66.3956 34.8687 65.0208 33.4938 63.3248 33.4938C61.6288 33.4938 60.2539 34.8687 60.2539 36.5646C60.2539 38.2606 61.6288 39.6355 63.3248 39.6355Z" fill="#000000"/>
            </svg>
          </a>
          <a href="https://www.facebook.com/help.addiction.kz/" target="_blank" rel="nofollow noopener" aria-label="facebook" className="ls__socials-link">
            <svg width="30" height="30" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" role="presentation">
              <path fillRule="evenodd" clipRule="evenodd" d="M50 100c27.6142 0 50-22.3858 50-50S77.6142 0 50 0 0 22.3858 0 50s22.3858 50 50 50Zm3.431-73.9854c-2.5161.0701-5.171.6758-7.0464 2.4577-1.5488 1.4326-2.329 3.5177-2.5044 5.602-.0534 1.4908-.0458 2.9855-.0382 4.4796.0058 1.1205.0115 2.2407-.0085 3.3587-.6888.005-1.3797.0036-2.0709.0021-.9218-.0019-1.8441-.0038-2.7626.0096 0 .8921.0013 1.7855.0026 2.6797.0026 1.791.0052 3.5853-.0026 5.3799.9185.0134 1.8409.0115 2.7627.0096.6912-.0015 1.382-.0029 2.0708.0021.0155 3.5565.0127 7.1128.0098 10.669-.0036 4.4452-.0072 8.8903.0252 13.3354 1.8903-.0134 3.7765-.0115 5.6633-.0095 1.4152.0014 2.8306.0028 4.2484-.0022.0117-4.0009.0088-7.9986.0058-11.9963-.0029-3.9979-.0058-7.9957.0059-11.9964.9533-.005 1.9067-.0036 2.86-.0021 1.2713.0019 2.5425.0038 3.8137-.0096.396-2.679.7335-5.3814.9198-8.0947-1.2576-.0058-2.5155-.0058-3.7734-.0058-1.2578 0-2.5157 0-3.7734-.0059 0-.4689-.0007-.9378-.0014-1.4066-.0022-1.4063-.0044-2.8123.0131-4.2188.198-1.0834 1.3158-1.9104 2.3992-1.8403h5.1476c.0117-2.8069.0117-5.602 0-8.4089-.6636 0-1.3273-.0007-1.9911-.0014-1.9915-.0022-3.9832-.0044-5.975.0131Z" fill="#000000"/>
            </svg>
          </a>
          <a href="https://t.me/CZM_Freedom" target="_blank" rel="nofollow noopener" aria-label="telegram" className="ls__socials-link">
            <svg width="30" height="30" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" role="presentation">
              <path fillRule="evenodd" clipRule="evenodd" d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50Zm21.977-68.056c.386-4.38-4.24-2.576-4.24-2.576-3.415 1.414-6.937 2.85-10.497 4.302-11.04 4.503-22.444 9.155-32.159 13.734-5.268 1.932-2.184 3.864-2.184 3.864l8.351 2.577c3.855 1.16 5.91-.129 5.91-.129l17.988-12.238c6.424-4.38 4.882-.773 3.34.773l-13.49 12.882c-2.056 1.804-1.028 3.35-.129 4.123 2.55 2.249 8.82 6.364 11.557 8.16.712.467 1.185.778 1.292.858.642.515 4.111 2.834 6.424 2.319 2.313-.516 2.57-3.479 2.57-3.479l3.083-20.226c.462-3.511.993-6.886 1.417-9.582.4-2.546.705-4.485.767-5.362Z" fill="#000000"/>
            </svg>
          </a>
        </div>
      </div>

      {/* T183 – Cover */}
      <div className="ls__cover">
        <div className="ls__cover-carrier" style={{ backgroundImage: `url(${friends})` }} />
        <div className="ls__cover-filter" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7))" }} />
        <div className="ls__cover-wrapper">
          <div className="ls__cover-content">
            <div className="ls__cover-uptitle">
              ДОВЕРЬТЕСЬ ПРОФЕССИОНАЛАМ
              <br />
              <br />
              <a href="tel:+77788100900">+7 778 810 09 00</a>
            </div>
            <h1 className="ls__cover-title">Бесплатный прием и консультация</h1>
            <div className="ls__cover-buttons">
              <button className="ls__btn" onClick={() => handleLanguageSelect("ru")}>
                <span className="ls__btn-text">Русский язык</span>
                <div className="ls__btn-effects-wrap"><div className="ls__btn-effects" /></div>
              </button>
              <button className="ls__btn" onClick={() => handleLanguageSelect("kz")}>
                <span className="ls__btn-text">Казахский язык</span>
                <div className="ls__btn-effects-wrap"><div className="ls__btn-effects" /></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* T396 – Contacts artboard */}
      <div className="ls__t396">
        <div className="ls__t396-inner">
          <div className="ls__t396-phone">
            <a href="tel:87788100900">+7 (778) 810 09 00</a>
          </div>
          <div className="ls__t396-address">
            <a href="https://2gis.kz/astana/geo/70000001059285683" target="_blank" rel="noreferrer noopener">
              г. Астана, Улица Едил, 20
            </a>
          </div>
          <div className="ls__t396-twogis">
            <a href="https://2gis.kz/astana/geo/70000001059285683" target="_blank" rel="noreferrer noopener">
              (нажмите, чтобы открыть 2ГИС)
            </a>
          </div>
          <div className="ls__t396-icons">
            <a href="tel:87788100900">
              <img src="https://static.tildacdn.pro/tild3633-6333-4138-a264-663361613230/logopdf_8.png" alt="Phone" width="50" height="50" />
            </a>
            <a href={WA_URL} target="_blank" rel="noreferrer noopener">
              <img src="https://static.tildacdn.pro/tild6162-6535-4562-b636-616564303634/logopdf_9.png" alt="WhatsApp" width="50" height="50" />
            </a>
            <a href="https://t.me/czm_freedom" target="_blank" rel="noreferrer noopener">
              <img src="https://static.tildacdn.pro/tild6537-6463-4436-a234-323061326563/logopdf_12.png" alt="Telegram" width="50" height="50" />
            </a>
            <a href="https://www.instagram.com/czmfreedom" target="_blank" rel="noreferrer noopener">
              <img src="https://static.tildacdn.pro/tild3530-6563-4563-a131-373232623933/logopdf_10.png" alt="Instagram" width="50" height="50" />
            </a>
          </div>
        </div>
      </div>

      {/* T898 – Floating widget */}
      <div className="ls__t898">
        <div className={`ls__t898-links${floatOpen ? " ls__t898-links--open" : ""}`}>
          <a href="tel:87788100900" className="ls__t898-icon-link" target="_blank" rel="nofollow noopener noreferrer">
            <span className="ls__t898-btn-text">Phone</span>
            <div className="ls__t898-svg-wrapper">
              <div className="ls__t898-svg-bg" />
              <svg role="presentation" width="50" height="50" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100ZM50.0089 29H51.618C56.4915 29.0061 61.1633 30.9461 64.6073 34.3938C68.0512 37.8415 69.9856 42.5151 69.9856 47.3879V48.9968C69.9338 49.5699 69.6689 50.1027 69.2433 50.49C68.8177 50.8772 68.2623 51.0908 67.6868 51.0884H67.5029C66.8966 51.0358 66.3359 50.745 65.9437 50.2796C65.5516 49.8143 65.36 49.2124 65.4109 48.6061V47.3879C65.4109 43.7303 63.9578 40.2225 61.3711 37.6362C58.7844 35.0499 55.2761 33.597 51.618 33.597H50.3997C49.79 33.6488 49.1847 33.4563 48.7169 33.0619C48.2492 32.6675 47.9573 32.1035 47.9054 31.4939C47.8536 30.8843 48.0461 30.279 48.4406 29.8114C48.835 29.3437 49.3992 29.0518 50.0089 29ZM56.889 49.0132C56.4579 48.5821 56.2157 47.9975 56.2157 47.3879C56.2157 46.1687 55.7313 44.9994 54.869 44.1373C54.0068 43.2752 52.8374 42.7909 51.618 42.7909C51.0083 42.7909 50.4236 42.5488 49.9925 42.1177C49.5614 41.6867 49.3192 41.102 49.3192 40.4924C49.3192 39.8828 49.5614 39.2982 49.9925 38.8672C50.4236 38.4361 51.0083 38.1939 51.618 38.1939C54.0568 38.1939 56.3956 39.1626 58.1201 40.8868C59.8445 42.611 60.8133 44.9495 60.8133 47.3879C60.8133 47.9975 60.5711 48.5821 60.14 49.0132C59.7089 49.4442 59.1242 49.6864 58.5145 49.6864C57.9048 49.6864 57.3201 49.4442 56.889 49.0132ZM66.4011 69.0663L66.401 69.0846C66.3999 69.5725 66.2967 70.0547 66.0981 70.5003C65.8998 70.9451 65.611 71.3435 65.2499 71.67C64.8674 72.0182 64.4123 72.2771 63.9176 72.428C63.4516 72.5702 62.9613 72.6132 62.4782 72.5546C58.2475 72.53 53.4102 70.5344 49.1802 68.1761C44.8871 65.7827 41.0444 62.915 38.8019 60.9903L38.7681 60.9613L38.7367 60.9299C32.3303 54.5198 28.2175 46.1735 27.0362 37.186C26.9623 36.6765 27.0018 36.157 27.1519 35.6645C27.3027 35.1695 27.5615 34.7142 27.9094 34.3314C28.2397 33.9658 28.6436 33.6742 29.0944 33.4757C29.5447 33.2775 30.0316 33.1766 30.5234 33.1796H37.4967C38.299 33.1636 39.0826 33.4244 39.7156 33.9184C40.3527 34.4156 40.7979 35.1184 40.9754 35.9071L41.0038 36.0335V36.1631C41.0038 36.4901 41.0787 36.795 41.1847 37.2268C41.2275 37.4012 41.2755 37.5965 41.3256 37.8221L41.326 37.8238C41.583 38.9896 41.925 40.1351 42.3491 41.251L42.7322 42.259L38.4899 44.26L38.4846 44.2625C38.204 44.3914 37.986 44.6263 37.8784 44.9157L37.8716 44.934L37.8642 44.952C37.7476 45.236 37.7476 45.5545 37.8642 45.8385L37.9144 45.9608L37.9359 46.0912C38.0802 46.9648 38.5603 48.0981 39.4062 49.4169C40.243 50.7215 41.3964 52.1437 42.808 53.5872C45.6206 56.4634 49.3981 59.3625 53.5798 61.5387C53.8533 61.6395 54.1552 61.6343 54.4257 61.5231L54.4437 61.5157L54.462 61.5089C54.7501 61.4016 54.9842 61.1848 55.1133 60.9057L55.1148 60.9023L57.0232 56.6591L58.0397 57.03C59.1934 57.4509 60.3737 57.7947 61.5729 58.0592L61.5785 58.0605L61.5841 58.0618C62.152 58.1929 62.7727 58.3042 63.3802 58.3942L63.4231 58.4006L63.4654 58.4101C64.2537 58.5877 64.956 59.0332 65.453 59.6706C65.9429 60.2991 66.2033 61.0758 66.1916 61.8721L66.4011 69.0663Z" fill="#000" />
              </svg>
            </div>
          </a>
          <a href={WA_URL} className="ls__t898-icon-link" target="_blank" rel="nofollow noopener noreferrer">
            <span className="ls__t898-btn-text">WhatsApp</span>
            <div className="ls__t898-svg-wrapper">
              <div className="ls__t898-svg-bg" />
              <svg role="presentation" width="50" height="50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25 50a25 25 0 100-50 25 25 0 000 50z" fill="#fff" />
                <path d="M26.1 12a12.1 12.1 0 00-10.25 18.53l.29.46-1.22 4.46 4.57-1.2.45.27a12.1 12.1 0 106.16-22.51V12zm6.79 17.22c-.3.85-1.72 1.62-2.41 1.72-.62.1-1.4.14-2.25-.14-.7-.22-1.37-.47-2.03-.77-3.59-1.57-5.93-5.24-6.1-5.48-.19-.24-1.47-1.97-1.47-3.76 0-1.79.93-2.67 1.25-3.03.33-.37.72-.46.96-.46.23 0 .47 0 .68.02.22 0 .52-.09.8.62l1.1 2.7c.1.18.16.4.04.64s-.18.39-.36.6c-.18.21-.38.47-.54.64-.18.18-.36.38-.15.74.2.36.92 1.55 1.98 2.52 1.37 1.23 2.52 1.62 2.88 1.8.35.18.56.15.77-.1.2-.23.9-1.05 1.13-1.42.24-.36.48-.3.8-.18.33.12 2.09 1 2.44 1.18.36.19.6.28.69.43.09.15.09.88-.21 1.73z" fill="#27D061" />
                <path d="M25 0a25 25 0 100 50 25 25 0 000-50zm1.03 38.37c-2.42 0-4.8-.6-6.9-1.76l-7.67 2 2.05-7.45a14.3 14.3 0 01-1.93-7.2c0-7.92 6.49-14.38 14.45-14.38a14.4 14.4 0 110 28.79z" fill="#27D061" />
              </svg>
            </div>
          </a>
        </div>
        <button
          type="button"
          className="ls__t898-toggle"
          style={{ background: "#4ac380" }}
          onClick={() => setFloatOpen((p) => !p)}
          aria-label={floatOpen ? "Закрыть" : "Открыть контакты"}
          aria-expanded={floatOpen}
        >
          <svg role="presentation" className={`ls__t898-icon${floatOpen ? " ls__t898-icon--hidden" : ""}`} width="35" height="32" viewBox="0 0 35 32" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.2667 12.6981H23.3667M11.2667 16.4717H23.3667M4.8104 23.5777C2.4311 21.1909 1 18.1215 1 14.7736C1 7.16679 8.38723 1 17.5 1C26.6128 1 34 7.16679 34 14.7736C34 22.3804 26.6128 28.5472 17.5 28.5472C15.6278 28.5472 13.8286 28.2868 12.1511 27.8072L12 27.7925L5.03333 31V23.8219L4.8104 23.5777Z" stroke="#ffffff" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
          <svg role="presentation" xmlns="http://www.w3.org/2000/svg" width="16" height="16" className={`ls__t898-icon${!floatOpen ? " ls__t898-icon--hidden" : ""}`} viewBox="0 0 23 23">
            <g fillRule="evenodd">
              <path d="M10.314 -3.686H12.314V26.314H10.314z" transform="rotate(-45 11.314 11.314)" fill="#ffffff" />
              <path d="M10.314 -3.686H12.314V26.314H10.314z" transform="rotate(45 11.314 11.314)" fill="#ffffff" />
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
}
