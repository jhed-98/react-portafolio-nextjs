import { useRouter } from "next/router";
import React from "react";

function LenguajeSelector() {
  const router = useRouter();
  //   console.log(router);
  const changeLang = (e) => {
    // console.log(e.target.value);
    router.push(router.pathname, router.pathname, {
      locale: e.target.value,
    });
  };
  return [
    <select className="bg-white dark:bg-gray-800 ml-4" key={Math.random()} onChange={changeLang}>
      <option value="es">Español</option>
      <option value="en">Ingles</option>
    </select>,
  ];
}

export default LenguajeSelector;
