import * as React from "react";
import Banner from "../components/home/Banner";
import Navbar from "../components/common/Navbar";
import {
  Card,
  ReviewCard,
  ProjectCard,
  BlogsCard,
} from "../components/home/Card";
import { HomeCards, ReviewsData, ProjectsData, BlogsData } from "../FormData";
import { BsTelephone } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";
import Footer from "../components/common/Footer";
const IndexPage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <div className="container mx-auto">
        <div class="inline-grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 md:mx-10 mx-5 mt-20 mb-10">
          {HomeCards.map((d) => {
            return <Card data={d} />;
          })}
        </div>

        {/* Section */}

        <div class="inline-grid md:grid-cols-2 grid-cols-1   md:mx-10 mx-5  ">
          <div className="md:pr-16 my-20">
            <h1 className="font-bold md:text-5xl text-4xl text-neutral-700 leading-snug font-serif">
              We Tackle The Most Challenging Designs
            </h1>
            <p className="text-neutral-700 leading-normal text-xl pt-8 pb-5">
              The world needs innovators and problem solvers who turn challenges
              into greater opportunities. We have an insatiable curiosity about
              transformative trends challenging the status.
            </p>
            <div>
              <div className="flex items-center mb-10">
                <div className="rounded-full p-8 bg-theme-gray">
                  <BsTelephone className="text-3xl text-theme-gold" />
                </div>
                <div className="pl-4">
                  <a
                    href="tel:03419492200"
                    className="font-bold text-2xl text-neutral-700 hover:text-theme-gold"
                  >
                    012345678
                  </a>
                  <div className="text-xl text-neutral-700">
                    Call Us Anytime
                  </div>
                </div>
              </div>
              <button
                className="text-white 
         hover:bg-white hover:text-gray-900 border-2 border-gray-900  bg-gray-900 px-8 py-5 font-bold rounded-2lg"
              >
                <div className="flex items-center">
                  Get Free Estimate
                  <FiArrowRight className="ml-3 text-theme-gold" />
                </div>
              </button>
            </div>
          </div>

          <div>
            <img
              className="rounded-tr-19xl rounded-bl-8xl"
              src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619b30656e76565ea79f29e5_intro-image.jpg"
            />
          </div>
        </div>

        {/* Section End */}

        {/* Section What the People Think */}
        <div className="md:p-5 p-2 bg-theme-gray rounded-4xl md:mx-10 mx-5 my-20">
          <h1 className="text-4xl font-serif text-center pt-20 md:w-1/2   mx-auto text-neutral-800">
            What the People Thinks About Interno
          </h1>

          <div class="inline-grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 md:mx-10 mx-5 md:mt-20 mt-10 mb-10">
            {ReviewsData.map((d) => {
              return <ReviewCard data={d} />;
            })}
          </div>
        </div>

        {/* Section What the People Think ------END */}

        {/* Clients Logos */}

        <div class="w-full inline-grid items-center lg:grid-cols-5 md:grid-cols-2 grid-cols-1  justify-between md:my-20 my-14">
          <div className="mx-auto my-6">
            <img src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619b50dbaf38fe2e294e77c4_client-logo-1.svg" />
          </div>
          <div className="mx-auto my-6">
            <img src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619b50db6a5ad2b2e8220095_client-logo-2.svg" />
          </div>
          <div className="mx-auto my-6">
            <img src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619b50db3b3a6aece9a31f5e_client-logo-3.svg" />
          </div>
          <div className="mx-auto my-6">
            <img src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619b50db1409585a01100743_client-logo-4.svg" />
          </div>
          <div className="mx-auto my-6">
            <img src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619b50dbc57d3e3e8b8ed401_client-logo-5.svg" />
          </div>
        </div>
        {/* Clients Logos -------END */}

        {/* Recent Projects Section */}
        <div className="md:mx-10 mx-5">
          <h2 className=" my-5 md:text-5xl text-3xl text-center font-bold font-serif text-theme-heading">
            Recent Projects
          </h2>
          <p className="text-center text-theme-text text-xl leading-normal lg:max-w-2xl mx-auto">
            With tools to make every part of your process more human and a
            support team excited to help you, getting started with us never been
            easier.
          </p>

          <div class="grid gap-4 md:grid-cols-2 grid-cols-1    md:my-20 my-10 ">
            {ProjectsData.map((d) => {
              return (
                <div>
                  <ProjectCard data={d} />{" "}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Recent Projects Section ---END */}

      {/*  */}

      <div className="bg-theme-gray py-36">
        <div className="container mx-auto ">
          <div className="grid md:grid-cols-4 grid-cols-1 md:divide-x divide-theme-gold">
            <div className="px-auto">
              <h1 className="text-center text-theme-gold text-7xl font-bold py-10">
                12
              </h1>
              <p className="text-center text-2xl text-theme-text">
                Years of Experience
              </p>
            </div>
            <div className="px-auto">
              <h1 className="text-center text-theme-gold text-7xl font-bold py-10">
                5K
              </h1>
              <p className="text-center text-2xl text-theme-text">
                Success Project
              </p>
            </div>
            <div className="px-auto">
              <h1 className="text-center text-theme-gold text-7xl font-bold py-10">
                1K
              </h1>
              <p className="text-center text-2xl text-theme-text">
                Active Project
              </p>
            </div>
            <div className="px-auto">
              <h1 className="text-center text-theme-gold text-7xl font-bold py-10">
                4K{" "}
              </h1>
              <p className="text-center text-2xl text-theme-text">
                Happy Customers
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*  */}

      {/*  */}
      <div className="md:mx-10 mx-5 my-40">
        <h2 className=" my-5 md:text-5xl text-3xl text-center font-bold font-serif text-theme-heading">
          Recent Blogs
        </h2>
        <p className="text-center text-theme-text text-xl leading-normal lg:max-w-2xl mx-auto">
          Get updates about our latest trends and techniques used in interior
          design project works.
        </p>
        <div className="container mx-auto">
          <div class=" grid md:mx-10 mx-0 gap-4 md:grid-cols-3 grid-cols-1 md:my-20 my-10 ">
            {BlogsData.map((d) => {
              return (
                <div>
                  <BlogsCard data={d} />{" "}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/*  */}

      {/* Contact US */}

      <div className="container mx-auto">
        <div className="md:mx-10 mx-5 rounded-5xl bg-theme-heading md:p-36 p-2 py-20 text-center">
          <h1 className="text-white md:text-6xl text-3xl font-bold font-serif ">
            Wanna join the interno?
          </h1>
          <p className=" text-white my-5 md:text-xl text-lg font-semibold">
            Contact Us & Get a Free Consultation
          </p>
          <button
            className="text-white  my-5 md:text-xl text-lg font-semibold
         hover:bg-white hover:text-gray-900 border-2 border-gray-900  bg-theme-gold px-8 py-5 rounded-2lg"
          >
            <div className="flex items-center tracking-wide">
              Connect With us
              <FiArrowRight className="ml-3 text-black " />
            </div>
          </button>
        </div>
      </div>
      {/* Contact US ------END*/}
      <div className="my-28 ">
        <Footer />
      </div>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
