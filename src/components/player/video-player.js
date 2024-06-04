import React, {useEffect, useState, useRef} from 'react';

const VIDEO_URL="https://staging.vdlty.co/video-player?id=30ca1a03-c339-4ce7-85c1-920155b69dc4&viewRatio=1920:950"

export default function VideoPlayer() {
    const ref = useRef(null);
    const [width, setWidth] = useState(0);

    // You can read the aspect ratio of the video from the viewRatio value in the video URL
    // or you can statically write it here
    const aspectRatio = 1920 / 950;

    // Update the video size when the screen size changes
    const handleResize = () => {
        const iframe = document.querySelector('iframe');
        const width = iframe.offsetWidth;
        iframe.style.height = `${width / aspectRatio}px`;
    };

    // Update the width on the initial render and when the size changes
    useEffect(() => {
        const resize = () => {
          setWidth(ref.current ? ref.current.offsetWidth : 0);
        };
        resize();
        window.addEventListener('resize', resize);
        return () => window.removeEventListener('resize', resize);
      }, []);
      
      // Update the video size when the width changes
      useEffect(() => {
        handleResize();
      }, [width]);

    return (
        <div style={{width: "100%"}}>
            <iframe ref={ref} style={{width: "100%", height: "100%"}} src={VIDEO_URL}
                    frameBorder="0"
                    scrolling="no"></iframe>
        </div>
    );
}
