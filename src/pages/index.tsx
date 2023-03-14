import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="container">
        <div className="bg-white rounded-lg shadow-lg p-5 md:p-20 mx-2">
          <div className="w-full flex text-center justify-center">
            <Image
              src="/logo.png"
              width={400}
              height={200}
              alt={""}
              className="self-center"
            />
          </div>
          <div className="text-center">
            <h3 className="text-xl md:text-2xl font-medium text-[#161654]">
              COSMETIC
            </h3>
            <h3 className="text-xl md:text-2xl text-[#161654]">
              PRODUCTS & BRAND
            </h3>
            <h3 className="text-xl md:text-2xl font-medium  text-[#161654]">
              CONSULTANCY
            </h3>
          </div>
          <div className="text-center">
            <p className="text-lg md:text-xl mt-10 text-[#161654]">
              coming soon
            </p>
          </div>
          <div className="flex flex-wrap mt-10 justify-center">
            <div className="text-[#161654]">
              <Link
                className="hover:underline "
                href="mailto:benozlemsen@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <>
                  <span className="sr-only">Email</span>
                  <span className="mt-6 flex text-base">
                    <EnvelopeIcon
                      className="h-6 w-6 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="ml-3">aykut.biltir@no145.co</span>
                  </span>
                </>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
