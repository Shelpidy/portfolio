"use client";

import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import { ModeToggle } from "./ThemeToggle";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Animation variants for parent container
const containerVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 1, // Stagger children animations by 0.2 seconds
    },
  },
};

// Animation variants for individual items
const childVariant = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Banner() {
  const images = ["/p-1.JPG", "/p-2.JPG", "/p-3.JPG"];
  return (
    <section className="flex flex-col w-full min-h-[60vh] p-5">
      <div>
        <ModeToggle />
      </div>
      <motion.div
        className="flex-1 flex gap-10 justify-items-center items-center flex-col-reverse md:flex-row"
        variants={containerVariant}
        initial="initial"
        animate="animate"
      >
        {/* Left Section */}
        <motion.div
          className="mx-auto w-full flex flex-col justify-center items-center"
          variants={containerVariant}
        >
          <motion.h2
            className="text-bold text-3xl font-greatVibes"
            variants={childVariant}
          >
            Mohamed Shelpidy Kamara
          </motion.h2>
          <motion.h2
            className="text-bold text-center my-2 text-6xl font-philosopher"
            variants={childVariant}
          >
            I am a developer and an electrical and electronics engineer.
          </motion.h2>
        </motion.div>

        {/* Right Section */}
        <div className="w-full px-10 md:px-20">
          <Carousel className="w-full max-w-full" opts={{ loop: true,duration:50 }}>
            <CarouselContent>
              {images.map((img, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <div className="relative w-full  aspect-square rounded-[50%] overflow-hidden border-4 border-primary">
                      <Image
                        className="absolute"
                        src={img}
                        alt="Banner image"
                        fill
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        className="flex flex-row justify-center items-start gap-5 justify-self-end p-4 mt-5"
        variants={containerVariant}
      >
        <motion.div variants={childVariant}>
          <Facebook />
        </motion.div>
        <motion.div variants={childVariant}>
          <Github />
        </motion.div>
        <motion.div variants={childVariant}>
          <Instagram />
        </motion.div>
        <motion.div variants={childVariant}>
          <Linkedin />
        </motion.div>
      </motion.div>
    </section>
  );
}
