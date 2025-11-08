import { getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";

const index = () => {
  return (
    <section className="relative hero-section overflow-hidden pt-35 md:pt-40 pb-12 lg:pb-30 xl:pt-52">
      <div className="container">
        <div className="lg:flex grid grid-cols-1 sm:grid-cols-2 gap-7 md:gap-4 items-center">
          <div className="flex flex-col gap-4 md:gap-7 max-w-2xl">
            <div>
              <div className="flex items-center gap-8">
                <h1>I'm Abhishek Rajput</h1>
                <div className="wave">
                  <Image
                    src={getImgPath("/images/home/banner/wave-icon.svg")}
                    alt="wave-icon"
                    width={62}
                    height={62}
                    className=""
                  />
                </div>
              </div>
              <h1>Software Engineer</h1>
            </div>
            <p className="text-secondary font-normal max-w-md xl:max-w-xl">
              Lead Software Engineer with expertise in architecting enterprise solutions using Laravel, React, and Vue.js. 
              Passionate about building scalable full-stack applications and mentoring development teams.
            </p>
            <div className="flex gap-4">
              <Link
                href="/pdf/Resume-abhishek-rajput.pdf"
                download="Resume-abhishek-rajput.pdf"
                className="relative overflow-hidden cursor-pointer py-2 sm:py-3 md:py-5 px-4 sm:px-5 md:px-7 border border-primary rounded-full group w-fit"
              >
                <span className="relative z-10 text-lg font-medium text-primary group-hover:text-white transition-colors duration-300">
                  Download Resume
                </span>
              </Link>
            </div>
          </div>
          <Image
            src={getImgPath("/images/home/banner/abhishek-rajput.png")}
            alt="banner-img"
            width={685}
            height={650}
            className="block lg:hidden"
          />
        </div>
      </div>
      <div className="absolute right-0 top-0 hidden h-auto w-1/2 lg:block 2xl:h-171.5 2xl:w-187.5">
        <Image
          src={getImgPath("/images/home/banner/abhishek-rajput.png")}
          alt="banner-img"
          width={685}
          height={650}
          className=" absolute right-0 top-0 z-1"
        />
      </div>
    </section>
  );
};

export default index;
