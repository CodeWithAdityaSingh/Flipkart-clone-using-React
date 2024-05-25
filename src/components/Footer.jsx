import React from "react";

function Footer() {
  return (
    <>
      <div className="footer  w-screen bg-black text-white p-4 ">
        <div className="footers  h-79 w-full bg-black text-white flex items-center justify-around p-0">
          <div className="about">
            <h2>About</h2>
            <ul>
              <li>Contact-us</li>
              <li>About-us</li>
              <li>Carrier</li>
              <li>Flipkart-Stories</li>
              <li>Press</li>
            </ul>
          </div>
          <div className="group">
            <h2>GroupCompanies</h2>
            <ul>
              <li>Mytra</li>
              <li>Flipkart Wholesale</li>
              <li>Cleartrip</li>
              <li>Sopsy</li>
            </ul>
          </div>
          <div className="help">
            <h2>Help</h2>
            <ul>
              <li>Payment</li>
              <li>Shipping</li>
              <li>Cancellations& Return</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="consumer">
            <h2>Consumer Policy</h2>
            <ul>
              <li>Cancellations & Return</li>
              <li>Term of use</li>
              <li>Security</li>
              <li>Privacy</li>
              <li>Sitemap</li>
              <li>Epr Compliance</li>
            </ul>
          </div>
          <div className="line bg-white w-1 h-44"></div>
          <div className="mailus">
            <h2>Mail-Us</h2>
            <ul>
              <p className=" w-60">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Itaque, sapiente expedita tempora odio minus aspernatur
                molestiae ducimus repellendus blanditiis consectetur dolores
                earum deserunt praesentium perferendis
              </p>
            </ul>
          </div>
          <div className="registered">
            <h2>Registered Office Address</h2>
            <p className="w-60">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae id
              eos obcaecati optio ea. Laboriosam in alias, quos accusantium
              dignissimos error repellendus aliquam nobis est fugit maxime,
              omnis esse voluptate.
            </p>
          </div>
        </div>
        <div className="horizontal bg-white h-1 w-full text-white mt-4"></div>
        <div className="bottom flex h-14 items-center justify-around">
          <div className="one flex justify-center items-center">
            <img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/sell-image-9de8ef.svg"
              alt=""
            />

            <div className="ml-2" >Become s Seller</div>
          </div>
          <div className="two flex justify-center items-center">
            <img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/advertise-image-866c0b.svg"
              alt=""
            />

            <div className="ml-2" >Advertise</div>
          </div>
          <div className="three flex justify-center items-center">
            <img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/gift-cards-image-d7ff24.svg"
              alt=""
            />

            <div className="ml-2" >Gift cards</div>
          </div>
          <div className="four flex justify-center items-center">
            <img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/help-centre-image-c4ace8.svg"
              alt=""
            />

            <div className="ml-2" >Help center</div>
          </div>
          <div className="five">
            <h2>&copy; 2007-20014 Flipkart.com</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
