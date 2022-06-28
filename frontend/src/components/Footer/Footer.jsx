import { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
export const Footer = () => {
  const [useful, setUSeful] = useState([
    "FAQ",
    "Sizing",
    "Product Info",
    "Shipping",
    "Privacy Policy",
    "Terms of Service",
    "Refund policy",
  ]);
  const [touch, setTouch] = useState([
    "merchforgood@trekstock.com",
    "Trekstock, Unit 206 Screenworks, 22-24 Highbury ",
    "Grove",
    "Islington England",
    "N5 2EF United Kingdom",
  ]);

  const [thanku, setThanku] = useState([
    "Merch for Good trades under Trekstock Limited. ",
    "Trekstock is a company limited by guarantee registered in England and Wales under number 06919669 and Registered as a Charity Number 1132421",
  ]);
  // const [icon,setIcon]=useState([FacebookRoundedIcon,])
  return (
    <div className="footer">
      <div className="footer-container">
        <div>
          <h4>USEFUL INFO</h4>
          {useful.map((e, index) => (
            <div key={index}>
              {
                <Link style={{ color: "#555" }} to="">
                  {e}
                </Link>
              }
            </div>
          ))}
          <div
            style={{
              color: "#c8c2c2",
              fontSize: ".8rem",
              lineHeight: "0rem",
              marginTop: "3rem",
            }}
          >
            <div>© 2022, Trekstock's Merch for Good</div>
            <div>
              <a style={{ color: "#c8c2c2", fontSize: ".8rem" }} href="">
                Theme by Safe As Milk.
              </a>
              <a
                style={{ color: "#c8c2c2", fontSize: ".8rem" }}
                href="https://www.shopify.com?utm_campaign=poweredby&amp;utm_medium=shopify&amp;utm_source=onlinestore"
              >
                Powered by Shopify
              </a>
            </div>
          </div>
        </div>
        <div>
          <h4>GET IN TOUCH</h4>
          {touch.map((e, index) => (
            <div key={index}>
              {
                <Link style={{ color: "#555" }} to="">
                  {e}
                </Link>
              }
            </div>
          ))}
        </div>
        <div>
          <h4>THANK YOU</h4>
          {thanku.map((e, index) => (
            <div key={index}>
              {
                <Link style={{ color: "#555" }} to="">
                  {e}
                </Link>
              }
            </div>
          ))}
        </div>
        <div>
          <h4>FOLLOW ON SOCIALS</h4>

          <Link to="">
            <FacebookIcon color="disabled" sx={{ fontSize: 40 }} />
          </Link>
          <Link to="">
            <TwitterIcon
              color="disabled"
              sx={{ fontSize: 40, marginLeft: 2 }}
            />
          </Link>
          <Link to="">
            <InstagramIcon
              color="disabled"
              sx={{ fontSize: 40, marginLeft: 2 }}
            />
          </Link>
          <Link to="">
            <YouTubeIcon
              color="disabled"
              sx={{ fontSize: 40, marginLeft: 2 }}
            />
          </Link>
        </div>
      </div>
      <div className="footer-pay">
        <div></div>
      </div>
    </div>
  );
};
