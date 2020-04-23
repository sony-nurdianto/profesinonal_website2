import React ,{ useState, useEffect } from "react";
import axios from "axios";

const Article = () => {
  const [card, cardState] = useState([]);

  useEffect(() => {
    axios
      .get("https://fullstack-database.herokuapp.com/heroes/get")
      .then((res) => {
        cardState(res.data.data);
        console.log (res.data.data);
      });
  }, []);

  let show = card.map((item,index) => 
    <div key={index} className="col">
        <div className="card">
            <div className="card-title">
                <h1>{item.fullname}</h1>
                <h5>born in {item.born} dead in {item.dead}</h5>
            </div>
            <div className="card-body">
                <p>{item.description}</p>
            </div>
        </div>
    </div>
  
  );

  return(
      <div className="container mt-5">
        <div className="row text-center">
            {show}
        </div>
      </div>
  )
};

export default Article;
