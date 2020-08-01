import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./Header";
import PostsContainer, {Posts} from "./PostsContainer";

function App() {

    return (
    <div className="App">


        <Header/>
    <PostsContainer/>

    </div>
  );
}

export default App;
