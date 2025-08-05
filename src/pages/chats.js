import React, { useEffect, useState } from 'react';

const MessageRoom = () => {
  const [requests, setRequests] = useState([]);
  const [selectedRequestId, setSelectedRequestId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [showChat, setShowChat] = useState(false);

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

  const fetchMessages = async (requestId) => {
    try {
      const res = await fetch(`https://ischool.eduengine.co.ke/api/messages/${requestId}`);
      const data = await res.json();
      setMessages(data.messages || []);
    } catch (err) {
      console.error('Error fetching messages:', err);
    }
  };

  const openChat = (requestId) => {
    setSelectedRequestId(requestId);
    fetchMessages(requestId);
    setShowChat(true);
  };

  const closeChat = () => {
    setShowChat(false);
    setSelectedRequestId(null);
    setMessages([]);
    setNewMessage('');
  };

  const handleSendMessage = async () => {
    if (!newMessage.trim()) return;

    const payload = {
      request_id: selectedRequestId,
      user_id: user.user_id,
      content: newMessage,
    };

    try {
      const res = await fetch('https://ischool.eduengine.co.ke/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setNewMessage('');
        fetchMessages(selectedRequestId);
      }
    } catch (err) {
      console.error('Failed to send message:', err);
    }
  };

  return (
    <div className="container mt-4">
      <h4>Your Request Chats</h4>
      {requests.length === 0 ? (
        <p>You haven't placed any bids yet.</p>
      ) : (
        <ul className="list-group">
          {requests.map((req) => (
            <li key={req.id} className="list-group-item d-flex justify-content-between align-items-center">
              Request #{req.id}
              <button className="btn btn-primary" onClick={() => openChat(req.id)}>
                Chat for request #{req.id}
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* Chat Modal */}
      {showChat && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Chat for Request #{selectedRequestId}</h5>
                <button type="button" className="btn-close" onClick={closeChat}></button>
              </div>
              <div className="modal-body">
                <div className="chat-box" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                  {messages.map((msg) => (
                    <div key={msg.id} className={`mb-2 ${msg.user_id === user.user_id ? 'text-end' : 'text-start'}`}>
                      <span className="badge bg-secondary">{msg.content}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-3">
                  <textarea
                    className="form-control"
                    rows="2"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message"
                  ></textarea>
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={closeChat}>Close</button>
                <button className="btn btn-primary" onClick={handleSendMessage}>Send</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessageRoom;
