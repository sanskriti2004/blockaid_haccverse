import { useLocation, Link } from 'react-router-dom'

const ThankYouPage = () => {
    const location = useLocation()
    const { donorName, campaignTitle } = location.state || {}

    return (
        <div className="bg-gray-900 min-h-screen flex items-center justify-center p-6">
            <div className="max-w-md w-full bg-gray-800 rounded-lg p-8 shadow-lg text-center">
                <h2 className="text-3xl font-bold text-white mb-6">
                    Your request to
                    <span className="text-blue-400 font-semibold ml-2">
                        {campaignTitle || 'the campaign was a success.'}
                    </span>
                </h2>

                <div className="space-y-4">
                    <p className="text-gray-400 mt-6">
                        A confirmation email will be sent to your inbox shortly
                    </p>

                    <div className="mt-8">
                        <Link
                            to="/"
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
                        >
                            Return Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThankYouPage
