import { useState } from 'react';
import { motion } from 'framer-motion';

const LawFirmWebsite = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      {/* Dark Mode Toggle */}
      <button onClick={toggleDarkMode} className="toggle-button">
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>

      {/* Navbar */}
      <nav className="navbar">
        <h1>Law Firm</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Practice Areas</li>
          <li>Blog</li>
          <li>Careers</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="hero">
        <h2>Welcome to Our Law Firm</h2>
        <p>Your partners in justice.</p>
      </motion.section>

      {/* About Section */}
      <motion.section initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="about">
        <h3>About Us</h3>
        <p>We are dedicated to providing the best legal services.</p>
      </motion.section>

      {/* Practice Areas */}
      <motion.section initial={{ x: -200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="practice-areas">
        <h3>Practice Areas</h3>
        <ul>
          <li>Family Law</li>
          <li>Corporate Law</li>
          <li>Criminal Law</li>
        </ul>
      </motion.section>

      {/* Blog Section */}
      <motion.section initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }} className="blog">
        <h3>Our Blog</h3>
        <p>Stay updated with the latest legal news.</p>
      </motion.section>

      {/* Careers Form */}
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="careers">
        <h3>Careers</h3>
        <form>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="resume" placeholder="Your Resume" required></textarea>
          <button type="submit">Apply</button>
        </form>
      </motion.section>

      {/* Contact Form */}
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="contact">
        <h3>Contact Us</h3>
        <form>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </motion.section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Law Firm. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default LawFirmWebsite;
