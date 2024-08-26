"use client";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { PinContainer } from "@/components/ui/3d-pin";
import { CARDS, CardStack } from "@/components/ui/card-stack";
import Spotlight from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { WavyBackground } from "@/components/ui/wavy-background";
import { useScroll, motion, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const words = `Spotlight effect is a great way to draw attention to a specific part of the page. Here, we are drawing the attention towards the textsection of the page. I don't know why but I'm running out of copy.`;
  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />

      <div>
        <div className="h-[49rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />
          <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
            <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              MBLAB <br /> is beyond services.
            </h1>
            <div className="max-w-lg text-center mx-auto">
              <TextGenerateEffect duration={2} filter={false} words={words} />
            </div>

            <Link href={"#services"}>
              <div className="text-center mt-6">
                <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    Check Our Services
                  </span>
                </button>
              </div>
            </Link>
          </div>
        </div>

        <div id="services" className="my-20">
          <h2 className="text-center max-w-7xl mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
            Our Services
          </h2>
          <p className="text-center py-2 text-neutral-400">
            We Provide the world-class services.
          </p>

          <div className="max-w-7xl mx-auto px-10 md:px-0 my-10 grid grid-cols-1 md:grid-cols-3 gap-y-3 md:space-x-5">
            <CardContainer className="max-w-[400px] w-full inter-var">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  Web Development
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores, voluptatibus?
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src="/1.jpg"
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href="#"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    Try now →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    Sign up
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
            <CardContainer className="max-w-[400px] w-full inter-var">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  Mobile App Development
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quos, magni!
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src="/2.png"
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href="#"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    Try now →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    Sign up
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
            <CardContainer className="max-w-[400px] w-full inter-var">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  Cloud Solutions
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic,
                  repudiandae.
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src="/3.jpg"
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href="#"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    Try now →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    Sign up
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        </div>

        <div className="relative max-w-full">
          <WavyBackground className="max-w-4xl mx-auto pb-40">
            <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
              About Us
            </p>
            <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
              At MBLab, we are dedicated to delivering high-quality software
              solutions that drive business success. Our team of experienced
              developers and designers work collaboratively to create innovative
              products that meet the unique needs of each client.
            </p>
          </WavyBackground>
        </div>

        <div className="my-20 max-w-7xl mx-auto">
          <h2 className="text-center max-w-7xl mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
            Our Projects
          </h2>
          <p className="text-center py-2 text-neutral-400">
            We Provide the world-class projects.
          </p>
          <div className="py-14 w-full flex items-center justify-center ">
            <PinContainer title="/project1" href="#">
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                  #Project 1
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </span>
                </div>
                <div className="flex flex-1 justify-center items-center w-full rounded-lg mt-4 bg-gradient-to-br from-blue-500 via-orange-500 to-blue-800">
                  <h1 className="text-white">#Project 1</h1>
                </div>
              </div>
            </PinContainer>
            <PinContainer title="/project2" href="#">
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                  #Project 2
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 ">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </span>
                </div>
                <div className="flex flex-1 w-full justify-center items-center rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
                  <h1 className="text-white">#Project 2</h1>
                </div>
              </div>
            </PinContainer>
            <PinContainer title="/project3" href="#">
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                  #Project 3
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </span>
                </div>
                <div className="flex flex-1 justify-center items-center w-full rounded-lg mt-4 bg-gradient-to-br from-green-500 via-red-500 to-green-800">
                  <h1 className="text-white">#Project 3</h1>
                </div>
              </div>
            </PinContainer>
          </div>
        </div>

        <div className="my-20">
          <h2 className="text-center max-w-7xl mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
            Customer Says
          </h2>
          <p className="text-center py-2 text-neutral-400">
            What our customer says about us
          </p>
          <div className="py-14 flex items-center justify-center w-full">
            <CardStack items={CARDS} />
          </div>
        </div>

        <footer className="text-center py-2">
          <p className="text-neutral-500">
            All rights reserved &copy;2024 MBLAB
          </p>
        </footer>
      </div>
    </>
  );
}
