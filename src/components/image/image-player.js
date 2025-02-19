import React, { useEffect, useState, useRef } from "react";

const IMAGE_URL = "IMAGE_URL";

export default function ImagePlayer() {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);

  // You can read the aspect ratio of the image from the viewRatio value in the image URL
  // or you can statically write it here
  const aspectRatio = 1920 / 950;

  // Update the image size when the screen size changes
  const handleResize = () => {
    const iframe = document.querySelector("image");
    const width = iframe.offsetWidth;
    iframe.style.height = `${width / aspectRatio}px`;
  };

  // Update the width on the initial render and when the size changes
  useEffect(() => {
    const resize = () => {
      setWidth(ref.current ? ref.current.offsetWidth : 0);
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  // Update the image size when the width changes
  useEffect(() => {
    handleResize();
  }, [width]);

  return (
    <div style={{ width: "100%" }}>
      <image
        ref={ref}
        style={{ width: "100%", height: "100%" }}
        src={IMAGE_URL}
      />
    </div>
  );
}
