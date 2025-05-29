import React,{useState,useEffect} from 'react';
import axios from 'axios';

interface OrderItem {
  quantity: number;
  title: string;
  price: number;
}

interface OrderData {
  
  items: OrderItem[];
  shippingAndHandling: number;
  beforeTax: number;
  taxCollected: number;
  orderTotal: number;
}

const OrderSummary = () => {
  const [order, setOrder] = useState<OrderData | null>(null);
    useEffect(() => {
    axios.get<OrderData>(`${import.meta.env.VITE_SERVER}`)
      .then(response => setOrder(response.data))
      .catch(error => console.error('Error fetching order:', error));
  }, []);


   if (!order) {
    return <div>Loading order summary...</div>;
  }


  return (
    <div className="w-full md:w-1/2">
      <p className="font-home text-xs text-gray-500 mt-8 my-3">
        By placing your order, you agree to our company Privacy policy and Conditions of use.
      </p>
      <h2 className="font-home text-lg font-semibold border-b border-gray-300 pb-2 mb-5">
        Order Summary
      </h2>

      <div className="space-y-3 mb-4">
        {order.items.map((item, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="font-home text-m">Items ({item.quantity}):</span>
            <span className="font-home text-m">{item.title}</span>
            <span className="font-home text-m">₹{item.price}</span>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mb-1">
        <span className="font-home text-m">Shipping and handling:</span>
        <span className="font-home text-m">₹{order.shippingAndHandling}</span>
      </div>

      <div className="flex justify-between items-center mb-1">
        <span className="font-home text-m">Before tax:</span>
        <span className="font-home text-m">₹{order.beforeTax}</span>
      </div>

      <div className="flex justify-between items-center mb-4">
        <span className="font-home text-m">Tax Collected:</span>
        <span className="font-home text-m">₹{order.taxCollected}</span>
      </div>

      <div className="flex justify-between items-center border-t border-black pt-3 mb-6">
        <span className="font-home text-sm font-semibold">Order Total:</span>
        <span className="font-home text-sm font-semibold">₹{order.orderTotal}</span>
      </div>

      <div className="flex justify-between gap-4">
        <button
          type="submit"
          className="flex-1 bg-black text-white py-2 px-4 rounded font-home text-sm"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
