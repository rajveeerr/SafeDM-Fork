import { useRef, useState } from "react";
import image from '../../assets/image.png'

const VidOverlay = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="w-full flex justify-center">
      <div className="relative">
        <img
          className="w-full max-w-[280px] sm:max-w-[480px] md:max-w-[768px] lg:max-w-[1200px] border border-white p-2 rounded-lg shadow-lg"
          src={image}
        />
        {!isPlaying && (
          <button
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 sm:p-3 md:p-4 focus:outline-none"
            onClick={handlePlay}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14.752 11.168l-5.197-3.01A1 1 0 008 9.035v5.93a1 1 0 001.555.832l5.197-3.01a1 1 0 000-1.664z"
              />
            </svg>
          </button>
        )} 
      </div>
    </div>
  );
};

export default VidOverlay;