/* The following is a backup Card.jsx */

import "../css/Card.css";

function Card(props) {
  return (
    <div>
      <div className="card">
        <div className="cardPic">
          <img src={props.img} alt={props.title + "movie poster"} />
        </div>
        <div className="cardText">
          <div id="Title"> {props.title} </div>
          <p id="Desc">{props.descr}</p>
          <button id="MovBut">Que se yo!</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
