// src/pages/Physics.js
import React, { useState, useEffect } from 'react';

const forms = {
  'Form 1': [
    {
      title: 'Pressure',
      subtopics: [
        {
          title: 'Pressure in liquids',
          note: 'Understand the standard units used in scientific measurement.',
          simulationUrl: 'https://phet.colorado.edu/sims/html/under-pressure/latest/under-pressure_all.html',
        }, 
      ],
    },
    {
      title: 'Measurement and Units',
      subtopics: [
        {
          title: 'SI Units',
          note: 'Understand the standard units used in scientific measurement.',
          simulationUrl: 'https://phet.colorado.edu/sims/html/states-of-matter/latest/states-of-matter_en.html',
        },
        {
          title: 'Precision and Accuracy',
          note: 'Explore the concepts of precision and accuracy in measurements.',
          simulationUrl: '', // placeholder
        },
      ],
    },
    {
      title: 'Force and Motion',
      subtopics: [
        {
          title: 'Newton’s Laws',
          note: 'Study the three laws of motion and their applications. \nYou need to mark the stopwatch checkbox to be able to launch the ball.',
          simulationUrl: 'https://phet.colorado.edu/sims/html/projectile-data-lab/latest/projectile-data-lab_en.html',
        },
        {
          title: 'Speed, Velocity, and Acceleration',
          note: 'Understand the relationship between speed, velocity, and acceleration.',
          simulationUrl: 'https://phet.colorado.edu/sims/html/forces-and-motion-basics/latest/forces-and-motion-basics_en.html', // placeholder
        },
      ],
    },
    {
      title: 'Work, Energy, and Power',
      subtopics: [
        {
          title: 'Kinetic and Potential Energy',
          note: 'Explore the concepts of kinetic and potential energy.',
          simulationUrl: 'https://phet.colorado.edu/sims/html/pendulum-lab/latest/pendulum-lab_en.html',
        },
        {
          title: 'Work and Power',
          note: 'Understand the relationship between work and power in mechanical systems.',
          simulationUrl: 'https://phet.colorado.edu/sims/cheerpj/the-ramp/latest/the-ramp.html?simulation=the-ramp', // placeholder
        },
      ],
    },
  ],
  'Form 2': [
    {
      title: 'Heat and Temperature',
      subtopics: [
        {
          title: 'Thermal Expansion',
          note: 'Study how materials expand when heated.',
          simulationUrl: '',
        },
        {
          title: 'Specific Heat Capacity',
          note: 'Understand the heat energy required to raise the temperature of a substance.',
          simulationUrl: '',
        },
      ],
    },
    {
      title: 'Energy Transfer',
      subtopics: [
        {
          title: 'Conduction, Convection, and Radiation',
          note: 'Study the different methods of heat transfer.',
          simulationUrl: '',
        },
      ],
    },
    ,
    {
      title: 'Reflection on Curved Surfaces',
      subtopics: [
        {
          title: 'Ray Diagrams',
          note: 'Learn how to construct and analyze ray diagrams for curved mirrors.',
          simulationUrl: 'https://phet.colorado.edu/sims/html/geometric-optics/latest/geometric-optics_en.html'
        }
      ]
    },
    {
      title: 'Waves and Sound',
      subtopics: [
        {
          title: 'Properties of Waves',
          note: 'Explore the characteristics of waves such as wavelength and frequency.',
          simulationUrl: 'https://phet.colorado.edu/sims/html/hookes-law/latest/hookes-law_en.html',
        },
        {
          title: 'Speed of Sound',
          note: 'Understand how sound travels through different media.',
          simulationUrl: 'https://phet.colorado.edu/sims/html/wave-on-a-string/latest/wave-on-a-string_all.html',
        },
      ],
    },
    {
      title: "Hooke's Law",
      subtopics: [
        {
          title: "Spring Constant (k)",
          note: "Understand how the spring constant determines the stiffness of a spring and how it relates to the force applied and the extension produced, according to Hooke's Law (F = kx).",
          simulationUrl: "https://phet.colorado.edu/sims/html/hookes-law/latest/hookes-law_en.html",
        },
      ],
    }
    
  ],
  'Form 3': [
    {
      title: 'Electricity',
      subtopics: [
        {
          title: 'Ohm’s Law',
          note: 'Understand the relationship between current, voltage, and resistance.',
          simulationUrl: 'https://phet.colorado.edu/sims/html/ohms-law/latest/ohms-law_en.html',
        },
        {
          title: 'Circuit Components',
          note: 'Study components such as resistors, capacitors, and batteries.',
          simulationUrl: 'https://phet.colorado.edu/sims/html/circuit-construction-kit-ac-virtual-lab/latest/circuit-construction-kit-ac-virtual-lab_en.html',
        },
      ],
    },
      {
      title: 'Heat Transfer',
      subtopics: [
        {
          title: 'heat and temperature',
          note: 'This simulation helps you understand the difference between heat and temperature by allowing you to explore how thermal energy is transferred between objects. Observe how materials heat up or cool down based on their specific heat capacity, and see how energy changes form as it flows. A great way to visualize the fundamentals of thermal energy transfer in everyday materials',
          simulationUrl: 'https://phet.colorado.edu/sims/html/energy-forms-and-changes/latest/energy-forms-and-changes_en.html',
        },
      ],
    },
    {
      title: 'Magnetism',
      subtopics: [
        {
          title: 'Magnetic Fields',
          note: 'Study the magnetic fields produced by magnets and electric currents.',
          simulationUrl: 'https://phet.colorado.edu/sims/html/magnets-and-electromagnets/latest/magnets-and-electromagnets_en.html',
        },
        {
          title: 'Electromagnetic Induction',
          note: 'Explore how changing magnetic fields induce electric currents.',
          simulationUrl: 'https://phet.colorado.edu/sims/html/faradays-electromagnetic-lab/latest/faradays-electromagnetic-lab_en.html',
        },
      ],
    },
  ],
  'Form 4': [
{
  "title": "Thin Lenses",
  "subtopics": [
    {
      "title": "Lens Behavior and Image Formation",
      "note": "Use this interactive simulation to explore how thin lenses form images. Investigate how focal length, object distance, and lens type (converging or diverging) affect the position, size, and orientation of the image. A great tool to visualize ray diagrams and deepen your understanding of geometric optics.",
      "simulationUrl": "https://phet.colorado.edu/sims/html/geometric-optics/latest/geometric-optics_en.html"
    }
  ]
}
,            {
      title: 'Radioactive Decay',
      subtopics: [
        {
          title: 'Decay processes',
          note: 'Explore how unstable atomic nuclei undergo radioactive decay over time. Learn about the different types of decay processes, such as alpha, beta, and gamma decay, and how they change the identity of an element. Understand the concept of half-life and how it helps in predicting the rate at which radioactive substances transform.',
          simulationUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmJplKrcLLfG8I9yD4qTQs8mCtCUsFLsdcWg&s',
        },
      ],
    },
        {
      title: 'Electronics',
      subtopics: [
        {
          title: 'Semiconductor Simulation',
          note: 'Dive into the fundamentals of semiconductors through interactive simulations. This tool covers key topics such as energy band theory, types of semiconductors (intrinsic and extrinsic), and the operation of diodes, including rectification. Use this simulation to visualize how electrons behave in various semiconductor materials and understand how electronic components function at the atomic level.',
          simulationUrl: 'https://javalab.org/en/category/electricity_en/semiconductor_en/',
        },
      ],
    },
    {
      title: 'Electromagnetic Waves',
      subtopics: [
        {
          title: 'Types of Electromagnetic Waves',
          note: 'Explore the different types of electromagnetic waves and their properties.',
          simulationUrl: 'https://phet.colorado.edu/sims/cheerpj/radio-waves/latest/radio-waves.html?simulation=radio-waves',
        },
      ],
    },
    {
      title: 'Modern Physics',
      subtopics: [
        {
          title: 'Quantum Mechanics',
          note: 'Introduction to the concepts of quantum mechanics and uncertainty principle.',
          simulationUrl: 'https://phet.colorado.edu/sims/html/models-of-the-hydrogen-atom/latest/models-of-the-hydrogen-atom_all.html',
        },
      ],
    },
  ],
};

