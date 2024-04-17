import React from 'react';
import '../Homepage/homepage.scss'; // Import your CSS file
import Register from '../../Routes/Register';
import Footer from '../footer';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="homepage">
      <header>
        <h1>Your Expense Tracker</h1>
        <p >Effortless Expense Tracking <br />
         Smarter Financial Decisions</p>
      </header>

      <section className="hero">
        <h1>Take Charge of Your Finances</h1>
      </section>

      <section className="features">
        <h2>Simplify Your Budgeting with Powerful Features</h2>
        <ul>
          <li>
            <i className="fas fa-plus-circle"></i>
            Easy Expense Entry
          </li>
          <li>
            <i className="fas fa-tag"></i>
            Automated Expense Categorization
          </li>
          <li>
            <i className="fas fa-chart-line"></i>
            Visualization & Budgeting Tools
          </li>
          <li>
            <i className="fas fa-lock"></i>
            Secure Data Storage (Optional)
          </li>
        </ul>
      </section>

      <div className="cta">
      <li><Link to="/register">Register here to get full access</Link></li> <a href="#">  </a> <br />

        <a href="#">Learn More</a>
      </div>
    </div>
  );
};

export default HomePage;
