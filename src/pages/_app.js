// Import necessary libraries
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/app.css';

const App = () => {
  const questions = [
    "Do you like React?",
    "Is JavaScript your favorite language?",
    "Would you recommend this app?"
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showGif, setShowGif] = useState(false);
  const [showYesImage, setShowYesImage] = useState(false);
  const [showNoImage, setShowNoImage] = useState(false);
  const [isNoDisabled, setIsNoDisabled] = useState(false);
  const yesImages = [
    'https://t3.ftcdn.net/jpg/10/03/55/94/360_F_1003559489_5K1ZvC0XVoxFsYCwEhHDA0ybI5vyWIkk.jpg',
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2c048870-5581-462a-938a-c01831df37f8/dhp3oge-da96b7b7-03f7-462b-a1bd-16b00433da0d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJjMDQ4ODcwLTU1ODEtNDYyYS05MzhhLWMwMTgzMWRmMzdmOFwvZGhwM29nZS1kYTk2YjdiNy0wM2Y3LTQ2MmItYTFiZC0xNmIwMDQzM2RhMGQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.LUjaOozvUJOaGecufYGs23dUP4O09Gckmj9cYM7Twlo',
    'https://nationaltoday.com/wp-content/uploads/2022/06/24-Hold-Hands-1200x834.jpg'
  ];

  const noImages = [
    'https://st.depositphotos.com/38175496/60154/i/450/depositphotos_601541724-stock-illustration-emoji-emoticons-rendering-emoji-isolated.jpg',
    'https://i.pinimg.com/564x/35/46/40/3546401c88dbd432e07cff60690aa887.jpg',
    'https://t4.ftcdn.net/jpg/06/84/10/73/360_F_684107393_nto0UyIoXSkZUNTYGq9yttaSaP7KQbkU.jpg'
  ];

  const handleYes = () => {
    setShowNoImage(false);
    setShowYesImage(true); // Show the Yes image
    setIsNoDisabled(true); // Disable the No button
    
    setTimeout(() => {
      setShowYesImage(false); // Hide the Yes image after a short delay
      setIsNoDisabled(false); // Re-enable the No button
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        //sendEmail();
      }
    }, 1000); // 1-second delay
  };

  const handleNo = () => {
    setShowYesImage(false);
    setShowNoImage(true);
  };

  const sendEmail = () => {
    //e.preventDefault();
    const templateParams = {
      to_name: 'User',
      from_name:'Jaimin',
      to_email:'jhp02016@gmail.com',
      message_html: `
      <div style="text-align: center; background-color: #fdf2f8; padding: 20px; font-family: Arial, sans-serif;">
        <img 
          src="https://drive.google.com/uc?export=view&id=1QSY59aaGDLJ43qA4YW8iyRiA7bl6Mi7h" 
          alt="We Are Doing It" 
          style="width: 100%; max-width: 600px; height: auto; margin: 20px 0; border: none;"
        />
      </div>
    `,
    };
    

    emailjs.send('service_6d02r2b', 'template_enauxgb', templateParams, '7C4oJvLOJpUxGax1d')
      .then(response => {
        alert('Email sent successfully!');
      })
      .catch(err => {
        alert('Error in sending email:', err);
      });
  };

  return (
    <div className="app">
      <div className="slider">
        <h2>{questions[currentQuestion]}</h2>
        <div className="buttons">
          <button 
            className="yes-button"
            onClick={handleYes}
            //onMouseEnter={() => setHoverText(`<img src="${yesImageURL}" alt="Yes Image" style="width: 150px;"/>`)}
            //onMouseLeave={() => setHoverText(null)}
          >
            Yes
          </button>
          <button 
            className="no-button"
            onClick={handleNo}
            disabled={isNoDisabled}
            //onMouseEnter={() => setHoverText(`<img src="${noImageURL}" alt="No Image" style="width: 150px;"/>`)}
            //onMouseLeave={() => setHoverText(null)}
          >
            No
          </button>
        </div>
      </div>

      
      {showYesImage && (
        <div className="hover-image">
          <img src={yesImages[currentQuestion]} alt="Yes Image" style={{ width: '150px' }} />
        </div>
      )}
      {showNoImage && (
        <div className="hover-image">
          <img src={noImages[currentQuestion]} alt="No Image" style={{ width: '150px' }} />
        </div>
      )}
      {showGif && <div className="gif">Here is your GIF!</div>}
    </div>
  );
};

export default App;


