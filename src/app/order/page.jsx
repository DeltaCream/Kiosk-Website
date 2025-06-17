import Link from 'next/link';

// components/OrderConfirmationPage.js
export default function OrderConfirmationPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100"
            style={{
                backgroundImage: "url('/bento-background-2.jpg')",
                backgroundSize: 'contain',
                backgroundPosition: 'center'
            }}
        >
            <h1 className="text-4xl font-bold mb-4">Order Confirmation</h1>
            <p className="text-2xl">Your order has been successfully placed.</p>
            <p className="text-2xl">Thank you for your order!</p>
            <Link href="/about-us" className="text-xl mt-4 text-blue-500 hover:underline">Continue to About Us</Link>
        </div>
    );
}