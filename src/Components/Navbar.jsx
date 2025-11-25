import React from 'react'
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const Navbar = () => {
        const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'All Doctors', path: '/doctors' },
        { name: 'Contact', path: '/contact' },
        { name: 'About', path: '/about' },
    ];

    const ref = React.useRef(null)

    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(ref.current.scrollTop > 10);
        };
        ref.current.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div ref={ref} className="h-22 md:h-22 overflow-y-hidden">
             <nav className={` top-0 left-0   w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${isScrolled ? "bg-black shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4" : "py-4 md:py-6"}`}>

                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 cursor-pointer">
                    <img className='h-10' src={assets.logo } alt="" />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-4 lg:gap-8">
                    {navLinks.map((link, i) => (
                        <a key={i} href={link.path} className={`group mt-3 font-bold uppercase flex flex-col gap-0.5 ${isScrolled ? "text-gray-700" : "text-black"}`}>
                            {link.name}
                            <div className={`${isScrolled ? "bg-gray-700" : "bg-black"} h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
                        </a>
                    ))}
                     
                </div> 

                {/* Desktop Right */}
                <div className="hidden md:flex items-center gap-4">
                    <Link to='/login'>
                    <button className={`cursor-pointer px-10 py-3.5 rounded-full ml-4 transition-all duration-500 ${isScrolled ? "text-white bg-black" : "bg-blue-500 text-white"}`}>
                        Create Account
                    </button></Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-3 md:hidden">
                    <svg onClick={() => setIsMenuOpen(!isMenuOpen)} className={`h-6 w-6 cursor-pointer ${isScrolled ? "invert" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <line x1="4" y1="6" x2="20" y2="6" />
                        <line x1="4" y1="12" x2="20" y2="12" />
                        <line x1="4" y1="18" x2="20" y2="18" />
                    </svg>
                </div>

                {/* Mobile Menu */}
                <div className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                    <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>

                    {navLinks.map((link, i) => (
                        <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
                            {link.name}
                        </a>
                    ))}

                     
<Link to='/login' onClick={()=>window.scrollTo({top:0,behavior:"smooth"})}>

                    <button className="bg-blue-500 cursor-pointer text-white px-8 py-2.5 rounded-full transition-all duration-500">
                        Login
                    </button>
                        </Link>
                    
                </div>
            </nav>
        </div>
    );
}
 
export default Navbar