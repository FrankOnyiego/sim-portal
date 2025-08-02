import React from "react";

const MastersConsultation = () => {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      {/* Hero Section */}
      <header className="bg-blue-700 text-white py-12 px-6 text-center">
        <h1 className="text-4xl font-bold mb-3">Physics & Chemistry Projects Consultation</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Support available for students working on research projects in Chemistry & Physics.
        </p>
        <a
href="https://wa.me/254112643522?text=Hello%2C%20I%20have%20a%20project%20in%20Chemistry%20or%20Physics%20that%20needs%20consultation."
          target="_blank"
          rel="noopener noreferrer"
          style={{textDecoration: "none"}}
          className="inline-block mt-6 bg-white text-blue-700 font-semibold px-6 py-2 rounded shadow hover:bg-blue-100"
        >
          📞 Book Short Meeting @ KES 200
        </a>
      </header>

      {/* What We Offer */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-blue-700 text-center">✅ Our Specialties</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Research topic in Physics or Chemistry.",
            "Lab-based experiments.",
            "Data analysis (SPSS, Python, Excel, OriginLab).",
            "Simulation projects using custom tools.",
            "Scientific writing, citation, & plagiarism reduction",
            "Presentation & defense coaching",
          ].map((item, idx) => (
            <div key={idx} className="bg-white border-l-4 border-blue-600 shadow p-4 rounded">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-white px-6 text-center">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">💡 Why Choose Our Experts?</h2>
        <p className="max-w-3xl mx-auto text-gray-700 mb-6">
          With a background in Chemistry, Physics, and research supervision, we provide academic-level insights with practical, KCSE-to-graduate-level clarity.
        </p>
        <ul className="space-y-2 max-w-xl mx-auto text-left list-disc list-inside text-gray-800">
          <li>Experienced in physical sciences research methodologies</li>
          <li>100% personalized consultation sessions</li>
          <li>Quick response via WhatsApp & email</li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-10 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-3">🚀 Ready to Get Started?</h2>
        <p className="mb-4">Book a free session or share your project topic with us today.</p>
        <a
href="https://wa.me/254112643522?text=Hello%2C%20I%20have%20a%20project%20in%20Chemistry%20or%20Physics%20that%20needs%20consultation."
          target="_blank"
          rel="noopener noreferrer"
          style={{textDecoration: "none"}}
          className="bg-white text-blue-700 font-bold px-6 py-3 rounded shadow hover:bg-blue-100"
        >
          📲 Chat on WhatsApp Now
        </a>
      </section>
    </div>
  );
};

export default MastersConsultation;
