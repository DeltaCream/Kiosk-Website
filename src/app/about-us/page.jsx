import Image from "next/image";

export default function AboutUsPage() {
  return (
    <>
    <div className="text-white min-h-screen p-8 flex flex-col items-center justify-center"
      // style={{
      //   backgroundImage: "url('/bento-background-2.jpg')",
      //   backgroundSize: 'cover',
      //   backgroundPosition: 'center',
      //   opacity: 0.75,
      // }}
    >
      <div
        style={{
          backgroundImage: "url('/bento-background-2.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.75, // adjust this value to change the opacity
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
        }}
      />
        <Image
        src="/japaneats logo.jpeg"
        alt="About Us Image"
        width={1024}
        height={1024}
        className="w-64 h-64 object-cover mb-8"
      />
      <h1 className="text-5xl font-bold mb-12">About Us</h1>
      <p className="text-2xl text-white mb-8 text-justify max-w-6xl">
        Welcome to our website! We're a team of passionate individuals
        dedicated to bringing you the best Japanese food experience.

        
      </p>
      <p className="text-2xl text-white mb-8 max-w-6xl text-justify">Our story began with a simple idea: to share the flavors and
                    traditions of Japan with the world. Today, we're proud to be
                    a leading provider of Japanese cuisine in the city.
                    JapanEats is a small food business that serves authentic
                    Japanese food in a bento box. Our menu features a variety of
                    traditional Japanese dishes, carefully crafted to satisfy
                    your cravings. From savory sushi and tempura to sweet mochi
                    desserts, every bite is a delight. Our team of four college
                    students is dedicated to providing exceptional service and
                    ensuring that every customer has a memorable experience.
                    We're not just a food business - we're storytellers, sharing
                    the flavors and culture of Japan with every bento box.</p>
        <div className="flex flex-col justify-center mb-8">
            <p className="text-2xl mb-2">Members:</p>
            <p className="text-2xl mb-2">Batoc, Alexa U.</p>
            <p className="text-2xl mb-2">Benarao, Julia Mariz C.</p>
            <p className="text-2xl mb-2">Biñas, Kristallyn E.</p>
            <p className="text-2xl mb-2">Radan, Jashmine Ashley R.</p>
        </div>
    </div>
    <footer className="bg-black text-white p-4 text-center">
        <p className="text-lg mb-2">Contact us at: <a href="mailto:japan.eats@gmail.com" className="text-red-500 hover:text-red-700 transition-colors duration-200">japan.eats@gmail.com</a></p>
        <p className="text-lg mb-2">Or call us at: <a href="tel:+63 91234567890" className="text-red-500 hover:text-red-700 transition-colors duration-200">+63 91234567890</a></p>
      <p className="text-lg">© 2025 JapanEats. All rights reserved.</p>
    </footer>
    </>
  );
}

// export default function AboutUsPage() {
//     return (
//         <div className="bg-black text-white min-h-screen p-8"
//             style={{
//                 backgroundImage: "url('/bento-background-2.jpg')",
//                 backgroundSize: 'contain',
//                 backgroundPosition: 'center'
//             }}
//         >
//             <h1 className="text-4xl font-bold mb-8">About Us</h1>
//             <p className="text-lg text-white mb-4">
//                 Welcome to our website! We're a team of passionate individuals
//                 dedicated to bringing you the best Japanese food experience.
//             </p>
//             <div className="flex flex-col items-center justify-center mb-8">
//                 <img
//                     src="/about-us-image.jpg"
//                     alt="About Us Image"
//                     className="w-full h-64 object-cover mb-4"
//                 />
//                 <p className="text-lg text-white mb-4">
                    
//                 </p>
//             </div>
//             <div className="flex justify-center mb-8">
//                 <a
//                     href="#"
//                     className="text-red-500 hover:text-red-700 transition-colors duration-200 mr-4"
//                 >
//                     Learn More About Our Story
//                 </a>
//                 <a
//                     href="#"
//                     className="text-red-500 hover:text-red-700 transition-colors duration-200"
//                 >
//                     Meet Our Team
//                 </a>
//             </div>
//             <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
//             <p className="text-lg text-white mb-8">
//                 At our core, we're committed to serving high-quality, authentic
//                 Japanese cuisine that brings people together. We believe in the
//                 power of food to unite and inspire, and we're dedicated to
//                 making every meal a memorable one.
//             </p>
//             <div className="flex justify-center mb-8">
//                 <button className="bg-red-500 hover:bg-red-700 transition-colors duration-200 text-white font-bold py-2 px-4 rounded-lg">
//                     Get in Touch
//                 </button>
//             </div>
//         </div>
//     );
// }

