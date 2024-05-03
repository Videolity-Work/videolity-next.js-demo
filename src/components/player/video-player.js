import React, {useEffect, useState, useRef} from 'react';

const VIDEO_URL="https://preview.dunh29xielhio.amplifyapp.com/video-player?id=JimmyKey&viewRatio=90"

export default function VideoPlayer() {
    const ref = useRef(null);
    const [width, setWidth] = useState(0);
    const aspectRatio = 1920 / 950;

    const handleResize = () => {
        const iframe = document.querySelector('iframe');
        const width = iframe.offsetWidth;
        iframe.style.height = `${width / aspectRatio}px`;
    };

    useEffect(() => {
        const resize = () => {
          setWidth(ref.current ? ref.current.offsetWidth : 0);
        };
        resize();
        window.addEventListener('resize', resize);
        return () => window.removeEventListener('resize', resize);
      }, []);
      
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
