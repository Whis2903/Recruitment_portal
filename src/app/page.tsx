"use client";

import { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  registrationNumber: string;
  mailId: string;
  phoneNumber: string;
  department: string;
  year: string;
  domain: string;
  resume: File | null;
}

const Home: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    registrationNumber: '',
    mailId: '',
    phoneNumber: '',
    department: '',
    year: '',
    domain: 'R&D',
    resume: null,
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'file' ? files?.[0] ?? null : value,
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    // Name validation (only letters)
    if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      newErrors.name = "Name should contain only letters.";
    }

    // Registration number validation (alphanumeric and capital letters)
    if (!/^[A-Z0-9]+$/.test(formData.registrationNumber)) {
      newErrors.registrationNumber = "Registration number should be alphanumeric and in capital letters.";
    }

    // Email validation (must end with srmist.edu.in)
    if (!/^[\w-.]+@srmist\.edu\.in$/.test(formData.mailId)) {
      newErrors.mailId = "Email should end with srmist.edu.in.";
    }

    // Phone number validation (only numeric)
    if (!/^\d+$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone number should be numeric.";
    }

    // Department validation (only letters)
    if (!/^[a-zA-Z\s]+$/.test(formData.department)) {
      newErrors.department = "Department should contain only letters.";
    }

    setErrors(newErrors);

    // Return true if no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      // Handle form submission logic here
      console.log('Form Data Submitted:', formData);
      alert('Form submitted successfully!');
    } else {
      alert('Please correct the errors in the form.');
    }
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url("/blacky.jpg")' }}>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-20 backdrop-blur-md border-b border-gray-300 shadow-lg z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-2xl font-bold text-sky-500">Recruitment Portal</div>
          <div>
            <a href="#" className="text-white hover:text-sky-500 mx-2">Home</a>
            <a href="#" className="text-white hover:text-sky-500 mx-2">About</a>
            <a href="#" className="text-white hover:text-sky-500 mx-2">Contact</a>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="flex items-center justify-between min-h-screen">
        {/* Left Side Text */}
        <div className="w-1/2 p-6 flex justify-center items-center ">
          <h1 className="text-4xl font-bold text-sky-500 animate-blink">
            ACM SIGKKD STUDENT CHAPTER
          </h1>
        </div>

        {/* Form Container */}
        <div className="w-full md:w-1/2 p-6">
          <form 
            onSubmit={handleSubmit} 
            className="w-full max-w-lg p-8 bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-lg border border-gray-300"
          >
            <h1 className="text-2xl font-bold mb-6 text-center text-white">Recruitment Portal</h1>
            
            {/* Name */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-200">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white bg-opacity-50 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>
            
            {/* Registration Number */}
            <div className="mb-4">
              <label htmlFor="registrationNumber" className="block text-sm font-medium text-gray-200">Registration Number:</label>
              <input
                type="text"
                id="registrationNumber"
                name="registrationNumber"
                value={formData.registrationNumber}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white bg-opacity-50 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              {errors.registrationNumber && <p className="text-red-500 text-xs mt-1">{errors.registrationNumber}</p>}
            </div>
            
            {/* Email */}
            <div className="mb-4">
              <label htmlFor="mailId" className="block text-sm font-medium text-gray-200">Mail ID:</label>
              <input
                type="email"
                id="mailId"
                name="mailId"
                value={formData.mailId}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white bg-opacity-50 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              {errors.mailId && <p className="text-red-500 text-xs mt-1">{errors.mailId}</p>}
            </div>
            
            {/* Phone Number */}
            <div className="mb-4">
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-200">Phone Number:</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white bg-opacity-50 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>}
            </div>
            
            {/* Department */}
            <div className="mb-4">
              <label htmlFor="department" className="block text-sm font-medium text-gray-200">Department:</label>
              <input
                type="text"
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white bg-opacity-50 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              {errors.department && <p className="text-red-500 text-xs mt-1">{errors.department}</p>}
            </div>
            
            {/* Year */}
            <div className="mb-4">
              <label htmlFor="year" className="block text-sm font-medium text-gray-200">Year:</label>
              <input
                type="text"
                id="year"
                name="year"
                value={formData.year}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white bg-opacity-50 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            
            {/* Domain */}
            <div className="mb-4">
              <label htmlFor="domain" className="block text-sm font-medium text-gray-200">Domain:</label>
              <select
                id="domain"
                name="domain"
                value={formData.domain}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white bg-opacity-50 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="R&D">R&D</option>
                <option value="WEB DEV">WEB DEV</option>
                <option value="CORPORATE">CORPORATE</option>
                <option value="CREATIVES">CREATIVES</option>
              </select>
            </div>
            
            {/* Resume Upload */}
            <div className="mb-6">
              <label htmlFor="resume" className="block text-sm font-medium text-gray-200">Upload Resume:</label>
              <input
                type="file"
                id="resume"
                name="resume"
                onChange={handleChange}
                required
                className="mt-1 block w-full text-sm text-gray-200
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100"
              />
            </div>
            
            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
