import React from 'react';

function generateCopyrightYears() {
  const yearPublished = 2019;
  if (new Date().getFullYear() === yearPublished) return yearPublished;

  return `${yearPublished} - ${new Date().getFullYear()}`
}

const Footer = () => (
  <footer id="Footer">
    <small className="copyright">
      &copy; {generateCopyrightYears()} Brandon Mellus
    </small>
  </footer>
);

export default Footer;
