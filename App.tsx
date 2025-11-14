import React, { useState, useEffect } from 'react';

// SVG Icons as React Components
const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 md:h-20 md:w-20 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);

const LocationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 md:h-20 md:w-20 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const CheckCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 md:h-20 md:w-20 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 sm:h-16 sm:w-16" aria-label="WhatsApp" role="img" viewBox="0 0 512 512">
        <rect width="512" height="512" rx="15%" fill="#25d366"/>
        <path fill="#25d366" stroke="#ffffff" strokeWidth="26" d="M123 393l14-65a138 138 0 1150 47z"/>
        <path fill="#ffffff" d="M308 273c-3-2-6-3-9 1l-12 16c-3 2-5 3-9 1-15-8-36-17-54-47-1-4 1-6 3-8l9-14c2-2 1-4 0-6l-12-29c-3-8-6-7-9-7h-8c-2 0-6 1-10 5-22 22-13 53 3 73 3 4 23 40 66 59 32 14 39 12 48 10 11-1 22-10 27-19 1-3 6-16 2-18"/>
    </svg>
);

const Header: React.FC<{ onNavigate: (page: string) => void; currentPage: string }> = ({ onNavigate, currentPage }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: '#how-it-works', text: 'How It Works' },
        { href: '#pricing', text: 'Pricing' },
        { page: 'about', text: 'About Us' },
    ];
    
    const handleScrollLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    return (
        <header className="bg-white sticky top-0 z-50 shadow-sm">
            <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
                <button onClick={() => onNavigate('main')} className="flex items-center space-x-2 sm:space-x-3 cursor-pointer">
                    <img src="/images/logo.png" alt="Hair Patch At Home" className="h-14 sm:h-16 md:h-20 w-auto" />
                    <span className="text-base sm:text-lg md:text-xl font-bold text-gray-800">Hair Patch At Home</span>
                </button>
                <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
                    {currentPage === 'main' ? (
                        <>
                            {navLinks.map(link => 
                                'page' in link ? (
                                    <button key={link.page} onClick={() => onNavigate(link.page)} className="text-sm lg:text-base text-gray-600 hover:text-gray-900 font-medium">{link.text}</button>
                                ) : (
                                    <a key={link.href} href={link.href} onClick={(e) => handleScrollLinkClick(e, link.href)} className="text-sm lg:text-base text-gray-600 hover:text-gray-900 font-medium">{link.text}</a>
                                )
                            )}
                             <a href="#booking" onClick={(e) => handleScrollLinkClick(e, '#booking')} className="text-sm lg:text-base bg-green-500 text-white font-bold py-2 px-4 lg:py-2.5 lg:px-5 rounded-lg hover:bg-green-600 transition duration-300">
                                Book Now
                            </a>
                        </>
                    ) : (
                         <button onClick={() => onNavigate('main')} className="bg-green-500 text-white font-bold py-2 px-4 lg:py-2.5 lg:px-5 rounded-lg hover:bg-green-600 transition duration-300 text-sm lg:text-base">
                            Back to Home
                        </button>
                    )}
                </nav>
                 <button className="md:hidden text-gray-600" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Open menu">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path></svg>
                </button>
            </div>
             {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg">
                   <div className="container mx-auto px-4 py-4 flex flex-col items-center space-y-3">
                        {currentPage === 'main' ? (
                            <>
                                {navLinks.map(link => 
                                    'page' in link ? (
                                        <button key={link.page} onClick={() => { onNavigate(link.page); setIsMenuOpen(false); }} className="text-base text-gray-600 hover:text-gray-900 w-full text-center py-2 font-medium">{link.text}</button>
                                    ) : (
                                        <a key={link.href} href={link.href} onClick={(e) => handleScrollLinkClick(e, link.href)} className="text-base text-gray-600 hover:text-gray-900 w-full text-center py-2 font-medium">{link.text}</a>
                                    )
                                )}
                                <a href="#booking" onClick={(e) => handleScrollLinkClick(e, '#booking')} className="w-full text-center bg-green-500 text-white font-bold py-2.5 px-4 rounded-lg hover:bg-green-600 transition duration-300 text-base">
                                    Book Now
                                </a>
                            </>
                        ) : (
                            <button onClick={() => { onNavigate('main'); setIsMenuOpen(false); }} className="w-full text-center bg-green-500 text-white font-bold py-2.5 px-4 rounded-lg hover:bg-green-600 transition duration-300 text-base">
                                Back to Home
                            </button>
                        )}
                   </div>
                </div>
            )}
        </header>
    );
};

