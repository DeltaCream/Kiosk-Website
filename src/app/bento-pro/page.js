// Bento Pro Page
import React from "react";

const BentoProPage = () => {
    return (
        <div style={{ backgroundColor: "white" }}>
            <h1>Bento Pro</h1>
            <section>
                <h2>Snack</h2>
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                </ul>
            </section>
            <section>
                <h2>Main Course</h2>
                <ul>
                    <li>Item 1</li>
                </ul>
            </section>
            <section>
                <h2>Dessert</h2>
                <ul>
                    <li>Item 1</li>
                </ul>
            </section>
            <section>
                <h2>Drinks</h2>
                <ul>
                    <li>Item 1</li>
                </ul>
            </section>
            <button>Confirm Your Bento</button>
        </div>
    );
};

export default BentoProPage;
