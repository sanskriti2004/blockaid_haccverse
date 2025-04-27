import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ethers } from 'ethers'

const DonateForm = () => {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        donorName: '',
        donationAmount: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!window.ethereum) {
            alert('MetaMask is not installed!')
            return
        }

        try {
            const accounts = await window.ethereum.request({
                method: 'eth_requestAccounts',
            })
            const sender = accounts[0]

            const amountInEth = parseFloat(formData.donationAmount)
            if (isNaN(amountInEth) || amountInEth <= 0) {
                alert('Please enter a valid donation amount.')
                return
            }

            const amountInWei = BigInt(Math.floor(amountInEth * 1e18)).toString(
                16
            ) // ETH to Wei in hex

            const tx = {
                from: sender,
                to: '0xfb5Cf9e91c3334CFbCA50491aBbDb5fBA652e80e', // <-- Replace this
                value: '0x' + amountInWei,
            }

            const txHash = await window.ethereum.request({
                method: 'eth_sendTransaction',
                params: [tx],
            })

            console.log('Transaction sent! Hash:', txHash)

            // Reset the form
            setFormData({
                donorName: '',
                donationAmount: '',
            })

            // Navigate to thank you page
            navigate('/thank-you-req')
        } catch (error) {
            console.error('Transaction failed:', error)
            alert('Transaction failed: ' + (error.message || 'Unknown error'))
        }
    }

    return (
        <div className="bg-gray-900 min-h-screen flex items-center justify-center p-6">
            <div className="max-w-md w-full bg-gray-800 rounded-lg p-8 shadow-lg">
                <h1 className="text-3xl font-bold text-white mb-6 text-center">
                    Donate Ethereum
                </h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label
                            className="block text-gray-300 mb-2"
                            htmlFor="donorName"
                        >
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="donorName"
                            name="donorName"
                            required
                            className="w-full p-3 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={formData.donorName}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label
                            className="block text-gray-300 mb-2"
                            htmlFor="donationAmount"
                        >
                            Donation Amount (ETH)
                        </label>
                        <input
                            type="number"
                            id="donationAmount"
                            name="donationAmount"
                            required
                            min="0.000001"
                            step="0.000001"
                            className="w-full p-3 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={formData.donationAmount}
                            onChange={handleChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-lg transition-colors"
                    >
                        Donate
                    </button>
                </form>
            </div>
        </div>
    )
}

export default DonateForm
