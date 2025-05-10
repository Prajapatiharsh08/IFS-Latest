import { Link } from 'react-router-dom'; // ✅ RIGHT
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight, MapPin, Phone, Mail, Clock, Heart } from "lucide-react"
import { Button } from './ui/Button';
import { Input } from './ui/Input';

export default function Footer() {
    return (
        <footer className="bg-[#0a3b3b] text-white">
            {/* CTA Section */}
            {/* <div className="container mx-auto py-12 text-center px-4">
                <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Financial Future?</h2>
                <p className="mb-8 max-w-2xl mx-auto">
                    Start your investment journey with MSV Infotech today and experience the power of our quarterly compounding
                    model.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <Button className="bg-[#d4a017] hover:bg-[#b38613] text-white cursor-pointer">Invest Now</Button>
                    <Button variant="outline" className="border-white text-white hover:bg-white/10 cursor-pointer">
                        Contact Us
                    </Button>
                </div>
            </div> */}

            {/* Newsletter Section */}
            <div className="container mx-auto px-4 p-5">
                <div className="bg-[#0c4545] rounded-lg p-6 mb-12 max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-6 items-center">
                        <div>
                            <h3 className="text-3xl font-bold mb-2">Subscribe to Our Newsletter</h3>
                            <p className="text-gray-300 text-md text-[17px]">
                                Stay updated with our latest investment opportunities and financial insights.
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <Input type="email" placeholder="Enter your email" className="bg-[#0a3b3b] border-[#0a3b3b] text-white" />
                            <Button className="bg-[#d4a017] hover:bg-[#b38613] text-white cursor-pointer">
                                Subscribe <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="bg-[#d4a017] text-white p-1 rounded mr-2 transform rotate-12">
                                <span className="text-sm font-bold my-2 ">IFS</span>
                            </div>
                            <h3 className="font-bold text-xl">Infinium Finance <br /> Solutions</h3>
                        </div>
                        <p className="text-gray-300 mb-6">
                            A forward-thinking investment solutions company dedicated to offering secure, structured, and profitable
                            financial growth plans.
                        </p>
                        <div className="flex gap-4">
                            <Link
                                href="#"
                                className="h-8 w-8 rounded-full border border-gray-400 flex items-center justify-center hover:bg-white/10 cursor-pointer"
                            >
                                <Facebook className="h-4 w-4" />
                            </Link>
                            <Link
                                href="#"
                                className="h-8 w-8 rounded-full border border-gray-400 flex items-center justify-center hover:bg-white/10 cursor-pointer"
                            >
                                <Twitter className="h-4 w-4" />
                            </Link>
                            <Link
                                href="#"
                                className="h-8 w-8 rounded-full border border-gray-400 flex items-center justify-center hover:bg-white/10 cursor-pointer"
                            >
                                <Instagram className="h-4 w-4" />
                            </Link>
                            <Link
                                href="#"
                                className="h-8 w-8 rounded-full border border-gray-400 flex items-center justify-center hover:bg-white/10 cursor-pointer"
                            >
                                <Linkedin className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-xl mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    to="/"
                                    className="flex items-center gap-2 hover:text-[#d4a017]"
                                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                >
                                    <ArrowRight className="h-4 w-4 text-[#d4a017]" /> Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    className="flex items-center gap-2 hover:text-[#d4a017]"
                                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                >
                                    <ArrowRight className="h-4 w-4 text-[#d4a017]" /> About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/plans"
                                    className="flex items-center gap-2 hover:text-[#d4a017]"
                                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                >
                                    <ArrowRight className="h-4 w-4 text-[#d4a017]" /> Investment Plans
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/how-it-works"
                                    className="flex items-center gap-2 hover:text-[#d4a017]"
                                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                >
                                    <ArrowRight className="h-4 w-4 text-[#d4a017]" /> How It Works
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/calculator"
                                    className="flex items-center gap-2 hover:text-[#d4a017]"
                                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                >
                                    <ArrowRight className="h-4 w-4 text-[#d4a017]" /> Investment Calculator
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="font-bold text-xl mb-6">Legal</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#" className="flex items-center gap-2 hover:text-[#d4a017]">
                                    <ArrowRight className="h-4 w-4 text-[#d4a017]" /> Terms & Conditions
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="flex items-center gap-2 hover:text-[#d4a017]">
                                    <ArrowRight className="h-4 w-4 text-[#d4a017]" /> Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="flex items-center gap-2 hover:text-[#d4a017]">
                                    <ArrowRight className="h-4 w-4 text-[#d4a017]" /> Refund Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="flex items-center gap-2 hover:text-[#d4a017]">
                                    <ArrowRight className="h-4 w-4 text-[#d4a017]" /> Risk Disclosure
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h3 className="font-bold text-xl mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex gap-3">
                                <MapPin className="h-5 w-5 text-[#d4a017] flex-shrink-0 mt-1" />
                                <div>
                                    <p className="text-white text-md">123 Financial District</p>
                                    <p className="text-white text-md">Ahmedabad, Gujarat</p>
                                </div>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Phone className="h-5 w-5 text-[#d4a017] flex-shrink-0" />
                                <p>+91 1234567890</p>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Mail className="h-5 w-5 text-[#d4a017] flex-shrink-0" />
                                <p>info@infiniumsolutions.com</p>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Clock className="h-5 w-5 text-[#d4a017] flex-shrink-0" />
                                <p>Mon-Fri: 9:00 AM - 6:00 PM</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-700 mt-8">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-300 text-sm">© 2025 Infinium Finance Solutions. Ltd. All rights reserved.</p>
                        {/* <p className="text-gray-300 text-sm flex items-center">
                            Designed and developed with <Heart className="h-4 w-4 text-red-500 mx-1" /> for secure financial growth
                        </p> */}
                    </div>
                </div>
            </div>
        </footer>
    )
}