import { FaInstagramSquare, FaFacebook, FaTelegram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";

function Footer() {
    return (
        <>
            <footer className="relative z-50 bg-white px-8 pb-6 pt-12 m-10 rounded-3xl shadow-2xl sm:px-4 sm:py-4">
                <div className="flex flex-wrap justify-between items-center mb-5 gap-4 pl-8 pr-8">
                    <img src="\src\assets\treadneetiLogo1.png" alt="logo" className="w-32 mb-2" />
                    <div className="flex gap-4">
                        <a href="#" target="_blank" rel="noreferrer" className="text-2xl text-primary hover:text-blue-500">
                            <FaTelegram />
                        </a>
                        <a href="#" target="_blank" rel="noreferrer" className="text-2xl text-primary hover:text-blue-500">
                            <FaFacebook />
                        </a>
                        <a href="#" target="_blank" rel="noreferrer" className="text-2xl text-primary hover:text-pink-500">
                            <FaInstagramSquare />
                        </a>
                        <a href="#" target="_blank" rel="noreferrer" className="text-2xl text-primary hover:text-blue-400">
                            <IoLogoTwitter />
                        </a>
                    </div>
                </div>

                <div className="container mx-auto">
                    <div className="flex flex-wrap gap-4 justify-center">
                        <div className="w-full md:w-4/12 xl:w-2/12">
                            <h5 className="text-lg font-bold text-primary mb-2">Company</h5>
                            <ul className="list-none space-y-1">
                                <li>
                                    <a
                                        href="#"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-gray-600 hover:text-primary transition"
                                    >
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-gray-600 hover:text-primary transition"
                                    >
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-gray-600 hover:text-primary transition"
                                    >
                                        Free Products
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="w-full md:w-5/12 xl:w-2/12">
                            <h5 className="text-lg font-bold text-primary mb-2">Help and Support</h5>
                            <ul className="list-none space-y-1">
                                <li>
                                    <a
                                        href="#"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-gray-600 hover:text-primary transition"
                                    >
                                        Knowledge Center
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-gray-600 hover:text-primary transition"
                                    >
                                        Contact Us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-gray-600 hover:text-primary transition"
                                    >
                                        Premium Support
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="w-full md:w-4/12 xl:w-2/12">
                            <h5 className="text-lg font-bold text-primary mb-2">Resources</h5>
                            <ul className="list-none space-y-1">
                                <li>
                                    <a
                                        href="#"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-gray-600 hover:text-primary transition"
                                    >
                                        Documentation
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-gray-600 hover:text-primary transition"
                                    >
                                        Custom Development
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-gray-600 hover:text-primary transition"
                                    >
                                        Discord
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full md:w-5/12 xl:w-3/12">
                            <h5 className="text-lg font-bold text-primary mb-2">Address</h5>
                            <ul className="list-none space-y-1">
                                <li>
                                    <a
                                        href="#"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-gray-600 hover:text-primary transition"
                                    >
                                        Documentation
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-gray-600 hover:text-primary transition"
                                    >
                                        Custom Development
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-gray-600 hover:text-primary transition"
                                    >
                                        Discord
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <hr className="my-6 border-gray-300" />
                    <div className="text-center text-sm text-gray-600">
                        Copyright © 2025{" "}
                        <a href="/" className="font-bold text-primary">
                            TreadNeeti
                        </a>
                        . Made with ❤️ for a better web.
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
