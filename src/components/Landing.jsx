import { useState, useEffect } from "react";  
import "./Landing.css"

const Landing = () => {     
    const images = [         
        "/assets/01.jpg",         
        "/assets/02.jpg",         
        "/assets/03.jpg"     
    ];      

    const [currentIndex, setCurrentIndex] = useState(0);      

    useEffect(() => {         
        const interval = setInterval(() => {             
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);         
        }, 5000); // Change image every 5 seconds          

        return () => clearInterval(interval); // Cleanup on component unmount     
    }, [images.length]);      

    return (         
        <div>
            <div className='relative w-full mx-auto mt-32 h-[400px] md:h-[500px] image-slider-container'>             
                <div className="w-full h-full">                 
                    <img                     
                        className="w-full h-full object-cover transition-opacity duration-1000 image-slide-item"                     
                        src={images[currentIndex]}                     
                        alt={`Slide ${currentIndex + 1}`}                 
                    />             
                </div>             

                {/* Optional: Add indicators */}             
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2 button-position">                 
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
        </div>     
    ); 
};  

export default Landing;