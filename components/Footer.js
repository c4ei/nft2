import Link from "next/link";

export default function Footer() {
  return (
    <div className="footer_bottom">
      <div className="container">
        <div className="row">
          <div className="col-md-5 footer_about_section">
            <h3>
              <b>About c4ei</b>
            </h3>
            <p className="text-justify about_footer">
              nft.c4ei.net is an NFT marketplace deployed on C4EI mainnet.
            </p>
            <a href="https://github.com/c4ei/nft2">
              <button id="commonbuttons">
                <b>Know More</b>
              </button>
            </a>
          </div>
          <div className="col-md-3 footer_quicklinks_section">
            <h3>
              <b>Quick Links</b>
            </h3>
            <ul className="footer-links">
              <li>
                <a href="https://github.com/c4ei/nft2">Source code</a>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4 footer_contact_section">
            <h3>
              <b>Contact Us</b>
            </h3>
            <ul className="footer-links">
              <li>
                <a href="mailto:c4ei.net@gmail.com?subject=Contact you regarding nft.c4ei = Message">
                  <i className="fa fa-2x fa-envelope" aria-hidden="true"></i>{" "}
                  c4ei.net@gmail.com
                </a>
              </li>
            </ul>
            <br />
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}
