import React from 'react'
import { ArrowRight, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
const Badge = ({ text }) => (
    <span className="bg-purple-600 text-xs font-semibold text-white px-2 py-1 rounded-full">
        {text}
    </span>
)

const InfoCard = ({ title, description, buttonText, badge, link }) => (
    <div className="bg-gray-800 rounded-lg p-6 text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-gray-700">
        <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-semibold">{title}</h3>
            {badge && <Badge text={badge} />}
        </div>
        <p className="text-gray-400 mb-6">{description}</p>
        <button className="bg-purple-500 text-white rounded-full px-4 py-2 hover:bg-purple-600 transition-colors flex items-center gap-2 group">
            <Link to={link}>{buttonText}</Link>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
    </div>
)

const InfoCards = () => {
    const cards = [
        {
            title: 'Active Relief Campaigns',
            description:
                'Discover and support real-time disaster relief efforts, from emergency response to community rebuilding initiatives.',
            buttonText: 'View Campaigns',
            badge: 'Urgent',
            link: '/explore',
        },
        {
            title: 'Verified Relief Organizations',
            description:
                'Connect with trusted NGOs and partners actively delivering aid in disaster zones worldwide.',
            buttonText: 'For any Questions',
            badge: 'Verified',
            link: '/faqs',
        },
        {
            title: 'Transparent Process',
            description:
                'Understand how donations are tracked via blockchain and disbursed using smart contracts for full transparency.',
            buttonText: 'See How It Works',
            badge: 'Blockchain',
            link: '/about',
        },
    ]

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pb-12">
            {cards.map((card, index) => (
                <InfoCard key={index} {...card} />
            ))}
        </div>
    )
}

export default InfoCards
