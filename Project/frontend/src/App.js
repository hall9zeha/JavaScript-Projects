import React,{useEffect, useState} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
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
  return (
    <Router>
      <Switch>
        <Route
        exact
        path="/"
        component = {()=><Patients meetings={meetings} />}
        />
        <Route
        exact
        path="/nueva"
        component = {()=><NewDate saveConsult={saveConsult}/>}
        />
        <Route
        exact
        path="/cita/:id"
        component={(props) =>{
          const meeting = meetings.filter(meeting => meeting._id === props.match.params.id)
          return(
            <Meeting
              meeting={meeting[0]}
              saveConsult={saveConsult}
            />
          )
        }}
        />
      
      </Switch>
    </Router>
   
  );
}

export default App;
