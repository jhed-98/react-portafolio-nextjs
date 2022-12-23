 
import logo from "../public/images/logo-jhed.png";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Image from "next/image";
import LenguajeSelector from "../components/LenguajeSelector";

export default function Home({ setDarkMode, darkMode }) {
  return (
    <nav className="bg-white dark:bg-gray-900 border-b py-2 border-gray-100 shadow fixed top-0 z-[200] w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="shrink-0 flex items-center">
              <a href="/">
                <Image src={logo} alt="JhEd" priority className="h-16 w-16" />
              </a>
            </div>
          </div>
          <ul className=" flex items-center">
            <li>
              <BsFillMoonStarsFill
                // onClick={() => setDarkMode(!darkMode)}
                onClick={() => setDarkMode(!darkMode)}
                className="cursor-pointer text-2xl"
              />
            </li>
            <LenguajeSelector />
            <li>
              <a
                className="border-red-500 hover:bg-red-200 dark:border-white hover:dark:bg-red-600 bg-white dark:bg-red-500 text-black dark:text-white px-4 py-2 border rounded-lg ml-4"
                href="https://drive.google.com/file/d/1ReauCMhJ0wBsLZk922UB0QT1LRfonI51/view?usp=sharing" target="_blank"
              >
                Descargar CV
              </a>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
}
