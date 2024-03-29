import React, {useEffect, useState,} from 'react';
import {useHistory} from 'react-router-dom';
import M from 'materialize-css';
import "../Form.css";
import * as bootstrap from "../../node_modules/bootstrap/dist/js/bootstrap.min.js"; 

export default function Login() {
    const [regName , setRegName] = useState("");
    const [regPassword , setRegPassword] = useState("");
    const [regEmail , setRegEmail] = useState("");
    const [logEmail , setLogEmail] = useState("");
    const [logPassword , setLogPassword] = useState("");
	const history = useHistory();
	const getPost = ()=>{
    
		if(!regName || !regEmail || !regPassword){
		  console.log("Barcha maydonlar to'ldirilishi zarur");
		  var toastElement = document.getElementById('emailErrorToasts');
			  var emailErrorToast = new bootstrap.Toast(toastElement);
			  emailErrorToast.show();
			return;
		}
		else{
		  if(
			!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(regEmail)){
			  console.log("Email manzilingizni to'g'ri kiriting");
			  var toastElement = document.getElementById('emailErrorToast');
			  var emailErrorToast = new bootstrap.Toast(toastElement);
			  emailErrorToast.show();
			return;
		  }
		  else{
			console.log(regName);
		  console.log(regEmail);
		  console.log(regPassword);
		  document.getElementById("container").classList.remove("right-panel-active");
		  }
		}
	  };
	  const regPost = ()=>{
    
		if(!logEmail || !logPassword){
		  console.log("Barcha maydonlar to'ldirilishi zarur");
		}
		else{
		  if(
			!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(logEmail)){
			  console.log("Email manzilingizni to'g'ri kiriting");
			// M.toast({html:"Email manzilingizni to'g'ri kiriting", classes:"#d81b60 pink darken-1"});
			return;
		  }
		  else{
		  console.log(logEmail);
		  console.log(logPassword);
		 
		  }
		}
	  };

    useEffect(()=>{
        const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
    }, []);
  return (
	<>
	<div id="emailErrorToast" class="toast mt-4 position-absolute top-0 end-0" role="alert" aria-live="assertive" aria-atomic="true" data-bs-delay="5000">
  <div class="toast-header">
    <strong class="me-auto">Error</strong>
    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
  <div class="toast-body">
	Email xato
  </div>
  
</div>
<div id="emailErrorToasts" class="toast mt-4 position-absolute top-0 end-0" role="alert" aria-live="assertive" aria-atomic="true" data-bs-delay="5000">
  <div class="toast-header">
    <strong class="me-auto">Error</strong>
    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
  <div class="toast-body">
	Barcha qatorlarni to'diring!
  </div>
  
</div>
    <div className='loyiha'>
    <div className="container" id="container">
	<div className="form-container sign-up-container">
		<div className='form' >
			<h1>Akaunt yaratish</h1>
			<div className="social-container">
				<a href="/" className="social"><i className="fab fa-facebook-f"></i></a>
				<a href="/" className="social"><i className="fab fa-google-plus-g"></i></a>
				<a href="/" className="social"><i className="fab fa-linkedin-in"></i></a>
			</div>
			<span>yoki kirish uchun email hisobingizni kiriting</span>
			<input type="text" placeholder="Ism" value={regName} onChange={(e)=>setRegName(e.target.value)} />
			<input type="email" placeholder="Email" value={regEmail} onChange={(e)=>setRegEmail(e.target.value)} />
			<input type="password" placeholder="Parol"  value={regPassword} onChange={(e)=>setRegPassword(e.target.value)}/>
			<button onClick={()=>getPost()}>Ro'yxatdan o'tish</button>
		</div>
	</div>
	<div className="form-container sign-in-container">
		<div  className='form'>
			<h1>Tizimga kirish</h1>
			<div className="social-container">
				<a href="/" className="social"><i className="fab fa-facebook-f"></i></a>
				<a href="/" className="social"><i className="fab fa-google-plus-g"></i></a>
				<a href="/" className="social"><i className="fab fa-linkedin-in"></i></a>
			</div>
			<span>yoki eski hisobingizdan kiring</span>
			<input type="email" placeholder="Email" value={logEmail} onChange={(e)=>setLogEmail(e.target.value)}/>
			<input type="password" placeholder="Parol" value={logPassword} onChange={(e)=>setLogPassword(e.target.value)}/>
			<a href="/">Parolingizni unutdingizmi?</a>
			<button onClick={()=>regPost()}>Tizimga kirish</button>
		</div>
	</div>
	<div className="overlay-container">
		<div className="overlay">
			<div className="overlay-panel overlay-left">
				<h1>Qaytganingizdan xursandmiz!</h1>
				<p>Biz bilan aloqada bo'lish uchun o'z hisobingiz bilan tizimga kiring!</p>
				<button  className="ghost" id="signIn">Tizimga kirish</button>
			</div>
			<div className="overlay-panel overlay-right">
				<h1>Salom, Do'stim!</h1>
				<p>Shaxsiy ma'lumotlarni kiriting va biz bilan o'qishni boshlang</p>
				<button  className="ghost" id="signUp">Ro'yxatdan o'tish</button>
			</div>
		</div>
	</div>
</div>

</div>
</>
  )
}
