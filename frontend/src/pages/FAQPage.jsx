import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import FAQImage from '../assets/faq-image.png'
import '../styles/faq.css'

const FAQPage = () => {
    const faqData = [
        {
            question: 'What is BlockAid and how does it work?',
            answer: 'BlockAid is a decentralized disaster relief platform that provides instant financial and medical assistance using blockchain, crowdfunding, and government grants.',
        },
        {
            question: 'How does BlockAid ensure fast relief during disasters?',
            answer: 'Through smart contracts and verified KYC, BlockAid instantly disburses funds from donations and grants to those in need, eliminating delays caused by traditional systems.',
        },
        {
            question: 'Is BlockAid secure and transparent?',
            answer: 'Yes, all transactions are recorded on the blockchain, ensuring immutability, transparency, and fraud prevention in fund distribution.',
        },
        {
            question: 'How can I request aid through BlockAid?',
            answer: 'Simply register, complete KYC verification, and submit your request. Once verified, funds are allocated based on urgency and availability.',
        },
        {
            question: 'Can I donate to help disaster victims?',
            answer: 'Yes! You can donate securely via crypto or fiat, and funds will be distributed fairly using smart contracts to ensure transparency.',
        },
        {
            question: 'Does BlockAid support medical emergencies?',
            answer: 'Absolutely! BlockAid prioritizes medical aid, ensuring that victims receive immediate funds for hospitalization, treatment, and medicines.',
        },
        {
            question:
                'What makes BlockAid different from traditional insurance?',
            answer: 'Unlike traditional insurance, BlockAid provides *instant relief* without prolonged claim processing, leveraging blockchain for efficiency and trust.',
        },
        {
            question: 'How do I connect my wallet to donate or receive funds?',
            answer: 'Click the "Connect Wallet" button on the platform and link your preferred Web3 wallet, such as MetaMask.',
        },
        {
            question: 'Are there any fees for using BlockAid?',
            answer: 'There may be minimal gas fees for blockchain transactions, which are transparently displayed before processing.',
        },
        {
            question: 'What should I do if my aid request is not approved?',
            answer: 'If your request is denied, you can review the reasons and reapply with the necessary corrections. Our support team is always available to assist.',
        },
    ]

    const [activeIndex, setActiveIndex] = useState(null)
    const cardColors = [
        'bg-blue-900',
        'bg-blue-700',
        'bg-blue-500',
        'bg-blue-300',
    ]

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    const [posts, setPosts] = useState([
        {
            id: 1,
            title: 'Welcome to the forum!',
            content: 'Feel free to ask questions and share your thoughts.',
        },
    ])
    const [newPost, setNewPost] = useState({ title: '', content: '' })
    const [expandedPosts, setExpandedPosts] = useState([])
    const [sortAsc, setSortAsc] = useState(true)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (newPost.title && newPost.content) {
            setPosts([{ id: posts.length + 1, ...newPost }, ...posts])
            setNewPost({ title: '', content: '' })
        }
    }

    const toggleExpand = (id) => {
        setExpandedPosts(
            expandedPosts.includes(id)
                ? expandedPosts.filter((postId) => postId !== id)
                : [...expandedPosts, id]
        )
    }

    const handleSort = () => {
        const sortedPosts = [...posts].sort((a, b) =>
            sortAsc
                ? a.title.localeCompare(b.title)
                : b.title.localeCompare(a.title)
        )
        setPosts(sortedPosts)
        setSortAsc(!sortAsc)
    }

    // Page load animation effect
    const [isLoaded, setIsLoaded] = useState(false)
    useEffect(() => {
        setIsLoaded(true)
    }, [])

    return (
        <>
            <div
                className={`min-h-screen p-8 bg-gray-50 dark:bg-slate-900 transition-opacity duration-1000 ${
                    isLoaded ? 'opacity-100' : 'opacity-0'
                }`}
            >
                <div className="mx-auto flex flex-col lg:flex-row">
                    <div className="lg:w-3/6 pr-8">
                        <div className="text-center lg:text-left pt-6">
                            <h1 className="text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text text-center">
                                FAQs
                            </h1>
                            <div className="mt-2 mx-auto lg:mx-0 w-54 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded"></div>
                        </div>

                        <section className="mb-16 mt-8">
                            <h2 className="text-3xl font-semibold text-indigo-600 mb-8">
                                Frequently Asked Questions
                            </h2>
                            <div className="space-y-4">
                                {faqData.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`transition-all duration-500 ease-in-out rounded-lg shadow-md ${cardColors[index % cardColors.length]} ${
                                            isLoaded
                                                ? 'opacity-100'
                                                : 'opacity-0'
                                        }`}
                                    >
                                        <button
                                            className="w-full text-left p-4 text-white rounded-lg focus:outline-none"
                                            onClick={() => toggleFAQ(index)}
                                        >
                                            <div className="flex justify-between items-center">
                                                <span className="text-base font-semibold">
                                                    {item.question}
                                                </span>
                                                <span
                                                    className={`text-2xl transition-transform duration-300 transform ${activeIndex === index ? 'rotate-180' : ''}`}
                                                >
                                                    +
                                                </span>
                                            </div>
                                        </button>
                                        <div
                                            className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                                activeIndex === index
                                                    ? 'max-h-48'
                                                    : 'max-h-0'
                                            }`}
                                        >
                                            <div className="p-4 bg-white rounded-lg mt-2 shadow-inner text-gray-600 border-l-4 border-indigo-600">
                                                {item.answer}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                    <div className="lg:w-3/6 mt-8 lg:mt-0">
                        <img
                            src={FAQImage}
                            alt="FAQ illustration"
                            className="faq-image mx-auto lg:mx-0"
                        />
                    </div>
                </div>
                <section>
                    <h2 className="text-4xl font-semibold text-indigo-600 mb-8 text-center">
                        Forum
                    </h2>

                    <form className="mb-12" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 gap-4">
                            <input
                                type="text"
                                className="p-4 w-full border border-indigo-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 transition duration-300"
                                placeholder="Post title"
                                value={newPost.title}
                                onChange={(e) =>
                                    setNewPost({
                                        ...newPost,
                                        title: e.target.value,
                                    })
                                }
                                required
                            />
                            <textarea
                                className="p-4 w-full h-32 border border-indigo-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 transition duration-300"
                                placeholder="Post content"
                                value={newPost.content}
                                onChange={(e) =>
                                    setNewPost({
                                        ...newPost,
                                        content: e.target.value,
                                    })
                                }
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="mt-4 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 ease-in-out"
                        >
                            Submit Post
                        </button>
                    </form>
                    <section>
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-4xl font-semibold text-indigo-600">
                                All Posts
                            </h2>
                            <button
                                className="px-4 py-2 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-600 transition duration-300"
                                onClick={handleSort}
                            >
                                Sort
                            </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map((post, index) => (
                                <div
                                    key={post.id}
                                    className={`relative w-full perspective transition-transform duration-300 hover:scale-105`}
                                >
                                    <div className="relative w-full h-64 transform-style-3d transition-transform duration-500 ease-in-out">
                                        <div className="absolute inset-0 p-4 bg-indigo-300 border border-indigo-500 rounded-lg">
                                            <h3 className="text-xl font-semibold text-indigo-700 mb-4">
                                                {post.title}
                                            </h3>
                                            <p
                                                className={`text-white ${expandedPosts.includes(post.id) ? 'line-clamp-none' : 'line-clamp-3'}`}
                                            >
                                                {post.content}
                                            </p>
                                        </div>
                                        <button
                                            className="absolute bottom-2 right-2 text-sm font-semibold text-indigo-700 underline focus:outline-none"
                                            onClick={() =>
                                                toggleExpand(post.id)
                                            }
                                        >
                                            {expandedPosts.includes(post.id)
                                                ? 'Collapse'
                                                : 'Read More'}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </section>
            </div>
        </>
    )
}

export default FAQPage
