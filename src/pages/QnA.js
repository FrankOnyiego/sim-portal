import React, { useEffect, useState } from 'react';

function QnA() {
  const [questions, setQuestions] = useState([]);
  const [totalEarnings, setTotalEarnings] = useState(0); // Adjust this later from backend if needed
  const [withdrawMessage, setWithdrawMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://ischool.eduengine.co.ke/api/questions')
      .then(response => {
        if (!response.ok) throw new Error('Failed to fetch questions');
        return response.json();
      })
      .then(data => {
        setQuestions(data.questions || data); // depending on how your API responds
        setLoading(false);
      })
      .catch(err => {
        setError(err.message || 'Something went wrong');
        setLoading(false);
      });
  }, []);

  const handleWithdraw = () => {
    // You can later make this trigger a backend endpoint (e.g., /withdraw)
    setWithdrawMessage(`KES ${totalEarnings} withdrawal requested!`);
    setTotalEarnings(0);
  };

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial' }}>
      <h1>📚 Live Q&A Feed</h1>
      <p>Explore all questions and place your bid to answer them for a reward.</p>

      {/* 💰 Earnings Summary */}
      <div style={{
        border: '2px solid #28a745',
        padding: '20px',
        borderRadius: '10px',
        backgroundColor: '#eafbea',
        marginBottom: '30px',
        maxWidth: '400px'
      }}>
        <h2>💼 My Earnings</h2>
        <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>KES {totalEarnings}</p>
        <button
          onClick={handleWithdraw}
          style={{
            padding: '10px 20px',
            backgroundColor: '#28a745',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Withdraw
        </button>
        {withdrawMessage && <p style={{ marginTop: '10px', color: '#155724' }}>{withdrawMessage}</p>}
      </div>

      {/* 💬 Questions List */}
      {loading ? (
        <p>Loading questions...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>❌ {error}</p>
      ) : questions.length === 0 ? (
        <p>No questions have been asked yet.</p>
      ) : (
        questions.map((q) => (
          <div
            key={q.id}
            style={{
              backgroundColor: '#f9f9f9',
              border: '1px solid #ddd',
              borderRadius: '10px',
              padding: '15px',
              marginBottom: '20px',
            }}
          >
            <h3 style={{ marginBottom: '5px' }}>💬 {q.text}</h3>
            <p>
              <strong>Reward:</strong> KES {q.reward} <br />
              <strong>Topic:</strong> {q.topic} <br />
              <strong>Asked by:</strong> {q.asker} <br />
              <strong>Posted:</strong> {q.timestamp} <br />
              <strong>Bids:</strong> {q.bids}
            </p>
            <button
              onClick={() => alert(`Redirecting to answer bid form for question #${q.id}`)}
              style={{
                marginTop: '10px',
                backgroundColor: '#007bff',
                color: '#fff',
                padding: '8px 16px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Bid to Answer
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default QnA;
