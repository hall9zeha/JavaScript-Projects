import React,{Fragment, useState} from 'react' //importamos fragment para usarlo en lugar de un div en return
import Header from './components/Header'
import Form from './components/Form'
import Mensaje from './components/Mensaje'
import Result from './components/Result'
import Spinner from './components/Spinner'

function App() {

  let component;

  const [amount, saveCount] = useState(0)
  const [term, saveTerm] = useState('')
  const [total, saveTotal] = useState(0)
  const [loading, saveLoading] = useState(false)

    if(loading){
      component=<Spinner/>
    }
    else if(total===0){
      component= <Mensaje
        
      />

    }
    else{
      component=<Result
        total={total}
        term={term}
        amount={amount}
      />
    }

  return (
     /* le psamos información al header a través del componente */
     
    <Fragment>
    
     <Header 
     title="Cotizador de préstamos"
    
     /> 
      <div className="container">
            <Form
              amount={amount}
              saveCount={saveCount}
              term={term}
              saveTerm={saveTerm}
              saveTotal={saveTotal}
              saveLoading={saveLoading}
            />
            
            <div className="mensajes">
                {component}
            </div>
            
        </div>
        
    </Fragment>
  );
}

export default App;
