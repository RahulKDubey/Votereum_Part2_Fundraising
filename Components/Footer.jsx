import React from "react";

const Footer = () => {
  const productList = ["Fundraising", "Voting"];
  const contactList = [
    "+917571025795",
    "rahuld0902@gmail.com",
    "ravigautam2805@gmail.com",
    "prathamruhela@gmail.com",
    "prachitripathi68@gmail.com",
  ];
  const usefullLink = ["Home", "Tools Used", "Features"];
  return (
    <footer className="text-center text-white backgroundMain lg:text-left">
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="">
            {/* <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              Crypto King
            </h6> */}
            {/* <p>
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p> */}
          </div>
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Section
            </h6>
            {productList.map((el, i) => (
              <p className="mb-4" key={i + 1}>
                <a href="http://localhost:3001/" target="_blank">{el}</a>
              </p>
            ))}
          </div>
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Useful links
            </h6>
            {usefullLink.map((el, i) => (
              <p className="mb-4" key={i + 1}>
                <a href="#!">{el}</a>
              </p>
            ))}
          </div>
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Contact
            </h6>
            {contactList.map((el, i) => (
              <p className="mb-4" key={i + 1}>
                <a href="#!">{el}</a>
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="backgroundMain p-6 text-center">
        {/* <span>© 2023 Copyright:</span> */}
        <a className="font-semibold " href="http://localhost:3000/">
          Votereum
        </a>
      </div>
    </footer>
  );
};

export default Footer;
