import React, { useRef } from 'react'

export default function Login() {
	const refEmail=useRef(null)
	const refPassword=useRef(null)
	let myself=useRef(null)
	const getalldetails=()=>{
		let newValidate={email:refEmail.current.value,password:refPassword.current.value}
		alert("Succesfully logged in")
		myself.current.value="Succefully logged in"
		myself.current.focus()
	}
  return (
    <section id="form">
		<div className="container">
			<div className="row">
				<div className="col-sm-4 col-sm-offset-1">
					<div className="login-form">
						<h2>Login to your account</h2>
						<form action="#" onSubmit={getalldetails}>
							<input type="text" placeholder="Name"  ref={refEmail}/>
							<input type="email" placeholder="Email Address" ref={refPassword}/>
							<span>
								<input type="checkbox" className="checkbox"/> 
								<textarea ref={myself}>Keep me signed in</textarea>
							</span>
							<button type="submit" className="btn btn-default">Login</button>
						</form>
					</div>
				</div>
				<div className="col-sm-1">
					<h2 className="or">OR</h2>
				</div>
				<div className="col-sm-4">
					<div className="signup-form">
						<h2>New User Signup!</h2>
						<form action="#">
							<input type="text" placeholder="Name"/>
							<input type="email" placeholder="Email Address"/>
							<input type="password" placeholder="Password"/>
							<button type="submit" className="btn btn-default">Signup</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</section>
  )
}
