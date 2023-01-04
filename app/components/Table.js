import React, { useState, useEffect, use } from "react";
import { data } from "./data";

export default function Table(props) {
  let render = props.showTable;
  const [records, setRecords] = useState("");
  const [totalLocation, setTotalLocation] = useState("");
  const [totalTime, setTotalTime] = useState("");
  const [allSales, setAllSales] = useState("");
  const [reload, setReload] = useState(false)

  const totalPerLocation = () => {
    let loc = {};
    let salePerHour = {};
    data.map((item) => {
      loc[item.location] = 0;
      for (const [key, value] of Object.entries(item.time_sale)) {
        loc[item.location] += value;
        if (key in salePerHour === true) {
          salePerHour[key] += value;
        } else {
          salePerHour[key] = value;
        }
        setTotalTime(salePerHour);
      }
      setTotalLocation(loc);
    });
  };

  const calculateTotal = () => {
    let sum;
    sum = 0;
    for (const [key, value] of Object.entries(totalTime)) {
        sum += value
    }
    setAllSales(sum);
    
  }

  const handleDelete = (item) => {
      const index = data.indexOf(item)
      if (index > -1){
        data.splice(index, 1);
      }
      setReload(true)
      
  }

  useEffect(() => {
    totalPerLocation();
    setRecords(data);
    calculateTotal();
  },[allSales, reload]);

  return (
    <div class="relative overflow-x-auto m-20">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 rounded-xl">
        <thead class="text-xs text-gray-700 uppercase bg-orange-300 dark:bg-gray-700 dark:text-gray-400 rounded-xl">
          <tr>
            <th scope="col" class="px-3 py-3 rounded-tl-xl">
              Location
            </th>
            <th scope="col" class="px-3 py-3 text-center">
              6am
            </th>
            <th scope="col" class="px-3 py-3 text-center">
              7am
            </th>
            <th scope="col" class="px-3 py-3 text-center">
              8am
            </th>
            <th scope="col" class="px-3 py-3 text-center">
              9am
            </th>
            <th scope="col" class="px-3 py-3 text-center">
              10am
            </th>
            <th scope="col" class="px-3 py-3 text-center">
              11am
            </th>
            <th scope="col" class="px-3 py-3 text-center">
              12pm
            </th>
            <th scope="col" class="px-3 py-3 text-center">
              1pm
            </th>
            <th scope="col" class="px-3 py-3 text-center">
              2pm
            </th>
            <th scope="col" class="px-3 py-3 text-center">
              3pm
            </th>
            <th scope="col" class="px-3 py-3 text-center">
              4pm
            </th>
            <th scope="col" class="px-3 py-3 text-center">
              5pm
            </th>
            <th scope="col" class="px-3 py-3 text-center">
              6pm
            </th>
            <th scope="col" class="px-3 py-3 text-center">
              7pm
            </th>
            <th scope="col" class="px-3 py-3 text-center">
              Total
            </th>
            <th scope="col" class="px-3 py-3 text-center rounded-tr-xl">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.location}
                </th>
                <td class="px-3 py-4 text-center">{item.time_sale["6am"]}</td>
                <td class="px-3 py-4 text-center">{item.time_sale["7am"]}</td>
                <td class="px-3 py-4 text-center">{item.time_sale["8am"]}</td>
                <td class="px-3 py-4 text-center">{item.time_sale["9am"]}</td>
                <td class="px-3 py-4 text-center">{item.time_sale["10am"]}</td>
                <td class="px-3 py-4 text-center">{item.time_sale["11am"]}</td>
                <td class="px-3 py-4 text-center">{item.time_sale["12pm"]}</td>
                <td class="px-3 py-4 text-center">{item.time_sale["1pm"]}</td>
                <td class="px-3 py-4 text-center">{item.time_sale["2pm"]}</td>
                <td class="px-3 py-4 text-center">{item.time_sale["3pm"]}</td>
                <td class="px-3 py-4 text-center">{item.time_sale["4pm"]}</td>
                <td class="px-3 py-4 text-center">{item.time_sale["5pm"]}</td>
                <td class="px-3 py-4 text-center">{item.time_sale["6pm"]}</td>
                <td class="px-3 py-4 text-center">{item.time_sale["7pm"]}</td>
                <td class="px-3 py-4 text-center font-semibold">
                  {totalLocation[item.location]}
                </td>
                <td class="px-3 py-4 text-center">
                  <a
                    onClick={() => handleDelete(item)}
                    class="hover:cursor-pointer font-medium text-red-600 hover:text-red-800 dark:text-red-500 hover:underline  items-center content-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 ml-9"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                      />
                    </svg>
                  </a>
                </td>
              </tr>
            );
          })}
          <tr class="bg-orange-100 font-semibold border-b text-black dark:bg-gray-900 dark:border-gray-700 ">
            <th
              scope="row"
              class="px-3 py-4 font-semibold text-gray-900 whitespace-nowrap dark:text-white"
            >
              TOTAL
            </th>
            <td class="px-3 py-4 text-center">{totalTime["6am"]}</td>
            <td class="px-3 py-4 text-center">{totalTime["7am"]}</td>
            <td class="px-3 py-4 text-center">{totalTime["8am"]}</td>
            <td class="px-3 py-4 text-center">{totalTime["9am"]}</td>
            <td class="px-3 py-4 text-center">{totalTime["10am"]}</td>
            <td class="px-3 py-4 text-center">{totalTime["11am"]}</td>
            <td class="px-3 py-4 text-center">{totalTime["12pm"]}</td>
            <td class="px-3 py-4 text-center">{totalTime["1pm"]}</td>
            <td class="px-3 py-4 text-center">{totalTime["2pm"]}</td>
            <td class="px-3 py-4 text-center">{totalTime["3pm"]}</td>
            <td class="px-3 py-4 text-center">{totalTime["4pm"]}</td>
            <td class="px-3 py-4 text-center">{totalTime["5pm"]}</td>
            <td class="px-3 py-4 text-center">{totalTime["6pm"]}</td>
            <td class="px-3 py-4 text-center">{totalTime["7pm"]}</td>
            <td class="px-3 py-4 text-center">{allSales}</td>
            <td class="px-3 py-4 text-center"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
