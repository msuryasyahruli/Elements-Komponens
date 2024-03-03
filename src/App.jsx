import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from './pages/index';
import Search from './pages/Search';
import VideoPlay from './pages/VideoPlay';
import Card from './pages/Card';
import Chatapp from './pages/Chatapp';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/search" element={<Search />} />
          <Route path="/video-player" element={<VideoPlay />} />
          <Route path="/card" element={<Card />} />
          <Route path="/chat" element={<Chatapp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;