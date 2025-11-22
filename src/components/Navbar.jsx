import { MoveUpRight } from 'lucide-react'; // Assuming you're using Lucide icons
import chromeLogo from '/chrome-logo.svg'; // Make sure to import your Chrome logo

const Navbar = () => {
    return (
        <nav className="flex h-16 font-sans backdrop-blur-xl bg-white/10 text-[#5f6368] gap-x-5 justify-start items-center px-4">
            {/* Left section with Chrome logo and title */}
            <div className="flex items-center space-x-2 px-4">
                <img
                    src={chromeLogo}
                    alt="Chrome Logo"
                    className="h-8 w-8"
                />
                <h1 className="text-2xl font-medium">chrome</h1>
            </div>

            {/* Middle section with navigation links */}
            <div className="flex space-x-6 ms-4">
                <h2 className="text-md font-medium hover:text-gray-300 cursor-pointer">Safety</h2>
                <h2 className="text-md font-medium hover:text-gray-300 cursor-pointer">By Google</h2>
                <div className="flex items-center space-x-1 text-md font-medium hover:text-gray-300 cursor-pointer">
                    <span>Extensions</span>
                    <MoveUpRight className="h-4 w-4 mt-1" />
                </div>
            </div>

        </nav>
    );
};

export default Navbar;
//   )
// }

// export default Navbar
