import React, { useEffect, useState } from "react";
//import { FaHeart, FaRegHeart, Ffar } from 'react-icons/fa';
import { FaHelicopter, FaTablet } from "react-icons/fa6";
import { FaHeart, FaRegHeart, FaCircle, FaUnlock, FaTimes, FaTimesCircle } from 'react-icons/fa';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { FaTimer } from '@awesome.me/kit-KIT_CODE/icons/classic/solid';

//const element = <FontAwesomeIcon icon="fa-solid fa-timer" />

function Contador() {
	// Declare a new state variable, which we'll call "contador"
		

	 	let [contador, setContador] = useState(0);
		
	  useEffect(()=> {
		  const timer = setTimeout(() => {
			setContador(incrementarContador => incrementarContador +1)
		  }, 1000);
	
		  return () => clearTimeout(timer)
	    }, [contador])
		
		let contadorFormateado='';

		function incrementarContador() {
				
				//contador++;
				
				if (contador > 999999) {
					contador = 0;
				}
				contadorFormateado = contador.toString().padStart(6, '0');
				console.log(contadorFormateado);
				}

//incrementarContador para aumentar el contador
			incrementarContador();
//funcion resetar el contador			
			const resetValue = () => {
				setContador(0);
			}
		
	
		return (
				<div>											

						<div className="container-fluid">
							<div className="row">
								<div className="col-sm bg-dark text-white p-3"></div>
								<div className="col-sm bg-dark text-white p-3"></div>
								<div className="col-sm bg-dark text-white p-3"><i className="far fa-clock" style={{fontSize: '5rem'}}></i></div>
								<div className="col-sm bg-dark text-white p-3">{contadorFormateado}</div>	
								<div className="col-sm bg-dark text-white p-3"><button onClick={() => resetValue()} type="button" className="btn btn-success">Reset</button></div>								
								<div className="col-sm bg-dark text-white p-3"></div>					
								<div className="col-sm bg-dark text-white p-3"></div>
							</div> 
			


						</div>
				
				</div>
	
			
		);
	  }
	
	export default Contador;





