import React, { useEffect, useState } from "react";
//import { FaHeart, FaRegHeart, Ffar } from 'react-icons/fa';
import { FaHelicopter, FaTablet } from "react-icons/fa6";
import { FaHeart, FaRegHeart, FaCircle, FaUnlock, FaTimes, FaTimesCircle } from 'react-icons/fa';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { FaTimer } from '@awesome.me/kit-KIT_CODE/icons/classic/solid';

//const element = <FontAwesomeIcon icon="fa-solid fa-timer" />

function Contador() {
	// Declare a new state variable, which we'll call "count"
		
		let [count, setCount] = useState(0);
		let [contador, setContador] = useState(0);
	
	
	  useEffect(()=> {
		  const timer = setTimeout(() => {
			setContador(prevContador => prevContador + 1)
		  }, 1000);
	
		  return () => clearTimeout(timer)
	  }, [contador])
	
	
		const incrementValue = () => {
		setCount(count=count + 1)
			setContador(prevContador => prevContador + count);
		}
	
		const decrementValue = () => {
		setCount(count=count - 1)
			setContador(prevContador => prevContador - count);
	  }
	  
		const resetValue = () => {
			setContador(0);
		}

		let contadorFinal = 0;
		
		function incrementarContador() {
			contadorFinal++;
			if (contadorFinal > 999999) {
				contadorFinal = 0;
			}
			let contadorFormateado = contadorFinal.toString().padStart(6, '0');
			console.log(contadorFormateado);
			}
			
		// Llama a la función incrementarContador para aumentar el contador
		//incrementarContador();
	
		return (
				<div>											
						<br />
						<br />
						<br />
						<div className="container-fluid">
							<div className="row">
								<div className="col-sm bg-dark text-white p-3"></div>
								<div className="col-sm bg-dark text-white p-3"></div>
								<div className="col-sm bg-dark text-white p-3"><i className="far fa-clock" style={{fontSize: '5rem'}}></i></div>
								<div className="col-sm bg-dark text-white p-3">{contadorFormateado}</div>
								<div className="col-sm bg-dark text-white p-3"></div>
								<div className="col-sm bg-dark text-white p-3">{}</div>
								<div className="col-sm bg-dark text-white p-3">{}</div>
							
								<div className="col-sm bg-dark text-white p-3"></div>
								<div className="col-sm bg-dark text-white p-3"></div>
								
								<div className="col-sm bg-dark text-white p-3" value="0"></div>
							</div> 
							<div className="row">
							<div className="col-sm bg-dark text-white p-3"></div>
							<div className="col-sm bg-dark text-white p-3"></div>
							<div className="col-sm bg-dark text-white p-3">
								<button onClick={() => resetValue()} type="button" className="btn btn-success">Reset</button>
							</div>
							<div className="col-sm bg-dark text-white p-3"></div>
							<div className="col-sm bg-dark text-white p-3"></div>
							
							
							</div>


						</div>
				
				</div>
	
			
		);
	  }
	
	export default Contador;





