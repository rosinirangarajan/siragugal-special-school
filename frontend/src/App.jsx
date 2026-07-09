import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

// Import pages
import Home from './pages/Home';
import About from './pages/About';
import Activities from './pages/Activities';
import Staff from './pages/Staff';
import Courses from './pages/Courses';
import Gallery from './pages/Gallery';
import Donation from './pages/Donation';
import Contact from './pages/Contact';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <Router>
      <Routes>
        {/* Visitor Pages wrapped in MainLayout */}
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/about" element={<MainLayout><About /></MainLayout>} />
        <Route path="/activities" element={<MainLayout><Activities /></MainLayout>} />
        <Route path="/staff" element={<MainLayout><Staff /></MainLayout>} />
        <Route path="/courses" element={<MainLayout><Courses /></MainLayout>} />
        <Route path="/gallery" element={<MainLayout><Gallery /></MainLayout>} />
        <Route path="/donation" element={<MainLayout><Donation /></MainLayout>} />
        <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
        <Route path="/admin/login" element={<MainLayout><AdminLogin /></MainLayout>} />

        {/* Dashboard page is full-screen standalone */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
