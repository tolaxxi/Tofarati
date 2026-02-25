import { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

import img_01 from '../../../assets/captures/IMG_01.JPEG';
import img_02 from '../../../assets/captures/IMG_02.JPEG';
import img_03 from '../../../assets/captures/IMG_03.JPEG';
import img_04 from '../../../assets/captures/IMG_04.JPEG';
import img_05 from '../../../assets/captures/IMG_05.JPEG';
import img_06 from '../../../assets/captures/IMG_06.JPEG';
import img_07 from '../../../assets/captures/IMG_07.JPEG';
import img_08 from '../../../assets/captures/IMG_08.JPEG';
import img_09 from '../../../assets/captures/IMG_09.JPEG';
import img_10 from '../../../assets/captures/IMG_10.JPEG';
import img_11 from '../../../assets/captures/IMG_11.JPEG';
import img_12 from '../../../assets/captures/IMG_12.JPEG';
import img_13 from '../../../assets/captures/IMG_13.JPEG';
import img_14 from '../../../assets/captures/IMG_14.JPEG';
import img_15 from '../../../assets/captures/IMG_15.JPEG';

const images = [
  img_01,
  img_02,
  img_03,
  img_04,
  img_05,
  img_06,
  img_07,
  img_08,
  img_09,
  img_10,
  img_11,
  img_12,
  img_13,
  img_14,
  img_15,
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);

  const prevIndex = (current - 1 + images.length) % images.length;
  const nextIndex = (current + 1) % images.length;
  const nextNextIndex = (current + 2) % images.length;

  return (
    <>
      <div className="relative w-full max-w-[95%] lg:max-w-375 mx-auto flex items-center justify-center h-112.5 gap-4">
        {/* LEFT (1 image) */}
        <img
          src={images[prevIndex]}
          onClick={() => setCurrent(prevIndex)}
          className="hidden lg:block w-65 h-87.5 object-cover opacity-60 cursor-pointer transition-all duration-500 hover:opacity-90"
        />

        {/* CURRENT */}
        <img
          src={images[current]}
          onClick={() => setFullscreen(true)}
          className="w-70 sm:w-[320px] lg:w-87.5 h-90 object-cover shadow-xl cursor-pointer transition-all duration-500"
        />

        {/* RIGHT #1 */}
        <img
          src={images[nextIndex]}
          onClick={() => setCurrent(nextIndex)}
          className="hidden lg:block w-65 h-87.5 object-cover opacity-70 cursor-pointer transition-all duration-500 hover:opacity-90"
        />

        {/* RIGHT #2 */}
        <img
          src={images[nextNextIndex]}
          onClick={() => setCurrent(nextNextIndex)}
          className="hidden lg:block w-65 h-87.5 object-cover opacity-50 cursor-pointer transition-all duration-500 hover:opacity-90"
        />

        {/* CONTROLS */}
        {/* LEFT BUTTON */}
        <button
          onClick={() => setCurrent(prevIndex)}
          className="absolute top-1/2 translate-y-1/2 bg-white/70 text-black text-lg p-3 rounded-full 
                     left-5 md:left-15 hover:bg-white/80"
        >
          <FaAngleLeft />
        </button>

        {/* RIGHT BUTTON */}
        <button
          onClick={() => setCurrent(nextIndex)}
          className="absolute top-1/2 translate-y-1/2 bg-white/70 text-black text-lg p-3 rounded-full 
                     right-5 md:right-15 hover:bg-white/80"
        >
          <FaAngleRight />
        </button>
      </div>

      {/* FULLSCREEN */}
      {fullscreen && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setFullscreen(false)}
        >
          <img src={images[current]} className="max-h-[90vh] max-w-[90vw] object-contain" />
        </div>
      )}
    </>
  );
};

export default Carousel;
