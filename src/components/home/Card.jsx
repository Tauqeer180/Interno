import React from "react";
import { FiArrowRight } from "react-icons/fi";
export function Card({ data }) {
  return (
    <div className="hover:bg-gray-200 py-14 px-10 items-center rounded-3lg">
      <h2 className="text-center text-2xl font-bold font-family:sans-serif text-neutral-800 py-5">
        {data?.Title}
      </h2>
      <p className="text-center text-xl text-neutral-700 leading-normal">
        {data?.Desc}
      </p>
      <p className=" text-lg font-bold text-neutral-700">
        <span className="flex items-center py-5 justify-center">
          View More <FiArrowRight className="ml-2 text-yellow-700" />{" "}
        </span>
      </p>
    </div>
  );
}
export function ReviewCard({ data }) {
  return (
    <div className="bg-white py-14 px-10 items-center rounded-3lg">
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
      <p className="text-center text-xl text-neutral-700 leading-normal">
        {data.Review}
      </p>
    </div>
  );
}
export function ProjectCard({ data }) {
  return (
    <div className="bg-white py-14 px-10 items-center rounded-3lg">
      
        <div>
          <img className="" src={data.Image} />
        </div>
        <div className="pl-4">
          <h2 className=" text-2xl font-bold font-family:sans-serif text-neutral-800 ">
            {data?.Title}
          </h2>
          <div className="text-neutral-700">{data?.Address}</div>
        </div>
     
      <p className="text-center text-xl text-neutral-700 leading-normal">
        {data.Type}
      </p>
    </div>
  );
}
