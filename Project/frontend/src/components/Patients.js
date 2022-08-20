import React, {Fragment}from 'react'
import {Link} from 'react-router-dom';
const Patients = ({meetings}) => {
    if(meetings.length === 0) return null;
  
    return (
       //<h1>Correcto</h1>
        <Fragment>
            <h1 className="my-5">administrador de pacientes</h1>
            <div className="container mt-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5 d-flex justify-content-center">
                        <Link to={'/nueva'} className="btn btn-success text-uppercase py-2 px-5 font-weight-bold">Crear cita</Link>

                    </div>
                    <div className="col-md-8 mx-auto">
                        <div className="list-group">
                            {meetings.map(meeting =>(
                                <Link to={`/cita/${meeting._id}`} key={meeting._id} className="p-5 list-group-item list-group-item-action flex-column align-items-start">
                                    <div className="d-flex w-100 justify-content-between mb-4">

                                        <h3 className="mb-3">{meeting.name}</h3>
                                        <small class="fecha-alta">
                                        {meeting.date} - {meeting.time}
                                        </small>

                                    </div>
                                    <p className="mb-0">
                                        {meeting.signals}
                                    </p>
                                    <div className="contacto py-3">
                                        <p>Dueño: {meeting.owner}</p>
                                        <p>Teléfono: {meeting.phone}</p>
                                    </div>
                                   
                                </Link>
                                
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </Fragment>

    )
  
}
 
export default Patients;