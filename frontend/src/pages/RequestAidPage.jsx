import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const RequestAidPage = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        aadhaarNumber: '',
        walletAddress: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // Get existing aid requests from local storage
        const existingRequests =
            JSON.parse(localStorage.getItem('aidRequests')) || []

        // Add the new request
        const newRequest = { ...formData, id: Date.now() } // Add a unique ID
        const updatedRequests = [...existingRequests, newRequest]

        // Save back to local storage
        localStorage.setItem('aidRequests', JSON.stringify(updatedRequests))

        // Navigate to the "Thank You" page
        navigate('/thank-you')
    }

    return (
        <div className="bg-gray-900 min-h-screen p-6 text-white">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-6">
                    Request Disaster Relief Assistance
                </h1>

                <div className="bg-gray-800 rounded-lg p-8 shadow-lg">
                    <h2 className="text-2xl font-semibold mb-6">
                        Help Us Help You
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-300 mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="fullName"
                                    required
                                    className="w-full p-3 bg-gray-700 rounded-lg"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label className="block text-gray-300 mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full p-3 bg-gray-700 rounded-lg"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-300 mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    required
                                    className="w-full p-3 bg-gray-700 rounded-lg"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label className="block text-gray-300 mb-2">
                                    Aadhaar Number
                                </label>
                                <input
                                    type="text"
                                    name="aadhaarNumber"
                                    required
                                    pattern="\d{12}"
                                    title="12-digit Aadhaar number"
                                    className="w-full p-3 bg-gray-700 rounded-lg"
                                    value={formData.aadhaarNumber}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-gray-300 mb-2">
                                Wallet Address
                            </label>
                            <input
                                type="text"
                                name="walletAddress"
                                required
                                pattern="^0x[a-fA-F0-9]{40}$"
                                title="Valid Ethereum wallet address"
                                className="w-full p-3 bg-gray-700 rounded-lg"
                                value={formData.walletAddress}
                                onChange={handleChange}
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg text-lg transition-colors"
                        >
                            Submit Aid Request
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RequestAidPage
