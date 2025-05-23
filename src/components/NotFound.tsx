import React from 'react';

const NotFound: React.FC = () => (
  <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 w-full h-full">
    <h1 className="text-6xl sm:text-7xl font-extrabold text-blue-600 mb-2 sm:mb-4">404</h1>
    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-1 sm:mb-2 text-center">Page Not Found</h2>
    <p className="text-gray-600 mb-6 sm:mb-8 text-center px-4 max-w-md">Sorry, the page you are looking for does not exist.</p>
    <a
      href="/"
      className="px-5 py-2 sm:px-6 sm:py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition font-medium text-base sm:text-lg"
    >
      Go Home
    </a>
  </div>
);

export default NotFound;