function Physics() {
  const [selectedSimulation, setSelectedSimulation] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [questionText, setQuestionText] = useState('');
  const [reward, setReward] = useState('');
  const [bidMessage, setBidMessage] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [modalType, setModalType] = useState('info');
  const [modalAction, setModalAction] = useState(null);
  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('user'));
    if (savedUser) setUser(savedUser);
  }, []);

  const showModal = (message, type = 'info', onConfirm = null) => {
    setModalContent(message);
    setModalType(type);
    setModalVisible(true);
    setModalAction(() => onConfirm);
  };

  const hideModal = () => {
    setModalVisible(false);
    setModalAction(null);
  };

  const postQuestion = async (orderId) => {
    try {
      const response = await fetch('https://ischool.eduengine.co.ke/api/questions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: user.user_id,
          question: questionText,
          reward: parseFloat(reward),
          paymentRef: orderId,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        showModal('Question submitted successfully!', 'success');
        setQuestionText('');
        setReward('');
        setQuestions(prev => [
          ...prev,
          {
            id: data.questionId,
            text: questionText,
            reward: parseFloat(reward),
            timestamp: new Date().toLocaleTimeString(),
            asker: 'You',
          },
        ]);
      } else {
        showModal(data.message || 'Failed to submit question', 'danger');
      }
    } catch (error) {
      showModal('An error occurred while submitting your question.', 'danger');
    }
  };

  const handleRaiseHand = async (e) => {
    e.preventDefault();

    if (!user) {
      return showModal('Please log in to request a lesson.', 'danger');
    }

    if (!questionText || !reward) {
      return showModal('Please enter both question text and reward.', 'danger');
    }

    setLoading(true);

    try {
      const paymentInitRes = await fetch('https://ischool.eduengine.co.ke/api/initiate-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: parseFloat(reward),
          description: questionText,
          userId: user.id,
        }),
      });

      const paymentData = await paymentInitRes.json();

      if (paymentInitRes.ok && paymentData.redirect_url) {
        window.open(paymentData.redirect_url, '_blank');

        showModal(
          'After completing payment in the new tab, click "Confirm" below to post your question.',
          'info',
          () => postQuestion(paymentData.order_id)
        );
      } else {
        showModal('Failed to initiate payment.', 'danger');
      }
    } catch (error) {
      console.error('Error:', error);
      showModal('Something went wrong during the payment process.', 'danger');
    } finally {
      setLoading(false);
    }
  };

  const handleBid = (qid) => {
    showModal(`Bid submitted for question #${qid}: "${bidMessage}"`, 'success');
    setBidMessage('');
  };

  return (
    <div className="App container py-4">
      {loading && (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-white bg-opacity-75" style={{ zIndex: 1050 }}>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Processing...</span>
          </div>
        </div>
      )}

      {!selectedSimulation ? (
        <>
          <h1>Physics Learning Simulations</h1>

          <div className="border p-3 rounded mb-4">
            <h2>Request a Lesson</h2>
            <p className="text-danger">For learners only</p>
            <form onSubmit={handleRaiseHand}>
              <textarea
                value={questionText}
                onChange={(e) => setQuestionText(e.target.value)}
                placeholder="Describe the lesson you are requesting to be taught here..."
                className="form-control mb-2"
                required
                disabled={loading}
              />
              <div className="d-flex gap-2">
                <input
                  type="number"
                  value={reward}
                  onChange={(e) => setReward(e.target.value)}
                  className="form-control"
                  placeholder="Enter amount willing to spend in KES"
                  required
                  min="50"
                  disabled={loading}
                />
                <button type="submit" className="btn btn-success" disabled={loading}>
                  Request a Lesson (Not Free)
                </button>
              </div>
            </form>
          </div>

          {/* Replace `forms` with your actual data */}
          {Object.entries(forms).map(([formName, topics]) => (
            <div key={formName} className="mb-4">
              <h2>{formName}</h2>
              {topics.map((topic, topicIdx) => (
                <div key={topicIdx} className="mb-3">
                  <h3>{topic.title}</h3>
                  {topic.subtopics.map((subtopic, subIdx) => (
                    <div key={subIdx} className="mb-2">
                      <strong>{subtopic.title}</strong>
                      <p>{subtopic.note}</p>
                      {subtopic.simulationUrl ? (
                        <button
                          className="btn btn-primary btn-sm"
                          onClick={() => setSelectedSimulation(subtopic)}
                        >
                          Launch Simulation
                        </button>
                      ) : (
                        <p className="text-muted fst-italic">Simulation not available</p>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </>
      ) : (
        <>
          <button className="btn btn-danger mb-3" onClick={() => setSelectedSimulation(null)}>
            ← Back to Topics
          </button>
          <h2>{selectedSimulation.title}</h2>
          <p>{selectedSimulation.note}</p>
          <iframe
            src={selectedSimulation.simulationUrl}
            title={selectedSimulation.title}
            width="100%"
            height="600px"
            allowFullScreen
            style={{ border: '1px solid #ccc', borderRadius: '10px' }}
          />
        </>
      )}

      {modalVisible && (
        <div className="modal show fade d-block" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className={`modal-content border-${modalType}`}>
              <div className={`modal-header bg-${modalType} text-white`}>
                <h5 className="modal-title">
                  {modalType === 'danger' ? 'Error' : modalType === 'success' ? 'Success' : 'Notice'}
                </h5>
                <button type="button" className="btn-close" onClick={hideModal}></button>
              </div>
              <div className="modal-body">
                <p>{modalContent}</p>
              </div>
              <div className="modal-footer">
                {modalAction ? (
                  <>
                    <button className="btn btn-secondary" onClick={hideModal}>
                      Cancel
                    </button>
                    <button
                      className={`btn btn-${modalType}`}
                      onClick={() => {
                        modalAction();
                        hideModal();
                      }}
                    >
                      Confirm
                    </button>
                  </>
                ) : (
                  <button className="btn btn-primary" onClick={hideModal}>
                    Close
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Physics;

