import React from 'react'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

// Sample feature data with unique IDs
const features = [
    {
        id: 'feature1',
        title: '🤖 Smart Contract-Powered Donations',
        description:
            'Seamlessly contribute to disaster relief campaigns with the security of smart contracts, ensuring transparent and trustless transactions.',
    },
    {
        id: 'feature2',
        title: '🖥️ User-Friendly Interface',
        description:
            'Enjoy an intuitive design for effortless browsing and interaction with active relief campaigns.',
    },
    {
        id: 'feature3',
        title: '🔒 Secure Wallet Integration',
        description:
            'Easily connect your wallet for safe and secure donations, ensuring your contributions are protected and traceable.',
    },
    {
        id: 'feature4',
        title: '🌟 Decentralized Impact Tracking',
        description:
            'Track your donations in real-time through blockchain-powered transparency, fostering trust in every contribution.',
    },
    {
        id: 'feature5',
        title: '🎯 Support for Verified Relief Efforts',
        description:
            'Donate to a wide range of verified disaster relief campaigns, including floods, earthquakes, wildfires, and humanitarian crises.',
    },
]

const additionalFeatures = [
    {
        id: 'additional1',
        title: '🌍 Global Accessibility',
        description:
            'Contribute to disaster relief efforts worldwide, breaking geographical barriers to make a global impact.',
    },
    {
        id: 'additional2',
        title: '🔗 Transparency',
        description:
            'All donations and fund allocations are recorded on the blockchain, ensuring complete transparency and trust.',
    },
    {
        id: 'additional3',
        title: '⚡ Quick Funds',
        description:
            'Emergency funds are deployed quickly to disaster zones without the delays of traditional systems.',
    },
    {
        id: 'additional4',
        title: '🔄 Progressive ',
        description:
            'Our platform evolves based on user feedback and advancements in blockchain technology to better serve disaster relief efforts.',
    },
    {
        id: 'additional5',
        title: '💡 Edu Resources',
        description:
            'Access guides and tutorials to understand how your contributions make a difference in disaster relief.',
    },
    {
        id: 'additional6',
        title: '🔒 Enhanced Security',
        description:
            'Your donations and data are protected with top-tier blockchain security protocols.',
    },
    {
        id: 'additional7',
        title: '📈 Impact Analytics',
        description:
            'Track the impact of your donations in real-time with our comprehensive analytics dashboard.',
    },
    {
        id: 'additional8',
        title: '🎉 Regular Updates',
        description:
            'Stay informed with regular updates about new campaigns, fund usage, and platform enhancements.',
    },
    {
        id: 'additional9',
        title: '👩‍💻 24/7 Support',
        description:
            'Get assistance whenever you need it with our dedicated support team, available around the clock.',
    },
]

const AboutPage = () => {
    return (
        <>
            <section className="min-h-screen w-full bg-gradient-to-b from-[#252550] to-[#1A1A1A] text-white flex flex-col justify-center items-center p-6 overflow-hidden">
                <div className="p-10 rounded-lg shadow-lg max-w-6xl mx-auto mt-12 w-full sm:w-11/12">
                    <motion.h1
                        className="text-4xl sm:text-6xl font-bold mb-6 animate-pulse text-center"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Welcome to BlockAid
                    </motion.h1>

                    <motion.p
                        className="text-lg sm:text-xl mb-8 max-w-4xl text-center font-medium leading-relaxed mx-auto"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                    >
                        BlockAid is a decentralized crowdfunding platform built
                        on the Ethereum blockchain, empowering users to securely
                        and transparently donate to disaster relief efforts,
                        ensuring every contribution directly impacts those in
                        need.
                    </motion.p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {features.map((feature) => (
                            <motion.div
                                key={feature.id} // Use unique ID as key
                                className="bg-gradient-to-r from-[#47B7FF] to-[#CA35FF] p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-100 glassmorphism flex flex-col justify-between h-full"
                                whileHover={{ scale: 1.05 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <h3 className="text-2xl font-bold mb-2">
                                    {feature.icon} {feature.title}
                                </h3>
                                <p className="flex-grow">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="max-w-4xl mx-auto text-center mt-12">
                    <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
                    <motion.p
                        className="text-lg mb-4 leading-relaxed"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5 }}
                    >
                        At Blockaid, we envision a world where disaster relief
                        is transparent and accessible, enabling everyone to
                        contribute to rebuilding lives and communities in times
                        of crisis. Our mission is to create a secure,
                        decentralized, and user-friendly platform for
                        crowdfunding disaster relief efforts, empowering donors
                        to make a direct and meaningful impact while ensuring
                        complete transparency through blockchain technology.
                    </motion.p>
                </div>

                <div className="max-w-5xl mx-auto mt-12">
                    <h2 className="text-4xl font-bold mb-6 text-center">
                        Why Choose Us?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {additionalFeatures.map((item) => (
                            <motion.div
                                key={item.id} // Use unique ID as key
                                className="bg-gradient-to-r from-[#9F10B2] to-[#541C82] p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-100 glassmorphism"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.2 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <h3 className="text-2xl font-bold mb-2">
                                    {item.title}
                                </h3>
                                <p>{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutPage
