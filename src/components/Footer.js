import React from 'react';

const Footer = () => {
  return (
    <footer id='footer-main'>
      <div className='content has-text-centered'>
        <p>
          <p>
            GA-Project-3 | Created by{' '}
            <a
              className='footer-links'
              href='https://github.com/TatianaRG'
              target='_blank'
              rel='noreferrer'
            >
              Tatiana Guzun
            </a>
            ,{' '}
            <a
              className='footer-links'
              href='https://github.com/BeltonJohn/'
              target='_blank'
              rel='noreferrer'
            >
              Matthew Creese
            </a>{' '}
            &amp;{' '}
            <a
              className='footer-links'
              href='https://github.com/mstephanou'
              target='_blank'
              rel='noreferrer'
            >
              Michael Stephanou
            </a>
          </p>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
