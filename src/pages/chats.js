import React, { useEffect, useState } from 'react';

const OrderStatus = () => {
  const [requests, setRequests] = useState([]);

  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (user && user.user_id) {
      fetchRequestsForUser(user.user_id);
    }
  }, []);

  const fetchRequestsForUser = async (userId) => {
    try {
      const response = await fetch(`https://ischool.eduengine.co.ke/api/user-bids/${userId}`);
      const data = await response.json();
      setRequests(data.requests || []);
    } catch (error) {
      console.error('Error fetching requests:', error);
    }
  };

  // Helper: decide what status text to show
  const getOrderStatus = (req) => {
    if (!req.assigned_driver_id) {
      return "Not yet given to anyone";
    }
    if (req.assigned_driver_id === user.user_id) {
      return "✅ You have been given this order";
    }
    return "🚚 This order is being handled by someone else";
  };

  return (
    <div className="container mt-4">
      <h4>Bids Status</h4>
      {requests.length === 0 ? (
        <p>You haven't placed any bids yet.</p>
      ) : (
        <ul className="list-group">
          {requests.map((req) => (
            <li key={req.question_id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <strong>Request #{req.question_id}</strong>
                <br />
                <span className="text-muted">{getOrderStatus(req)}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderStatus;
