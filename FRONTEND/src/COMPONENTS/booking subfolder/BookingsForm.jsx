import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import api from "../libs/axios"; 

const BookingsForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [ageLimit, setAgeLimit] = useState('');
  const [artist, setArtist] = useState('');
  const [gender, setGender] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  // Email validation regex
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // KENYAN PHONE VALIDATION REGEX // i will change it in future 
  // Supports formats: 0712345678, 0112345678, 254712345678, +254712345678, 07 12 345 678, 07-12-345-678
  const isValidPhone = (phone) => {
    // Remove all non-digit characters except leading +
    const cleaned = phone.replace(/[^\d+]/g, '');
    
    // Kenyan phone numbers validation
    //  Local format: 0712345678 or 0112345678 (starts with 07 or 01, exactly 10 digits)
    //  International format: 254712345678 or +254712345678 (starts with 254 or +254, exactly 12 digits with 254)
    const kenyanPhoneRegex = /^(?:(?:\+?254|0)(7|1)\d{8})$/;
    
    // Handle +254 format by removing the + for validation
    const phoneToValidate = cleaned.startsWith('+') ? cleaned.substring(1) : cleaned;
    
    return kenyanPhoneRegex.test(phoneToValidate);
  };

  // Format phone number for display (optional helper)
  const formatPhoneForDisplay = (phone) => {
    // This is just for display if you want to auto-format as user types
    const cleaned = phone.replace(/[^\d+]/g, '');
    if (cleaned.startsWith('+')) {
      return cleaned;
    } else if (cleaned.startsWith('254')) {
      return '+' + cleaned;
    } else if (cleaned.startsWith('0')) {
      return cleaned;
    }
    return phone;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for empty fields
    if (!firstName.trim() || !lastName.trim() || !phone.trim() || !email.trim() || !ageLimit || !artist || !gender) {
      toast.error("All fields are required");
      return;
    }

    // Email validation
    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    // KENYAN PHONE VALIDATION
    if (!isValidPhone(phone)) {
      toast.error("Please enter a valid Kenyan phone number (e.g., 0712345678, 0112345678, or +254712345678)");
      return;
    }

    // Check terms agreement
    if (!agreedToTerms) {
      toast.error("You must agree to the terms & conditions");
      return;
    }

    setLoading(true);
    
    try {
      // Format phone to a consistent format before sending to API
      const formattedPhone = phone.startsWith('0') ? '254' + phone.substring(1) : phone.replace('+', '');
      
      const data = {
  firstName,
  lastName,
  phone: formattedPhone,
  email,
  ageLimit,
  artist,
  gender,
  agreedToTerms,
  termsVersion: "v1.0"
};
      await fetch('http://localhost:5001/api/v1/tattoohub', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
});
      
      toast.success("Your booking was successful! We will contact you soon.");
      navigate("/blog"); // Make sure this route exists
      
      // Reset form after successful submission
      setFirstName('');
      setLastName('');
      setPhoneNumber('');
      setEmail('');
      setAgeLimit('');
      setArtist('');
      setGender('');
      setAgreedToTerms(false);
      
    } catch (error) {
      console.error("Error in creating the booking", error);
      
      if (error.response && error.response.status === 429) {
        toast.error("Slow down! You are creating multiple bookings at once", {
          duration: 4000,
          icon: "💀"
        });
      } else {
        toast.error("Failed to book. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  // Optional: Auto-format phone as user types
  const handlePhoneChange = (e) => {
    let value = e.target.value;
    // Remove any non-digit characters
    value = value.replace(/[^\d+]/g, '');
    
    // Limit length for Kenyan numbers (max 13 chars with +254)
    if (value.length > 13) {
      value = value.slice(0, 13);
    }
    
    setPhoneNumber(value);
  };

  return (
    <section className="w-full bg-zinc-900 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        
        <div className="bg-zinc-800/80 rounded-xl p-8 md:p-10 border border-zinc-700 shadow-2xl">
          
          <h2 className="text-white text-3xl md:text-4xl font-['Abril_Fatface',cursive] mb-8 text-center">
            Book Your Appointment
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* NAME INPUT FIELDS (FirstName & LastName) */}
            <div className="space-y-2">
              <label className="text-gray-300 text-sm font-medium block">
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                    className="w-full bg-zinc-700/50 border border-zinc-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)} 
                    placeholder="Last Name"
                    className="w-full bg-zinc-700/50 border border-zinc-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                    required
                  />
                </div>
              </div>
            </div>

            {/* PHONE NUMBER INPUT FIELD - KENYAN FORMAT */}
            <div className="space-y-2">
              <label className="text-gray-300 text-sm font-medium block">
                Your Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={phone}
                onChange={handlePhoneChange}
                placeholder="0712345678 or +254712345678"
                className="w-full bg-zinc-700/50 border border-zinc-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                required
              />
              <p className="text-gray-500 text-xs mt-1">
                Kenyan format: 0712345678, 0112345678, or +254712345678
              </p>
            </div>

            {/* EMAIL ADDRESS */}
            <div className="space-y-2">
              <label className="text-gray-300 text-sm font-medium block">
                Your Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@example.com"
                className="w-full bg-zinc-700/50 border border-zinc-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                required
              />
            </div>

            {/* GENDER DROPDOWN  */}
            <div className="space-y-2">
              <label className="text-gray-300 text-sm font-medium block">
                Gender <span className="text-red-500">*</span>
              </label>
              <select
                name="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full bg-zinc-700/50 border border-zinc-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors appearance-none cursor-pointer"
                required
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239CA3AF'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 1rem center',
                  backgroundSize: '1.5rem'
                }}
              >
                <option value="" disabled selected hidden>Please Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="non-binary">Non-binary</option>
                <option value="prefer not to say">Prefer not to say</option>
              </select>
            </div>

            {/* OVER 18 DROPDOWN */}
            <div className="space-y-2">
              <label className="text-gray-300 text-sm font-medium block">
                Are You Over 18? <span className="text-red-500">*</span>
              </label>
              <select
                name="ageLimit"
                value={ageLimit}
                onChange={(e) => setAgeLimit(e.target.value)}
                className="w-full bg-zinc-700/50 border border-zinc-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors appearance-none cursor-pointer"
                required
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239CA3AF'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 1rem center',
                  backgroundSize: '1.5rem'
                }}
              >
                <option value="" disabled selected hidden>Please Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            {/* SELECT ARTIST DROPDOWN */}
            <div className="space-y-2">
              <label className="text-gray-300 text-sm font-medium block">
                Select Artist <span className="text-red-500">*</span>
              </label>
              <select
                name="artist"
                value={artist}
                onChange={(e) => setArtist(e.target.value)}
                className="w-full bg-zinc-700/50 border border-zinc-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors appearance-none cursor-pointer"
                required
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239CA3AF'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 1rem center',
                  backgroundSize: '1.5rem'
                }}
              >
                <option value="" disabled selected hidden>Please Select</option>
                <option value="piercers">Piercers</option>
                <option value="tattooArtist">Tattoo Artist</option>
              </select>
            </div>

            {/* TERMS & CONDITIONS CHECKBOX */}
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="terms"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  className="mt-1 w-4 h-4 bg-zinc-700 border-zinc-600 rounded focus:ring-red-500 text-red-500"
                  required
                />
                <label htmlFor="terms" className="text-gray-300 text-sm leading-relaxed">
                  By clicking the submit button, I agree to terms & conditions. <span className="text-red-500">*</span>
                </label>
              </div>

              {/* Consent text */}
              <p className="text-gray-400 text-xs leading-relaxed bg-zinc-700/30 p-4 rounded-lg border border-zinc-700">
                By checking the box and providing your mobile number, you are giving consent for Art and Piercing Studios 
                to send text messages and emails related to products, services, promotions, and other business 
                matters. Message frequency may vary, and standard messaging rates may apply. You have the right 
                to opt-out at any time by replying "STOP." Your privacy is important, and your mobile number and 
                email address will not be shared without explicit consent. Inked NYC may update these terms, and 
                changes will be effective immediately. Checking the box indicates your understanding and acceptance 
                of these terms for text.
              </p>
            </div>

            {/* SUBMIT BUTTON */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-red-600 hover:bg-red-700 text-white font-bold text-lg py-4 px-6 rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl shadow-lg ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {loading ? 'Submitting...' : 'Submit feedback...'}
              </button>
            </div>
           
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingsForm;