import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';


const steps = [
  {
    id: '0',
    message: 'Welcome to Dusk Bot! How can I assist you today?',
    trigger: '1',
  },
  {
    id: '1',
    message: 'To get started, could you please provide your name?',
    trigger: '2',
  },
  {
    id: '2',
    user: true,
    trigger: '3',
  },
  {
    id: '3',
    message: 'Great! Can you provide your phone number?',
    trigger: '4',
  },
  {
    id: '4',
    user: true,
    trigger: '5',
    validator: (value) => {
      // You may customize phone number validation as needed
      if (!value.match(/^\d{10}$/)) {
        return 'Please enter a valid 10-digit phone number.';
      }
      return true;
    },
  },
  {
    id: '5',
    message: 'Thanks for providing your phone number! What is the name of your company?',
    trigger: '6',
  },
  {
    id: '6',
    user: true,
    trigger: '7',
  },
  {
    id: '7',
    message: 'Got it! How can we assist your company, {previousValue}?',
    trigger: '8',
  },
  {
    id: '8',
    user: true,
    trigger: '9',
  },
  {
    id: '9',
    message: 'Thank you for providing the information. A CRM representative will contact you shortly to discuss your needs. Is there anything else I can help you with?',
    end: true,
  },
];

const theme = {
  background: 'lightgrey',
  headerBgColor: 'black',
  headerFontSize: '20px',
  botBubbleColor: 'grey',
  headerFontColor: 'white',
  botFontColor: 'white',
  userBubbleColor: '#FF5733',
  userFontColor: 'white',
};

const config = {
  botAvatar: 'https://i.pinimg.com/originals/02/c5/a8/02c5a82909a225411008d772ee6b7d62.png',
  botAvatarStyle: {
    borderRadius: '50%',
  },
  floating: true,
};

function Chatbot() {
  const navigate = useNavigate();
    const location = useLocation();
  
    const isAuthPage = ['/', '/register'].includes(location.pathname);
    if (isAuthPage) {
      return null;
    }
  return (

    <div className="App">
      <ThemeProvider theme={theme}>
        <ChatBot
          headerTitle="CRM Bot"
          steps={steps}
          {...config}
        />
      </ThemeProvider>
    </div>
  );
}

export default Chatbot;