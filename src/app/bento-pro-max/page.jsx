'use client'
import React from "react";
import BentoItem from "@/components/BentoItem";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function BentoProMaxPage() {
    const snackItems = [
        { name: "Onigiri", image: "onigiri.jpeg" },
        { name: "Takoyaki", image: "takoyaki.jpeg" },
        { name: "Gyoza", image: "gyoza.jpeg" },
    ];

    const mainCourseItems = [
        { name: "Okonomiyaki", image: "okonomiyaki.webp" },
        { name: "Tonkatsu", image: "tonkatsu.jpeg" },
        { name: "Udon", image: "udon.jpeg" },
        { name: "Sushi", image: "sushi.jpeg" },
        { name: "Tempura", image: "tempura.jpeg" },
        { name: "Ramen", image: "ramen.jpeg" },
        { name: "Yakitori", image: "yakitori.webp" },
        { name: "Teriyaki", image: "teriyaki.jpeg" },
        { name: "Temaki", image: "temaki.webp" },
        { name: "Donburi", image: "donburi.jpeg" },
    ];

    const dessertItems = [
        { name: "Dorayaki", image: "dorayaki.jpeg" },
        { name: "Dango", image: "dango.jpeg" },
        { name: "Manju", image: "manju.webp" },
    ];

    const drinkItems = [
        { name: "Green Tea", image: "green tea.jpeg" },
        { name: "Melon Soda", image: "melon soda.jpeg" },
        { name: "Matcha Drink", image: "matcha.jpeg" },
    ];

    const [selectedItems, setSelectedItems] = useState({
        mainCourse: [],
        snack: [],
        dessert: [],
        drink: [],
    });

    const router = useRouter();

    const handleSubmit = (event) => {
        event.preventDefault();

        // Check if the selected items meet the selection limits
        if (!checkSelectionLimits(selectedItems)) {
            alert("Please ensure that you have selected 2 main courses, 1 snack, 1 dessert, and 1 drink.");
            return;
        }

        const saveSelection = () => {
            const bentoSelections = JSON.parse(localStorage.getItem('bentoSelections')) || [];
            const newSelection = {
                name: 'Bento Pro Max',//bentoName, 
                items: selectedItems
            };
            bentoSelections.push(newSelection);
            localStorage.setItem('bentoSelections', JSON.stringify(bentoSelections));
        };
        saveSelection();
        // Redirect to the bento selection page
        router.push('/bento');
    };

    // check if the selected items meet the selection limits
    const checkSelectionLimits = (selectedItems) => {
        const maxSelection = {
            mainCourse: 2,
            snack: 1,
            dessert: 1,
            drink: 1,
        };
        const categories = Object.keys(maxSelection);
        for (const category of categories) {
            if (selectedItems[category].length < maxSelection[category]) {
                return false;
            }
        }
        return true;
    };

    const handleItemClick = (category, item) => {
        const currentSelection = selectedItems;
        const maxSelection = {
            mainCourse: 2,
            snack: 1,
            dessert: 1,
            drink: 1,
        };

        const index = currentSelection[category].findIndex((i) => i.name === item.name);
        if (index === -1) {
            if (currentSelection[category] && currentSelection[category].length >= maxSelection[category]) {
                // Already reached maximum selection for this category, do nothing
                return;
            }
            // Item not selected, add it
            setSelectedItems((prevItems) => {
                // ...prevItems,
                // [category]: [...(prevItems[category] || []), item],
                const newItems = [...prevItems[category], item];
                return { ...prevItems, [category]: newItems };
            });
        } else {
            // Item already selected, remove it
            setSelectedItems((prevItems) => ({
                ...prevItems,
                [category]: prevItems[category].filter((_, i) => i !== index),
            }));
        }
    };

    return (
        <form onSubmit={handleSubmit}
            style={{
                backgroundImage: "url('/bento-background-2.jpg')",
                backgroundSize: 'contain',
                backgroundPosition: 'center'
            }}
        >
            <h1 className="text-6xl font-bold mb-4 text-center py-10">Bento Pro Max</h1>
            <Link href="/bento" className="flex items-center ml-4 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-arrow-left-icon lucide-circle-arrow-left"><circle cx="12" cy="12" r="10" /><path d="M16 12H8" /><path d="m12 8-4 4 4 4" /></svg>
                <span className="ml-3 text-xl">Back to Bento Selection</span>
            </Link>
            <section>
                <h2 className="m-4 text-2xl">Main Course (Choose 2)</h2>
                <ul className="m-4 flex flex-wrap">
                    {mainCourseItems.map((item, index) => (
                        <li key={index} className="mr-4">
                            <BentoItem
                                name={item.name}
                                price={item.price}
                                isSelected={selectedItems.mainCourse.findIndex((i) => i.name === item.name) !== -1}
                                onClick={() => handleItemClick("mainCourse", item)}
                            >
                                <Image
                                    src={`/${item.image}`}
                                    alt={item.name}
                                    width={100}
                                    height={100}
                                    className="w-[125px] h-[125px] rounded-xl mb-4"
                                />
                            </BentoItem>
                        </li>
                    ))}
                </ul>
            </section>
            <section>
                <h2 className="m-4 text-2xl">Snack (Choose 1)</h2>
                <ul className="m-4 flex flex-wrap">
                    {snackItems.map((item, index) => (
                        <li key={index} className="mr-4">
                            <BentoItem
                                name={item.name}
                                price={item.price}
                                isSelected={selectedItems.snack.findIndex((i) => i.name === item.name) !== -1} //{selectedItems.snack.includes(item)} //{selectedItems.snack === item}
                                onClick={() => handleItemClick("snack", item)}
                            >
                                <Image
                                    src={`/${item.image}`}
                                    alt={item.name}
                                    width={100}
                                    height={100}
                                    className="w-[100px] h-[125px] rounded-xl mb-4"
                                />
                            </BentoItem>
                        </li>
                    ))}
                </ul>
            </section>
            <section>
                <h2 className="m-4 text-2xl">Dessert (Choose 1)</h2>
                <ul className="m-4 flex flex-wrap">
                    {dessertItems.map((item, index) => (
                        <li key={index} className="mr-4">
                            <BentoItem
                                name={item.name}
                                price={item.price}
                                isSelected={selectedItems.dessert.findIndex((i) => i.name === item.name) !== -1}
                                onClick={() => handleItemClick("dessert", item)}
                            >
                                <Image
                                    src={`/${item.image}`}
                                    alt={item.name}
                                    width={100}
                                    height={100}
                                    className="w-[100px] h-[100px] rounded-xl mb-4"
                                />
                            </BentoItem>
                        </li>
                    ))}
                </ul>
            </section>
            <section>
                <h2 className="m-4 text-2xl">Drinks (Choose 1)</h2>
                <ul className="m-4 flex flex-wrap">
                    {drinkItems.map((item, index) => (
                        <li key={index} className="mr-4">
                            <BentoItem
                                name={item.name}
                                price={item.price}
                                isSelected={selectedItems.drink.findIndex((i) => i.name === item.name) !== -1}
                                onClick={() => handleItemClick("drink", item)}
                            >
                                <Image
                                    src={`/${item.image}`}
                                    alt={item.name}
                                    width={100}
                                    height={100}
                                    className="w-[150px] h-[175px] rounded-xl mb-4"
                                />
                            </BentoItem>
                        </li>
                    ))}
                </ul>
            </section>
            <p className="ml-6 text-2xl text-white">Selected Items:</p>
            <ul className="ml-6">
                {Object.keys(selectedItems).map((category, index) => (
                    <li key={index} className="mb-2 text-lg text-white font-semibold">
                        {(() => {
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
                        })()}: {selectedItems[category].map(item => item.name).join(', ')}
                    </li>
                ))}
            </ul>
            <button type="submit" className="ml-6 my-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Confirm Your Bento</button>
        </form>
    );
}