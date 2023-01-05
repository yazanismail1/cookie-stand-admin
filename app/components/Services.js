export default function Services() {
  return (
      <section id="services" className="px-40 py-12 dark:bg-slate-700 dark:text-slate-200">
        <h1 className=" text-center font-bold text-3xl pb-5 ">What Do We Offer!</h1>
        <div className="flex space-x-8">

          <div className="w-1/3 p-8 rounded bg-orange-300 hover:animate-pulse dark:bg-slate-900">
            <h3 className="font-bold text-2xl">For Ever Free</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="w-1/3 p-8 rounded bg-orange-300 hover:animate-pulse dark:bg-slate-900">
            <h3 className="font-bold text-2xl">Easy To Use</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="w-1/3 p-8 rounded bg-orange-300 hover:animate-pulse dark:bg-slate-900">
            <h3 className="font-bold text-2xl">Friendly UI/UX</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </section>
  );
}
