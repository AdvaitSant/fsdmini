import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import TicTacToe from './components/TicTacToe';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Teams from './components/Teams'; // Import Teams component
import './App.css';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = (username) => {
        setIsLoggedIn(true);
        // You may want to set the current user here
    };

    return (
        <UserProvider>
            <Router>
                <Navbar />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login onLogin={handleLogin} />} />
                        <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Login onLogin={handleLogin} />} />
                        <Route path="/tictactoe" element={isLoggedIn ? <TicTacToe /> : <Login onLogin={handleLogin} />} />
                        <Route path="/teams" element={<Teams />} /> {/* Add Teams route */}
                    </Routes>
                </div>
            </Router>
        </UserProvider>
    );
};

export default App;
