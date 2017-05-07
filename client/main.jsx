import React from 'react';
import { Meteor } from 'meteor/meteor';
import ReactDOM,{ render } from 'react-dom';
import Survey from 'survey-react';
import SurveyEditor from 'surveyjs-editor';
import ePub from 'epub';
 
import App from '../imports/ui/App.jsx';

var surveyJSON = { title: "Tell us, what technologies do you use?", pages: [
  { name:"page1", questions: [ 
      { type: "radiogroup", choices: [ "Yes", "No" ], isRequired: true, name: "frameworkUsing",title: "Do you use any front-end framework like Bootstrap?" },
      { type: "checkbox", choices: ["Bootstrap","Foundation"], hasOther: true, isRequired: true, name: "framework", title: "What front-end framework do you use?", visibleIf: "{frameworkUsing} = 'Yes'" }
   ]},
  { name: "page2", questions: [
    { type: "radiogroup", choices: ["Yes","No"],isRequired: true, name: "mvvmUsing", title: "Do you use any MVVM framework?" },
    { type: "checkbox", choices: [ "AngularJS", "KnockoutJS", "React" ], hasOther: true, isRequired: true, name: "mvvm", title: "What MVVM framework do you use?", visibleIf: "{mvvmUsing} = 'Yes'" } ] },
  { name: "page3",questions: [
    { type: "comment", name: "about", title: "Please tell us about your main requirements for Survey library" } ] }
 ]
}
var editor;

Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
  Survey.Survey.cssType = "bootstrap";
   render(
  <Survey.Survey json={surveyJSON} onComplete={sendDataToServer}/>,
  document.getElementById("surveyContainer")); 
  var editorOptions = {showEmbededSurveyTab: true}; //see examples below
	editor = new SurveyEditor.SurveyEditor("surveyEditorContainer", editorOptions);
	//set function on save callback
	editor.saveSurveyFunc = saveMySurvey;
	
//	var book = new ePub("meteor-tutorial-preview.epub");
//    book.renderTo("area");

});

function sendDataToServer(survey) {
  var resultAsString = JSON.stringify(survey.data);
  alert(resultAsString); //send Ajax request to your web server.
}

function saveMySurvey(){
  var yourNewSurveyJSON = editor.text;
  //send updated json in your storage

 alert(yourNewSurveyJSON); //send Ajax request to your web server.  
}







