import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

function FAQs() {
    const [expanded, setExpanded] = useState(null);

    const togglePanel = (panelId) => {
        setExpanded((prev) => (prev === panelId ? null : panelId));
    };

    const faqData = [
        {
            id: 'panel1',
            question: 'What is the minimum investment amount?',
            answer: 'The minimum investment amount with Infinium Finance Solutions is ₹10,000. There is no upper limit, allowing you to invest according to your financial capacity and goals.'
        },
        {
            id: 'panel2',
            question: 'How does the quarterly compounding work?',
            answer: "Our quarterly compounding model provides a 6% return every quarter on your investment. This means that each quarter, your returns are added to your principal amount, and the next quarter's returns are calculated on this increased amount. This creates an accelerating growth curve for your investment."
        },
        {
            id: 'panel3',
            question: 'What is the Tree Family distribution system?',
            answer: 'The Tree Family system is our unique profit distribution model where 70% of the profits go to the main investor (Mukhiya) and 30% is distributed among family members or dependents. You can designate up to 5 family members who will receive an equal share of this 30%. This system helps create generational wealth and financial security for your loved ones.'
        },
        {
            id: 'panel4',
            question: 'How secure is my investment?',
            answer: 'At Infinium Finance Solutions, security is our top priority. Our investment plans are designed to be risk-free with a fixed return ratio. We maintain strict compliance with all regulatory requirements and employ robust security measures to protect your investments.'
        },
        {
            id: 'panel5',
            question: 'Can I withdraw my investment before the term ends?',
            answer: 'Yes, you can withdraw your investment before the term ends, subject to our early withdrawal policy. Early withdrawals may incur a nominal processing fee. We recommend discussing your specific situation with our financial advisors to understand the implications.'
        },
        {
            id: 'panel6',
            question: 'How often will I receive reports on my investment?',
            answer: 'We provide quarterly reports detailing your investment performance, including profits earned, compounding effects, and family distributions if applicable. You can also access your investment dashboard anytime through our online portal or mobile app.'
        },
        {
            id: 'panel7',
            question: 'What happens if I want to add more to my investment?',
            answer: 'You can add to your existing investment at any time. Additional investments will be treated as separate investments with their own quarterly compounding cycle, or you can choose to merge them with your existing investment.'
        },
        {
            id: 'panel8',
            question: 'How are the returns taxed?',
            answer: 'The tax implications of your investment returns depend on your individual tax situation and applicable tax laws. We recommend consulting with a tax professional regarding your specific circumstances. Infinium Finance Solutions provides all necessary documentation for tax filing purposes.'
        },
        {
            id: 'panel9',
            question: 'Can I change my designated family members?',
            answer: 'Yes, you can change your designated family members for the Tree Family distribution system. Changes will take effect from the next quarter after the request is processed. Please contact our customer service team to make these changes.'
        },
        {
            id: 'panel10',
            question: 'What happens to my investment in case of my demise?',
            answer: "In the unfortunate event of an investor's demise, the investment and future returns are transferred to the nominated beneficiary as per the details provided during registration. We have a streamlined process to ensure a smooth transition during such difficult times."
        },
    ];

    return (
        <>
            <section className="bg-teal-900 text-white py-20 px-4 text-center">
                <h1 className="text-5xl font-bold mb-4">Frequently Asked Questions</h1>
                <p className="text-lg max-w-2xl mx-auto text-blue-100">
                    Find answers to common questions about Infinium Finance Solutions' investment plans, processes, and services.
                </p>
            </section>

            <section className='pattern-dots' style={{ padding: "20px 0 45px" }}>
                <div className='max-w-4xl mx-auto px-6'>
                    {faqData.map(({ id, question, answer }) => (
                        <div key={id} className="border border-blue-100 rounded-md my-3 overflow-hidden shadow-sm">
                            <div
                                className="flex justify-between items-center cursor-pointer px-4 py-3 bg-teal-50 hover:bg-teal-100 transition"
                                onClick={() => togglePanel(id)}
                            >
                                <span className="font-semibold text-[#0d3b49]">{question}</span>
                                <ChevronDown
                                    className={`h-4 w-4 text-[#0d3b49] transition-transform duration-200 ${expanded === id ? 'rotate-180' : ''}`}
                                />
                            </div>
                            {expanded === id && (
                                <div className="px-4 py-3 text-md text-gray-700 bg-white">
                                    {answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            <section className='pattern-dots py-16'>
                <div className="bg-white shadow-md rounded-xl p-8 text-center max-w-3xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0d3b49] mb-4">
                        Still Have Questions?
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Our team is here to help you with any questions or concerns you may have about our investment plans.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        {/* Contact Us Link */}
                        <Link
                            to="/contact" // Replace with your actual Contact Us route
                            className="bg-[#0d3b49] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#092a35] transition"
                            onClick={() => {
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                        >
                            Contact Us
                        </Link>

                        {/* Try Our Calculator Link */}
                        <Link
                            to="/calculator"
                            className="border border-[#0d3b49] text-[#0d3b49] px-6 py-2 rounded-md font-semibold hover:bg-[#0d3b49] hover:text-white transition inline-flex items-center justify-center gap-2"
                            onClick={() => {
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                        >
                            Try Our Calculator
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default FAQs;
