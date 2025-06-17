'use client'
// BentoSelectionPage.js
import React from "react";
import BentoItem from "@/components/BentoItem";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import ErrorToast from "@/components/ErrorToast"; // Adjust the import path as necessary

export default function BentoSelectionPage() {
    const bentoItems = [
        { image: "/bento box pro.jpg", link: "/bento-pro", name: "Bento Pro", price: "349.00" },
        { image: "/bento box pro max.jpeg", link: "/bento-pro-max", name: "Bento Pro Max", price: "499.00" },
        { image: "/bento box pro max plus.jpeg", link: "/bento-pro-max-plus", name: "Bento Pro Max Plus", price: "649.00" },
    ];

    const [bentoSelections, setBentoSelections] = useState([]);
    const [error, setError] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const loadSavedSelections = () => {
            const savedSelections = JSON.parse(localStorage.getItem('bentoSelections')) || [];
            setBentoSelections(savedSelections);
        };
        loadSavedSelections();
    }, []);

    function submitBentoSelection() {
        // const updatedSelections = [...bentoSelections, selection];
        // setBentoSelections(updatedSelections);
        // localStorage.setItem('bentoSelections', JSON.stringify(updatedSelections));

        // if (bentoSelections.length === 0) {
        //     setError("Please select at least one bento item before proceeding to checkout.");
        //     return;
        // }

        const selections = bentoSelections.map((selection) => ({
            name: selection.name,
            items: selection.items,
        }));

        if (selections.length === 0) {
            // alert("Please select at least one bento item before proceeding to checkout.");
            setError("Please select at least one bento item before proceeding to checkout.");
            return;
        }

        // router.push({
        //     pathname: '/checkout',
        //     query: { selections: JSON.stringify(selections) },
        // });

        // router.push({
        //     pathname: '/checkout',
        //     query: { selections: JSON.stringify(selections) },
        // });

        // router.push('/checkout'); 
        fetch('/api/checkout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ selections }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                router.push('/checkout'); // Redirect to the checkout page
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    return (
        <div className="mx-auto p-4 flex flex-col items-center justify-center min-h-screen"
            style={{
                backgroundImage: "url('/bento-background-2.jpg')",
                backgroundSize: 'contain',
                backgroundPosition: 'center'
            }}>
            {/* "flex flex-col items-center justify-center min-h-screen bg-[#f0f0f0] p-4"> */}
            <h1 className="text-4xl font-bold mb-4">Bento Selection</h1>
            <p className="text-2xl mb-4">Customize Your Bento</p>
            <ul className="flex flex-wrap justify-center gap-4 mt-4">
                {bentoItems.map((item, index) => (
                    <li key={index}>
                        <Link href={item.link}>
                            <BentoItem
                                image={item.image}
                                name={item.name}
                                price={item.price}
                            >

                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    width={200}
                                    height={200}
                                    className="w-[200px] h-[200px] rounded-xl mb-4" />
                            </BentoItem>
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="my-10 w-full max-w-2xl">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-semibold inline-block">Your Bento Selections</h2>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200" onClick={() => localStorage.removeItem('bentoSelections') || setBentoSelections([])}>Clear Bento Selections</button>
                </div>
                {/* {bentoSelections.length > 0 ? (
                    <ul className="space-y-4">
                        {bentoSelections.map((selection, index) => (
                            <li key={index} className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
                                <div className="flex items-center">
                                    <Image
                                        src={selection.image}
                                        alt={selection.name}
                                        width={50}
                                        height={50}
                                        className="w-[50px] h-[50px] rounded-lg mr-4"
                                    />
                                    <span className="text-lg font-medium">{selection.name}</span>
                                </div>
                                <span className="text-lg text-gray-700">₱{selection.price}</span>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-500">No selections made yet.</p>
                )} */}
                <div className="border-t border-gray-300 pt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        bentoSelections.length > 0 ?
                            bentoSelections.map((selection, index) => (
                                <div key={index} className="mb-8 p-5 rounded-lg shadow border-2 border-gray-200">
                                    <h2 className="text-2xl font-bold">{selection.name}</h2>
                                    <ul>
                                        {/* {selection.items.mainCourse.map((item, index) => (
                                <li key={index}>{item.name}</li>
                            ))}
                            {selection.items.snack.map((item, index) => (
                                <li key={index}>{item.name}</li>
                            ))}
                            {selection.items.dessert.map((item, index) => (
                                <li key={index}>{item.name}</li>
                            ))}
                            {selection.items.drink.map((item, index) => (
                                <li key={index}>{item.name}</li>
                            ))} */}
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
                            ))
                            : < p className="text-4xl my-6 col-span-full">No selections made yet.</p>
                    }
                </div>

                <div>
                    {/* ... */}
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
                        onClick={() => {
                            // Proceed to checkout logic here
                            submitBentoSelection();
                        }}
                    >
                        Proceed to Checkout
                    </button>
                </div>
            </div>
            {error && <ErrorToast errorMessage={error} onClose={() => setError(null)} />}
        </div >
    );
};
