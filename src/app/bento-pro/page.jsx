'use client'

// Bento Pro Page
import React from "react";
import BentoItem from "@/components/BentoItem";
import { useState } from "react";

export default function BentoProPage() {
    const snackItems = [
        { name: "Onigiri", image: ".jpeg" },
        { name: "Takoyaki", image: ".jpeg" },
        { name: "Gyoza", image: ".jpeg" },
    ];

    const mainCourseItems = [
        { name: "Okonomiyaki", image: ".jpeg" },
        { name: "Tonkatsu", image: ".jpeg" },
        { name: "Udon", image: ".jpeg"},
        { name: "Sushi", image: ".jpeg" },
        { name: "Tempura", image: ".jpeg" },
        { name: "Ramen", image: ".jpeg" },
        { name: "Yakitori", image: ".jpeg" },
        { name: "Teriyaki", image: ".jpeg" },
        { name: "Temaki", image: ".jpeg"},
        { name: "Donburi", image: ".jpeg"},
    ];

    const dessertItems = [
        { name: "Dorayaki", image: ".jpeg" },
        { name: "Dango", image: ".jpeg" },
        { name: "Manju", image: ".jpeg" },
    ];

    const drinkItems = [
        { name: "Green Tea", image: ".jpeg" },
        { name: "Melon Soda", image: ".jpeg" },
        { name: "Matcha Drink", image: ".jpeg" },
    ];

    const [selectedItems, setSelectedItems] = useState({});

    const handleItemClick = (category, item) => {
        setSelectedItems((prevItems) => ({
            ...prevItems,
            [category]: item,
        }));
    };


    return (
        <div className="bento-pro-page">
            <h1>Bento Pro</h1>
            <section>
                <h2>Snack</h2>
                <ul className="flex flex-wrap justify-center">
                    {snackItems.map((item, index) => (
                        <li key={index} className="mr-4">
                            <BentoItem
                                name={item.name}
                                price={item.price}
                                isSelected={selectedItems.snack === item}
                                onClick={() => handleItemClick("snack", item)}
                            />
                        </li>
                    ))}
                </ul>
            </section>
            <section>
                <h2>Main Course</h2>
                <ul className="flex flex-wrap justify-center">
                    {mainCourseItems.map((item, index) => (
                        <li key={index} className="mr-4">
                            <BentoItem
                                name={item.name}
                                price={item.price}
                                isSelected={selectedItems.mainCourse === item}
                                onClick={() => handleItemClick("mainCourse", item)}
                            />
                        </li>
                    ))}
                </ul>
            </section>
            <section>
                <h2>Dessert</h2>
                <ul className="flex flex-wrap justify-center">
                    {dessertItems.map((item, index) => (
                        <li key={index} className="mr-4">
                            <BentoItem
                                name={item.name}
                                price={item.price}
                                isSelected={selectedItems.dessert === item}
                                onClick={() => handleItemClick("dessert", item)}
                            />
                        </li>
                    ))}
                </ul>
            </section>
            <section>
                <h2>Drinks</h2>
                <ul className="flex flex-wrap justify-center">
                    {drinkItems.map((item, index) => (
                        <li key={index} className="mr-4">
                            <BentoItem
                                name={item.name}
                                price={item.price}
                                isSelected={selectedItems.drink === item}
                                onClick={() => handleItemClick("drink", item)}
                            />
                        </li>
                    ))}
                </ul>
            </section>
            <button>Confirm Your Bento</button>
            <p>Selected Items:</p>
            <ul>
                {Object.keys(selectedItems).map((category, index) => (
                    <li key={index}>
                        {category}: {selectedItems[category].name}
                    </li>
                ))}
            </ul>
        </div>
    );
};