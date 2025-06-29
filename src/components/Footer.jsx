import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import coffee from "../assets/images/icons/1.png";

const Footer = () => {
    return (
        <footer className="bg-[#F4F3F0] text-[#331A15] py-10 px-6 md:px-20">
            <div className="grid md:grid-cols-2 gap-10">
                {/* Left Section */}
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <img src={coffee} alt="Coffee Logo" className="w-10 h-10" />
                        <h2 className="text-xl md:text-2xl font-bold">Espresso Emporium</h2>
                    </div>
                    <p className="mb-4">
                        Always ready to be your friend. Come & Contact with us to share your memorable moments, 
                        to share with your best companion.
                    </p>
                    <div className="flex gap-4 text-2xl">
                        <FaFacebookF className="hover:text-brown-600 cursor-pointer" />
                        <FaTwitter className="hover:text-brown-600 cursor-pointer" />
                        <FaInstagram className="hover:text-brown-600 cursor-pointer" />
                        <FaLinkedinIn className="hover:text-brown-600 cursor-pointer" />
                    </div>

                    <div className="mt-8">
                        <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                        <p className="flex items-center gap-2 mb-2"><FaPhoneAlt /> +88 01533 333 333</p>
                        <p className="flex items-center gap-2 mb-2"><FaEnvelope /> info@gmail.com</p>
                        <p className="flex items-center gap-2"><FaMapMarkerAlt /> 72, Wall street, King Road, Dhaka</p>
                    </div>
                </div>

                {/* Right Section */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Connect with Us</h3>
                    <form className="flex flex-col gap-4">
                        <input type="text" placeholder="Name" className="p-2 border border-gray-300 rounded" />
                        <input type="email" placeholder="Email" className="p-2 border border-gray-300 rounded" />
                        <textarea placeholder="Message" rows="4" className="p-2 border border-gray-300 rounded"></textarea>
                        <button type="submit" className="bg-[#331A15] text-white px-4 py-2 rounded w-max hover:bg-[#4b2e1d]">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
