// 'use client';
// import { useState, useEffect } from 'react';

import CheckoutButton from '@/components/CheckoutButton';
import React from 'react';
// import { useRouter } from 'next/navigation';
import Link from 'next/link';

import { headers } from 'next/headers';

export default async function CheckoutPage() {

    const headersList = headers();
    const host = headersList.get('host');
    const protocol = process.env.VERCEL ? 'https' : 'http';
    const baseUrl = `${protocol}://${host}`;

    const response = await fetch(`${baseUrl}/api/checkout`, { cache: 'no-store' });

    // const response = await fetch('http://localhost:3000/api/checkout');
    // const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/checkout`, { cache: 'no-store' });

    if (!response.ok) {
        throw new Error('Failed to fetch checkout data');
    }
    const data = await response.json();
    // console.log("Checkout data:", data);
    // console.log("Checkout selections:", data[0]);
    if (!data || data.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100"
                style={{
                    backgroundImage: "url('/bento-background-2.jpg')",
                    backgroundSize: 'contain',
                    backgroundPosition: 'center'
                }}>
                <h1 className="text-4xl font-bold mb-4">No selections found</h1>
                <p className="text-2xl">Please go back to the Bento selection page to make your selections.</p>
                <Link href="/bento" className="text-xlmt-4 text-blue-500 hover:underline">Go to Bento Selection</Link>
            </div>
        );
    }
    const selections = data[0].map((item) => ({
        name: item.name,
        items: item.items,
    }));
    console.log("Selections:", selections);

    // const router = useRouter();
    // const selections = router.query.selections
    //     ? JSON.parse(router.query.selections)
    //     : [];

    // const [selections, setSelections] = useState([]);
    // const [error, setError] = useState(null);

    // const fetchBentoSelections = async () => {
    //     try {
    // const response = await fetch('/api/checkout');
    // const data = await response.json();
    //         // setBentoSelections(data);
    //         console.log(data);
    //     } catch (error) {
    //         // setError(error.message);
    //         console.log("Error fetching bento selections:", error);
    //     }
    // };

    // useEffect(() => {
    //     fetchBentoSelections();
    // }, []);

    const bentos = [
        { name: 'Bento Pro', price: '₱349.00' },
        { name: 'Bento Pro Max', price: '₱499.00' },
        { name: 'Bento Pro Max Plus', price: '₱649.00' },
    ];

    return (
        <div className="flex flex-col py-8 items-center justify-center min-h-screen bg-gray-100"
            style={{
                backgroundImage: "url('/bento-background-2.jpg')",
                backgroundSize: 'contain',
                backgroundPosition: 'center'
            }}>
            <h1 className="text-4xl font-bold mb-6">Checkout</h1>
            <Link href="/bento" className="flex items-center ml-4 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-arrow-left-icon lucide-circle-arrow-left"><circle cx="12" cy="12" r="10" /><path d="M16 12H8" /><path d="m12 8-4 4 4 4" /></svg>
                <span className="ml-3 text-xl">Back to Bento Selection</span>
            </Link>
            <div className="shadow-md rounded-lg p-6 mb-6 w-full max-w-2xl border-2 border-gray-300 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {selections.map((selection, index) => (
                    <div key={index}>
                        <h2 className="text-2xl font-bold mb-2">{selection.name}</h2>
                        <h3 className="text-lg mb-2">{bentos.find((bento) => bento.name === selection.name).price}</h3>
                        <ul>
                            {Object.keys(selection.items).map((category, index) => (
                                <li key={index}>
                                    <strong>{(() => {
                                        switch (category) {
                                            case "mainCourse":
                                                return "Main Course";
                                            case "snack":
                                                return "Snack";
                                            case "dessert":
                                                return "Dessert";
                                            case "drink":
                                                return "Drink";
                                            default:
                                                return category;
                                        }
                                    })()}</strong>
                                    <ul className="list-disc ml-6">
                                        {selection.items[category].map((item, index) => (
                                            <li key={index}>{item.name}</li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="shadow-md rounded-lg p-6 mb-6 w-full max-w-2xl border-2 border-gray-300">
                <h2 className="text-2xl font-bold mb-4">Total Amount</h2>
                <ul className="list-disc ml-6">
                    {selections.map((selection, index) => (
                        <li key={index}>
                            {selection.name}: {bentos.find((bento) => bento.name === selection.name).price}
                        </li>
                    ))}
                </ul>
                <p className="text-lg font-bold mt-4">Total: ₱{selections.reduce((total, selection) => {
                    const bentoPrice = bentos.find((bento) => bento.name === selection.name).price;
                    return total + parseFloat(bentoPrice.replace('₱', '').replace(',', ''));
                }, 0).toFixed(2)}</p>
            </div>
            <CheckoutButton disabled={selections.length === 0} />

            {/* <p className="text-lg mb-4">Thank you for your order!</p>
            <p className="text-md text-gray-600">Your order will be processed shortly.</p> */}
        </div>
    );
}