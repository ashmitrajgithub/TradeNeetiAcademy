import { useState, useEffect } from "react";

const Landing = () => {
    const images = [
        "\\src\\assets\\landingImg.jpg",
        "\\src\\assets\\landingImg2.jpg",
        "\\src\\assets\\landingImg3.jpg"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval); // Cleanup on component unmount
    }, [images.length]);

    return (
        <div className='relative w-full h-1/2 md:h-screen'>
            <div className=" w-full h-4/5">
              <img
                className="w-full h-full object-cover transition-opacity duration-1000"
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                />
            </div>
            {/*Optional: Add indicators */}
            <div className="absolute bottom-44 left-1/2 transform-translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`w-3 h-3 rounded-full ${
                            index === currentIndex ? "bg-blue-500" : "bg-gray-400"
                        }`}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Landing;
