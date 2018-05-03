import React,{Component} from 'react';
import AddList from '../AddList/AddList';
import {connect} from 'react-redux';

// Take Input to add  New List 

class List extends Component {
  

   
  

    render(){

            return(
            <div >
               
              <input type="text" value={this.props.name} onChange={(e)=>this.props.handleName(e)} />
              <button  disabled={!this.props.name} onClick={()=>this.props.textAdd(this.props.name)}> Save</button>
            </div>
        )
    }
}

const mapStateToProps=state=>{
return {
    name:state.list.name
}

}
const mapDispatchToProps=dispatch=>{
    return {
      textAdd:(value)=>dispatch({type:"ADDLIST",value}),
      handleName:(e)=>dispatch({type:"LISTNAME",value:e.target.value}),
     

    }
}


export default connect(mapStateToProps,mapDispatchToProps)(List);