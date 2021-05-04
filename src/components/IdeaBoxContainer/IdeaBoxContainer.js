import React, {useState} from 'react';
import IdeaBox from '../IdeaBox/IdeaBox';

const IdeaBoxContainer = ({ideas}) => {

  const createIdeaBoxes = () => {
    return ideas.map(idea => {
      return (
        < IdeaBox title={idea.title} description={idea.description} key={idea.id}/>
      )
    })
  }

  return (
    <section className="ideas-container">
      {createIdeaBoxes()}
    </section>
  )
}

export default IdeaBoxContainer;
