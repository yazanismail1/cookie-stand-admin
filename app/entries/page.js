"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [locationInput, setLocationInput] = useState("");
  const [minInput, setminInput] = useState("");
  const [maxInput, setMaxInput] = useState("");
  const [avgInput, setAvgInput] = useState("");
  const [data, setData] = useState("");

  const locationChange = (e) => {
    setLocationInput(e.target.value);
  };

  const minChange = (e) => {
    setminInput(e.target.value);
  };

  const maxChange = (e) => {
    setMaxInput(e.target.value);
  };

  const avgChange = (e) => {
    setAvgInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      Location: locationInput,
      MinInput: minInput,
      MaxInput: maxInput,
      AvgInput: avgInput,
    };

    setData([...data, userData]);
  };

  return (
    <>
      <section className="px-40 py-3 h-full">
        <h1 className=" font-bold text-3xl mb-2">
          Start now and past is history
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            id="location"
            name="location"
            type="text"
            placeholder="Enter Store Location"
            className="rounded border-orange-300 border-2 h-10 w-full mb-2 p-2"
            onChange={locationChange}
          />
          <div className="flex space-x-2">
            <input
              id="minCustomerPerHour"
              name="minCustomerPerHour"
              type="text"
              placeholder="Minimum Customers Per Hour"
              className="rounded border-orange-300 border-2 h-10 w-full mb-2 p-2"
              onChange={minChange}
            />
            <input
              id="maxCustomerPerHour"
              name="maxCustomerPerHour"
              type="text"
              placeholder="Maximum Customers Per Hour"
              className="rounded border-orange-300 border-2 h-10 w-full mb-2 p-2"
              onChange={maxChange}
            />
            <input
              id="avgCookiesPerSale"
              name="avgCookiesPerSale"
              type="text"
              placeholder="Average Cookies Per Sale"
              className="rounded border-orange-300 border-2 h-10 w-full mb-2 p-2"
              onChange={avgChange}
            />
          </div>
          <button
            className="rounded font-medium text-black bg-orange-300 px-3 py-2 hover:bg-orange-100"
            type="submit"
          >
            Add Record
          </button>
        </form>
      </section>

      <section className="px-40 py-3 flex flex-wrap justify-center gap-3">
        {data.length > 0 &&
          data.map((item, index) => {
            return (
              <div
                key={index}
                className="w-1/4 p-7 rounded bg-orange-300 hover:animate-pulse h-fit"
              >
                <h3 className="font-bold text-3xl">{item.Location}</h3>
                <p>Minimum Customers Per Hour: {item.MinInput}</p>
                <p>Maximum Customers Per Hour: {item.MaxInput}</p>
                <p>Average Cookies Per Sale: {item.AvgInput}</p>
              </div>
            );
          })}
        {data.length === 0 && (
          <div className="min-h-screen">
            <p className=" font-bold text-3xl">No Records 😥</p><br/>
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
    </>
  );
}
