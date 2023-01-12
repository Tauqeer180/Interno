import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
export default function Footer() {
  return (
    <div>
      <div className="container mx-auto">
        <div className="md:flex md:flex-row md:mx-10 mx-5 gap-4">
          <div className="md:basis-2/6 basis-full md:pr-8 pr-0 my-10">
            <img src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/61977e6d733ba184d23db8bc_interno.svg" />
            <p className="md:text-2xl text-xl text-theme-text  my-3 leading-relaxed">
              We are the leading architect and interior design firm in the
              world.
            </p>
            <div className="flex text-2xl text-theme-heading">
              <a href="#" className="pr-4 py-3">
                <FaFacebookF />
              </a>
              <a href="#" className="px-4 py-3">
                <FaTwitter />
              </a>
              <a href="#" className="px-4 py-3">
                <FaLinkedin />
              </a>
              <a href="#" className="px-4 py-3">
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="md:basis-1/6 basis-full my-10">
            <h1 className="font-bold text-3xl font-serif text-theme-heading pb-7">
              Pages
            </h1>
            <ul className="text-2xl ">
              <li className="pb-7">
                <a className="hover:text-theme-gold text-theme-text" href="#">
                  Style Guide
                </a>
              </li>
              <li className="pb-7">
                <a className="hover:text-theme-gold text-theme-text" href="#">
                  Protected
                </a>
              </li>
              <li className="pb-7">
                <a className="hover:text-theme-gold text-theme-text" href="#">
                  Licenses
                </a>
              </li>
              <li className="pb-7">
                <a className="hover:text-theme-gold text-theme-text" href="#">
                  Changelog
                </a>
              </li>
              <li className="pb-7">
                <a className="hover:text-theme-gold text-theme-text" href="#">
                  404
                </a>
              </li>
            </ul>
          </div>
          <div className="md:basis-1/6 basis-full my-10">
            <h1 className="font-bold text-3xl font-serif text-theme-heading pb-7">
              Explore
            </h1>
            <ul className="text-2xl ">
              <li className="pb-7">
                <a className="hover:text-theme-gold text-theme-text" href="#">
                  About Us
                </a>
              </li>
              <li className="pb-7">
                <a className="hover:text-theme-gold text-theme-text" href="#">
                  Recent Blog
                </a>
              </li>
              <li className="pb-7">
                <a className="hover:text-theme-gold text-theme-text" href="#">
                  Pricing Plan
                </a>
              </li>
              <li className="pb-7">
                <a className="hover:text-theme-gold text-theme-text" href="#">
                  Our Projects
                </a>
              </li>
              <li className="pb-7">
                <a className="hover:text-theme-gold text-theme-text" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="md:basis-2/6 basis-full my-10">
            <h1 className="font-bold text-3xl font-serif text-theme-heading pb-7">
              Contact
            </h1>
            <ul className="text-2xl ">
              <li className="pb-7">
                <a className=" text-theme-text">
                  53, East Birchwood Ave. Brooklyn, New York 11201, USA.
                </a>
              </li>
              <li className="pb-7">
                <a className="hover:text-theme-gold text-theme-text" href="#">
                  contact@interno.com
                </a>
              </li>
              <li className="pb-7">
                <a className="hover:text-theme-gold text-theme-text" href="#">
                  (123) 456 - 7890
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
