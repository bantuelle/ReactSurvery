import { useState, useEffect } from 'react';
import { SurveyCreatorComponent, SurveyCreator } from "survey-creator-react";
import "survey-core/survey-core.min.css";
import "survey-creator-core/survey-creator-core.min.css";
import './App.css';

function App() {
  const [creator, setCreator] = useState(null);

  useEffect(() => {
    //define the creator options to initialize the survey creator
    const creatorOptions = {
      showEmbededSurveyTab: true,
      showSurveyResultsTab: false, 
      showLogicTab: true,
      isAutoSave: true,           
      onSurveyCreated: (survey) => {
        console.log('Survey created:', survey);
      },
    };

    //initialize the SurveyCreator
    const creatorInstance = new SurveyCreator(creatorOptions);

    //setting the creator instance in the state
    setCreator(creatorInstance);
  }, []);

  //adding a predefined survey with questions...to be removed later
  const predefinedSurvey = {
    title: "Survey Builder",
    description: "A survey builder.",
    questions: [
      {
        type: "text",
        name: "firstName",
        title: "What is your first name?",
        isRequired: true,
      },
      {
        type: "radiogroup",
        name: "favoriteColor",
        title: "What is your favorite color?",
        choices: ["Red", "Green", "Blue", "Yellow"],
      },
      {
        type: "checkbox",
        name: "hobbies",
        title: "What are your hobbies?",
        choices: ["Reading", "Sports", "Cooking", "Music"],
      },
      {
        type: "comment",
        name: "feedback",
        title: "Please provide any additional feedback.",
      },
    ],
  };

  //function to add a question dynamically
  const addQuestion = (questionType) => {
    const newQuestion = {
      type: questionType,
      name: `${questionType}${Math.random()}`,
      title: `${questionType} question`,
    };

    creator && creator.addQuestion(newQuestion);
  };

  //function that handles the survey preview
  const handlePreview = () => {
    if (creator) {
      const surveyJSON = creator.JSON;
      console.log("Previewing survey: ", surveyJSON);
      //still need to implement the preview logic here (maybe i can render the survey as a live preview)
    }
  };

  return (
    <div className="App">
      <h1>Seamlessly Build Your Customised Survey</h1>
      <div className="creator-container">
        {/*survey Creator Component */}
        {creator && (
          <div className="survey-creator">
            <SurveyCreatorComponent creator={creator} />
          </div>
        )}

        {/*Question Toolbar...to be removed */}
        {/* <div className="toolbar">
          <h2>Add Questions</h2>
          <button onClick={() => addQuestion("text")}>Add Text Question</button>
          <button onClick={() => addQuestion("radiogroup")}>Add Multiple Choice</button>
          <button onClick={() => addQuestion("checkbox")}>Add Checkbox</button>
          <button onClick={() => addQuestion("comment")}>Add Comment Box</button>
        </div> */}

        {/*preview Button...to be removed */}
        <button onClick={handlePreview} className="preview-button">
          Preview Survey
        </button>
      </div>
    </div>
  );
}

export default App;
