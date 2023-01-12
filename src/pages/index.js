import * as React from "react";
import Banner from "../components/home/Banner";
import Navbar from "../components/common/Navbar";
import { Card, ReviewCard, ProjectCard } from "../components/home/Card";
import { HomeCards, ReviewsData, ProjectsData } from "../FormData";
import { BsTelephone } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";
const IndexPage = () => {
  return (
    <div>
      <Navbar />
      <Banner />

      <div class="inline-grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mx-10 mt-20 mb-10">
        {HomeCards.map((d) => {
          return <Card data={d} />;
        })}
      </div>
      <main>
        {/* Section */}

        <div class="inline-grid grid-cols-2   mx-10 my-20 ">
          <div className="pr-16">
            <h1 className="font-bold text-5xl text-neutral-700 leading-snug font-serif">
              We Tackle The Most Challenging Designs
            </h1>
            <p className="text-neutral-700 leading-normal text-xl pt-8 pb-5">
              The world needs innovators and problem solvers who turn challenges
              into greater opportunities. We have an insatiable curiosity about
              transformative trends challenging the status.
            </p>
            <div>
              <div className="flex items-center mb-10">
                <div className="rounded-full p-8 bg-gray-200">
                  <BsTelephone className="text-3xl text-yellow-700" />
                </div>
                <div className="pl-4">
                  <a
                    href="tel:03419492200"
                    className="font-bold text-2xl text-neutral-700 hover:text-yellow-700"
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
                  <FiArrowRight className="ml-3 text-yellow-700" />
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
        <div className="p-5 bg-gray-200 rounded-3lg mx-10 my-20">
          <h1 className="text-4xl font-serif text-center pt-20 w-1/2  mx-auto text-neutral-800">
            What the People Thinks About Interno
          </h1>

          <div class="inline-grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mx-10 mt-20 mb-10">
            {ReviewsData.map((d) => {
              return <ReviewCard data={d} />;
            })}
          </div>
        </div>

        {/* Section What the People Think ------END */}

        {/* Clients Logos */}

        <div class="inline-grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 gap-4 mx-10 mt-20 mb-10">
          <img src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619b50dbaf38fe2e294e77c4_client-logo-1.svg" />
          <img src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619b50db6a5ad2b2e8220095_client-logo-2.svg" />
          <img src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619b50db3b3a6aece9a31f5e_client-logo-3.svg" />
          <img src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619b50db1409585a01100743_client-logo-4.svg" />
          <img src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619b50dbc57d3e3e8b8ed401_client-logo-5.svg" />
        </div>
        {/* Clients Logos -------END */}

        {/* Recent Projects Section */}
        <div className="mx-10">
          <h1 className="text-3xl text-center">Recent Projects</h1>
          <p className="text-center">
            With tools to make every part of your process more human and a
            support team excited to help you, getting started with us never been
            easier.
          </p>

          <div class="inline-grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1  mx-10 mt-20 mb-10"></div>
          {ProjectsData.map((d) => {
            return <ProjectCard data={d} />;
          })}
        </div>
        {/* Recent Projects Section ---END */}

        {/* <img
          alt="Gatsby G Logo"
          src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
        /> */}
      </main>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
