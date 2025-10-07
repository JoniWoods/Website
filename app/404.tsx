import React from "react";

export default function Custom404() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black text-center p-8" style={{ fontFamily: 'system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"' }}>
      <img src="/images/JoniWoods_logo.png" alt="Joni Woods Logo" className="mb-8" style={{ maxWidth: 180 }} />
      <h1 className="text-5xl font-bold mb-4" style={{ letterSpacing: '2px' }}>404</h1>
      <h2 className="text-xl font-medium mb-6">This page could not be found.</h2>
      <p className="text-base mb-8">Return to <a href="/" className="text-blue-600 underline">Home</a></p>
      <div className="mt-8">
        <span className="block text-sm text-gray-500">Joni Woods - Burned, Blocked, and Better Than Ever</span>
      </div>
    </div>
  );
}
