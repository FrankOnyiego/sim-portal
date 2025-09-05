import React, { useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const forms = {
  "Form 1": [
    {
      title: "Introduction to Chemistry",
      subtopics: [
        {
          title: "Matter and its States",
          note: "Study the three states of matter: solid, liquid, and gas.",
          simulationUrl: "https://phet.colorado.edu/sims/html/states-of-matter/latest/states-of-matter_en.html",
        },
        {
          title: "Physical and Chemical Changes",
          note: "Learn how substances transform through physical and chemical changes.",
          simulationUrl: "https://phet.colorado.edu/sims/html/reactants-products-and-leftovers/latest/reactants-products-and-leftovers_en.html",
        },
      ],
    },
    {
      title: "Measurement in Chemistry",
      subtopics: [
        {
          title: "Accuracy and Precision",
          note: "Understand the difference between accuracy and precision in measurements.",
          simulationUrl: "https://chem.libretexts.org/Courses/Hope_College/General_Chemistry_Labs/Lab_Equipment",
        },
      ],
    },
  ],
  "Form 2": [
    {
      title: "Atomic Structure",
      subtopics: [
        {
          title: "Structure of the Atom",
          note: "Explore the arrangement of protons, neutrons, and electrons.",
          simulationUrl: "https://phet.colorado.edu/sims/html/build-an-atom/latest/build-an-atom_en.html",
        },
        {
          title: "Electron Configuration",
          note: "Visualize how electrons occupy orbitals.",
          simulationUrl: "https://phet.colorado.edu/sims/html/build-an-atom/latest/build-an-atom_en.html",
        },
      ],
    },
    { 
      title: "Periodic Table",
      subtopics: [
        {
          title: "Trends in the Periodic Table",
          note: "Explore the structure and organization of the periodic table, including periods, groups, and element classification.",
          simulationUrl: "https://www.physicsclassroom.com/Concept-Builders/Chemistry/Periodic-Trends",
        },
      ],
    },
    {
      title: "Chemical Families",
      subtopics: [
        {
          title: "Reactivity of Chemical Families",
          note: "Examine how the alkali metals, halogens, and noble gases differ in reactivity and behavior.",
          simulationUrl: "https://www.middleschoolchemistry.com/lessonplans/chapter4/lesson3",
        },
      ],
    },
    {
      title: "Structure and Bonding",
      subtopics: [
        {
          title: "Ionic and Covalent Bonding",
          note: "Understand how atoms combine through ionic and covalent bonds to form stable molecules.",
          simulationUrl: "https://phet.colorado.edu/sims/html/molecule-shapes/latest/molecule-shapes_en.html",
        },
      ],
    },
    {
      title: "Salts",
      subtopics: [
        {
          title: "Formation and Properties of Salts",
          note: "Understand how salts are formed from acid-base reactions, explore their properties, and investigate common types of salts.",
          simulationUrl: "https://phet.colorado.edu/sims/html/acid-base-solutions/latest/acid-base-solutions_all.html", 
        },
      ],
    },
    {
      title: "Effect of an Electric Current on Substances",
      subtopics: [
        {
          title: "Electrolysis and Conductivity",
          note: "Learn how electric current affects chemical substances, including decomposition and conductivity.",
          simulationUrl: "https://iwant2study.org/lookangejss/chemistryejss/ejss_model_ElectrolysisofWaterVirtualLabv4/index.html",
        },
      ],
    },
    {
      title: "Carbon and Some of Its Compounds",
      subtopics: [
        {
          title: "Properties of Carbon Compounds",
          note: "Investigate the unique bonding and properties of carbon, and how it forms compounds like hydrocarbons and alcohols.",
          simulationUrl: "https://www.echalk.co.uk/3Dmolecules/carbon/carbon.htm?_USE=HTML5",
        },
      ],
    },
  ],
  "Form 3": [
    {
      title: "Chemical Reactions",
      subtopics: [
        {
          title: "Types of Chemical Reactions",
          note: "Classify and simulate different types of chemical reactions.",
          simulationUrl: "https://phet.colorado.edu/sims/html/reactants-products-and-leftovers/latest/reactants-products-and-leftovers_en.html",
        },
        {
          title: "Balancing Chemical Equations",
          note: "Practice balancing chemical equations.",
          simulationUrl: "https://phet.colorado.edu/sims/html/balancing-chemical-equations/latest/balancing-chemical-equations_en.html",
        },
      ],
    },
  ],
  "Form 4": [
    {
      title: "Acids, Bases, and Salts",
      subtopics: [
        {
          title: "pH Scale",
          note: "Explore the pH scale and test various substances.",
          simulationUrl: "https://phet.colorado.edu/sims/html/ph-scale/latest/ph-scale_en.html",
        },
        {
          title: "Neutralization Reactions",
          note: "Learn about acid-base neutralization.",
          simulationUrl: "https://phet.colorado.edu/sims/html/ph-scale-basics/latest/ph-scale-basics_en.html",
        },
      ],
    },
    {
      title: "Electrochemistry",
      subtopics: [
        {
          title: "Redox Reactions",
          note: "Visualize electron transfer in redox reactions.",
          simulationUrl: "https://phet.colorado.edu/sims/html/acid-base-solutions/latest/acid-base-solutions_en.html",
        },
        {
          title: "Electrolysis",
          note: "Study the decomposition of substances using electricity.",
          simulationUrl: "https://phet.colorado.edu/sims/html/sugar-and-salt-solutions/latest/sugar-and-salt-solutions_en.html",
        },
      ],
    },
  ],
};


function Chemistry() {
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
          <h1>Chemistry Learning Resources</h1>

          <div className="border p-3 rounded mb-4">
            <h2>Consultation</h2>
            <p className="text-danger">For learners only</p>
            <form onSubmit={handleRaiseHand}>
              <textarea
                value={questionText}
                onChange={(e) => setQuestionText(e.target.value)}
                placeholder="Describe what you are consulting about here..."
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

export default Chemistry;