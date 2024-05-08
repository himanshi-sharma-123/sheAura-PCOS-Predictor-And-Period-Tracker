import React from "react";

import { Link } from "react-router-dom";
const details = [
  {
    id: 1,
    coverImg:
      "https://buzzrx.s3.amazonaws.com/48b69980-3930-44f5-9f49-cf19035e622a/TheDifferentTypesofPCOSPolycysticOvarianSyndrome.jpg",
    title: "Causes , diagnosis and symptoms of pcos",
  },
  {
    id: 2,
    coverImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Tww-fRhwEDMp_6C69Auv9Z61EIuvrV0EMw&usqp=CAU",
    title: "Fertility",
  },
  {
    id: 3,
    coverImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTZxc0epSQRalQsTb62clwZGhZLEj8rFlGvA&usqp=CAU",
    title: "Skin and hair",
  },
  {
    id: 4,
    coverImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXqSID_bAkD-AjQ4gq3gTUlFXWau28bym_VA&usqp=CAU",
    title: "Management and treatment",
  },
  {
    id: 5,
    coverImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShqcAAvxQgtuow50sFiOf_6cixX7dZdfBmoA&usqp=CAU",
    title: "Sexual health and relationships",
  },
];

const Explore = () => {
  return (
    <>
      <div className="w-full lg:px-20">
        <div className="">
          <h1 className="text-5xl text-gray-700">
            Explore topics related to PCOS
          </h1>
          <div className="mt-5">
            <p className="font-normal text-gray-500">
              We have developed this website to help women with polycystic ovary
              syndrome (PCOS) to find good quality, trustworthy information. All
              of the information provided in this app is of the highest quality
              and based on the latest research evidence on PCOS.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-5 mb-5">
            {details.map((d) => (
              <div
                key={d.id}
                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:border-gray-900  dark:bg-gray-500"
              >
                <img
                  className="rounded-t-lg w-full h-[35vh]"
                  src={d.coverImg}
                  alt=""
                  width={250}
                  height={250}
                />{" "}
                <div class="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {d.title}
                  </h5>

                  <Link
                    to={`/detail/${d.id}`}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-pink-700 rounded-lg hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
