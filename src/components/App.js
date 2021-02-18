import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled from 'styled-components';
import Image from './Image';
import "./App.css";
import { API_KEY, BASE_URL } from "../constants";
import TextContent from "./TextContent";

const StyledApp = styled.div`
  border: 1px solid black;
  border-radius: 1rem;
  margin: 2rem auto;
  max-width: 800px;
  padding: 1rem;
  display: flex;
  flex-direction: column;

  @media (min-width: 800px) {
    max-width: initial;
    flex-direction: row;
  }
`

function App() {
  const [photoData, setPhotoData] = useState({});
  const [date, setDate] = useState(null);



  useEffect(() => {
    const fetchPhotoData = () => {
      let url = `${BASE_URL}?api_key=${API_KEY}`;
      // url += date ? `?date=${date}` : '';
      axios.get(url)
        .then(res => {
          setPhotoData(res.data);
        })
        .catch(err => {
          console.log(err);
        })
    }
    fetchPhotoData();
  }, []);

  return (
    <StyledApp className="App">
      <Image photoData={photoData}/>
      <TextContent photoData={photoData} date={date} setDate={setDate}/>
    </StyledApp>
  );
}

export default App;
