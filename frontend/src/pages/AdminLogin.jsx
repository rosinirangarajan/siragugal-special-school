import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!credentials.email || !credentials.password) {
      setError("Please fill in all fields.");
      return;
    }

    // Mock Login check
    if (credentials.email === "admin@siragugal.org" && credentials.password === "admin123") {
      localStorage.setItem("adminToken", "mock-jwt-token-xyz");
      navigate("/admin/dashboard");
    } else {
      setError("Invalid email or password. (Hint: admin@siragugal.org / admin123)");
    }
  };

  return (
    <div className="login-page animate-fade-in">
      <div className="login-card glass-card">
        <div className="login-header">
          <span className="logo-icon">S</span>
          <h2>Admin Login Portal</h2>
          <p>Sign in to manage activities, gallery uploads, and contact submissions.</p>
        </div>

        {error && <div className="login-error-alert">{error}</div>}

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="e.g. admin@siragugal.org"
              value={credentials.email}
              onChange={(e) => {
                setCredentials(prev => ({ ...prev, email: e.target.value }));
                setError('');
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              value={credentials.password}
              onChange={(e) => {
                setCredentials(prev => ({ ...prev, password: e.target.value }));
                setError('');
              }}
            />
          </div>

          <button type="submit" className="btn-primary login-submit-btn">Authorize Entry &rarr;</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
