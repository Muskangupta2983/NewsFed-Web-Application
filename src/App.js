import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import LoadingBar from 'react-top-loading-bar'

function App() {
  let categories = {
    Business: "business",
    Entertainment: "entertainment",
    General: "general",
    Health: "health",
    Science: "science",
    Sports: "sports",
    Technology: "technology",
  };

  let countries = {
    USA: "us",
    Russia: "ru",
    India: "in",
    China: "cn",
    Japan: "jp",
    France: "fr",
    Australia: "au",
    Ukraine: "ua",
    UAE: "ae",
  };

  const [dark, setDark] = useState("light");

  const setMode = () =>{
    if(dark === "light"){
      setDark("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    }

    else{
      setDark("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }

  const apiKey = process.env.REACT_APP_API_KEY;

  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <Navbar categories={categories} countries={countries} dark={dark} setMode={setMode}/>
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={<News key={null} dark={dark} apiKey={apiKey} setProgress={setProgress}/>}
          />
          {Object.keys(categories).map((category) => {
            return (
              <Route
                exact
                path={`/${category}`}
                element={
                  <News key={category} category={categories[category]} dark={dark}  apiKey={apiKey} setProgress={setProgress}/>
                }
              />
            );
          })}
          {Object.keys(countries).map((country) => {
            return (
              <Route
                exact
                path={`/${country}`}
                element={
                  <News key={country} country={countries[country]} dark={dark}  apiKey={apiKey} setProgress={setProgress}/>
                }
              />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
