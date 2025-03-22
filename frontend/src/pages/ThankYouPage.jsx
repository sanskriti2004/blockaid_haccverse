// src/pages/ThankYouPage.js

import { useLocation } from 'react-router-dom'

const ThankYouPage = () => {
    const location = useLocation()
    const { donorName, campaignTitle } = location.state || {}

    return (
        <div className="thank-you-page">
            <h2>Thank You, {donorName}!</h2>
            <p>Your donation to {campaignTitle} is greatly appreciated.</p>
        </div>
    )
}

export default ThankYouPage
