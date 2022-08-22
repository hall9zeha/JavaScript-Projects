import React,{useEffect, useState, } from 'react'
import {BrowserRouter as Router, Route, Routes, useParams} from 'react-router-dom'
import Patients from './components/Patients'
import NewDate from './components/NewDate'
import Meeting from './components/Meeting'
import clientAxios from './config/axios'



function App() {

  //State de la app
 
  const [meetings, saveMeetings] = useState([])
  const [consult, saveConsult] = useState(true);
 
  useEffect(()=>{
      if(consult){

          const checkApi=()=>{
            clientAxios.get('/patients')
              .then(response=>{
                // colocar en el state el resultado
                saveMeetings(response.data);

                saveConsult(false)
              })
              .catch(error=>{
                console.log(error)
              })
          }
          checkApi()
      }
  },[consult])

  console.log(process.env.REACT_APP_BACKEND_URL)

  
  let MeetingRoute = () => {
    const props=useParams()
    
    const meeting = meetings.filter(meeting => meeting._id === props.id)
    return (
      <Meeting 
              meeting={meeting[0]}
              saveConsult={saveConsult} />
    );
  };
  return (
    <Router>
      <Routes>
        <Route
        exact
        path="/"
        element = {<Patients meetings={meetings} />}
        />
        <Route
        exact
        path="/nueva"
        element = {<NewDate saveConsult={saveConsult}/>}
        />
        <Route
        exact
        path="/cita/:id"
        element={<MeetingRoute/>}
        />
      
      </Routes>
    </Router>
   
  );
 
}

export default App;
