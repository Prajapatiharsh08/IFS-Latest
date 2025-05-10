import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedCoin from './AnimatedCoin';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate((prev) => !prev);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#0c4244] text-white pt-28 pb-10 md:pt-32 md:pb-20 overflow-hidden">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-2 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6, ease: "easeInOut" }}
          >
            <div className="m-10 order-2 md:order-1">
              <h1 className="text-5xl lg:text-5xl font-bold mb-8 pt-6 md:pt-0">
                Secure Your Financial Future with Infinium Finance Solutions
              </h1>
              <p className="mb-8 text-xl text-teal-50">
                Experience our powerful compounding investment model that provides consistent quarterly returns of 6%, allowing your money to grow substantially over time.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/calculator"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                  <button className="bg-yellow-600 hover:bg-yellow-700 transition-all text-white px-9 py-3 rounded-md font-medium shadow-lg hover:shadow-xl transform hover:scale-105 ease-in-out cursor-pointer">
                    Invest Now
                  </button>
                </Link>

                <Link
                  to="/about"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                  <button className="h-12 bg-white text-black border-2 border-white hover:bg-white/10 hover:text-white transition-all duration-300 px-10 py-2 rounded-md font-medium cursor-pointer">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6, ease: "easeInOut" }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-xl animate-slideRight">
              <div className="flex items-center mb-4">
                <h3 className="text-[#c89b28] text-2xl font-bold">Watch Your Money Grow</h3>
                <div className="ml-auto">
                  <div className="flex items-center justify-center h-20">
                    <div className="relative w-[80px] h-full overflow-hidden group">
                      <div
                        className={`absolute top-0 right-1/2 h-full bg-[#c99d2ed5] origin-right ${animate ? 'animate-centerin' : 'animate-centerout'}`}
                      />
                      <div className="absolute inset-0 flex items-center justify-center z-10">
                        <AnimatedCoin />
                      </div>
                      <div
                        className={`absolute top-0 left-1/2 h-full bg-[#c99d2ed5] origin-left ${animate ? 'animate-centerin' : 'animate-centerout'}`}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-teal-50 mb-6">See how an investment of ₹10,000 grows over a year:</p>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Initial Investment:</span>
                  <span className="text-lg font-medium">₹10,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>First Quarter (6%):</span>
                  <span className="text-400">+₹1800</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Second Quarter (6%):</span>
                  <span className="text-400">+₹2124</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Third Quarter (6%):</span>
                  <span className="text-400">+₹2506</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Fourth Quarter (6%):</span>
                  <span className="text-400">+₹2957</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-teal-700">
                <div className="flex justify-between items-center text-xl font-bold">
                  <span>Final Amount:</span>
                  <span className="text-[#c89b28]">₹19,388</span>
                </div>
                <div className="flex justify-between items-center mt-1">
                  <span>Total Profit:</span>
                  <span className="text-[#c89b28]">₹9,388 (26.25% return)</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </section>
  );
};

export default Hero;
