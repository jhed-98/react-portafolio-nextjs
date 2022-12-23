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
import Link from "next/link";
const fecha = new Date();

const footer = () => {
  return (
    <footer className="border-t-2 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <Image src={logo} alt="JhEd" priority className="h-16 w-16" />
          <span className="ml-3 text-xl">JhEd</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © {fecha.getFullYear()} JhEd —
          <Link
            href="https://www.instagram.com/jhed.s/"
            className="ml-1"
            target="_blank"
          >
            @jhed.s
          </Link>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start text-3xl ">
          <Link
            href="https://github.com/jhed-98"
            className="text-gray-500"
            target="_blank"
          >
            <AiFillGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/jhed/"
            className="text-gray-500"
            target="_blank"
          >
            <AiFillLinkedin />
          </Link>
          <Link
            href="https://www.instagram.com/jhed.s/"
            className="text-gray-500"
            target="_blank"
          >
            <AiFillInstagram />
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default footer;
