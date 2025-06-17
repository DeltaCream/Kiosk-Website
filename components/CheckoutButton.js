"use client";

import { useRouter } from "next/navigation";

export default function CheckoutButton({ disabled }) {
    const router = useRouter();

    function handleEvent(event) {
        // Handle any specific event logic here
        // console.log("Event handled");
        // localStorage.removeItem('bentoSelections'); // Remove the specific item
        // or
        localStorage.clear(); // Clear all local storage items
        router.push("/order");
    }

    return (
        <button
            onClick={handleEvent}
            disabled={disabled}
            className={`bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200 ${
                disabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
        >
            Checkout
        </button>
    );
}
