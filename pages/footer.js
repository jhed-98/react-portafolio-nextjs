import React from "react";
import { Facebook, Github, Instagram, YouTube } from "../components/AllSvgs";
import {
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import Image from "next/image";
import logo from "../public/images/logo-jhed.png";
const fecha = new Date();


const footer = () => {
  return (
    <footer className="border-t-2 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg> */}
           <Image src={logo} alt="JhEd" priority className="h-16 w-16" />
          <span className="ml-3 text-xl">JhEd</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © {fecha.getFullYear()} JhEd —
          <a
            href="https://www.instagram.com/jhed.s/"
            className="ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @jhed.s
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start text-3xl ">
          <a
            className="text-gray-500"
            href="https://github.com/jhed-98"
            target="_blank"
          >
            <AiFillGithub />
          </a>
          <a
            className="ml-3 text-gray-500"
            href="https://www.linkedin.com/in/jhed/"
            target="_blank"
          >
            <AiFillLinkedin />
          </a>
          <a
            className="ml-3 text-gray-500"
            href="https://www.instagram.com/jhed.s/"
            target="_blank"
          >
            <AiFillInstagram />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default footer;
