import React from "react";

import Image from "next/image";
import design from "../public/images/design.png";
import consulting from "../public/images/consulting.png";
import code from "../public/images/code.png";
import { Design, Develope } from "../components/AllSvgs.js";

function services({ darkMode }) {
  return (
    <section className="mb-24">
      <h1 className="text-2xl font-semibold text-center mb-8 dark:text-white">
        ABOUT
      </h1>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 px-6 mb-8">
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          Soy un desarrollador front-end y back-end ubicado en Perú. Me encanta
          crear sitios web y apps con una gran experiencia de usuario, he
          realizado trabajos remotos para
          <span className="text-red-500"> agencias </span> consultadas por
          nuevas
          <span className="text-red-500"> empresas </span> y he colaborado con
          personas talentosas para crear productos digitales para uso comercial
          y de consumo.
        </p>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          Creo que todo es un Arte cuando pones tu conciencia en ello. Puedes
          conectarte conmigo a través de enlaces sociales.
        </p>
      </div>

      <h1 className="text-2xl font-semibold text-center mb-8 dark:text-white">
        SKILLS
      </h1>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 px-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="text-center shadow-lg p-10 rounded-xl my-2 md:my-10 shadow-gray-600 dark:shadow-gray-200 text-gray-800 dark:text-gray-100 bg-gray-100 dark:bg-gray-800 hover:bg-gray-800 hover:dark:bg-gray-100 hover:text-gray-100 hover:dark:text-gray-800 flex-1">
            <h3 className="text-lg font-medium pt-8 pb-12 flex justify-center">
              <Design
                wifth={40}
                height={40}
                fill={"rgb(220 38 38)"}
                className="mr-8"
              />
              FrontEnd Development
            </h3>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-md font-bold py-1">HTML</p>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Experimentado
                </span>
              </div>
              <div>
                <p className="text-md font-bold py-1">CSS</p>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Intermedio
                </span>
              </div>
              <div>
                <p className="text-md font-bold py-1">Javascript</p>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Experimentado
                </span>
              </div>
              <div>
                <p className="text-md font-bold py-1">Bootstrap</p>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Experimentado
                </span>
              </div>
              <div>
                <p className="text-md font-bold py-1">Tailwind</p>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Intermedio
                </span>
              </div>
              <div>
                <p className="text-md font-bold py-1">React</p>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Intermedio
                </span>
              </div>
            </div>
          </div>

          <div className="text-center shadow-lg p-10 rounded-xl my-2 md:my-10 shadow-gray-600 dark:shadow-gray-200 text-gray-800 dark:text-gray-100 bg-gray-100 dark:bg-gray-800 hover:bg-gray-800 hover:dark:bg-gray-200 hover:text-gray-200 hover:dark:text-gray-800 flex-1">
            <h3 className="text-lg font-medium pt-8 pb-12 flex justify-center  ">
              {/* <Develope wifth={40} height={40} fill={darkMode ? "#fff" : "#000"} className="mr-8" /> BackEnd */}
              <Develope
                wifth={40}
                height={40}
                fill={"rgb(220 38 38)"}
                className="mr-8"
              />
              BackEnd Development
            </h3>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="py-1 font-bold">Node JS</p>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Intermedio
                </span>
              </div>
              <div>
                <p className="py-1 font-bold">PHP</p>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Experimentado
                </span>
              </div>
              <div>
                <p className="py-1 font-bold">PostgretSQL</p>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Intermedio
                </span>
              </div>
              <div>
                <p className="py-1 font-bold">MySQL</p>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Experimentado
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default services;
