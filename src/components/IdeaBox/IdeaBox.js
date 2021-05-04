import React, {useState} from 'react';

const IdeaBox = ({title, description}) => {
  return(
    <article className="idea-box">
      <h3 className="idea-title">{title}</h3>
      <p className="idea-description">{description}</p>
    </article>
  )
}

export default IdeaBox;
