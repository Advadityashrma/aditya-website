import React from 'react';

const LawFirmWebsite: React.FC = () => {
  return (
    <div>
      <header>
        <h1>Welcome to Our Law Firm</h1>
      </header>
      <main>
        <section>
          <h2>About Us</h2>
          <p>We are a dedicated team of lawyers providing top-quality legal services.</p>
        </section>
        <section>
          <h2>Services</h2>
          <ul>
            <li>Corporate Law</li>
            <li>Family Law</li>
            <li>Personal Injury</li>
            <li>Real Estate Law</li>
          </ul>
        </section>
      </main>
      <footer>
        <p>Contact us at: info@lawfirm.com</p>
      </footer>
    </div>
  );
};

export default LawFirmWebsite;