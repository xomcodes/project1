import { useState } from "react";
// import "./App.css"
import logo from '../TRU_Logo.png'
import "./Body.css";

const Body = () => {
  const [pageContent, setPageContent] = useState("");
  const handlePageContent = (e) => setPageContent(e.target.value);

  return (
    <div className="container">
      {pageContent ? (
        <p className ='pcontent'>{pageContent }</p>
      ) : (
        <img className="shlogo" src={logo} alt="toyRus" />
        
      )}

      <input
        type="text"
        className="text-input"
        placeholder=""
        onChange={handlePageContent}
      />

      <div className="bodyBtn">
        <button className="btn">Google Search</button>

        <button className="btn">I'm Feeling Lucky</button>
      </div>
      <div className="mylanguage">
        <p className="language">Google offered in:</p>
        <p className="speak">
          Hausa
        </p>
        <p className="speak">
          Igbo
        </p>
        <p className="speak">
          {" "}
          Èdè Yorùbá
        </p>
        <p  className="speak">
          {" "}
          Nigerian Pidgin
        </p>
      </div>
    </div>
  );
};

export default Body;
