import { Link } from "react-router";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import logo from "../../assets/logo.jpeg";

export function Footer() {
  return (
    <footer className="bg-black text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src={logo} alt="Flexon Sports Foundation" className="h-10 w-auto object-contain" />
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-none">FLEXON</span>
                <span className="text-[12px] text-primary leading-none mt-1">SPORTS FOUNDATION</span>
              </div>
            </div>
            <p className="text-sm opacity-90 mb-4">
              Fueling Rural Grit. Powering National Dreams.
            </p>
            <p className="text-xs italic opacity-80">
              "Your belief. Their life-changing opportunity."
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/vision-mission" className="hover:text-primary transition-colors">
                  Vision & Mission
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/achievements" className="hover:text-primary transition-colors">
                  Achievements
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-primary transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Get Involved</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/donate" className="hover:text-primary transition-colors">
                  Donate Now
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#volunteer" className="hover:text-primary transition-colors">
                  Become a Volunteer
                </a>
              </li>
              <li>
                <a href="#partner" className="hover:text-primary transition-colors">
                  Partner With Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Rural Sports Hub, Maharashtra, India</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>info@flexonsports.org</span>
              </li>
            </ul>
            <div className="flex space-x-3 mt-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm">
          <p className="opacity-90">
            © 2026 Flexon Sports Foundation. All rights reserved. | Transparent. Accountable. Impact-Driven.
          </p>
          <p className="mt-2 text-xs italic opacity-80">
            "The game is just beginning. Let's play for India."
          </p>
        </div>
      </div>
    </footer>
  );
}