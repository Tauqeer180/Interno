import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { MdArrowForwardIos } from "react-icons/md";
export function Card({ data }) {
  return (
    <div className="hover:bg-theme-gray py-14 md:px-10 px-5 items-center rounded-3lg">
      <h2 className="text-center text-2xl font-bold font-family:sans-serif text-neutral-800 py-5">
        {data?.Title}
      </h2>
      <p className="text-center text-xl text-neutral-700 leading-normal">
        {data?.Desc}
      </p>
      <p className=" text-lg font-bold text-neutral-700">
        <span className="flex items-center py-5 justify-center hover:text-theme-gold">
          View More <FiArrowRight className="ml-2 text-theme-gold" />{" "}
        </span>
      </p>
    </div>
  );
}
export function ReviewCard({ data }) {
  return (
    <div className="bg-white py-14 md:px-10 px-5 items-center rounded-3lg">
      <div className="flex items-center">
        <div>
          <img className="rounded-full" src={data.Image} />
        </div>
        <div className="pl-4">
          <h2 className=" text-2xl font-bold font-family:sans-serif text-neutral-800 ">
            {data?.Name}
          </h2>
          <div className="text-neutral-700">{data?.Address}</div>
        </div>
      </div>
      <p className="mt-5 text-xl text-neutral-700 leading-normal">
        {data.Review}
      </p>
    </div>
  );
}
export function ProjectCard({ data }) {
  return (
    <div className="bg-white md:py-14 py-7 items-center rounded-3lg ">
      <img className="rounded-tr-4xl w-full" src={data.Image} />

      <div className="flex justify-between items-center">
        <div className="">
          <a href="#">
            <h2 className="mt-6 text-2xl font-bold font-family:sans-serif text-theme-heading hover:text-theme-gold">
              {data?.Title}
            </h2>
          </a>
          <a href="#">
            <p className=" text-xl text-theme-text leading-normal hover:text-theme-gold">
              {data.Type}
            </p>
          </a>{" "}
        </div>
        <div>
          <div className=" w-16 h-16 p-5 rounded-full items-center bg-theme-gray  hover:bg-theme-gold">
            <a href="#" className="my-auto">
              <MdArrowForwardIos className="text-theme-heading text-xl  mx-auto" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export function BlogsCard({ data }) {
  return (
    <div className="bg-white md:my-14 my-3 items-center rounded-5xl border hover:bg-theme-gray">
      <div className="p-5">
        <div className="relative">
          <img className=" rounded-t-4xl w-full" src={data.Image} />
          <div className="absolute bottom-10 left-10 bg-white p-3 rounded-t-lg rounded-br-lg">{data?.Type}</div>
        </div>
        <a href="#">
          <h2 className="mt-6 text-2xl font-bold font-family:sans-serif text-theme-heading hover:text-theme-gold">
            {data?.Title}
          </h2>
        </a>
        <div className="flex justify-between items-center my-5">
          <div className="">
            <p className=" text-xl text-theme-text leading-normal ">
              {data.Date}
            </p>
          </div>
          <div>
            <div className=" w-16 h-16 p-5 rounded-full items-center bg-theme-gray  hover:bg-white">
              <a href="#" className="my-auto">
                <MdArrowForwardIos className="text-theme-heading text-xl  mx-auto" />
              </a>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
