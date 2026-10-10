import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="min-h-screen bg-ivory">
      {/* Page Header */}
      <div className="bg-paper py-20 px-6 lg:px-16 border-b border-stone/50">
        <div className="max-w-7xl mx-auto">
          <div className="w-12 h-[2px] bg-gold mb-8"></div>
          <h1 className="text-display text-ink mb-6">CONTACT US</h1>
          <p className="text-body text-ink-soft max-w-2xl">
            Our experienced advisory team is ready to guide you through your real estate journey in Sharjah.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-20 flex flex-col lg:flex-row gap-16">
        {/* Contact Form */}
        <div className="lg:w-3/5 bg-paper p-10 lg:p-14 border border-stone/40 rounded-sm">
          <h2 className="text-2xl font-heading text-ink mb-8">Send us a message</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-[10px] uppercase tracking-widest text-ink-soft font-medium mb-2 block">First Name</label>
                <input type="text" className="w-full bg-white border border-stone/50 px-4 py-3 rounded-sm outline-none focus:border-gold/50 text-sm" placeholder="John" />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-widest text-ink-soft font-medium mb-2 block">Last Name</label>
                <input type="text" className="w-full bg-white border border-stone/50 px-4 py-3 rounded-sm outline-none focus:border-gold/50 text-sm" placeholder="Doe" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-[10px] uppercase tracking-widest text-ink-soft font-medium mb-2 block">Email Address</label>
                <input type="email" className="w-full bg-white border border-stone/50 px-4 py-3 rounded-sm outline-none focus:border-gold/50 text-sm" placeholder="john@example.com" />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-widest text-ink-soft font-medium mb-2 block">Phone Number</label>
                <input type="tel" className="w-full bg-white border border-stone/50 px-4 py-3 rounded-sm outline-none focus:border-gold/50 text-sm" placeholder="+971 50 123 4567" />
              </div>
            </div>

            <div>
              <label className="text-[10px] uppercase tracking-widest text-ink-soft font-medium mb-2 block">Interest</label>
              <select className="w-full bg-white border border-stone/50 px-4 py-3 rounded-sm outline-none focus:border-gold/50 text-sm cursor-pointer">
                <option>Buying Property</option>
                <option>Selling Property</option>
                <option>Off-Plan Investment</option>
                <option>General Inquiry</option>
              </select>
            </div>

            <div>
              <label className="text-[10px] uppercase tracking-widest text-ink-soft font-medium mb-2 block">Message</label>
              <textarea rows={5} className="w-full bg-white border border-stone/50 px-4 py-3 rounded-sm outline-none focus:border-gold/50 text-sm resize-none" placeholder="How can we help you?"></textarea>
            </div>

            <button type="button" className="w-full bg-ink text-white py-4 rounded-sm font-medium text-sm hover:bg-ink-soft transition-colors flex items-center justify-center gap-2">
              Send Message <Send size={16} />
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="lg:w-2/5 space-y-12">
          <div>
            <h3 className="text-xl font-heading text-ink mb-6">Our Office</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4 text-ink-soft">
                <MapPin className="text-gold shrink-0 mt-1" size={20} />
                <div>
                  <div className="font-medium text-ink mb-1">Ahmad Al Shamsi Headquarters</div>
                  <p className="text-sm leading-relaxed">Office 402, Al Majaz Tower 1<br />Al Majaz Waterfront, Sharjah<br />United Arab Emirates</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-ink-soft">
                <Phone className="text-gold shrink-0" size={20} />
                <div>
                  <div className="text-sm">+971 50 123 4567</div>
                  <div className="text-sm">+971 6 123 4567</div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-ink-soft">
                <Mail className="text-gold shrink-0" size={20} />
                <div className="text-sm">info@ahmadalshamsi.ae</div>
              </div>
              
              <div className="flex items-start gap-4 text-ink-soft">
                <Clock className="text-gold shrink-0 mt-1" size={20} />
                <div>
                  <div className="text-sm font-medium text-ink mb-1">Working Hours</div>
                  <div className="text-sm">Monday - Thursday: 9:00 AM - 6:00 PM</div>
                  <div className="text-sm">Friday: 9:00 AM - 12:30 PM</div>
                  <div className="text-sm">Saturday - Sunday: Closed</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full h-64 bg-stone rounded-sm relative overflow-hidden border border-stone/50">
             <img src="/Golden-Hour Waterfront Skyline.png" alt="Office Location" className="w-full h-full object-cover opacity-80" />
             <div className="absolute inset-0 flex items-center justify-center bg-ink/20">
                <div className="bg-white px-4 py-2 rounded-sm text-xs font-medium text-ink shadow-lg flex items-center gap-2">
                  <MapPin size={14} className="text-gold" /> Al Majaz Waterfront
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
