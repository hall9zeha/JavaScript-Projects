import React, {Fragment, useState} from 'react'
import {Link, withRouter} from 'react-router-dom'
import clientAxios from '../config/axios';


//Los componentes deben comenzar con los nombres en mayúsculas siempre
const NewDate = (props) => {

   
    //Generamos el state como objeto
    const [meeting, saveMeeting] = useState({
        name: '',
        owner: '',
        date: '',
        time: '',
        signals: '',
        phone: ''
    });
    
    //Leer los datos del formulario
    const updateState = e =>{
       saveMeeting({
            ...meeting,
            [e.target.name] : e.target.value
       })
    }

    //Hacemos una petición a la API 
    const createNewMeeting = e =>{
        e.preventDefault();

        //enviar petición axios
        clientAxios.post('/patients',meeting)
            .then(response=>{
                console.log(response);
                
            })

        props.saveConsult(true);
        //redireccionar
        props.history.push('/')
    }

    return ( 
        <Fragment>
            <h1 className="my-5">Crear nueva cita</h1>

            <div className="container mt-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5 d-flex justify-content-center">
                        <Link to={'/'} className="btn btn-success text-uppercase py-2 px-5 font-weight-bold">Volver</Link>

                    </div>
                    <div className="col-md-8 mx-auto">
                        <form
                            onSubmit={createNewMeeting}
                            className="bg-white p-5 bordered">
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre Mascota</label>
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    id="name" 
                                    name="name" 
                                    placeholder="Nombre Mascota" 
                                    onChange={updateState}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="propietario">Nombre Propietario</label>
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    id="owner" 
                                    name="owner" 
                                    placeholder="Nombre Propietario" 
                                    onChange={updateState}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="telefono">Teléfono</label>
                                <input 
                                    type="tel" 
                                    className="form-control form-control-lg" 
                                    id="phone" 
                                    name="phone" 
                                    placeholder="Teléfono" 
                                    onChange={updateState}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="fecha">Fecha Alta</label>
                                <input 
                                    type="date" 
                                    className="form-control form-control-lg" 
                                    id="date" 
                                    name="date"  
                                    onChange={updateState}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="hora">Hora Alta</label>
                                <input 
                                    type="time" 
                                    className="form-control form-control-lg" 
                                    id="time" 
                                    name="time"  
                                    onChange={updateState}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="sintomas">Síntomas</label>
                                <textarea 
                                    className="form-control" 
                                    name="signals" 
                                    rows="6"
                                    onChange={updateState}
                                ></textarea>
                            </div>


                            <input type="submit" className="btn btn-primary mt-3 w-100 p-3 text-uppercase font-weight-bold" value="Crear Cita"  />
                    </form>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
 
export default withRouter(NewDate);