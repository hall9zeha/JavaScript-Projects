import React ,{Fragment}from 'react'
import {Link, withRouter} from 'react-router-dom'
import clientAxios from '../config/axios'
import Swal from 'sweetalert2';

const Meeting = (props) => {

    if(!props.meeting){
        props.history.push('/')
        return null;
    }

    //extraemos props
    const{meeting:{_id,name,owner,date,time,signals,phone}} = props

    const deleteMeeting=id=>{
       
                Swal.fire({
                    title: 'Estas seguro?',
                    text: "Una cita eliminada no se puede recuperar!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Si, Eliminar!'
                  }).then((result) => {
                    if (result.isConfirmed) {
                      Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                      //Eliminando de la base de datos
                      clientAxios.delete(`/patients/${id}`)
                      .then(
                          response => {
                              props.saveConsult(true)
                              console.log(response);
                              props.history.push('/')
                          }
                          )
                          
                          .catch(error=>{
                              console.log(error)
                          })
                    }
                  })
        
        
    }   
    return ( 
        <Fragment>
            <h1 className="my-5">Nombre de cita: {props.meeting.name}</h1>

            <div className="container mt-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5 d-flex justify-content-center">
                        <Link to={'/'} className="btn btn-success text-uppercase py-2 px-5 font-weight-bold">Volver</Link>

                    </div>
                    <div className='col-md-8 mx-auto'>
                        <div className="p-5 list-group-item list-group-item-action flex-column align-items-center">

                        <div className="d-flex w-100 justify-content-between mb-4">

                            <h3 className="mb-3">{name}</h3>
                            <small class="fecha-alta">
                            {date} - {time}
                            </small>

                            </div>
                            <p className="mb-0">
                            {signals}
                            </p>
                            <div className="contacto py-3">
                            <p>Dueño: {owner}</p>
                            <p>Teléfono: {phone}</p>
                            </div>
                            <div className="d-flex">
                                <button type="button"
                                    className="text-uppercase py-2 px-5 font-weight-bold btn btn-dange col"
                                    onClick={()=> deleteMeeting(_id)}
                                    >
                                            Eliminar &times;
                                </button>

                            </div>



                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
     );
}
 
export default withRouter(Meeting);