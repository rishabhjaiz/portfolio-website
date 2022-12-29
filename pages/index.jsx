import Header from "../components/Header";
import Image from "next/image";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 flex flex-col min-h-screen">
      {/** since header is a componenet that would be used across pages hence I was thinking right it extracting that out as a compoenent */}
      <Header />
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
              Rishabh Jain
            </h1>
            {/** Style sundial differently in this */}
            <h2 className="text-gray-700 dark:text-gray-200 mb-4">
              Software Engineer at{" "}
              <span className="font-semibold">Sundial</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-16">
              Currently helping companies make better decision with data. Avid
              learner
            </p>
          </div>
          <div className="w-[80px] sm:w-[126px] relative mb-8 sm:mb-0 ">
            <Image
              alt="Rishabh Jain"
              height={126}
              width={126}
              src="/avatar.jpg"
              sizes="30vw"
              priority
              className="rounded-full filter"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
