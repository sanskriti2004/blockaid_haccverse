import React, { useState } from 'react'

const Chatbot = () => {
    const [messages, setMessages] = useState([
        {
            user: 'bot',
            text: 'Hello! Welcome to Blockaid. How can I assist you with disaster relief efforts today?',
        },
    ])
    const [input, setInput] = useState('')
    const [isOpen, setIsOpen] = useState(false)

    const handleSendMessage = () => {
        if (input.trim()) {
            const userMessage = { user: 'me', text: input }
            setMessages([...messages, userMessage])
            setInput('')

            setTimeout(() => {
                const botResponse = getBotResponse(input.toLowerCase())
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { user: 'bot', text: botResponse },
                ])
            }, 1000)
        }
    }

    const getBotResponse = (input) => {
        if (input.includes('hi') || input.includes('hello')) {
            return 'Hello! Welcome to Blockaid. How can I assist you with disaster relief efforts today?'
        } else if (input.includes('donate') || input.includes('contribute')) {
            return 'To donate, select a active relief campaign, choose amount, and complete payment. All donations go directly to verified relief organizations. Would you like help with donating?'
        } else if (input.includes('track') || input.includes('funds')) {
            return 'All donations are tracked transparently on blockchain. You can view fund usage in real-time through our public ledger. Need help accessing tracking?'
        } else if (input.includes('emergency') || input.includes('urgent')) {
            return 'For immediate disaster assistance, please contact local authorities. We can help you find verified relief organizations in your area.'
        } else if (input.includes('volunteer') || input.includes('help')) {
            return 'We partner with certified relief organizations. Would you like information about volunteering opportunities?'
        } else if (input.includes('disaster') || input.includes('crisis')) {
            return 'We currently support relief efforts for: Floods, Earthquakes, Wildfires, and Humanitarian Crises. Which would you like to learn about?'
        } else if (input.includes('transparency') || input.includes('trust')) {
            return 'Blockaid uses blockchain to ensure 100% fund traceability. All transactions are publicly verifiable. Want to see our audit process?'
        } else if (input.includes('campaign') || input.includes('active')) {
            return 'Current active campaigns: 1) Kerala Flood Relief 2) Nepal Earthquake 3) African Drought Crisis. Which would you like to support?'
        } else if (input.includes('organization') || input.includes('ngo')) {
            return 'We work with certified NGOs like Red Cross and UNICEF. All partners undergo strict verification. Need specific organization info?'
        } else if (input.includes('receipt') || input.includes('tax')) {
            return 'Donation receipts with tax exemption certificates are issued immediately after payment. Need help accessing yours?'
        } else if (input.includes('impact') || input.includes('effect')) {
            return 'Our platform has delivered $2.3M in aid to 15+ disasters. Want specific impact reports?'
        } else if (
            input.includes('start campaign') ||
            input.includes('fundraiser')
        ) {
            return 'To start a relief campaign, organizations must complete KYC verification. Need help with application?'
        } else if (input.includes('goods') || input.includes('supplies')) {
            return 'We facilitate physical donations through partner logistics networks. Would you like information about drop-off locations?'
        } else if (input.includes('fee') || input.includes('charge')) {
            return 'Blockaid charges 0% platform fee - 100% of donations go to relief. Operational costs are covered separately.'
        } else if (input.includes('history') || input.includes('past')) {
            return 'You can view your donation history in your profile section. Need help accessing it?'
        } else if (input.includes('verify') || input.includes('legit')) {
            return 'All campaigns are verified through: 1) Government partnerships 2) On-ground audits 3) Blockchain tracking. Want verification details?'
        } else if (input.includes('news') || input.includes('update')) {
            return 'Real-time disaster updates are available in our Situation Room. Would you like to view current crisis reports?'
        } else if (input.includes('partner') || input.includes('corporate')) {
            return 'Corporate partners receive impact reports and verification badges. Contact partnerships@blockaid.org for collaboration.'
        } else if (input.includes('security') || input.includes('safe')) {
            return 'We use bank-grade encryption and blockchain verification. Your data and donations are 100% secure.'
        } else if (input.includes('thank') || input.includes('appreciate')) {
            return 'Thank you for supporting disaster relief efforts! Your contribution makes a real difference.'
        } else if (input.includes('goodbye') || input.includes('bye')) {
            return 'Thank you for using Blockaid! Together we can build a more resilient world.'
        } else {
            return 'I specialize in disaster relief support. Ask about donations, campaign verification, or impact tracking!'
        }
    }

    // Rest of the component remains the same
    return (
        <div className="relative">
            {/* Chat Button */}
            <button
                className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg transition-transform transform hover:scale-105 z-50"
                onClick={() => setIsOpen(!isOpen)}
            >
                💬
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div className="fixed bottom-16 right-4 w-80 bg-gray-800 text-white rounded-lg shadow-lg p-4 z-50">
                    <div className="flex flex-col max-h-60 overflow-y-auto">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`my-2 ${msg.user === 'bot' ? 'text-left' : 'text-right'}`}
                            >
                                <p
                                    className={`inline-block p-2 rounded-lg ${msg.user === 'bot' ? 'bg-gray-700' : 'bg-blue-500'}`}
                                >
                                    {msg.text}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="flex mt-2">
                        <input
                            type="text"
                            className="flex-grow p-2 border rounded-l-lg border-gray-600 bg-gray-700 text-white"
                            placeholder="Type your message..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) =>
                                e.key === 'Enter' && handleSendMessage()
                            }
                        />
                        <button
                            className="bg-blue-600 text-white p-2 rounded-r-lg hover:bg-blue-500 transition-colors"
                            onClick={handleSendMessage}
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Chatbot
