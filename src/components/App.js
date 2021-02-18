import React, { useState, useEffect } from "react";
import Image from './Image';
import Details from './Details';
import axios from 'axios';
import "./App.css";
import { API_KEY, BASE_URL } from "../constants";

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
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
      <Image photoData={photoData}/>
      <Details photoData={photoData} date={date} setDate={setDate}/>
    </div>
  );
}

export default App;
