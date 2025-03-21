import React from 'react'
import { useNavigate } from 'react-router-dom'

const ExplorePage = () => {
    const navigate = useNavigate()

    const campaigns = [
        {
            title: 'Assam Flood Relief',
            type: 'Flood',
            location: 'Assam, India',
            description:
                'Emergency response for 5 lakh displaced by Brahmaputra floods. Joint NDMA and community initiative.',
            communityRaised: 85000000,
            governmentGrant: 100000000,
            totalNeeded: 200000000,
            status: 'critical',
            ndmaVerified: true,
            grantDetails: 'National Disaster Relief Fund (NDRF)',
        },
        {
            title: 'Himachal Landslide Relief',
            type: 'Landslide',
            location: 'Himachal Pradesh',
            description:
                'Rescue operations for 50 buried villages. Focus on road connectivity and temporary shelters.',
            communityRaised: 15000000,
            governmentGrant: 50000000,
            totalNeeded: 100000000,
            status: 'high',
            ndmaVerified: true,
            grantDetails: 'State Disaster Response Fund (SDRF)',
        },
        {
            title: 'Kerala Flood Response',
            type: 'Flood',
            location: 'Kerala',
            description:
                'Rebuilding 10,000 homes destroyed in monsoon floods. CMDRF supported initiative.',
            communityRaised: 75000000,
            governmentGrant: 125000000,
            totalNeeded: 250000000,
            status: 'active',
            ndmaVerified: true,
            grantDetails: "Kerala Chief Minister's Distress Relief Fund",
        },
        {
            title: 'Delhi Heatwave Response',
            type: 'Climate Emergency',
            location: 'Delhi NCR',
            description:
                'Cooling centers and medical support during 49°C temperatures affecting 2 million people.',
            communityRaised: 3000000,
            governmentGrant: 20000000,
            totalNeeded: 50000000,
            status: 'emergency',
            ndmaVerified: true,
            grantDetails: 'National Health Mission Funds',
        },
        {
            title: 'Odisha Cyclone Relief',
            type: 'Cyclone',
            location: 'Odisha Coast',
            description:
                'Rehabilitation after Cyclone Yaas affected 1.2 million people. Focus on fishing communities.',
            communityRaised: 25000000,
            governmentGrant: 75000000,
            totalNeeded: 150000000,
            status: 'active',
            ndmaVerified: true,
            grantDetails: 'Odisha Disaster Mitigation Authority',
        },
    ]

    const statusStyles = {
        critical: 'bg-red-600',
        high: 'bg-orange-500',
        active: 'bg-yellow-500',
        emergency: 'bg-purple-600',
    }

    const formatINR = (amount) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0,
        }).format(amount)
    }

    const handleUserType = (userType) => {
        navigate('/auth', { state: { userType } })
    }

    const handleDonate = async (campaignId) => {
        try {
            const campaign = campaigns[campaignId]
            navigate(`/donate/${campaignId}`, {
                state: {
                    campaignTitle: campaign.title,
                    campaignWallet: '0xBlockAidReliefFund', // Replace with actual wallet
                },
            })
        } catch (error) {
            console.error('Donation error:', error)
            alert('Donation process failed to initialize')
        }
    }

    return (
        <div className="bg-gray-900 min-h-screen p-6">
            <div className="text-center mb-12 px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    India Disaster Response Hub
                </h1>
                <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                    Government-verified relief campaigns accepting community
                    contributions. Every rupee is blockchain-tracked for
                    complete transparency.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                {campaigns.map((campaign, index) => {
                    const totalFunding =
                        campaign.communityRaised + campaign.governmentGrant
                    const fundingPercentage = (
                        (totalFunding / campaign.totalNeeded) *
                        100
                    ).toFixed(1)
                    const remainingNeed = campaign.totalNeeded - totalFunding

                    return (
                        <div
                            key={index}
                            className="bg-gray-800 rounded-lg p-6 text-white shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-semibold">
                                    {campaign.title}
                                </h3>
                                <div className="flex items-center gap-2">
                                    <span
                                        className={`${statusStyles[campaign.status]} text-xs font-semibold px-2 py-1 rounded-full`}
                                    >
                                        {campaign.status.toUpperCase()}
                                    </span>
                                    {campaign.ndmaVerified && (
                                        <span className="text-green-400">
                                            ✅
                                        </span>
                                    )}
                                </div>
                            </div>

                            <div className="mb-4">
                                <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                                    <span>🌍</span>
                                    <span>{campaign.location}</span>
                                </div>

                                <div className="w-full bg-gray-700 rounded-full h-3 mb-2">
                                    <div
                                        className="h-3 rounded-full flex overflow-hidden"
                                        style={{
                                            width: `${fundingPercentage}%`,
                                        }}
                                    >
                                        <div className="bg-blue-500 w-1/2"></div>
                                        <div className="bg-green-500 w-1/2"></div>
                                    </div>
                                </div>

                                <div className="flex justify-between text-sm mb-2">
                                    <span>Total Funding</span>
                                    <span>
                                        {formatINR(totalFunding)} /{' '}
                                        {formatINR(campaign.totalNeeded)}
                                    </span>
                                </div>

                                <div className="flex justify-between text-xs text-gray-400">
                                    <div className="flex items-center gap-1">
                                        <span>❤️</span>
                                        <span>
                                            Community:{' '}
                                            {formatINR(
                                                campaign.communityRaised
                                            )}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span>🏛️</span>
                                        <span>
                                            Govt. Grants:{' '}
                                            {formatINR(
                                                campaign.governmentGrant
                                            )}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <p className="text-gray-400 mb-6 text-sm">
                                {campaign.description}
                            </p>

                            <div className="space-y-3">
                                <div className="flex gap-3">
                                    <button
                                        onClick={() =>
                                            navigate(`/donate/${index}`, {
                                                state: { campaign },
                                            })
                                        }
                                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full transition-colors flex items-center justify-center gap-2"
                                    >
                                        <span>💰</span>
                                        Donate ETH
                                    </button>
                                    <button
                                        onClick={() =>
                                            navigate('/request-aid', {
                                                state: {
                                                    campaignId: index,
                                                    disasterType: campaign.type,
                                                    location: campaign.location,
                                                },
                                            })
                                        }
                                        className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-full transition-colors flex items-center justify-center gap-2"
                                    >
                                        <span>🆘</span>
                                        Request Aid
                                    </button>
                                </div>

                                <div className="text-xs text-gray-400 p-3 bg-gray-700 rounded-lg">
                                    <strong>🏛️ Govt. Grant Source:</strong>{' '}
                                    {campaign.grantDetails}
                                    <div className="mt-1">
                                        🚨 Remaining need:{' '}
                                        {formatINR(remainingNeed)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ExplorePage
