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
        const prompts = [
            {
                keywords: ['hi', 'hello'],
                response:
                    'Hello! Welcome to Blockaid. How can I assist you with disaster relief efforts today?',
            },
            {
                keywords: ['donate', 'contribute'],
                response:
                    'To donate, select an active relief campaign, choose an amount, and complete the payment. All donations go directly to verified relief organizations. Would you like help with donating?',
            },
            {
                keywords: ['track', 'funds'],
                response:
                    'All donations are tracked transparently on the blockchain. You can view fund usage in real-time through our public ledger. Need help accessing tracking?',
            },
            {
                keywords: ['emergency', 'urgent'],
                response:
                    'For immediate disaster assistance, please contact local authorities. We can help you find verified relief organizations in your area.',
            },
            {
                keywords: ['volunteer', 'help'],
                response:
                    'We partner with certified relief organizations. Would you like information about volunteering opportunities?',
            },
            {
                keywords: ['disaster', 'crisis'],
                response:
                    'We currently support relief efforts for: Floods, Earthquakes, Wildfires, and Humanitarian Crises. Which would you like to learn about?',
            },
            {
                keywords: ['transparency', 'trust'],
                response:
                    'Blockaid uses blockchain to ensure 100% fund traceability. All transactions are publicly verifiable. Want to see our audit process?',
            },
            {
                keywords: ['campaign', 'active'],
                response:
                    'Current active campaigns: 1) Kerala Flood Relief 2) Nepal Earthquake 3) African Drought Crisis. Which would you like to support?',
            },
            {
                keywords: ['organization', 'ngo'],
                response:
                    'We work with certified NGOs like Red Cross and UNICEF. All partners undergo strict verification. Need specific organization info?',
            },
            {
                keywords: ['receipt', 'tax'],
                response:
                    'Donation receipts with tax exemption certificates are issued immediately after payment. Need help accessing yours?',
            },
            {
                keywords: ['impact', 'effect'],
                response:
                    'Our platform has delivered $2.3M in aid to 15+ disasters. Want specific impact reports?',
            },
            {
                keywords: ['start campaign', 'fundraiser'],
                response:
                    'To start a relief campaign, organizations must complete KYC verification. Need help with the application?',
            },
            {
                keywords: ['goods', 'supplies'],
                response:
                    'We facilitate physical donations through partner logistics networks. Would you like information about drop-off locations?',
            },
            {
                keywords: ['fee', 'charge'],
                response:
                    'Blockaid charges 0% platform fee - 100% of donations go to relief. Operational costs are covered separately.',
            },
            {
                keywords: ['history', 'past'],
                response:
                    'You can view your donation history in your profile section. Need help accessing it?',
            },
            {
                keywords: ['verify', 'legit'],
                response:
                    'All campaigns are verified through: 1) Government partnerships 2) On-ground audits 3) Blockchain tracking. Want verification details?',
            },
            {
                keywords: ['news', 'update'],
                response:
                    'Real-time disaster updates are available in our Situation Room. Would you like to view current crisis reports?',
            },
            {
                keywords: ['partner', 'corporate'],
                response:
                    'Corporate partners receive impact reports and verification badges. Contact partnerships@blockaid.org for collaboration.',
            },
            {
                keywords: ['security', 'safe'],
                response:
                    'We use bank-grade encryption and blockchain verification. Your data and donations are 100% secure.',
            },
            {
                keywords: ['thank', 'appreciate'],
                response:
                    'Thank you for supporting disaster relief efforts! Your contribution makes a real difference.',
            },
            {
                keywords: ['goodbye', 'bye'],
                response:
                    'Thank you for using Blockaid! Together we can build a more resilient world.',
            },
        ]

        for (const prompt of prompts) {
            if (prompt.keywords.some((keyword) => input.includes(keyword))) {
                return prompt.response
            }
        }

        return 'I specialize in disaster relief support. Ask about donations, campaign verification, or impact tracking!'
    }

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
