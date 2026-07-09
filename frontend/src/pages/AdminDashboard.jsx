import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("activities");

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      navigate("/admin/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  // Mock database entries state
  const [activities, setActivities] = useState([
    { id: 1, title: "Annual Day Celebration", category: "Celebrations", date: "Annually in March" },
    { id: 2, title: "Autism Awareness Day", category: "Awareness", date: "April 2" }
  ]);

  const [gallery, setGallery] = useState([
    { id: 1, title: "Classroom Learning Session", category: "School" },
    { id: 2, title: "Occupational Therapy Activity", category: "Therapy" }
  ]);

  const [messages, setMessages] = useState([
    { id: 1, name: "Ramesh Kumar", email: "ramesh@gmail.com", phone: "9876543210", msg: "Interested in early intervention admission for my 4 year old child." },
    { id: 2, name: "Sneha Pillai", email: "sneha@yahoo.com", phone: "8765432109", msg: "I would like to volunteer as a special educator assistant during weekends." }
  ]);

  const [donations, setDonations] = useState([
    { id: 1, donor: "Aravind Swamy", program: "Sponsor Nutrition", status: "Completed (Simulated)" },
    { id: 2, donor: "M/s TCS Foundation", program: "Sponsor Therapy Equipment", status: "Pending Verification" }
  ]);

  const deleteActivity = (id) => {
    setActivities(prev => prev.filter(act => act.id !== id));
  };

  const deleteGallery = (id) => {
    setGallery(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="dashboard-page animate-fade-in">
      <div className="dashboard-container">
        {/* Sidebar */}
        <aside className="dashboard-sidebar glass-card">
          <div className="sidebar-brand">
            <span className="logo-icon">S</span>
            <div>
              <h3>Admin Console</h3>
              <p>Siragugal Portal</p>
            </div>
          </div>
          
          <nav className="sidebar-nav">
            <button className={`nav-item ${activeTab === 'activities' ? 'active' : ''}`} onClick={() => setActiveTab('activities')}>
              <span>📅</span> Manage Activities
            </button>
            <button className={`nav-item ${activeTab === 'gallery' ? 'active' : ''}`} onClick={() => setActiveTab('gallery')}>
              <span>🖼</span> Manage Gallery
            </button>
            <button className={`nav-item ${activeTab === 'messages' ? 'active' : ''}`} onClick={() => setActiveTab('messages')}>
              <span>✉</span> Messages Inbox
            </button>
            <button className={`nav-item ${activeTab === 'donations' ? 'active' : ''}`} onClick={() => setActiveTab('donations')}>
              <span>🤝</span> Donations Log
            </button>
          </nav>

          <button className="logout-btn" onClick={handleLogout}>Log Out Portal</button>
        </aside>

        {/* Content Pane */}
        <main className="dashboard-main-content glass-card">
          {activeTab === 'activities' && (
            <div className="pane-section">
              <div className="pane-header">
                <h2>Manage Activities Database</h2>
                <button className="btn-primary btn-sm" onClick={() => {
                  const title = prompt("Enter activity title:");
                  if (title) {
                    setActivities(prev => [...prev, { id: Date.now(), title, category: "Celebrations", date: "Just Added" }]);
                  }
                }}>+ Add New Activity</button>
              </div>
              <div className="table-responsive">
                <table>
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Category</th>
                      <th>Scheduled Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {activities.map(act => (
                      <tr key={act.id}>
                        <td><strong>{act.title}</strong></td>
                        <td>{act.category}</td>
                        <td>{act.date}</td>
                        <td>
                          <button className="action-delete-btn" onClick={() => deleteActivity(act.id)}>Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'gallery' && (
            <div className="pane-section">
              <div className="pane-header">
                <h2>Manage Media Gallery</h2>
                <button className="btn-primary btn-sm" onClick={() => {
                  const title = prompt("Enter gallery image title:");
                  if (title) {
                    setGallery(prev => [...prev, { id: Date.now(), title, category: "School" }]);
                  }
                }}>+ Upload New Image</button>
              </div>
              <div className="table-responsive">
                <table>
                  <thead>
                    <tr>
                      <th>Image Title</th>
                      <th>Category</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {gallery.map(item => (
                      <tr key={item.id}>
                        <td><strong>{item.title}</strong></td>
                        <td>{item.category}</td>
                        <td>
                          <button className="action-delete-btn" onClick={() => deleteGallery(item.id)}>Remove</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'messages' && (
            <div className="pane-section">
              <h2>Contact Message Inquiries</h2>
              <p className="section-intro-txt">Showing raw form messages submitted by visitors.</p>
              <div className="messages-grid">
                {messages.map(msg => (
                  <div key={msg.id} className="message-card glass-card">
                    <div className="msg-header">
                      <h4>{msg.name}</h4>
                      <span>{msg.phone} • {msg.email}</span>
                    </div>
                    <p className="msg-body">{msg.msg}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'donations' && (
            <div className="pane-section">
              <h2>Donations Tracking Log</h2>
              <div className="table-responsive">
                <table>
                  <thead>
                    <tr>
                      <th>Sponsor Name</th>
                      <th>Target Program</th>
                      <th>Log Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {donations.map(don => (
                      <tr key={don.id}>
                        <td><strong>{don.donor}</strong></td>
                        <td>{don.program}</td>
                        <td><span className="status-label-badge">{don.status}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
