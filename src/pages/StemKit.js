import React from "react";
import "./STEMKitsPage.css"; // Make sure this file exists in the same folder

const kits = [
  {
    name: "Chemistry STEM Kit",
    image: "/images/chemkits.jpg",
    description:
      "Dive into the exciting world of chemistry! This CBE-aligned kit is ideal for young learners and hobbyists who love mixing and discovering reactions.",
    price: "Ksh 11,500",
    contents: [
      "Test tubes (x5)",
      "Plastic beaker & measuring cylinder",
      "Droppers & funnels",
      "Safe chemicals for 10+ experiments",
      "Safety goggles & gloves",
    ],
  },
  {
    name: "Physics STEM Kit",
    image: "/images/phyckits.png",
    description:
      "Explore motion, forces, energy, and magnetism through hands-on experiments. Perfect for CBE students learning basic physical science concepts.",
    price: "Ksh 11,800",
    contents: [
      "Pulleys and string set",
      "Magnets (bar & ring types)",
      "Wires and battery holders",
      "Simple machines models",
      "Light bulbs & small switches",
    ],
  },
  {
    name: "Robotics Kit (Arduino)",
    image: "/images/arduino.jpg",
    description:
      "Build real robotic and electronic projects using Arduino! This is perfect for learners ready to explore STEM and coding at an advanced CBE level.",
    price: "Ksh 12,200",
    contents: [
      "Arduino Uno board",
      "Breadboard & jumper wires",
      "LEDs, resistors, buzzers",
      "IR sensor, ultrasonic sensor",
      "Servo motor & DC motors",
      "USB cable & project manual",
    ],
  },
];

const STEMKitsPage = () => {
  return (
    <div className="kits-page">
      <header className="kits-header">
        <h1>STEM Kits for Curious Young Minds</h1>
        <p>
          Discover, experiment, and build with kits designed for CBE learners in Kenya.
        </p>
      </header>

      <main className="kits-container">
        {kits.map((kit, index) => (
          <div className="kit-card" key={index}>
            <img src={kit.image} alt={kit.name} className="kit-image" />
            <div className="kit-info">
              <h2>{kit.name}</h2>
              <p>{kit.description}</p>
              <ul className="kit-list">
                {kit.contents.map((item, i) => (
                  <li key={i}>✅ {item}</li>
                ))}
              </ul>
              <div className="kit-footer">
                <span className="kit-price">{kit.price}</span>
                <a
  href={`https://wa.me/254703409780?text=I'm%20interested%20in%20the%20${encodeURIComponent(kit.name)}.`}
  target="_blank"
  rel="noopener noreferrer"
  className="buy-button"
>
  Buy Now
</a>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default STEMKitsPage;
