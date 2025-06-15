// Bento Selection Page
import React from "react";

const BentoSelectionPage = () => {
    return (
        <div style={{ backgroundColor: "white" }}>
            <h1>Bento Selection</h1>
            <section>
                <h2>Snack</h2>
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
            </section>
            <section>
                <h2>Dessert</h2>
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
            </section>
            <section>
                <h2>Main Course</h2>
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
            </section>
            <section>
                <h2>Drinks</h2>
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
            </section>
            <button>Bento Pro</button>
            <button>Customize Your Bento</button>
        </div>
    );
};

export default BentoSelectionPage;
