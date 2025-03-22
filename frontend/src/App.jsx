import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import HomePage from './pages/HomePage'
import ExplorePage from './pages/ExplorePage'
import AboutPage from './pages/AboutPage'
import FAQPage from './pages/FAQPage'
import RequestAidPage from './pages/RequestAidPage'
import ThankYouPageReq from './pages/ThankYouPageReq'
import ThankYouPageReq2 from './pages/ThankYouPageReq2'
import DonationPage from './pages/DonationPage'
import Navbar from './components/Navbar'
import NotFoundPage from './components/NotFoundPage'
import Footer from './components/Footer'
import MyChatbot from './Chatbot'
import GTranslateLoader from './components/GTranslateLoader'
import ScrollToTop from './components/ScrollToTop'

function App() {
    const [wallet, setWallet] = useState(null)

    useEffect(() => {
        console.log(wallet)
    }, [wallet])

    return (
        <BrowserRouter>
            <div className="min-h-screen">
                {/* Render CustomCursor */}

                <Navbar wallet={wallet} setWallet={setWallet} />
                <main className="flex-grow">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <HomePage
                                    wallet={wallet}
                                    setWallet={setWallet}
                                />
                            }
                        />
                        <Route path="/marketplace" />
                        <Route path="/create" />
                        <Route path="/explore" element={<ExplorePage />} />
                        <Route
                            path="/donate/:campaignId"
                            element={<DonationPage />}
                        />

                        <Route
                            path="/thank-you-req"
                            element={<ThankYouPageReq />}
                        />
                        <Route
                            path="/thank-you-req-2"
                            element={<ThankYouPageReq2 />}
                        />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/faqs" element={<FAQPage />} />
                        <Route
                            path="/donate/:campaignId"
                            element={<DonationPage />}
                        />
                        <Route
                            path="/request-aid"
                            element={<RequestAidPage />}
                        />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </main>

                {/* Chatbot and Footer Components */}
                <MyChatbot />
                <Footer />
                <ScrollToTop />
            </div>
            <GTranslateLoader />
        </BrowserRouter>
    )
}

export default App
