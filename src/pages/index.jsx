import React from "react";

const Index = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <ul>
          <li><a href='/search'><h3>Search</h3></a></li>
          <li><a href='/video-player'><h3>Video Player</h3></a></li>
          <li><a href='/card'><h3>Card</h3></a></li>
          <li><a href='/chat'><h3>Chat</h3></a></li>
        </ul>
      </div>
    </>
  );
};

export default Index;
