import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, Menu, X } from 'lucide-react'
import logo from '../assets/decentrade-logo.png'
import './Navbar.css'
import { connectWallet, mintNFT } from '../utils/ethereum'

const Navbar = ({ wallet, setWallet }) => {
    const [tokenURI, setTokenURI] = useState('')
    const [showMintOption, setShowMintOption] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const connect = async () => {
        const signer = await connectWallet()
        setWallet(signer)
        setShowMintOption(true)
    }

    const handleMint = async () => {
        if (wallet && tokenURI) {
            try {
                await mintNFT(wallet, tokenURI)
                alert('NFT minted successfully!')
                setTokenURI('')
            } catch (error) {
                console.error('Error minting NFT:', error)
                alert('Failed to mint NFT. Please try again.')
            }
        } else {
            alert('Please enter a token URI.')
        }
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const navItems = [
        { name: 'Home', link: '/' },
        { name: 'Explore', link: '/explore' },
        { name: 'About', link: '/about' },
        { name: 'FAQs', link: '/faqs' },
    ]

    return (
        <nav className={`navbar`}>
            <div className="navbar-logo">
                <Link to="/">
                    <img
                        className="logo-img"
                        src={logo}
                        alt="DecenTrade Logo"
                    />
                </Link>
                <Link to="/">BlockAid</Link>
            </div>

            <div className="hamburger-menu">
                <button onClick={toggleMenu} className="hamburger-button">
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{' '}
                    {/* Conditional icon rendering */}
                </button>
            </div>

            <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
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
            </div>

            <div className="navbar-actions">
                {wallet ? (
                    <button
                        className="connect-wallet-button"
                        style={{ backgroundColor: 'green' }}
                    >
                        Wallet Connected
                    </button>
                ) : (
                    <button onClick={connect} className="connect-wallet-button">
                        Connect Wallet
                    </button>
                )}
            </div>
        </nav>
    )
}

export default Navbar
