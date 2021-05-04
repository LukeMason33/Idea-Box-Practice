import React, {useState} from 'react';

const CreateIdeaForm = ({addNewIdea, ideas}) => {
  const [ideaTitle, setIdeaTitle] = useState('');
  const [ideaDescription, setIdeaDescription] = useState('');

  const onInputChange = (event, titleOrDesciption) => {
    titleOrDesciption(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    const newIdea = {
      title: ideaTitle,
      description: ideaDescription,
      id: ideas.length + 1
    };
    addNewIdea([...ideas, newIdea]);
    setIdeaTitle('');
    setIdeaDescription('');
  }

  return (
    <section className="create-idea-form-container">
      <form  className="create-idea-form">
        <h2 className="form-title">Create Your Ideas Here</h2>
        <div className="input">
          <label htmlFor="title">Title of Idea</label>
          <input type="text" id="title" value={ideaTitle} onChange={event => onInputChange(event, setIdeaTitle)}/>
        </div>
        <div className="input">
          <label htmlFor="description">Title of Idea</label>
          <input type="text" id="description" value={ideaDescription} onChange={event => onInputChange(event, setIdeaDescription)}/>
        </div>
        <button onClick={onSubmit}>Submit</button>
      </form>
    </section>
  )
}

export default CreateIdeaForm;
