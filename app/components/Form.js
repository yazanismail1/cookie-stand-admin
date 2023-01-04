"use client";

export default function Form(props) {
  
  return (
      <section className="px-40 py-3 h-full">
        <h1 className=" font-bold text-3xl mb-2">
          Start now and past is history
        </h1>
        <form onSubmit={props.handleSubmit}>
          <input
            id="location"
            name="location"
            type="text"
            placeholder="Enter Store Location"
            className="rounded border-orange-300 border-2 h-10 w-full mb-2 p-2"
            onChange={props.locationChange}
          />
          <div className="flex space-x-2">
            <input
              id="minCustomerPerHour"
              name="minCustomerPerHour"
              type="text"
              placeholder="Minimum Customers Per Hour"
              className="rounded border-orange-300 border-2 h-10 w-full mb-2 p-2"
              onChange={props.minChange}
            />
            <input
              id="maxCustomerPerHour"
              name="maxCustomerPerHour"
              type="text"
              placeholder="Maximum Customers Per Hour"
              className="rounded border-orange-300 border-2 h-10 w-full mb-2 p-2"
              onChange={props.maxChange}
            />
            <input
              id="avgCookiesPerSale"
              name="avgCookiesPerSale"
              type="text"
              placeholder="Average Cookies Per Sale"
              className="rounded border-orange-300 border-2 h-10 w-full mb-2 p-2"
              onChange={props.avgChange}
            />
          </div>
          <div className="flex flex-wrap gap-4">
          <button
            className="rounded font-medium text-black bg-orange-300 px-3 py-2 hover:bg-orange-100"
            type="submit"
          >
            Add Record
          </button>
          <button
            className="rounded font-medium text-black bg-orange-300 px-3 py-2 hover:bg-orange-100"
            type="button"
            onClick={() => props.handleShow()}
          >
            Overview
          </button>
          </div>
        </form>
      </section>
  );
}
