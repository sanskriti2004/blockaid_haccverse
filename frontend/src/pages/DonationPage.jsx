import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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

        // Check if wallet is connected
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: 'eth_accounts',
            })
            if (!accounts || accounts.length === 0) {
                alert('Please connect your wallet before donating!')
                return
            }
        } else {
            alert('MetaMask is not installed. Please install it to donate!')
            return
        }

        // Wallet is connected, proceed
        console.log('Donation Details:', formData)

        // Reset the form
        setFormData({
            donorName: '',
            donationAmount: '',
        })

        // Redirect to the thank-you page
        navigate('/thank-you-req')
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
                            min="0.01"
                            step="0.01"
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