const Hero = () => {
    return (
        <section className="bg-white text-center py-12 sm:py-16 md:py-20 lg:py-28">
            <div className="container mx-auto px-4 sm:px-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-gray-900 leading-tight">Affordable. At your doorstep.</h2>
                <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                    Get a private, at-home hair patch demo or service. Bookings start at just ₹299.
                </p>
                <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 md:gap-5">
                    <a href="#booking" className="w-full sm:w-auto bg-green-500 text-white font-bold py-3 sm:py-3.5 px-6 sm:px-8 rounded-lg hover:bg-green-600 transition duration-300 text-base sm:text-lg md:text-lg">
                        Book a Home Demo
                    </a>
                    <a href="#booking" className="w-full sm:w-auto bg-blue-600 text-white font-bold py-3 sm:py-3.5 px-6 sm:px-8 rounded-lg hover:bg-blue-700 transition duration-300 text-base sm:text-lg md:text-xl">
                        Book a Home Service
                    </a>
                </div>
            </div>
        </section>
    );
};

const Steps = () => {
        const stepsData = [
        { icon: <CalendarIcon />, title: "1. Book", description: "Click 'Book Now' or message us on WhatsApp to pick your service and time." },
        { icon: <LocationIcon />, title: "2. We Visit", description: "A trained technician from Hair Patch At Home visits your home for a private, professional service." },
        { icon: <CheckCircleIcon />, title: "3. Get Your Solution", description: "Get your patch demo, trial, or monthly service done right at your doorstep." }
    ];

    return (
        <section id="how-it-works" className="bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-28">
            <div className="container mx-auto px-4 sm:px-6 text-center">
                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 mb-10 sm:mb-12 md:mb-16">Get Started in 3 Easy Steps</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
                    {stepsData.map((step, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="bg-blue-100 rounded-full p-4 sm:p-5 md:p-6 mb-4 sm:mb-6">
                                {step.icon}
                            </div>
                            <h4 className="text-2xl sm:text-3xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">{step.title}</h4>
                            <p className="text-base sm:text-lg md:text-lg text-gray-600 max-w-xs leading-relaxed">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const PricingCard: React.FC<{ title: string; price: string; description: string; buttonText: string }> = ({ title, price, description, buttonText }) => (
    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 md:p-8 flex flex-col items-center text-center w-full max-w-md">
        <h4 className="text-2xl sm:text-2xl md:text-2xl font-bold text-gray-800">{title}</h4>
        <p className="text-5xl sm:text-5xl md:text-5xl font-extrabold text-gray-900 my-3 sm:my-4">{price}</p>
        <p className="text-base sm:text-lg md:text-lg text-gray-600 mb-6 sm:mb-8 min-h-fit leading-relaxed">{description}</p>
        <a href="#booking" className="w-full bg-green-500 text-white font-bold py-3 sm:py-3.5 px-6 sm:px-8 rounded-lg hover:bg-green-600 transition duration-300 text-base sm:text-lg md:text-lg">
            {buttonText}
        </a>
    </div>
);

const Pricing = () => (
    <section id="pricing" className="bg-white py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 text-center">
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 mb-10 sm:mb-12 md:mb-16">Clear & Simple Pricing</h3>
            <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 sm:gap-8 md:gap-10">
                <PricingCard title="Home Demo" price="₹299" description="Our technician visits your home, shows you patch samples, and provides a full patch trial so you can see the look and feel." buttonText="Book Home Demo"/>
                <PricingCard title="Home Service (Re-fixing)" price="₹799" description="Our most popular option. We provide a full at-home service, including patch removal, cleaning, and professional re-fixing." buttonText="Book Home Service"/>
            </div>
        </div>
    </section>
);

const BookingForm = () => {
    const [formData, setFormData] = useState({ name: '', phone: '', service: 'Home Demo (₹299)', date: '' });
    const [isDateFocused, setIsDateFocused] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmissionStatus('submitting');
        
        const { name, phone, service, date } = formData;
        
        // Save to Google Sheet via Apps Script
        const deploymentId = 'AKfycbziDXYtYK8jhVxlaN1Po_SaMC9ej_ahmrZm35aM-7jPMdMx-wRtl4FHRVJrRhZbEcHYDw';
        const scriptUrl = `https://script.google.com/macros/s/${deploymentId}/exec`;
        
        const payload = {
            name: name,
            phone: phone,
            service: service,
            date: date,
            timestamp: new Date().toLocaleString()
        };

        // Send data to Google Sheet
        fetch(scriptUrl, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        .catch(err => console.log('Sheet save attempt:', err));

        // Show success message and reset form
        setSubmissionStatus('success');
        setTimeout(() => {
            setFormData({ name: '', phone: '', service: 'Home Demo (₹299)', date: '' });
            setSubmissionStatus('idle');
        }, 3000);
    };

    return (
        <section id="booking" className="bg-[#E0E8EB] py-12 sm:py-16 md:py-20 lg:py-28">
            <div className="container mx-auto px-4 sm:px-6 text-center">
                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900">Ready to Get Started?</h3>
                <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-gray-700">Book online or chat with us directly on WhatsApp for any questions.</p>
                <div className="mt-8 sm:mt-10 max-w-lg mx-auto bg-white rounded-xl shadow-2xl p-6 sm:p-8">
                    <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6 text-left">
                        <div>
                            <label htmlFor="name" className="block text-base sm:text-lg font-medium text-gray-700 mb-2">Name</label>
                            <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-2.5 sm:py-3 text-base border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-base sm:text-lg font-medium text-gray-700 mb-2">Phone (for WhatsApp)</label>
                            <input type="tel" name="phone" id="phone" required value={formData.phone} onChange={handleChange} className="w-full px-4 py-2.5 sm:py-3 text-base border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                        <div>
                            <label htmlFor="service" className="block text-base sm:text-lg font-medium text-gray-700 mb-2">Service Requested</label>
                            <select name="service" id="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-2.5 sm:py-3 text-base border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                                <option>Home Demo (₹299)</option>
                                <option>Home Service (Re-fixing) (₹799)</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="date" className="block text-base sm:text-lg font-medium text-gray-700 mb-2">Preferred Date</label>
                            <input type={isDateFocused || formData.date ? 'date' : 'text'} onFocus={() => setIsDateFocused(true)} onBlur={() => setIsDateFocused(false)} placeholder="dd-mm-yyyy" name="date" id="date" required value={formData.date} onChange={handleChange} className="w-full px-4 py-2.5 sm:py-3 text-base border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                        <button type="submit" disabled={submissionStatus !== 'idle'} className="w-full bg-green-500 text-white font-bold py-3 sm:py-3.5 rounded-lg hover:bg-green-600 transition duration-300 text-base sm:text-lg disabled:bg-gray-400 disabled:cursor-not-allowed">
                            {submissionStatus === 'idle' && 'Submit Booking'}
                            {submissionStatus === 'submitting' && 'Saving...'}
                            {submissionStatus === 'success' && 'Booking Saved!'}
                        </button>
                         {submissionStatus === 'success' && <p className="text-center text-sm sm:text-base text-gray-600 mt-3">Your booking has been saved successfully!</p>}
                    </form>
                </div>
            </div>
        </section>
    );
};

const Footer: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
    return (
        <footer className="bg-[#E0E8EB] text-gray-700 text-center py-8 sm:py-10">
            <div className="container mx-auto px-4 sm:px-6">
                <p className="text-sm sm:text-base mb-3 sm:mb-4">&copy; 2025 Hair Patch At Home. All rights reserved.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-4 sm:mb-6 flex-wrap">
                    <a href="mailto:info@hairpatchathome.com" className="text-sm sm:text-base hover:text-gray-900 font-medium">info@hairpatchathome.com</a>
                    <button onClick={() => onNavigate('privacy')} className="text-sm sm:text-base hover:text-gray-900 font-medium">Privacy Policy</button>
                    <button onClick={() => onNavigate('about')} className="text-sm sm:text-base hover:text-gray-900 font-medium">About Us</button>
                    <button onClick={() => onNavigate('disclaimer')} className="text-sm sm:text-base hover:text-gray-900 font-medium">Disclaimer</button>
                </div>
                 <div className="text-xs sm:text-sm leading-relaxed">
                    <p className="font-semibold text-sm sm:text-base">Hair Patch At Home</p>
                    <p>Vaibhav mahim co-op HSG Society, office no 2, ground floor, Veer Savarkar Marg, cadel Road,</p>
                    <p>mahim west, mumbai 400016</p>
                    <p className="mt-1 text-xs text-gray-600">Opposite: COFFEE BY DI BELLA & NOBLE CHEMIST</p>
                </div>
            </div>
        </footer>
    );
};

const FloatingWhatsAppButton = () => (
    <a href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer" className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 rounded-full shadow-lg hover:shadow-xl transition duration-300 z-50 p-2 sm:p-3" aria-label="Chat on WhatsApp">
        <WhatsAppIcon />
    </a>
);

const PrivacyPolicy = () => (
    <div className="bg-white py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Privacy Policy</h2>
            <div className="space-y-4 sm:space-y-5 text-base sm:text-lg text-gray-700">
                <p><strong>Last updated: July 24, 2025</strong></p>
                <p>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>
                
                <h3 className="text-xl sm:text-2xl font-semibold pt-4 sm:pt-6">Interpretation and Definitions</h3>
                <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>

                <h3 className="text-xl sm:text-2xl font-semibold pt-4 sm:pt-6">Collecting and Using Your Personal Data</h3>
                <p>While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to: Email address, First name and last name, Phone number, and Usage Data.</p>
                
                <h3 className="text-xl sm:text-2xl font-semibold pt-4 sm:pt-6">Use of Your Personal Data</h3>
                <p>The Company may use Personal Data for the following purposes: To provide and maintain our Service, including to monitor the usage of our Service. To manage Your Account: to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.</p>

                <h3 className="text-xl sm:text-2xl font-semibold pt-4 sm:pt-6">Contact Us</h3>
                <p>If you have any questions about this Privacy Policy, You can contact us: By email: info@hairpatchathome.com</p>
            </div>
        </div>
    </div>
);

const AboutUs = () => (
    <div className="bg-white py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">About Us</h2>
            <div className="space-y-4 sm:space-y-5 text-base sm:text-lg text-gray-700">
                <p>
                    <strong>Hair Patch At Home</strong> is dedicated to providing convenient, professional at-home hair patch services to our valued customers across Mumbai and surrounding areas.
                </p>
                
                <h3 className="text-xl sm:text-2xl font-semibold pt-4 sm:pt-6">Our Mission</h3>
                <p>
                    We believe everyone deserves quality hair solutions without the hassle of visiting salons or clinics. Our mission is to bring professional, affordable hair patch services directly to your doorstep, ensuring comfort and privacy every step of the way.
                </p>

                <h3 className="text-xl sm:text-2xl font-semibold pt-4 sm:pt-6">What We Offer</h3>
                <p>
                    We provide comprehensive at-home hair patch services including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                    <li>Professional hair patch demonstrations and trials</li>
                    <li>Expert application and fitting</li>
                    <li>Maintenance and re-fixing services</li>
                    <li>Personalized consultation and support</li>
                </ul>

                <h3 className="text-xl sm:text-2xl font-semibold pt-4 sm:pt-6">Why Choose Us?</h3>
                <ul className="list-disc list-inside space-y-2 ml-2">
                    <li><strong>Convenience:</strong> Services delivered to your home</li>
                    <li><strong>Affordability:</strong> Starting from just ₹299</li>
                    <li><strong>Privacy:</strong> Professional service in the comfort of your home</li>
                    <li><strong>Expertise:</strong> Trained and experienced technicians</li>
                    <li><strong>Quality:</strong> Premium hair patch products and services</li>
                </ul>

                <h3 className="text-xl sm:text-2xl font-semibold pt-4 sm:pt-6">Contact Us</h3>
                <p>
                    Vaibhav Mahim Co-op HSG Society, Office No 2, Ground Floor, Veer Savarkar Marg, Cadel Road, Mahim West, Mumbai 400016
                </p>
                <p>
                    Email: <a href="mailto:info@hairpatchathome.com" className="text-blue-600 hover:underline">info@hairpatchathome.com</a>
                </p>
            </div>
        </div>
    </div>
);

const Disclaimer = () => (
    <div className="bg-white py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Disclaimer</h2>
            <div className="space-y-4 sm:space-y-5 text-base sm:text-lg text-gray-700">
                <p><strong>Last updated: November 14, 2025</strong></p>
                
                <h3 className="text-xl sm:text-2xl font-semibold pt-4 sm:pt-6">General Disclaimer</h3>
                <p>
                    This website and all information provided by Hair Patch At Home is offered on an "as-is" basis without warranties of any kind. We make no representations or warranties regarding the accuracy, completeness, or reliability of the information provided.
                </p>

                <h3 className="text-xl sm:text-2xl font-semibold pt-4 sm:pt-6">Medical Disclaimer</h3>
                <p>
                    Hair Patch At Home is not a medical service provider. Our services are cosmetic in nature. We do not diagnose, treat, cure, or prevent any medical conditions. Please consult with a dermatologist or medical professional before using our services if you have any underlying scalp conditions or health concerns.
                </p>

                <h3 className="text-xl sm:text-2xl font-semibold pt-4 sm:pt-6">Product Disclaimer</h3>
                <p>
                    While we strive to provide high-quality hair patch products, individual results may vary based on personal factors such as hair type, scalp condition, and application method. We do not guarantee specific results or outcomes.
                </p>

                <h3 className="text-xl sm:text-2xl font-semibold pt-4 sm:pt-6">Liability Limitation</h3>
                <p>
                    Hair Patch At Home shall not be held liable for any direct, indirect, incidental, special, or consequential damages arising from the use of our services or products, including but not limited to loss of profits, loss of use, or data loss.
                </p>

                <h3 className="text-xl sm:text-2xl font-semibold pt-4 sm:pt-6">Allergy and Sensitivity</h3>
                <p>
                    Please inform our technicians of any known allergies or sensitivities to hair products, adhesives, or materials before the service. We are not responsible for allergic reactions resulting from non-disclosure of allergies or sensitivities.
                </p>

                <h3 className="text-xl sm:text-2xl font-semibold pt-4 sm:pt-6">Third-Party Links</h3>
                <p>
                    This website may contain links to third-party websites. We are not responsible for the content, accuracy, or practices of external websites. Access to third-party websites is at your own risk.
                </p>

                <h3 className="text-xl sm:text-2xl font-semibold pt-4 sm:pt-6">Age Restriction</h3>
                <p>
                    Our services are intended for individuals aged 18 years and above. If you are under 18, please obtain parental consent before using our services.
                </p>

                <h3 className="text-xl sm:text-2xl font-semibold pt-4 sm:pt-6">Changes to Disclaimer</h3>
                <p>
                    Hair Patch At Home reserves the right to modify this disclaimer at any time without prior notice. Continued use of our services implies acceptance of the updated disclaimer.
                </p>

                <h3 className="text-xl sm:text-2xl font-semibold pt-4 sm:pt-6">Contact Us</h3>
                <p>
                    If you have any questions regarding this disclaimer, please contact us at <a href="mailto:info@hairpatchathome.com" className="text-blue-600 hover:underline">info@hairpatchathome.com</a>
                </p>
            </div>
        </div>
    </div>
);

export default function App() {
  const [currentPage, setCurrentPage] = useState('main');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0); // Scroll to top on page change
  };
  
  return (
    <div className="bg-white font-['Poppins',_sans-serif]">
      <Header onNavigate={handleNavigate} currentPage={currentPage} />
      <main>
        {currentPage === 'main' ? (
          <>
            <Hero />
            <Steps />
            <Pricing />
            <BookingForm />
          </>
        ) : currentPage === 'privacy' ? (
          <PrivacyPolicy />
        ) : currentPage === 'about' ? (
          <AboutUs />
        ) : currentPage === 'disclaimer' ? (
          <Disclaimer />
        ) : (
          <PrivacyPolicy />
        )}
      </main>
      <Footer onNavigate={handleNavigate} />
      <FloatingWhatsAppButton />
    </div>
  )
}
