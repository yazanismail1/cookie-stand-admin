"use client";
import React from "react";
import Image from "next/image";

export default function Card(props){
    return(
        <section className="px-40 py-3 flex flex-wrap justify-center gap-3 dark:bg-slate-700">
        {props.data.length > 0 &&
          props.data.map((item, index) => {
            return (
              <div
                key={index}
                className="w-1/4 p-7 rounded bg-orange-300 hover:animate-pulse h-fit dark:bg-slate-900 dark:text-slate-200"
              >
                <h3 className="font-bold text-3xl">{item.Location}</h3>
                <p>Minimum Customers Per Hour: {item.MinInput}</p>
                <p>Maximum Customers Per Hour: {item.MaxInput}</p>
                <p>Average Cookies Per Sale: {item.AvgInput}</p>
              </div>
            );
          })}
        {props.data.length === 0 && (
          <div className="min-h-screen">
            <p className=" font-bold text-3xl dark:text-slate-200">No Records 😥</p><br/>
            <Image
              src="/assets/waiting.png"
              width={50}
              height={50}
              alt=""
              className="animate-spin flex justify-center ml-16"
            />
          </div>
        )}
      </section>
    )
}