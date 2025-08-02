import React, { useState } from 'react';

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

const handleRaiseHand = async () => {
  if (questionText && reward) {
    try {
      const response = await fetch('https://ischool.eduengine.co.ke/api/questions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: 1, // Replace with the actual logged-in user's ID
          question: questionText,
          reward: parseFloat(reward),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Question submitted successfully!');
        setQuestionText('');
        setReward('');
        // Optionally add it to local UI
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
        alert(data.message || 'Failed to submit question');
      }
    } catch (error) {
      console.error('Error posting question:', error);
      alert('An error occurred while submitting your question.');
    }
  } else {
    alert('Please enter both question text and reward.');
  }
};


  const handleBid = (qid) => {
    alert(`Bid submitted for question #${qid}: "${bidMessage}"`);
    setBidMessage('');
  };

  return (
    <div className="App" style={{ padding: '20px' }}>
      {!selectedSimulation ? (
        <>
          <h1>Chemistry Learning Simulations</h1>
          
          {/* Raise Hand Section */}
          <div style={{ padding: '20px', border: '1px solid #ccc', marginBottom: '30px', borderRadius: '10px' }}>
            <h2>Request a Lesson</h2>
            <textarea
              value={questionText}
              onChange={(e) => setQuestionText(e.target.value)}
              placeholder="Describe the lesson you are requesting for here..."
              style={{ width: '100%', padding: '10px', borderRadius: '5px', marginBottom: '10px' }}
            />
            <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
              <input
                type="number"
                value={reward}
                onChange={(e) => setReward(e.target.value)}
                placeholder="Enter the amount you are willing to spend in KES"
                style={{ padding: '8px', flex: 1 }}
              />
              <button
                onClick={handleRaiseHand}
                style={{
                  backgroundColor: '#28a745',
                  color: '#fff',
                  padding: '10px',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                  Request a Lesson(Not Free)
              </button>
            </div>
          </div>

          {/* Existing Simulation Section */}
          {Object.entries(forms).map(([formName, topics]) => (
            <div key={formName} style={{ marginBottom: '30px' }}>
              <h2>{formName}</h2>
              {topics.map((topic, topicIdx) => (
                <div key={topicIdx} style={{ marginBottom: '15px' }}>
                  <h3>{topic.title}</h3>
                  {topic.subtopics.map((subtopic, subIdx) => (
                    <div key={subIdx} style={{ marginBottom: '10px' }}>
                      <strong>{subtopic.title}</strong>
                      <p>{subtopic.note}</p>
                      {subtopic.simulationUrl ? (
                        <button
                          onClick={() => setSelectedSimulation(subtopic)}
                          style={{
                            padding: '6px 12px',
                            marginTop: '5px',
                            cursor: 'pointer',
                            borderRadius: '5px',
                            backgroundColor: '#007bff',
                            color: '#fff',
                            border: 'none',
                          }}
                        >
                          Launch Simulation
                        </button>
                      ) : (
                        <p style={{ fontStyle: 'italic', color: 'gray' }}>Simulation not available</p>
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
          <button
            onClick={() => setSelectedSimulation(null)}
            style={{
              marginBottom: '15px',
              padding: '10px',
              border: 'none',
              backgroundColor: '#dc3545',
              color: '#fff',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
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
    </div>
  );
}

export default Chemistry;
