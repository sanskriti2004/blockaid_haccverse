import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ethers } from 'ethers'
import { Search, Menu, X } from 'lucide-react'
import logo from '../assets/decentrade-logo.png'
import './Navbar.css'

const Navbar = () => {
    const [walletAddress, setWalletAddress] = useState(null)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    // Function to connect MetaMask wallet
    const connectWallet = async () => {
        if (window.ethereum) {
            try {
                const accounts = await window.ethereum.request({
                    method: 'eth_requestAccounts',
                })
                setWalletAddress(accounts[0])
            } catch (error) {
                console.error('User rejected the request:', error)
            }
        } else {
            alert(
                'MetaMask is not installed. Please install it to use this app.'
            )
        }
    }

    // Function to toggle the mobile menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    // Monitor account changes
    useEffect(() => {
        if (window.ethereum) {
            window.ethereum.on('accountsChanged', (accounts) => {
                if (accounts.length > 0) {
                    setWalletAddress(accounts[0])
                } else {
                    setWalletAddress(null)
                }
            })

            window.ethereum.on('chainChanged', () => {
                window.location.reload()
            })
        }
    }, [])

    const navItems = [
        { name: 'Explore', link: '/explore' },
        { name: 'About', link: '/about' },
        { name: 'FAQs', link: '/faqs' },
    ]

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">
                    <img
                        className="logo-img"
                        src={logo}
                        alt="DecenTrade Logo"
                    />
                </Link>
                <Link to="/" className="text-white font-bold text-xl ml-2">
                    {' '}
                    BlockAid
                </Link>
            </div>

            <div className="hamburger-menu">
                <button onClick={toggleMenu} className="hamburger-button">
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Dropdown menu for smaller screens */}
            <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
                <Link
                    to="/"
                    className="navbar-link"
                    onClick={() => setIsMenuOpen(false)}
                >
                    Home
                </Link>
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        to={item.link}
                        className="navbar-link"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        {item.name}
                    </Link>
                ))}

                {/* Move Connect Wallet Button inside the dropdown */}
                <div className="navbar-actions">
                    {walletAddress ? (
                        <button
                            className="connect-wallet-button"
                            style={{ backgroundColor: 'green' }}
                        >
                            Wallet Connected
                        </button>
                    ) : (
                        <button
                            onClick={connectWallet}
                            className="connect-wallet-button"
                        >
                            Connect Wallet
                        </button>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
