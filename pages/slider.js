import React from "react";
import {
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import Image from "next/image";
import logo from "../public/images/logo-jhed.png";

function slider() {
  return (
    <section className="mb-24">
      <div className="text-center p-10">
        <h2 className="text-5xl text-red-600 font-medium md:text-6xl">
          Edward Jhonatan
        </h2>
        <h3 className="text-2xl py-2 md:text-3xl">
          {/* Developer & Designer */}
          Desarrollador & Diseñador
        </h3>
        <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-100 max-w-xl mx-auto md:text-xl">
          {/* Freelancer providing services for programmin needs. Join me down below and let's get cracking! */}
          Freelancer brindando servicios para las necesidades de programación.
          ¡Únete a mí abajo y empecemos a romper!
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-100">
        <AiFillGithub />
        <AiFillLinkedin />
        <AiFillInstagram />
      </div>
      <div className="mx-auto relative bg-gradient-to-b from-gray-800 dark:from-slate-200 rounded-full  w-80 h-80 mt-20 overflow-hidden">
        <Image src={logo} priority alt="Edward Jhonatan" />
      </div>
    </section>
  );
}

export default slider;
