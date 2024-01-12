import React, {useEffect, useState} from 'react';

function VideoPlayer() {
    const [aspectRatio, setAspectRatio] = useState(16 / 8);

    const handleMessage = (event) => {
        if (event.data && event.data.for === 'videolityIframeResize') {
            setAspectRatio(event.data.aspectRatio);
        }
    };

    const handleResize = () => {
        const iframe = document.querySelector('iframe');
        const width = iframe.offsetWidth;
        iframe.style.height = `${width / aspectRatio}px`;
    };

    useEffect(() => {
        window.addEventListener('message', handleMessage, false);
        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('message', handleMessage, false);
            window.removeEventListener('resize', handleResize);
        };
    }, [aspectRatio]);

    return (
        <div style={{width: "100%"}}>
            <iframe style={{width: "100%", height: "100%"}} src="https://preview.dunh29xielhio.amplifyapp.com/video-player?id=JimmyKey"
                    frameBorder="0"
                    scrolling="no"></iframe>
        </div>
    );
}

export default VideoPlayer;