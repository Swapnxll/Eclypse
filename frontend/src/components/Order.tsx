import React from 'react';

const OrderSummary = () => {
    
  return (
    <div className="w-full md:w-1/2">
        <p className="font-home text-xs text-gray-500 mt-8 my-3">
            By placing your order, you agree to our company Privacy policy and Conditions of use.
          </p>
      <h2 className="font-home text-lg font-semibold border-b border-gray-300 pb-2 mb-5">
        Order Summary
      </h2>

      <div className="space-y-3 mb-4">
        <div className="flex justify-between items-center">
          <span className="font-home text-m">Items (1):</span>
          <span className="font-home text-m">Book Title 1</span>
          <span className="font-home text-m">₹499</span>
        </div>
        
      </div>

      <div className="flex justify-between items-center mb-1">
        <span className="font-home text-m">Shipping and handling:</span>
        <span className="font-home text-m">₹50</span>
      </div>

      <div className="flex justify-between items-center mb-1">
        <span className="font-home text-m">Before tax:</span>
        <span className="font-home text-m">₹1,298</span>
      </div>

      <div className="flex justify-between items-center mb-4">
        <span className="font-home text-m">Tax Collected:</span>
        <span className="font-home text-m">₹65</span>
      </div>

      <div className="flex justify-between items-center border-t border-black pt-3 mb-6">
        <span className="font-home text-sm font-semibold">Order Total:</span>
        <span className="font-home text-sm font-semibold">₹1,363</span>
      </div>

      <div className="flex justify-between gap-4">
        
        <button
          type="submit"
          className="flex-1 bg-black  text-white py-2 px-4 rounded font-home text-sm"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
