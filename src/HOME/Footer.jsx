import React from 'react';
import footerImg from '../images/kendal.jpeg'
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const {t}=useTranslation();
  return (
    <>
      <div className="footers ">
        <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 mx-3 ">


          <div className="col mb-3">
            <h5 className='text-white'>{t("footer.0")}</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">{t("footer.1")}</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">+1-562-926-5672</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">{t("footer.2")}</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">{t("footer.3")}</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Feedback</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">{t("footer.5")}</a></li>
            </ul>
            <h5 className='  text-white mt-5'>{t("footer.20")}</h5>
            <ul className=" icons nav flex-row justify-content-around mt-4">
              <li className="nav-item"><a href="/" className="icons-link nav-link p-0 "><i class="fa-brands fa-tiktok"></i></a></li>
              <li className="nav-item"><a href="/" className="icons-link nav-link p-0 "><i class="fa-brands fa-youtube"></i></a></li>
              <li className="nav-item "><a href="/" className="icons-link nav-link p-0 "><i class="fa-brands fa-instagram"></i></a></li>
              <li className="nav-item "><a href="/" className="icons-link nav-link p-0 "><i class="fa-brands fa-facebook-f"></i></a></li>
            </ul>
          </div>

          <div className="col mb-3 mt-4">
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">{t("footer.6")}</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">{t("footer.7")}</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">{t("footer.8")}</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">{t("footer.9")}</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">{t("footer.10")}</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">{t("footer.11")}</a></li>
            </ul>
          </div>

          <div className="col mb-3 ">
            <h5 className='text-white '>{t("footer.12")}</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">{t("footer.13")}</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">{t("footer.14")}</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">{t("footer.15")}</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">{t("footer.16")}</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">{t("footer.17")}</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">{t("footer.18")}</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Press</a></li>
            </ul>
          </div>

          <div className="col mb-3">
            <a href="/" > <img height={330} src={footerImg} className="card-img" alt="/" /></a>
          </div>


        </footer>
      </div>

      <div className="footers-end d-flex flex-column flex-sm-row justify-content-between px-3  border-top text-muted ">
        <p className='mt-3'>{t("footer.21")}</p>

      </div>

    </>
  )
}

export default Footer