import React from 'react';
import '../styles/Intro.css';
import { Link } from 'react-router-dom';

const Intro = () => (
  <div className="intro">
    <h1 className="intro__title">Quiz</h1>
    <Link to="/quiz" className="intro__button button">Begin</Link>
  </div>
);

export default Intro;
