import React, { useEffect, useState } from 'react';

function QnA() {
  const [questions, setQuestions] = useState([]);
  const [totalEarnings, setTotalEarnings] = useState(501);
  const [withdrawMessage, setWithdrawMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [bidMessage, setBidMessage] = useState('');

  useEffect(() => {
    fetch('https://ischool.eduengine.co.ke/api/questions')
      .then(response => {
        if (!response.ok) throw new Error('Failed to fetch questions');
        return response.json();
      })
      .then(data => {
        setQuestions(data.questions || data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message || 'Something went wrong');
        setLoading(false);
      });
  }, []);

  const handleWithdraw = async () => {
    try {
      const response = await fetch('https://ischool.eduengine.co.ke/api/earnings/withdraw', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: totalEarnings, userId: 1 }), // Replace userId
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setWithdrawMessage(result.message || 'Withdrawal requested.');
        setTotalEarnings(0);
      } else {
        setWithdrawMessage(result.message || 'Withdrawal failed.');
      }
    } catch (err) {
      setWithdrawMessage('Server error during withdrawal.');
      console.error(err);
    }
  }; 

  const handlePlaceBid = async (questionId) => {
    try {
      const response = await fetch(`https://ischool.eduengine.co.ke/api/bids`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          questionId,
          userId: 1, // Replace with real user ID
          bidAmount: 0, // Or actual bid input if needed
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setBidMessage(`Bid placed on question #${questionId}`);
      } else {
        setBidMessage(data.message || 'Failed to place bid.');
      }
    } catch (err) {
      console.error('Bid error:', err);
      setBidMessage('Server error during bidding.');
    }
  };

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial' }}>
      <h1>📚 Requested Lessons</h1>
      <p>Explore all requests and place your bid to handle them for a reward.</p>

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
        <p>Loading Requests...</p>
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
              <strong>Request:</strong> {q.question} <br />
              <strong>Asked by:</strong> {q.asker} <br />
              <strong>Posted:</strong> {q.created_at} <br />
              <strong>Bids:</strong> {q.bids}
            </p>
            <button
              onClick={() => handlePlaceBid(q.id)}
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
              Place bid
            </button>
          </div>
        ))
      )}
      {bidMessage && <p style={{ marginTop: '20px', color: '#004085' }}>{bidMessage}</p>}
    </div>
  );
}

export default QnA;