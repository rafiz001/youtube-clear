import React, { useRef, useState } from 'react';
import { useParams } from 'react-router';
import ReactPlayer from 'react-player/youtube'

function Player(props) {
    const playerRef = useRef(null);
    const playerContainerRef = useRef(null);
    const [played, setPlayed] = useState(0);
    const [playing, setPlaying] = useState(true);
    const [isFullScr, setIsFullScr] = useState(false);
    let { vid } = useParams();


    const handleProgress = (state) => {
        setPlayed(state.played);
    };


    const handleSeek = (e) => {
        const newValue = parseFloat(e.target.value);
        setPlayed(newValue);
        playerRef.current.seekTo(newValue, "fraction");
    };

    const toggleFullscreen = () => {
        if (playerContainerRef.current) {
            const el = playerContainerRef.current;
            
            
          // Check if fullscreen is available and request it
          if (el.requestFullscreen) {
            el.requestFullscreen();
          } else if (el.mozRequestFullScreen) { // Firefox
            el.mozRequestFullScreen();
          } else if (el.webkitRequestFullscreen) { // Chrome, Safari and Opera
            el.webkitRequestFullscreen();
          } else if (el.msRequestFullscreen) { // IE/Edge
            el.msRequestFullscreen();
          }
          setIsFullScr(true);
        }
      };
      const exitFullscreen = () => {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { // Firefox
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { // Chrome, Safari, Opera
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { // IE/Edge
          document.msExitFullscreen();
        }
        setIsFullScr(false);
      };

    return (<>
        <div ref={playerContainerRef}
        style={{
            position: "relative",
            width: "100%",
            height: "100%",
            zIndex: "1", 
            display:"flex",
            justifyContent:"center"
          }}
        >


            <ReactPlayer url={'https://www.youtube.com/watch?v=' + vid}
                ref={playerRef}
                onProgress={handleProgress}
                playing={playing}
                volume={1} className="w-full h-full"
            />
            
        <div  className='absolute top-[0] left-[0] w-full h-[20%] bg-transparent z-[2] '></div>
        <div  className='absolute bottom-[0] left-[0] w-full h-[30%] bg-transparent z-[2] '>

        {isFullScr &&  <div className="h-full flex justify-around items-end gap-2 ">

<button className=' text-white w-full cursor-pointer' onClick={exitFullscreen}>&lt;Close&gt;</button>
</div>}
        </div>

            </div >
            <div className="flex justify-around gap-2 mt-3">

<button className='bg-green-900 text-white w-full cursor-pointer' onClick={() => setPlaying(true)} >Play</button>
<button className='bg-green-900 text-white w-full cursor-pointer' onClick={() => setPlaying(false)}>Pause</button>
<button className='bg-green-900 text-white w-full cursor-pointer' onClick={toggleFullscreen}>Go Fullscreen</button>
</div>
            <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={played}
                onChange={handleSeek}

                style={{ width: "100%", marginTop: "10px" }}
            />
        </>
    );
}

export default Player;