import React, { Component } from "react";
import { Link } from "react-router-dom";
class Child extends Component{
	constructor(props) {
		super(props); 
		this.state = {  
           propsData: null

			};
		}

		componentDidMount(){
			this.setState({
			propsData: this.props.data
			});
			}

		del(indexVal) {
		if (indexVal > -1) {
		    this.state.propsData.splice(indexVal, 1);
		}
		this.setState({
			propsData: this.state.propsData
		});
	} 



render() {

	       var dataDisplay = [];
	 
		if(this.state.propsData){
			dataDisplay = this.state.propsData.map((data, idx) => {
				console.log("~~~~~~~~~~~~~~~~", data);
	     return (
		   <div>
		     {data}
		     <button className="fa fa-close w3-button" onClick={this.del.bind(this, idx)} />
		   </div>

	);
});
}
return (
   <div className="w3-row">
         {dataDisplay}
   </div>
);
}

}


export default class HomeApplication extends Component{
	constructor(args) {
		super(args);
		this.state = {
			addtodo: "",
			txtarray: []
		};
	}
       getvalue(e)
	{
		let getValueTodo = e.target.value;
        this.setState({
        addtodo: getValueTodo
     });
    }
	

	add()
	{
		if (this.state.addtodo){
			this.state.txtarray.push(this.state.addtodo);
			this.setState({
				txtarray:this.state.txtarray
			});
				console.log("check",this.state.txtarray)
		}
	    this.state.addtodo = "";   
	}

   render() {
		return (
			<div>
			 
			
			  <div className="w3-container"> 


			   <div className="w3-row">
 					<label> <b> TODO </b> </label>

			   </div>

			    <div className="w3-row">
 					<label>  Enter todo </label> <br/>
 					<input type="text" placeholder="One" onChange={this.getvalue.bind(this)} value={this.state.addtodo}/>
 			    </div> 

			 	
			   <div className="w3-row">
 					<button className="w3-button" onClick={this.add.bind(this)}> Complete </button>
 			   </div>
 			   <Child data={this.state.txtarray} />
			 </div>
		</div>
			);
	}
}



	


