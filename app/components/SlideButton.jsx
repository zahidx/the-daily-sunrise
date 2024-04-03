
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import { useSwiper } from 'swiper/react';

const SlideButton = () => {
    const swiper = useSwiper();
  return (
    <div className="bg-blue-500 w-full">
         <div className="flex justify-between m-auto p-2 sm:p-4">
                
            
            <div className="flex justify-end items-center">
                <button
                    onClick={() => swiper.slidePrev()}
                    className="bg-gray-200 p-2 rounded-full"
                >
                    <FaChevronCircleLeft />
                </button>
                <button
                    onClick={() => swiper.slideNext()}
                    className="bg-gray-200 p-2 rounded-full"
                >
                    <FaChevronCircleRight />
                </button>

            </div>
            </div>
    </div>
  )
}

export default SlideButton