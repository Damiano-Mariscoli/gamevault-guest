import React from "react";

const GameCard = ({ title, id }) => {
  return (
    <a
      className="card border-0 rounded-4 overflow-hidden my-3"
      href={`detail/${id}`}
    >
      <img src="/img/elden.webp" alt="" className="card-img-top" />
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title">{title}</h5>
      </div>
    </a>
  );
};

export default GameCard;
