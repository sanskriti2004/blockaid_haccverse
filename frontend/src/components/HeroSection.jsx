import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { Link } from 'react-router-dom'

const HeroSection = () => {
    const canvasRef = useRef(null)

    useEffect(() => {
        // const renderer = new THREE.WebGLRenderer({
        //     canvas: canvasRef.current,
        //     alpha: true,
        // })
        // renderer.setSize(window.innerWidth, window.innerHeight)
        // const animate = () => {
        //     requestAnimationFrame(animate)
        //     renderer.render(scene, camera)
        // }
        // animate()
        // return () => {
        //     renderer.dispose()
        // }
    }, [])

    return (
        <div className="relative h-screen flex items-center justify-center overflow-hidden">
            <canvas ref={canvasRef} className="absolute inset-0 z-0" />
            <div className="relative z-10 text-center">
                <h1 className="text-6xl font-bold mb-4 text-white">
                    Accessible Aid, Anywhere, Anytime
                </h1>
                <p className="text-xl mb-2 text-gray-300">
                    Securing Recovery, One Claim at a Time.
                </p>
                <p className="text-xl font-bold mb-6 text-gray-300">
                    #DeRiskWithBlockAid
                </p>
                <a
                    // href="/about"
                    className="bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-full px-8 py-3 text-lg hover:opacity-90 transition-opacity"
                >
                    <Link to="/about">Learn More</Link>
                </a>
            </div>
        </div>
    )
}

export default HeroSection
