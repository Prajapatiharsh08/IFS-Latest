import React from 'react';
import { CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const OurInvest = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const steps = [
    {
      title: 'Quarterly Compounding',
      suggestion: 'Earn 6% quarterly returns with compounding for higher returns over time.',
      description: [
        '6% quarterly returns',
        'Up to 26.25% annual returns',
        '₹10,000 minimum investment',
        'Quarterly profit distribution'
      ],
      color: 'border-t-[#0c4244]',
      buttonColor: 'bg-teal-900 hover:bg-[#0c4244]'
    },
    {
      title: 'Tree Family Plan',
      suggestion: 'Profits are split between the main investor and their family members.',
      description: [
        '70% profits to investor',
        '30% to family members',
        'Collective financial growth',
        'Generational wealth security'
      ],
      color: 'border-t-yellow-600',
      buttonColor: 'bg-yellow-600 hover:bg-yellow-700'
    },
    {
      title: 'Systematic Investment Plan',
      suggestion: 'A steady, long-term investment with guaranteed fixed returns over time.',
      description: [
        'Risk-free investment',
        'Fixed return ratio',
        'Flexible investment amounts',
        'Long-term wealth creation'
      ],
      color: 'border-t-[#0c4244]',
      buttonColor: 'bg-teal-900 hover:bg-[#0c4244]'
    }
  ];

  return (
    <section id="how-it-works" className="pattern-dots min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-xl md:text-5xl font-bold text-teal-900 mb-4">Our Investment Plans</h3>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            Choose from our range of investment options designed to meet your financial goals and secure your future.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 max-w-10xl mx-auto">
          {steps.map((step, index) => (
            <div className="rounded-lg border bg-card text-card-foreground relative overflow-hidden border-none shadow-lg transform transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2">
              <div
                key={index}
                className={`relative group bg-white p-8 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-transform duration-500 overflow-hidden flex flex-col justify-between ${step.color} border-t-8`}
              >
                <div className="flex flex-col gap-4">
                  <h2 className="text-3xl font-bold text-[#0c4244] mb-2">{step.title}</h2>
                  <p className="text-gray-500 text-lg">{step.suggestion}</p>
                  <ul className="text-[17px] space-y-2">
                    {step.description.map((desc, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="lucide lucide-circle-check-big h-5 w-5 text-dark-green mr-2 shrink-0 mt-0.5" size={18} />
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => handleNavigate('/plans')}
                  className={`${step.buttonColor} transition-colors text-white px-6 py-2 rounded-md font-medium shadow-md mt-6 cursor-pointer`}
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center ">
          <button
            onClick={() => handleNavigate('/plans')}
            className="transform transition-all duration-300 ease-in-out hover:shadow-md hover:scale-105 bg-[#0c4244] hover:bg-teal-800 text-white px-8 py-3 rounded-md font-semibold shadow-md flex items-center justify-center gap-2 mx-auto cursor-pointer"
          >
            View All Investment Plans
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurInvest;
