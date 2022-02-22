import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-img">
          <img
            className="logo-2"
            src="https://d33wubrfki0l68.cloudfront.net/cfaf67e8d5403f3add0475ab49a825edb5c01651/2b845/img/logo.png"
            alt=""
          />
        </div>
        <div className="information-container">
          <div className="information">
            <div className="info-mail">
              <a
                href="mailto:info@kesaviwebsolutions.com"
                className="mail.link"
              >
                info@kesaviwebsolutions.com
              </a>
            </div>
            <div className="info-contact">
              <a href="tel:+91 8700212323" className="contact.link">
                +91 8700212323
              </a>
            </div>
          </div>
          <div className="social-icons">
            <a
              className="icon.icon"
              href="https://www.facebook.com/Kesaviweb/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF size={19} className="si" />
            </a>
            <a
              className="icon.icon-2"
              href="https://twitter.com/KesaviS"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineTwitter size={19} className="si" />
            </a>
            <a
              className="icon.icon-3"
              href="https://www.youtube.com/channel/UCDRT0QQa2St9IL7OVhEs9EA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube size={19} className="si" />
            </a>
            <a
              className="icon.icon-4"
              href="https://wa.me/918700212323"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsWhatsapp size={19} className="si" />
            </a>
          </div>
          <div className="coinpayments-container">
            <form action="https://www.coinpayments.net/index.php" method="post">
              <input type="hidden" name="cmd" value="_pay" />
              <input type="hidden" name="reset" value="1" />
              <input
                type="hidden"
                name="merchant"
                value="6289093dd6302654016630f702efe7d3"
              />
              <input
                type="hidden"
                name="item_name"
                value="Smart Contract Development"
              />
              <input type="hidden" name="currency" value="USD" />
              <input type="hidden" name="amountf" value="3000.00000000" />
              <input type="hidden" name="quantity" value="1" />
              <input type="hidden" name="allow_quantity" value="1" />
              <input type="hidden" name="want_shipping" value="0" />
              <input
                type="hidden"
                name="success_url"
                value="https://kesaviwebsolutions.com/successful-payment"
              />
              <input
                type="hidden"
                name="cancel_url"
                value="https://kesaviwebsolutions.com/cancelled-payment"
              />
              <input type="hidden" name="allow_extra" value="1" />
              <input
                type="image"
                src="https://www.coinpayments.net/images/pub/buynow-blue2.png"
                alt="Buy Now with CoinPayments.net"
              />
            </form>
          </div>
        </div>
        <div className="copy-right-container">
          <hr className="hr" />
          <div className="copy-rigt-content">
            <p className="copy-right">
              © 2017-22 Kesavi Web Solutions, All Rights Reserved.
            </p>
            {/* <p className="kws">By KWS</p> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
