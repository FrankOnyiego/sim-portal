import React from "react";

const MastersConsultation = () => {
  return (
    <div className="bg-light text-dark">
      {/* Hero Section */}
      <section className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4 fw-bold">
            Science Projects Consultation
          </h1>
          <p className="lead mt-3">
            Get expert support on your Chemistry and Physics research projects.
          </p>
          <a
            href="https://wa.me/254112643522?text=Hello%2C%20I%20have%20a%20project%20in%20Chemistry%20or%20Physics%20that%20needs%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-light btn-lg mt-4 fw-semibold"
          >
            📞 Book Short Meeting @ KES 200
          </a>
        </div>
      </section>

      {/* Our Specialties */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center text-primary fw-bold mb-4">
            ✅ Our Specialties
          </h2>
          <div className="row">
            {[
              "Research topic in Physics or Chemistry.",
              "Kenya Science Engineering Fair Projects",
              "Lab-based experiments.",
              "Data analysis (SPSS, Python, Excel, OriginLab).",
              "Simulation projects using custom tools.",
              "Scientific writing, citation, & plagiarism reduction",
              "Presentation & defense coaching",
            ].map((item, idx) => (
              <div className="col-md-6 mb-3" key={idx}>
                <div className="card shadow-sm h-100 border-start border-primary border-4">
                  <div className="card-body">
                    <p className="card-text">{item}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-5">
        <div className="container text-center">
          <h2 className="text-primary fw-bold mb-3">💡 Why Choose Our Experts?</h2>
          <p className="lead text-muted mb-4">
            Academic-level guidance with practical, KCSE-to-graduate clarity.
          </p>
          <ul className="list-group list-group-flush mx-auto text-start" style={{ maxWidth: "600px" }}>
            <li className="list-group-item">✅ Experienced in physical sciences research methodologies</li>
            <li className="list-group-item">✅ 100% personalized consultation sessions</li>
            <li className="list-group-item">✅ Quick response via WhatsApp & email</li>
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-white text-center py-5">
        <div className="container">
          <h2 className="fw-semibold mb-3">🚀 Ready to Get Started?</h2>
          <p className="mb-4 fs-5">Book a free session or share your project topic today.</p>
          <a
            href="https://wa.me/254112643522?text=Hello%2C%20I%20have%20a%20project%20in%20Chemistry%20or%20Physics%20that%20needs%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-light btn-lg fw-bold"
          >
            📲 Chat on WhatsApp Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default MastersConsultation;