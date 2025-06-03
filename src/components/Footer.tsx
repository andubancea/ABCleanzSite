
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-abcleanz-blue-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-abcleanz-blue-800 font-bold">
                A
              </div>
              <span className="text-xl font-bold">ABCleanz</span>
            </div>
            <p className="text-blue-100 mb-4">
              Professional window cleaning services for homes and businesses. Crystal clear results, every time.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2 text-blue-100">
              <p>📞 (555) 123-4567</p>
              <p>✉️ info@abcleanz.com</p>
              <p>📍 Serving the Greater Metro Area</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-blue-100">
              <li>Residential Window Cleaning</li>
              <li>Commercial Window Cleaning</li>
              <li>Post-Construction Cleanup</li>
              <li>Screen Cleaning</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-8 pt-8 text-center text-blue-200">
          <p>&copy; 2024 ABCleanz. All rights reserved. | Licensed & Insured</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
