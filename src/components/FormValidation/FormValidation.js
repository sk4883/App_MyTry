import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class HomeApplication extends Component{
	 constructor(args) {
		super(args);
		this.state = {
			getName: "",
			getMobile: "",
			getEmail: "",
			getAddress: "",
			getPincode: "",
			getCountry: "",
			errorName: false,
			errorMobile: false,
			errorEmail: false,
			errorAddress: false,
			errorPincode: false,
			errorCountry: false,
			getEmailformat: false,

		};
	}

	Name(e) {
		let getNameValue = e.target.value;
		if(getNameValue.length > 0){
			this.setState({
				getName: getNameValue	
			});
		}
	}

	Mobile(e) {
		let getMobileValue = e.target.value;
		if(getMobileValue.length > 0){
			this.setState({
				getMobile: getMobileValue,
				errorMobile: false
			});
		}
		else{
			this.setState({
				errorMobile: true
			})
		}
	}

    Email(e) {
		let getEmailValue = e.target.value;
		var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if(getEmailValue.length > 0 && getEmailValue.match(mailformat)){
			this.setState({
				getEmail: getEmailValue,
				getEmailformat: false,
				errorEmail: false
			});
		} else{
			this.setState({
				getEmailValidation: true
			});
		}
	}

	Address(e) {
		let getAddressValue = e.target.value;
		if(getAddressValue.length > 0){
			this.setState({
				getAddress: getAddressValue
			});
		}
	}

	Pincode(e) {
		let getPincodeValue = e.target.value;
		if(getPincodeValue.length < 7){
			this.setState({
				getPincode: getPincodeValue
			});
		}
	}

	Country(e) {
		let getCountryValue = e.target.value;
		if(getCountryValue.length > 0){
			this.setState({
				getCountry: getCountryValue
			});
		}
	}

	registerSuccess() {
		if(this.state.getName && this.state.getMobile && this.state.getEmail
		 && this.state.getAddress && this.state.getPincode && this.state.getCountry) {
			this.setState({
				errorName: false,
				errorMobile: false
			});
			} 

		 if(!this.state.getName && !this.state.getMobile && !this.state.getEmail
		 && !this.state.getAddress && !this.state.getPincode && !this.state.getCountry){
			this.setState({
				errorName: true,
				errorMobile: true,
				errorEmail: true,
				errorAddress: true,
				errorPincode: true,
				errorCountry: true
				
			});
		}
		if(!this.state.getName){
			this.setState({
				errorName: true
			});
		} 
		if(!this.state.getMobile) {
			this.setState({
				errorMobile: true
			});
		} 
		if(!this.state.getEmail) {
			this.setState({
				errorEmail: true
			});
		} 
		 if(!this.state.getAddress) {
			this.setState({
				errorAddress: true
			});
		}
		 if(!this.state.getPincode) {
			this.setState({
				errorPincode: true
			});
		}
	
	if(!this.state.getcountry) {
			this.setState({
				errorCountry: true
			});
		}
	}
	render() {
		return (
			 <div className="w3-container"> 
			   <div className="w3-row">
 					<label> <b> Form Validation </b> </label>
			   </div>

			    <div className="w3-row">
 					<label>  Enter Name  </label> &nbsp;
 					<input type="text" 
	        		onChange={this.Name.bind(this)} className="textbox-data"  placeholder="Name" /><br />
	        		{(this.state.errorName) ? 
	        		<label className="error-warning">UserName must not be empty!</label>:
	        		null
	        		}
			   </div> <br />

			   <div className="w3-row">
 					<label>  Mobile Num  </label> &nbsp;
 				     <input type="text" 
	        		onChange={this.Mobile.bind(this)} className="textbox-data"  placeholder="Mobile" /><br />
	        		{(this.state.errorMobile) ? 
	        		<label className="error-warning">Mobilenum must not be empty!</label>:
	        		null
	        		}
			   </div> <br />
			 
			 <div className="w3-row">
 					<label>  Email  </label> &nbsp;
 					<input type="text" 
	        		onChange={this.Email.bind(this)} className="textbox-data"  placeholder="Email@gmail.com" /><br />
	        		{(this.state.errorEmail) ? 
	        		<label className="error-warning">Email must not be empty!</label>:
	        		null
	        		}
	        		{(this.state.getEmailformat) ? 
	        	    <label className="error-warning">Email must be valid!</label>:
	        								null
	        							}
			   </div> <br />
			 
			 <div className="w3-row">
 					<label>  Address  </label> &nbsp;
 					<input type="text" 
	        		onChange={this.Address.bind(this)} className="textbox-data"  placeholder="Address" /><br />
	        		{(this.state.errorAddress) ? 
	        		<label className="error-warning">Address must not be empty!</label>:
	        		null
	        		}
			   </div> <br />
			 
			 <div className="w3-row">
 					<label>  Pincode  </label> &nbsp;
 					<input type="text" 
	        		onChange={this.Pincode.bind(this)} className="textbox-data"  placeholder="626-123" /><br />
	        		{(this.state.errorPincode) ? 
	        		<label className="error-warning">Pincode must not be empty!</label>:
	        		null
	        		}
			   </div> <br />

			    <div className="w3-row">
 					<label>  Country  </label> &nbsp;
 					<input type="text" 
	        		onChange={this.Country.bind(this)} className="textbox-data"  placeholder="USA" /><br />
	        		{(this.state.errorCountry) ? 
	        		<label className="error-warning">Country must not be empty!</label>:
	        		null
	        		}
	        	</div>
	        		<div className="w3-row ">
	        							
	        		<button  
	        		onClick={this.registerSuccess.bind(this)}
	        	    style={{height: "50px"}}>Register</button>
			       </div>
			 </div>
			 
			 
			);
	}

}