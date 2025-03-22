// DONE
// src/components/Footer.jsx
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faTwitter,
    faFacebook,
    faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import logo from '../assets/decentrade-logo.png'
import Chatbot from '../Chatbot' // Import the Chatbot component

const Footer = () => {
    const waveRef = useRef(null)
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY
            if (waveRef.current) {
                waveRef.current.style.transform = `translate3d(0, ${scrollPosition * 0.1}px, 0)`
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <footer className="bg-gray-900 px-5 text-white relative pt-20 pb-10">
            <div className="absolute top-0 left-0 w-full overflow-hidden">
                <svg
                    ref={waveRef}
                    className="w-full h-20"
                    viewBox="0 0 1440 100"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill="#4B0082"
                        fillOpacity="0.5"
                        d="M0,32L60,37.3C120,43,240,53,360,58.7C480,64,600,64,720,58.7C840,53,960,43,1080,42.7C1200,43,1320,53,1380,58.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
                    />
                </svg>
            </div>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">BlockAid</h3>
                        <p className="text-gray-400">
                            Donate, track, and make a difference with
                            transparent disaster relief efforts.
                        </p>
                        <span>
                            <img
                                style={{ width: '7.5rem' }}
                                className="logo-img mx-12 my-10"
                                src={logo}
                                alt={logo}
                            />
                        </span>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">
                            Quick Links
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <a className="text-gray-400 hover:text-white transition-colors">
                                    <Link to="/"> Home</Link>
                                </a>
                            </li>
                            <li>
                                <a className="text-gray-400 hover:text-white transition-colors">
                                    <Link to="/explore">Explore</Link>
                                </a>
                            </li>
                            <li>
                                <a className="text-gray-400 hover:text-white transition-colors">
                                    <Link to="/about">About</Link>
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/about"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    <Link to="/about">How it Works</Link>
                                </a>
                            </li>
                            <li>
                                <a className="text-gray-400 hover:text-white transition-colors">
                                    <Link to="/faqs">FAQ</Link>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">
                            Community
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    Help Center
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    Partners
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    Suggestions
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    Newsletter
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-10 pt-8 border-t border-gray-800 flex flex-col items-center">
                    <p className="text-gray-400">
                        &copy; 2025 BlockAid. All rights reserved.
                    </p>
                    <div className="flex space-x-4 mt-2">
                        <a
                            href="#"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a
                            href="#"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a
                            href="#"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                </div>
            </div>
            <Chatbot /> {/* Add the Chatbot component here */}
        </footer>
    )
}

export default Footer
