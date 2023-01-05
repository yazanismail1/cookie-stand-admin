import Image from "next/image";
import Link from "next/link";

export default function Introduction() {
  return (
      <section id="intoduction" className="dark:text-slate-200 px-40 lg:flex pt-5 gap-8 md:items-center md:block md:text-center sm:text-center dark:bg-slate-700 ">
        {/* <Image className="md:flex md:justify-center" src="/assets/sales.jpg" width={500} height={500} /> */}
        <div>
          <h1 className=" font-bold text-3xl ">Track Your Sales</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Link
            type="button"
            className="rounded font-medium text-black dark:text-slate-200 dark:bg-slate-900 bg-orange-300 mb-4 px-3 py-2 hover:bg-orange-100 mt-5"
            href="/entries"
          >
            Get Started
          </Link>
        </div>
      </section>
  );
}
