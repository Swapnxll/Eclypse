import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Layout from '../components/Layout';
import OrderSummary from '../components/Order';

interface FormData {
  firstName: string;
  lastName: string;
  streetAddress: string;
  aptNumber: string;
  state: string;
  zip: string;
}

const Cart = () => {
    const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    streetAddress: '',
    aptNumber: '',
    state: '',
    zip: ''
  });

  

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('Form submitted:', formData);
  };
  return (
    <>
      <div className='bg-white text-black'>
        <Layout>
            <Navbar isDarkBackground={false} />
    <div className="p-10">
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-8">
        
        <div className="w-full md:w-1/2">
        <div className="flex items-center mb-3">
        <input
          type="radio"
          name="shippingMethod"
          id="shippingRadio"
          className="w-6 h-6 text-red-600 accent-red-600"
        />
        <label className="block font-home text-xl px-3 text-gray-600 mb-1">
              Add New Address
        </label>
      </div>
          <h2 className="font-home text-lg font-semibold border-b border-gray-300 pb-2 mb-5">
            Shipping Address
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <div className="w-full sm:w-1/2">
              <label  className="block font-home text-xs text-gray-600 mb-1">
                First Name
              </label>
              <input
                type="text"
                id="first-name"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="w-full p-2 border border-gray-300 rounded font-home text-sm"
              />
            </div>
            <div className="w-full sm:w-1/2">
              <label  className="block font-home text-xs text-gray-600 mb-1">
                Last Name
              </label>
              <input
                type="text"
                id="last-name"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="w-full p-2 border border-gray-300 rounded font-home text-sm"
              />
            </div>
          </div>
          
          <div className="mb-4">
            <label  className="block font-home text-xs text-gray-600 mb-1">
              Street Address
            </label>
            <input
              type="text"
              id="street-address"
              name="streetAddress"
              value={formData.streetAddress}
              onChange={handleInputChange}
              required
              className="w-full p-2 border border-gray-300 rounded font-home text-sm"
            />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <div className="w-full sm:w-1/3">
              <label  className="block font-home text-xs text-gray-600 mb-1">
                Apt Number
              </label>
              <input
                type="text"
                id="apt-number"
                name="aptNumber"
                value={formData.aptNumber}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded font-home text-sm"
              />
            </div>
            <div className="w-full sm:w-1/3">
              <label htmlFor="state" className="block font-home text-xs text-gray-600 mb-1">
                State
              </label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                required
                className="w-full p-2 border border-gray-300 rounded font-home text-sm"
              />
            </div>
            <div className="w-full sm:w-1/3">
              <label htmlFor="zip" className="block font-home text-xs text-gray-600 mb-1">
                Zip
              </label>
              <input
                type="text"
                id="zip"
                name="zip"
                value={formData.zip}
                onChange={handleInputChange}
                required
                className="w-full p-2 border border-gray-300 rounded font-home text-sm"
              />
            </div>
            
          </div>
            <div className="flex gap-3">
        <button
            type="button"
            className="w-1/3 bg-white border border-black text-black flex items-center justify-center px-4 py-2 rounded-md cursor-pointer hover:bg-gray-100 transition"
        >
            Cancel
        </button>
        <button
            type="submit"
            className="w-2/3 bg-black text-white flex items-center justify-center px-4 py-2 rounded-md cursor-pointer hover:bg-gray-800 transition"
        >
            Add Address
        </button>
        </div>

          
          
        </div>
        
        
        {/* Order Summary Section */}
        <OrderSummary />
        </form>
      
    </div>
        </Layout>
        
      </div>
    </>
  )
}

export default Cart
