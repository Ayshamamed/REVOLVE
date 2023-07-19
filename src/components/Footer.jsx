import React from 'react';
import footerImg from '../images/kendal.jpeg'

const Footer = () => {
  return (
    <>
      <div className="footers ">
        <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 mx-3  border-top ">


          <div className="col mb-3">
            <h5 className='text-white'>CUSTOMER CARE</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Contact Us</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">+1-562-926-5672</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Payment Options</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Track Your Order</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Feedback</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Accessibility</a></li>
            </ul>
            <h5 className='  text-white mt-5'>CONNECT</h5>
            <ul className=" icons nav flex-row justify-content-around mt-4">
              <li className="nav-item"><a href="/" className="icons-link nav-link p-0 "><i class="fa-brands fa-tiktok"></i></a></li>
              <li className="nav-item"><a href="/" className="icons-link nav-link p-0 "><i class="fa-brands fa-youtube"></i></a></li>
              <li className="nav-item "><a href="/" className="icons-link nav-link p-0 "><i class="fa-brands fa-instagram"></i></a></li>
              <li className="nav-item "><a href="/" className="icons-link nav-link p-0 "><i class="fa-brands fa-facebook-f"></i></a></li>
            </ul>
          </div>

          <div className="col mb-3 mt-4">
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Shipping & Delivery</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Returns & Exchanges</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Size Guide</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Gifting REVOLVE</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Style Experts</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Why REVOLVE</a></li>
            </ul>
          </div>

          <div className="col mb-3 ">
            <h5 className='text-white '>INFORMATION</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">About Us</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Social Impact</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Careers</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Ambassadors</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Affiliate</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Investors</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Press</a></li>
            </ul>
          </div>

          <div className="col mb-3">
            <a href="/" > <img height={330} src={footerImg} className="card-img" alt="/" /></a>
          </div>


        </footer>
      </div>

      <div className="footers-end d-flex flex-column flex-sm-row justify-content-between px-3  border-top text-muted ">
        <p className='mt-3'>© 2023 Eminent, Inc. (a Revolve Group company). All Rights Reserved.</p>

      </div>

    </>
  )
}

export default Footer