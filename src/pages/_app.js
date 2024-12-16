// Import necessary libraries
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/app.css';

const App = () => {
  const [password, setPassword] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [enableEmail, setEnableEmail] = useState(false);
  const backgroundImageUrl = '/assets/background.jpeg';
  const questions = [
    "Will you allow me to tease you for somewhat 60-70 years ?? (ya ya I dont believe in soul transfer thing)",
    "Will you be able to fight with me for a life ?? (we are chaotic yess..)",
    "Girlfriend is too cliche , Will you be my ladyy officialy ??",
    "But yeah. Will you be my girlfriend ??",    
    "We will hold each other and won't leave, ever. Yess ??",
    "Let's jump(or should I say fly) into our personal world of love ??, serenalivia.."
  ];

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === "1234567890") { // Replace "showUI" with your specific text
      setIsAuthorized(true);
      setEnableEmail(true);
    }
    else if(password === "123456789"){
      setIsAuthorized(true);
    }
    else {
      alert("Incorrect text, please try again!");
    }
  };

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showGif, setShowGif] = useState(false);
  const [showYesImage, setShowYesImage] = useState(false);
  const [showNoImage, setShowNoImage] = useState(false);
  const [isNoDisabled, setIsNoDisabled] = useState(false);
  const [slideOver, setSlideOver] = useState(false);
  const yesImages = [
    'https://t3.ftcdn.net/jpg/10/03/55/94/360_F_1003559489_5K1ZvC0XVoxFsYCwEhHDA0ybI5vyWIkk.jpg',
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2c048870-5581-462a-938a-c01831df37f8/dhp3oge-da96b7b7-03f7-462b-a1bd-16b00433da0d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJjMDQ4ODcwLTU1ODEtNDYyYS05MzhhLWMwMTgzMWRmMzdmOFwvZGhwM29nZS1kYTk2YjdiNy0wM2Y3LTQ2MmItYTFiZC0xNmIwMDQzM2RhMGQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.LUjaOozvUJOaGecufYGs23dUP4O09Gckmj9cYM7Twlo',
    'https://nationaltoday.com/wp-content/uploads/2022/06/24-Hold-Hands-1200x834.jpg',
    'https://i.ytimg.com/vi/6_5HEECajRQ/maxresdefault.jpg',
    'https://i.ytimg.com/vi/J-ZKsCpTNPc/maxresdefault.jpg',
    'https://img.freepik.com/premium-photo/world-love-heart_492154-5085.jpg'
  ];

  const noImages = [
    'https://st.depositphotos.com/38175496/60154/i/450/depositphotos_601541724-stock-illustration-emoji-emoticons-rendering-emoji-isolated.jpg',
    'https://i.pinimg.com/564x/35/46/40/3546401c88dbd432e07cff60690aa887.jpg',
    'https://t4.ftcdn.net/jpg/06/84/10/73/360_F_684107393_nto0UyIoXSkZUNTYGq9yttaSaP7KQbkU.jpg',
    'https://i.pinimg.com/236x/ac/db/1e/acdb1efcba17192c1113edb00e326ff5.jpg',
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4fada96d-4a02-4eb8-b0ea-e67e7e062706/d2f8d3v-e98d668f-b726-439e-b9cb-4beffe151ab6.jpg/v1/fill/w_600,h_518,q_75,strp/sad_naruto_by_teamtaka_d2f8d3v-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTE4IiwicGF0aCI6IlwvZlwvNGZhZGE5NmQtNGEwMi00ZWI4LWIwZWEtZTY3ZTdlMDYyNzA2XC9kMmY4ZDN2LWU5OGQ2NjhmLWI3MjYtNDM5ZS1iOWNiLTRiZWZmZTE1MWFiNi5qcGciLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.rCHS7leaHrSjX7gn2hdGyhu6nKl8nGMOGaGAFbfQtg4',
    'https://miro.medium.com/v2/resize:fit:960/0*UaDz9nhuXVwhTDCe.jpg'
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
        setSlideOver(true);
        setShowGif(true);
        if(enableEmail)
        {
          sendEmail();
        }
          
      }
    }, 3000); // 1-second delay
  };

  const handleNo = () => {
    setShowYesImage(false);
    setShowNoImage(true);
  };

  const sendEmail = () => {
    //e.preventDefault();
    const templateParams = {
    };
    

    emailjs.send('service_6d02r2b', 'template_s55fo49', templateParams, '7C4oJvLOJpUxGax1d')
      .then(response => {
        //alert('Email sent successfully!');
      })
      .catch(err => {
        //alert('Error in sending email:', err);
      });
  };

  return (
    <div className="app">
      <img src="https://media.istockphoto.com/id/473912772/photo/tulips-on-a-sunny-field-in-spring.jpg?s=612x612&w=0&k=20&c=iJUeTMJEQbvLQmXI4h0P6jcxcoEUYQQcmDpMvZgMnHk=" alt="ruk to sahi.." style={{ maxWidth: '100%', height : 'auto' }}/>
      <img src="https://ofhsoupkitchen.org/wp-content/uploads/2022/02/spread-love-quotes-2.jpg" alt="patience..." style={{ maxWidth: '100%', height : 'auto', marginTop : '20px' }}/>
      <h2>I want my bakbak back</h2>
    </div>
    // <div className="app">
    //   {
    //     !isAuthorized ? (
    //       <form onSubmit={handlePasswordSubmit}>
    //         <h3>Enter the password to view the UI</h3>
    //         <input
    //           type="text"
    //           value={password}
    //           onChange={(e) => setPassword(e.target.value)}
    //           placeholder="Enter text here"
    //         />
    //         <button type="submit">Submit</button>
    //       </form>
    //     ) : slideOver ? (
    //       <></>
    //     ) : (
    //       <div className="slider">
    //         <p>{questions[currentQuestion]}</p>
    //         <div className="buttons">
    //           <button 
    //             className="yes-button"
    //             onClick={handleYes}
    //             //onMouseEnter={() => setHoverText(`<img src="${yesImageURL}" alt="Yes Image" style="width: 150px;"/>`)}
    //             //onMouseLeave={() => setHoverText(null)}
    //           >
    //             Yes
    //           </button>
    //           <button 
    //             className="no-button"
    //             onClick={handleNo}
    //             disabled={isNoDisabled}
    //             //onMouseEnter={() => setHoverText(`<img src="${noImageURL}" alt="No Image" style="width: 150px;"/>`)}
    //             //onMouseLeave={() => setHoverText(null)}
    //           >
    //             No
    //           </button>
    //         </div>
    //       </div>
    //     )
    //   }      
    //   {showYesImage && (
    //     <div className="hover-image">
    //       <img src={yesImages[currentQuestion]} alt="Yes Image" style={{ maxWidth: '100%', height : 'auto' }} />
    //     </div>
    //   )}
    //   {showNoImage && (
    //     <div className="hover-image">
    //       <img src={noImages[currentQuestion]} alt="No Image" style={{ maxWidth: '100%', height : 'auto' }} />
    //     </div>
    //   )}
    //   {showGif && (
    //     <div className="hover-image">
    //       <img src="https://i.pinimg.com/originals/0e/bd/86/0ebd8658f7610a409cdce22341cb2125.gif" alt="No Image" style={{ maxWidth: '100%', height : 'auto' }} />
    //     </div>
    //   )}
    // </div>
  );
};

export default App;


