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

    const [isSubmitting, setIsSubmitting] = useState(false) // Track form submission state

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // Simulate form submission
        setIsSubmitting(true)

        // Simulate a delay (e.g., API call)
        setTimeout(() => {
            console.log('Form Data Submitted:', formData) // Log form data to the console
            setIsSubmitting(false)

            // Navigate to the "Thank You" page after submission
            navigate('/thank-you')
        }, 2000) // Simulate a 2-second delay
    }

    return (
        <div className="container">
            <h1>Request Disaster Relief Assistance</h1>

            <div className="form-container">
                <h2>Help Us Help You</h2>

                <form onSubmit={handleSubmit}>
                    <FormField
                        label="Full Name"
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                    <FormField
                        label="Email Address"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <FormField
                        label="Phone Number"
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                    />
                    <FormField
                        label="Aadhaar Number"
                        type="text"
                        name="aadhaarNumber"
                        value={formData.aadhaarNumber}
                        onChange={handleChange}
                        pattern="\d{12}"
                        title="12-digit Aadhaar number"
                        required
                    />
                    <FormField
                        label="Wallet Address"
                        type="text"
                        name="walletAddress"
                        value={formData.walletAddress}
                        onChange={handleChange}
                        pattern="^0x[a-fA-F0-9]{40}$"
                        title="Valid Ethereum wallet address"
                        required
                    />

                    <button
                        type="submit"
                        className="submit-button"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit Aid Request'}
                    </button>
                </form>
            </div>

            <div className="how-it-works">
                <h2>How It Works</h2>
                <div className="steps">
                    <Step
                        number={1}
                        title="Submit Request"
                        description="Provide your details and describe your needs."
                    />
                    <Step
                        number={2}
                        title="Verification"
                        description="Our team verifies your identity and situation within 24 hours."
                    />
                    <Step
                        number={3}
                        title="Aid Disbursement"
                        description="Funds are sent directly to your wallet address."
                    />
                </div>
            </div>
        </div>
    )
}

// Reusable FormField Component
const FormField = ({
    label,
    type,
    name,
    value,
    onChange,
    required,
    pattern,
    title,
}) => (
    <div className="form-field">
        <label>{label}</label>
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            pattern={pattern}
            title={title}
        />
    </div>
)

// Reusable Step Component
const Step = ({ number, title, description }) => (
    <div className="step">
        <div className="step-number">{number}</div>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
)

export default RequestAidPage
