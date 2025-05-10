"use client"
import { CircleDollarSign, FileText, BarChart3, Landmark, Users, CheckCircle } from "lucide-react"
import { Link } from "react-router-dom"

export default function HowItWorks() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12 font-sans">
            {/* How It Works Section */}
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-[#0d3b49] mb-2">How It Works</h1>
                <p className="text-gray-600 max-w-2xl mx-auto text-md text-[17px]">
                    Understanding MSV Infotech's investment process is simple. Follow these steps to start your journey towards
                    financial growth.
                </p>
            </div>

            {/* Steps Section */}
            <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-[18px] top-[40px] bottom-[40px] w-[2px] bg-gray-200 md:left-[22px]"></div>

                {/* Step 1 */}
                <div className="flex mb-6">
                    <div className="relative z-10">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0d3b49] text-white font-bold">
                            1
                        </div>
                    </div>
                    <div className="flex-1 ml-4">
                        <div className="border rounded-md p-4 hover:shadow-md transition-shadow">
                            <div className="flex flex-col sm:flex-row items-start">
                                <Users className="text-[#0d3b49] mr-3 mt-1" size={40} />
                                <div className="mt-2 sm:mt-0">
                                    <h3 className="font-bold text-[#0d3b49] text-xl">Register</h3>
                                    <p className="text-md text-gray-600">
                                        Create your account with MSV Infotech by providing your basic details. Our team will verify your
                                        information and set up your investor profile.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="flex mb-6">
                    <div className="relative z-10">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0d3b49] text-white font-bold">
                            2
                        </div>
                    </div>
                    <div className="flex-1 ml-4">
                        <div className="border rounded-md p-4 hover:shadow-md transition-shadow">
                            <div className="flex flex-col sm:flex-row items-start">
                                <FileText className="text-[#0d3b49] mr-3 mt-1" size={40} />
                                <div className="mt-2 sm:mt-0">
                                    <h3 className="font-bold text-[#0d3b49] text-xl">Choose a Plan</h3>
                                    <p className="text-md text-gray-600">
                                        Select from our range of investment plans – Quarterly Compounding, Tree Family Plan, or Systematic
                                        Investment Plan – based on your financial goals.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="flex mb-6">
                    <div className="relative z-10">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0d3b49] text-white font-bold">
                            3
                        </div>
                    </div>
                    <div className="flex-1 ml-4">
                        <div className="border rounded-md p-4 hover:shadow-md transition-shadow">
                            <div className="flex flex-col sm:flex-row items-start">
                                <Landmark className="text-[#0d3b49] mr-3 mt-1" size={40} />
                                <div className="mt-2 sm:mt-0">
                                    <h3 className="font-bold text-[#0d3b49] text-xl">Invest</h3>
                                    <p className="text-md text-gray-600">
                                        Make your investment through our secure payment channels. The minimum investment amount is ₹50,000,
                                        with no upper limit.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Step 4 */}
                <div className="flex mb-6">
                    <div className="relative z-10">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0d3b49] text-white font-bold">
                            4
                        </div>
                    </div>
                    <div className="flex-1 ml-4">
                        <div className="border rounded-md p-4 hover:shadow-md transition-shadow">
                            <div className="flex flex-col sm:flex-row items-start">
                                <BarChart3 className="text-[#0d3b49] mr-3 mt-1" size={40} />
                                <div className="mt-2 sm:mt-0">
                                    <h3 className="font-bold text-[#0d3b49] text-xl">Track Returns</h3>
                                    <p className="text-md text-gray-600">
                                        Monitor your investment growth through quarterly reports. Watch as your money compounds with each 6%
                                        quarterly return.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Step 5 */}
                <div className="flex mb-6">
                    <div className="relative z-10">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0d3b49] text-white font-bold">
                            5
                        </div>
                    </div>
                    <div className="flex-1 ml-4">
                        <div className="border rounded-md p-4 hover:shadow-md transition-shadow">
                            <div className="flex flex-col sm:flex-row items-start">
                                <CircleDollarSign className="text-[#0d3b49] mr-3 mt-1" size={40} />
                                <div className="mt-2 sm:mt-0">
                                    <h3 className="font-bold text-[#0d3b49] text-xl">Withdraw Profits</h3>
                                    <p className="text-md text-gray-600">
                                        Choose to withdraw your profits quarterly or reinvest them for even greater returns. Withdrawals are
                                        processed within 3-5 business days.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tree Family Distribution System */}
            <div className="mt-16 mb-16">
                <h2 className="text-4xl font-bold text-[#0d3b49] text-start mb-4">Tree Family Distribution System</h2>
                <p className="text-gray-600 text-start mb-8 text-md text-[17px]">
                    Our unique Tree Family model promotes both individual and collective financial growth by distributing profits
                    among family members:
                </p>

                <div className="grid md:grid-cols-2 gap-8 shadow-md rounded-md border border-gray-100">
                    {/* How It Works Column */}
                    <div className="p-6">
                        <h3 className="font-bold text-[#0d3b49] mb-4 text-[22px]">How It Works</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <div className="min-w-5 mt-1 mr-2">
                                    <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center transition-transform duration-200">
                                        <CheckCircle className="text-[#0d3b49] w-8 h-8" />
                                    </div>
                                </div>
                                <span className="text-md text-gray-600">70% of profits go to the main Investor (Matriarch)</span>
                            </li>
                            <li className="flex items-start">
                                <div className="min-w-5 mt-1 mr-2">
                                    <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center transition-transform duration-200">
                                        <CheckCircle className="text-[#0d3b49] w-8 h-8" />
                                    </div>
                                </div>
                                <span className="text-md text-gray-600">30% is reserved for family members or dependents</span>
                            </li>
                            <li className="flex items-start">
                                <div className="min-w-5 mt-1 mr-2">
                                    <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center transition-transform duration-200">
                                        <CheckCircle className="text-[#0d3b49] w-8 h-8" />
                                    </div>
                                </div>
                                <span className="text-md text-gray-600">You can designate up to 5 family members</span>
                            </li>
                            <li className="flex items-start">
                                <div className="min-w-5 mt-1 mr-2">
                                    <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center transition-transform duration-200">
                                        <CheckCircle className="text-[#0d3b49] w-8 h-8" />
                                    </div>
                                </div>
                                <span className="text-md text-gray-600">Each family member receives an equal share</span>
                            </li>
                        </ul>
                    </div>

                    {/* Benefits Column */}
                    <div className="p-6">
                        <h3 className="font-bold text-[#0d3b49] mb-4 text-[22px]">Benefits</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <div className="min-w-5 mt-1 mr-2">
                                    <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center transition-transform duration-200">
                                        <CheckCircle className="text-[#0d3b49] w-8 h-8" />
                                    </div>
                                </div>
                                <span className="text-md text-gray-600">Creates generational wealth</span>
                            </li>
                            <li className="flex items-start">
                                <div className="min-w-5 mt-1 mr-2">
                                    <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center transition-transform duration-200">
                                        <CheckCircle className="text-[#0d3b49] w-8 h-8" />
                                    </div>
                                </div>
                                <span className="text-md text-gray-600">Ensures financial security for loved ones</span>
                            </li>
                            <li className="flex items-start">
                                <div className="min-w-5 mt-1 mr-2">
                                    <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center transition-transform duration-200">
                                        <CheckCircle className="text-[#0d3b49] w-8 h-8" />
                                    </div>
                                </div>
                                <span className="text-md text-gray-600">Promotes financial literacy among family</span>
                            </li>
                            <li className="flex items-start">
                                <div className="min-w-5 mt-1 mr-2">
                                    <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center transition-transform duration-200">
                                        <CheckCircle className="text-[#0d3b49] w-8 h-8" />
                                    </div>
                                </div>
                                <span className="text-md text-gray-600">Builds a culture of saving and investment</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="text-center shadow-md rounded-md border border-gray-100 p-10">
                <h2 className="text-3xl font-bold text-[#0d3b49] mb-2">Ready to Start Your Investment Journey?</h2>
                <p className="text-gray-600 mb-6 text-md text-[17px]">
                    Join thousands of satisfied investors who are growing their wealth with MSV Infotech.
                </p>
                <div className="flex justify-center gap-4">
                    <button className="px-6 py-2 bg-[#e6a54a] text-white rounded hover:bg-[#d99a3e] transition-colors">
                        Invest Now
                    </button>
                    <Link
                        to="/calculator"
                        onClick={() => setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50)}
                        className="px-6 py-2 border border-[#0d3b49] text-[#0d3b49] hover:bg-[#0d3b49] hover:text-white rounded flex items-center transition-colors"
                    >
                        Try Our Calculator
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 ml-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}
