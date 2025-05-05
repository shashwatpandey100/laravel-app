import { Link } from '@inertiajs/react';
import { ChevronDown, Mail, Menu, Phone, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import Button from '../button';

export default function Header({ auth, url, allHostels, facilities, agency }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [visible, setVisible] = useState(true);
    const [scrollTimeout, setScrollTimeout] = useState(null);
    const [lastScrollY, setLastScrollY] = useState(0);

    const hostelItems = [
        { href: '/hostels', label: 'All Hostels' },
        ...allHostels.map((hostel) => ({
            href: `/hostel/${hostel.slug}`,
            label: hostel.title,
        })),
    ];

    const facilityItems = [
        { href: '/facilities', label: 'All Facilities' },
        ...facilities.map((facility) => ({
            href: `/facility/${facility.slug}`,
            label: facility.title,
        })),
    ];

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }
            if (currentScrollY !== lastScrollY && visible) {
                setVisible(false);
            }
            const timeout = setTimeout(() => {
                setVisible(true);
            }, 1000);
            setScrollTimeout(timeout);
            setLastScrollY(currentScrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }
        };
    }, [visible, scrollTimeout, lastScrollY]);

    return (
        <>
            {/* Floating contact buttons */}
            <a
                href={`tel:${agency?.phones[0]}`}
                className={`bg-cred fixed bottom-[150px] z-[10] shadow-lg lg:bottom-[200px] ${visible ? 'left-[-80px]' : 'left-[-115px]'} flex h-[35px] w-[200px] rotate-270 items-center justify-center gap-2 text-[15px] text-white transition-all duration-150 lg:h-[40px]`}
            >
                <Phone fill="white" strokeWidth={1} size={16} color="white" />
                {agency?.phones[0]}
            </a>

            <a target="_blank" href={`https://wa.me/${agency?.phones[0]?.replace(/\D/g, '')}`} className={`fixed right-[10px] bottom-[10px] z-[10]`}>
                <img src="https://raghumahostels.com/images/WhatsApp_icon.png" className="h-[70px]" alt="whatsapp" />
            </a>

            {/* Top header */}
            <div className="bg-cred relative z-[10] min-h-[32px] w-full px-4 py-1.5 sm:min-h-[38px] sm:p-2">
                <div className="container mx-auto flex justify-between text-[15px] font-[500] text-white">
                    <span className="flex items-center gap-1">
                        <a href={`tel:${agency?.phones[0]}`} className="flex items-center gap-1 text-[14px] hover:underline sm:text-[15px]">
                            <Phone fill="white" strokeWidth={1} size={16} color="white" /> 9315312530
                        </a>
                        &nbsp;|{' '}
                        <a href={`mailto:${agency?.emails[0]}`} className="flex items-center gap-1 text-[14px] hover:underline sm:text-[15px]">
                            <Mail strokeWidth={2} size={16} color="white" /> raghumahostel@gmail.com
                        </a>
                    </span>
                    {auth.user && (
                        <Link href={route('dashboard')} className="flex items-center gap-1 hover:underline">
                            Dashboard
                        </Link>
                    )}
                </div>
            </div>

            {/* Main header */}
            <header className="sticky top-0 z-[5] bg-white py-[15px] shadow-[0_1px_9px_#525252] transition-all duration-500">
                <div className="flex items-center justify-between px-6 md:px-8 lg:px-12">
                    <img src="https://raghumahostels.com/build/assets/RaghumaLogo-D9-okSAJ.png" alt="Raghuma Hostels" className="max-h-[65px]" />

                    {/* links for large screen */}
                    <div className="hidden items-center gap-8 lg:flex">
                        <div className="flex gap-6 text-[14px] font-[500]">
                            <NavLink url={url} href="/">
                                Home
                            </NavLink>
                            <NavLink url={url} href="/about">
                                About
                            </NavLink>
                            <PopoverNavLink url={url} href="/hostels" items={hostelItems}>
                                Our Hostels
                            </PopoverNavLink>
                            <PopoverNavLink url={url} href="/facilities" items={facilityItems}>
                                Facilities
                            </PopoverNavLink>
                            <NavLink url={url} href="/blogs">
                                Blogs
                            </NavLink>
                            <NavLink url={url} href="/gallery">
                                Gallery
                            </NavLink>
                            <NavLink url={url} href="/contact">
                                Contact
                            </NavLink>
                        </div>
                        <Link href={route('contact')}>
                            <Button variant="primary">Get a Quote</Button>
                        </Link>
                    </div>

                    {/* Hamburger menu for smaller screens */}
                    <div className="lg:hidden">
                        <button onClick={() => setMenuOpen(!menuOpen)} className="transition-all focus:outline-none">
                            {menuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </header>
            {/* Mobile menu */}
            <div
                className={`absolute top-0 left-0 z-10 h-screen w-screen bg-black/50 transition-opacity duration-300 ${menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
            >
                <div
                    className={`fixed inset-y-0 right-0 z-20 w-[90%] transform overflow-y-scroll bg-white transition-transform duration-300 ${
                        menuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                >
                    {/* Close button */}
                    <div className="flex h-[50px] w-full items-center justify-end px-4">
                        <X className="cursor-pointer" onClick={() => setMenuOpen(false)} size={20} />
                    </div>

                    {/* Menu Content */}
                    <div className="flex flex-col space-y-4 p-4">
                        <NavLink url={url} href="/">
                            Home
                        </NavLink>
                        <NavLink url={url} href="/about">
                            About
                        </NavLink>
                        <PopoverNavLinkMobile url={url} href="/hostels" items={hostelItems}>
                            Our Hostels
                        </PopoverNavLinkMobile>
                        <PopoverNavLinkMobile url={url} href="/facilities" items={facilityItems}>
                            Facilities
                        </PopoverNavLinkMobile>
                        <NavLink url={url} href="/blogs">
                            Blogs
                        </NavLink>
                        <NavLink url={url} href="/gallery">
                            Gallery
                        </NavLink>
                        <NavLink url={url} href="/contact">
                            Contact
                        </NavLink>
                        <Link href={route('contact')} className="w-full">
                            <Button variant="primary" className={'w-full'}>
                                Get a Quote
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

const NavLink = ({ href, children, url }) => {
    const currentPath = new URL(url).pathname;
    const isActive = currentPath === href;

    return (
        <Link href={href} className={`font-[600] lg:font-[500] lg:uppercase ${isActive ? 'text-cred' : 'hover:text-cred'}`}>
            {children}
        </Link>
    );
};

const PopoverNavLink = ({ href, children, items, url }) => {
    const [showPopover, setShowPopover] = useState(false);
    const isActive = url === href || items.some((item) => url === item.href);

    return (
        <div className="relative" onMouseEnter={() => setShowPopover(true)} onMouseLeave={() => setShowPopover(false)}>
            <Link href={href} className={`flex items-center gap-1 uppercase ${isActive ? 'text-cred' : 'hover:text-cred'}`}>
                {children} <ChevronDown size={16} />
            </Link>

            {showPopover && (
                <div className="absolute top-full left-0 min-w-[200px] overflow-hidden rounded-md border border-black/5 shadow-lg">
                    <div className="border-b-[5px] border-[#d8841d] bg-white py-2">
                        {items.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className={`block border-b border-dashed border-blue-300 px-4 py-3 text-sm ${url === item.href ? 'text-cred/60' : 'hover:text-cred'} last:mb-1`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

const PopoverNavLinkMobile = ({ href, children, items, url }) => {
    const [showPopover, setShowPopover] = useState(false);
    const isActive = url === href || items.some((item) => url === item.href);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.popover-wrapper')) {
                setShowPopover(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className="popover-wrapper relative">
            <button
                onClick={() => setShowPopover(!showPopover)}
                className={`flex cursor-pointer items-center gap-1 font-[600] lg:font-[500] lg:uppercase ${isActive ? 'text-cred' : 'hover:text-cred'}`}
            >
                {children} <ChevronDown size={16} />
            </button>

            {showPopover && (
                <div className="z-10 w-full overflow-hidden">
                    <div className="bg-white py-2">
                        {items.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className={`block border-b border-dashed border-blue-300 px-4 py-3 text-sm ${url === item.href ? 'text-cred/60' : 'hover:text-cred'} last:mb-1`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};
