import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ColoredLogo from '../assets/ColoredLogo.jpg';

const HomePage = () => {
  const [output, setOutput] = useState(null); 

  useEffect(() => {
    axios.get('https://api.publicapis.org/entries')
      .then(response => {
        console.log(response.data.entries);
        setOutput(response.data.entries);
        // setOutput('aaahhhh') <- Remove this line, as it overwrites the previous value
      });
  }, []);

  return (
    <div>
      <center>
        <h1>EperCreepers</h1>
        <img src={ColoredLogo} />
      </center>
    </div>
  );
};

export default HomePage;
