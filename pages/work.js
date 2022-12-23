import React from "react";
import { Work } from "../data/WorkData";
import { Card } from "./subPages/Card";

const work = () => {
  return (
    <section className="mb-24">
      <h1 className="text-2xl font-semibold text-center mb-8 dark:text-white">
        PORTAFOLIO
      </h1>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 px-6"> 
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          {/* <div className="basis-1/3 flex-1 ">
             <Image
               className="rounded-lg object-cover"
               width={"100%"}
               height={"100%"}
               layout="responsive"
               src={web1}
             />
           </div> */}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Work.map((work) => (
              <Card key={work.id} data={work} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default work;
