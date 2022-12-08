import React,{ Component } from 'react'
import axios from "axios";

class AddUser extends Component{
constructor(props){
	super(props)
	this.state = { id:null,firstName:'', lastName:'', phoneNumber:'',email:''}
	this.handleChange = this.handleChange.bind(this)
	this.handleSubmit = this.handleSubmit.bind(this)
}

// Form submitting logic, prevent default page refresh
handleSubmit(event){
    let formData = new FormData();
    
	const { id, firstName, lastName, phoneNumber, email } = this.state
	event.preventDefault()
    // Adding files to the formdata
    formData.append("id", id);
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("phoneNumber", phoneNumber);
    formData.append("email", email);

    axios({
        url: "http://localhost:8087/users",
        method: "POST",
        headers: {
          authorization: "your token comes here",
        },
        data: formData,
      })
    
        // Handle the response from backend here
        .then((res) => { })
    
        // Catch errors if any
        .catch((err) => { });
}

handleChange(event){
	this.setState({
	[event.target.name] : event.target.value
	})
}

render(){
	return(
	<form onSubmit={this.handleSubmit}>
		<div>
		<label htmlFor='id'>Id</label>
		<input
			name='id'
			placeholder='id'
			value = {this.state.id}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='firstName'>FirstName</label>
		<input
			name='firstName'
			placeholder='FirstName'
			value={this.state.firstName}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='lastName'>LastName</label>
		<input
			name='lastName'
			placeholder='LastName'
			value={this.state.lastName}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='phoneNumber'>PhoneNumber</label>
		<input
			name='phoneNumber'
			placeholder='PhoneNumber'
			value={this.state.phoneNumber}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='email'>Email</label>
		<input
			name='email'
			placeholder='Email'
			value={this.state.email}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<button>Add User</button>
		</div>
	</form>
	)
}
}

export default AddUser;