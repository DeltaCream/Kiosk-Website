export default function AboutUsPage() {
    return (
        <div className="bg-black text-white min-h-screen p-8">
            <h1 className="text-4xl font-bold mb-8">About Us</h1>
            <p className="text-lg text-white mb-4">
                Welcome to our website! We're a team of passionate individuals
                dedicated to bringing you the best Japanese food experience.
            </p>
            <div className="flex flex-col items-center justify-center mb-8">
                <img
                    src="/about-us-image.jpg"
                    alt="About Us Image"
                    className="w-full h-64 object-cover mb-4"
                />
                <p className="text-lg text-white mb-4">
                    Our story began with a simple idea: to share the flavors and
                    traditions of Japan with the world. Today, we're proud to be
                    a leading provider of Japanese cuisine in the city.
                </p>
            </div>
            <div className="flex justify-center mb-8">
                <a
                    href="#"
                    className="text-red-500 hover:text-red-700 transition-colors duration-200 mr-4"
                >
                    Learn More About Our Story
                </a>
                <a
                    href="#"
                    className="text-red-500 hover:text-red-700 transition-colors duration-200"
                >
                    Meet Our Team
                </a>
            </div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-white mb-8">
                At our core, we're committed to serving high-quality, authentic
                Japanese cuisine that brings people together. We believe in the
                power of food to unite and inspire, and we're dedicated to
                making every meal a memorable one.
            </p>
            <div className="flex justify-center mb-8">
                <button className="bg-red-500 hover:bg-red-700 transition-colors duration-200 text-white font-bold py-2 px-4 rounded-lg">
                    Get in Touch
                </button>
            </div>
        </div>
    );
}
