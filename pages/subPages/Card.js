import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Github } from "../../components/AllSvgs";

export const Card = (props) => {
  const { id, imgSrc, name, description, tags, demo, github } = props.data;
console.log(imgSrc);
  return (
    <div
      key={id}
      className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-200"
    >
      <a href="#">
        <Image
          src={imgSrc}
          width={500}
          height={500}
          className="p-8 rounded-t-lg"
          alt="product image"
        />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </a>
        <div className="flex flex-wrap items-center my-5">
          {tags.map((t, id) => {
            return (
              <span
                key={id}
                className="bg-blue-100 text-blue-800 text-xs font-semibold rounded dark:bg-blue-200 dark:text-blue-800 px-2.5 py-0.5 ml-3 my-1"
              >
                # {t}
              </span>
            );
          })}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            <Github width={30} height={30} fill={"rgb(220 38 38)"} />
          </span>

          <Link
            href={{ pathname: `${demo}` }}
            target="_blank"
            className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-gray-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-gray-100"
          >
            Visit
          </Link>
        </div>
      </div>
    </div>
  );
};
