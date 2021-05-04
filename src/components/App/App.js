import './App.css';
import React, {useState} from 'react';
import CreateIdeaForm from '../CreateIdeaForm/CreateIdeaForm';
import IdeaBoxContainer from '../IdeaBoxContainer/IdeaBoxContainer';

const App = () => {
  const [ideas, setIdeas]= useState([]);

  return (
    <>
      < CreateIdeaForm addNewIdea={setIdeas} ideas={ideas}/>
      < IdeaBoxContainer ideas={ideas}/>
    </>
  )
}

export default App;
