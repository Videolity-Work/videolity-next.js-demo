import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Testimonials from "@/components/home/Testimonials";
import VideoPlayer from "@/components/player/video-player";
import { VideolityPlayer } from "videolity-sdk";

export default function Home() {
  return (
    <>
      <VideoPlayer />
      <VideolityPlayer src="https://staging.vdlty.co/video-player?id=4b0b9a9a-a7ef-4d91-b2c9-2bd2e4a2d1cb&viewRatio=1920:950" />
      <Hero />
      <Features />
      <Testimonials />
    </>
  );
}
