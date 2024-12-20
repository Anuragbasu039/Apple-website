export default function NavBar() {
    return (
        <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 bg-white/30 backdrop-blur-lg  z-50">
            {/* Logo Section */}
            <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-purple-500 rounded-full flex justify-center items-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <span className="text-lg font-bold">DataFlow</span>
            </div>

            {/* Navigation Links */}
            <div className="flex space-x-6 text-gray-700">
                <a href="#features" className="hover:text-purple-600 transition-colors">
                    Features
                </a>
                <a href="#benefits" className="hover:text-purple-600 transition-colors">
                    Benefits
                </a>
                <a href="#solutions" className="hover:text-purple-600 transition-colors">
                    Solutions
                </a>
                <a href="#testimonials" className="hover:text-purple-600 transition-colors">
                    Testimonials
                </a>
                <a href="#pricing" className="hover:text-purple-600 transition-colors">
                    Pricing
                </a>
                <a href="#faq" className="hover:text-purple-600 transition-colors">
                    FAQ
                </a>
            </div>

            {/* Buy Template Button */}
            <button className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition">
                Buy Template
            </button>
        </nav>
    );
}
