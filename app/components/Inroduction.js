import Image from "next/image";
import Link from "next/link";

export default function Introduction() {
  return (
      <section id="intoduction" className="px-40 flex space-x-8 items-center">
        <Image src="/assets/sales.jpg" width={500} height={500} />
        <div>
          <h1 className=" font-bold text-3xl">Track Your Sales</h1>
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
            className="rounded font-medium text-black bg-orange-300 px-3 py-2 hover:bg-orange-100 mt-5"
            href="/entries"
          >
            Get Started
          </Link>
        </div>
      </section>
  );
}
