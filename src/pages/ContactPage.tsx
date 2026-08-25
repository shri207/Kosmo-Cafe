import React, { useState } from 'react';
import { LionEmblem } from '../components/KosmoLogo';
import { MapPin, Phone, Clock, Navigation, Car, Utensils, ShieldCheck, ExternalLink, Calendar, Users, Send, CheckCircle2, ChevronDown } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '2 Guests',
    preference: 'Outdoor Turf Seating',
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setIsSubmitted(true);
  };

  const faqs = [
    {
      q: 'What are your operating hours and late-night timings?',
      a: 'Kosmo Cafe operates from 11:00 AM in the morning till 3:30 AM late night, 7 days a week. Our full food and beverage menu is active throughout these hours without midnight surcharges.'
    },
    {
      q: 'How does the express drive-through curbside pickup work?',
      a: 'Simply call our direct counter phone at 099623 03090 with your order 10–15 minutes before reaching. When you pull up along 199 TTK Road outside our cafe, our team will dispatch your packed order right to your vehicle.'
    },
    {
      q: 'Are vegetarian items prepared separately from non-vegetarian items?',
      a: 'Yes, 100%. We have dedicated, segregated oil fryers and preparation stations in our kitchen to guarantee absolute purity for our vegetarian patrons.'
    },
    {
      q: 'Is parking available at the TTK Road location?',
      a: 'Yes, there is convenient curbside parking for both two-wheelers and four-wheelers along TTK Road with staff assistance during peak evening and midnight hours.'
    },
    {
      q: 'Do I need a reservation to visit?',
      a: 'Walk-ins are always warmly welcomed! For larger groups (6+ people) or birthday/special celebrations, you can submit the table inquiry form above or call us directly.'
    }
  ];

  return (
    <div id="contact-page" className="min-h-screen bg-[#043C2A] text-[#F6F0DD] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#075C3B] border border-[#D6B34A]/40 text-[#E5C65A] text-xs font-brand tracking-widest uppercase mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#D6B34A]" />
            ALWARPET, CHENNAI
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#F6F0DD]">
            Visit & <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#FFF0BE] via-[#E5C65A] to-[#D6B34A]">Connect</span>
          </h1>
          <div className="w-24 h-[2px] bg-[#D6B34A] mx-auto my-4" />
          <p className="text-base sm:text-lg text-[#F6F0DD]/85 leading-relaxed font-light">
            Find us on TTK Road or reach out for table reservations, drive-through pickups, and midnight inquiries.
          </p>
        </div>

        {/* 2-Column Info & Reservation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-20">
          
          {/* Left Column: Address, Phone, Hours, Badges */}
          <div className="lg:col-span-5 flex flex-col justify-between p-7 sm:p-9 rounded-3xl bg-gradient-to-b from-[#075C3B]/80 to-[#043C2A] border border-[#D6B34A]/35 shadow-2xl">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <LionEmblem size={44} id="contact-lion-icon" />
                <div>
                  <h3 className="font-brand font-bold text-xl text-[#FFFDF5] tracking-wider">
                    KOSMO CAFE
                  </h3>
                  <span className="text-xs text-[#E5C65A] tracking-widest font-semibold uppercase">
                    Alwarpet Hub · Chennai
                  </span>
                </div>
              </div>

              {/* Address detail */}
              <div className="space-y-5 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#043C2A] border border-[#D6B34A]/30 text-[#E5C65A] mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-bold tracking-wider text-[#D6B34A]">Address</h4>
                    <p className="text-sm text-[#FFFDF5] font-medium mt-0.5 leading-snug">
                      199, TTK Rd, Sriram Colony, <br />
                      Alwarpet, Chennai, Tamil Nadu 600018
                    </p>
                    <span className="text-[11px] text-[#F6F0DD]/60 block mt-1">
                      (Near Sriram Colony Junction / Music Academy stretch)
                    </span>
                  </div>
                </div>

                {/* Phone detail */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#043C2A] border border-[#D6B34A]/30 text-[#E5C65A] mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-bold tracking-wider text-[#D6B34A]">Phone & Orders</h4>
                    <a
                      href="tel:09962303090"
                      className="text-base font-bold text-[#FFFDF5] hover:text-[#E5C65A] transition-colors mt-0.5 inline-block"
                    >
                      099623 03090
                    </a>
                    <span className="text-[11px] text-[#F6F0DD]/60 block mt-0.5">
                      Direct Counter Line for Curbside Dispatch
                    </span>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#043C2A] border border-[#D6B34A]/30 text-[#E5C65A] mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-bold tracking-wider text-[#D6B34A]">Operating Hours</h4>
                    <p className="text-sm font-semibold text-[#FFFDF5] mt-0.5">
                      Monday – Sunday: 11:00 AM – 3:30 AM
                    </p>
                    <span className="text-[11px] text-[#E5C65A] font-semibold block mt-0.5">
                      Open late night 7 days a week
                    </span>
                  </div>
                </div>
              </div>

              {/* Service Badges */}
              <div className="mt-8 pt-6 border-t border-[#D6B34A]/20 grid grid-cols-3 gap-2 text-center">
                <div className="p-2.5 rounded-xl bg-[#043C2A]/80 border border-[#D6B34A]/20">
                  <Utensils className="w-4 h-4 text-[#E5C65A] mx-auto mb-1" />
                  <span className="text-[11px] font-bold text-[#FFFDF5]">Dine-In</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#043C2A]/80 border border-[#D6B34A]/20">
                  <Car className="w-4 h-4 text-[#E5C65A] mx-auto mb-1" />
                  <span className="text-[11px] font-bold text-[#FFFDF5]">Drive-Thru</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#043C2A]/80 border border-[#D6B34A]/20">
                  <ShieldCheck className="w-4 h-4 text-[#E5C65A] mx-auto mb-1" />
                  <span className="text-[11px] font-bold text-[#FFFDF5]">Delivery</span>
                </div>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="mt-8 pt-4 flex flex-col sm:flex-row gap-3">
              <a
                href="https://maps.google.com/?q=Kosmo+Cafe+199+TTK+Road+Alwarpet+Chennai+600018"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-full font-brand text-xs font-bold tracking-wider uppercase gold-gradient-btn text-center flex items-center justify-center gap-2 shadow-lg"
              >
                <Navigation className="w-3.5 h-3.5 text-[#043C2A]" />
                GET DIRECTIONS
              </a>
              <a
                href="tel:09962303090"
                className="flex-1 py-3 px-4 rounded-full font-brand text-xs font-semibold tracking-wider uppercase bg-[#043C2A] hover:bg-[#075C3B] text-[#FFF0BE] border border-[#D6B34A]/40 text-center flex items-center justify-center gap-2 transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-[#D6B34A]" />
                CALL KOSMO
              </a>
            </div>
          </div>

          {/* Right Column: Table Reservation & Inquiry Form */}
          <div className="lg:col-span-7 p-7 sm:p-9 rounded-3xl bg-[#022419] border border-[#D6B34A]/30 shadow-2xl">
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle2 className="w-16 h-16 text-[#E5C65A] mx-auto mb-4 animate-bounce" />
                <h3 className="font-serif text-2xl font-bold text-[#FFFDF5] mb-2">
                  Inquiry Received!
                </h3>
                <p className="text-sm text-[#F6F0DD]/80 max-w-md mx-auto mb-6">
                  Thank you, <strong>{formData.name}</strong>. Our team at 199 TTK Road will prepare for your visit. For instant drive-through orders within the next 15 minutes, please call our counter directly at <strong>099623 03090</strong>.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 rounded-full text-xs font-semibold bg-[#D6B34A] text-[#043C2A]"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <span className="text-[10px] font-brand tracking-widest text-[#E5C65A] uppercase font-bold">
                    RESERVATIONS & DRIVE-THROUGH INQUIRIES
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#FFFDF5] mt-1">
                    Book a Table or Request Curbside Service
                  </h3>
                  <p className="text-xs text-[#F6F0DD]/70 mt-1">
                    Walk-ins are always welcomed! Let us know if you're coming with a group.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  <div>
                    <label className="block text-xs font-semibold text-[#D6B34A] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananya Sundaram"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#043C2A] border border-[#D6B34A]/30 text-xs text-[#F6F0DD] focus:outline-none focus:border-[#D6B34A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#D6B34A] mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 98400 12345"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#043C2A] border border-[#D6B34A]/30 text-xs text-[#F6F0DD] focus:outline-none focus:border-[#D6B34A]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-[#D6B34A] mb-1">
                      Date
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#043C2A] border border-[#D6B34A]/30 text-xs text-[#F6F0DD] focus:outline-none focus:border-[#D6B34A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#D6B34A] mb-1">
                      Preferred Time
                    </label>
                    <input
                      type="time"
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#043C2A] border border-[#D6B34A]/30 text-xs text-[#F6F0DD] focus:outline-none focus:border-[#D6B34A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#D6B34A] mb-1">
                      Party Size
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#043C2A] border border-[#D6B34A]/30 text-xs text-[#F6F0DD] focus:outline-none focus:border-[#D6B34A]"
                    >
                      <option value="1 Guest">1 Guest (Solo Chill)</option>
                      <option value="2 Guests">2 Guests (Couple / Friends)</option>
                      <option value="3-4 Guests">3–4 Guests</option>
                      <option value="5-8 Guests">5–8 Guests (Group Table)</option>
                      <option value="8+ Guests">8+ Guests (Celebration)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#D6B34A] mb-1">
                    Seating / Service Type
                  </label>
                  <select
                    value={formData.preference}
                    onChange={(e) => setFormData({ ...formData, preference: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#043C2A] border border-[#D6B34A]/30 text-xs text-[#F6F0DD] focus:outline-none focus:border-[#D6B34A]"
                  >
                    <option value="Outdoor Turf Seating">Outdoor Turf Seating (Open Air Cafe Lights)</option>
                    <option value="Indoor Bistro AC">Indoor Bistro AC Seating</option>
                    <option value="Drive-Through Curbside Collection">Drive-Through Curbside Pickup</option>
                    <option value="Late Night Quick Bite (Post Midnight)">Late Night Quick Bite (Post-Midnight)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#D6B34A] mb-1">
                    Special Requests / Food Preferences
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g., Extra crunchy Cold Milos, celebrating a birthday, high chair needed..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#043C2A] border border-[#D6B34A]/30 text-xs text-[#F6F0DD] focus:outline-none focus:border-[#D6B34A]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full font-brand text-xs font-bold tracking-widest uppercase gold-gradient-btn flex items-center justify-center gap-2 shadow-xl mt-2"
                >
                  <Send className="w-4 h-4 text-[#043C2A]" />
                  SUBMIT TABLE / SERVICE INQUIRY
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Interactive Stylized Map Showcase */}
        <div className="rounded-3xl overflow-hidden bg-[#042419] border border-[#D6B34A]/30 shadow-2xl mb-20">
          <div className="relative w-full h-80 bg-[#031C13] flex items-center justify-center p-6 overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#075C3B_1px,transparent_1px),linear-gradient(to_bottom,#075C3B_1px,transparent_1px)] bg-[size:32px_32px]" />
            <svg className="absolute inset-0 w-full h-full opacity-35" preserveAspectRatio="none">
              <line x1="10%" y1="90%" x2="90%" y2="10%" stroke="#D6B34A" strokeWidth="6" />
              <line x1="10%" y1="90%" x2="90%" y2="10%" stroke="#075C3B" strokeWidth="3" />
              <line x1="20%" y1="20%" x2="80%" y2="80%" stroke="#075C3B" strokeWidth="3" strokeDasharray="6 4" />
              <line x1="0%" y1="50%" x2="100%" y2="50%" stroke="#075C3B" strokeWidth="2" />
            </svg>

            <div className="absolute top-6 left-6 p-2 rounded-lg bg-[#043C2A]/90 border border-[#D6B34A]/25 text-[10px] font-semibold text-[#F6F0DD]/80">
              To Mount Road / Anna Salai ↑
            </div>
            <div className="absolute bottom-6 right-6 p-2 rounded-lg bg-[#043C2A]/90 border border-[#D6B34A]/25 text-[10px] font-semibold text-[#F6F0DD]/80">
              To Mylapore / Adyar ↓
            </div>

            <div className="relative z-10 flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[#D6B34A] flex items-center justify-center shadow-[0_0_30px_rgba(214,179,74,0.6)] border-2 border-[#FFF0BE] animate-bounce">
                <LionEmblem size={44} id="contact-map-pin-lion" />
              </div>
              <div className="mt-2 px-4 py-2 rounded-xl bg-[#043C2A]/95 border border-[#D6B34A] text-center shadow-2xl">
                <span className="font-brand font-bold text-xs text-[#FFF0BE] block">
                  KOSMO CAFE
                </span>
                <span className="text-[10px] text-[#D6B34A] font-semibold">
                  199 TTK Road, Alwarpet
                </span>
              </div>
            </div>
          </div>

          <div className="p-4 bg-[#043C2A] border-t border-[#D6B34A]/20 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-[#F6F0DD]/90">
                199, TTK Rd, Sriram Colony, Alwarpet, Chennai 600018
              </span>
            </div>
            <a
              href="https://maps.google.com/?q=Kosmo+Cafe+199+TTK+Road+Alwarpet+Chennai+600018"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E5C65A] hover:text-[#FFF0BE]"
            >
              Open Route in Google Maps <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs uppercase font-brand tracking-widest text-[#E5C65A] font-bold">
              COMMON QUESTIONS
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#FFFDF5] mt-1">
              Visiting Kosmo Cafe
            </h2>
            <div className="w-16 h-[2px] bg-[#D6B34A] mx-auto my-3" />
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-[#022419] border border-[#D6B34A]/25 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 hover:bg-[#075C3B]/30 transition-colors"
                >
                  <span className="font-semibold text-sm text-[#FFFDF5]">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#D6B34A] transition-transform duration-200 flex-shrink-0 ${
                      openFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-xs sm:text-sm text-[#F6F0DD]/80 leading-relaxed border-t border-[#D6B34A]/10 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
