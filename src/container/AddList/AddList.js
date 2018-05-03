import React,{Component} from 'react';
import DisplayList from '../Display/DisplayList';
import{connect} from 'react-redux';

class AddList extends Component{
     render()
     { 
         
      {/* Render a List Which are stored in Array */}
    
      let display=this.props.arr.map((name,index)=>
        (
            <DisplayList key={index}                       
            clicked={()=>this.props.removeList(index)}
            changeClicked={(e)=>this.props.listChange(e.target.value,index)}
            arr={name}
            select={(index)=>this.props.dislist(index)}
            index={index} 
            
            />
        ))
     
     return(
            <div >
            {display}
            </div>
        )
    }
    
}

const mapStateToProps=state=>{
  return{  arr:state.list.arr,
  }
}

const mapDispatchToProps=dispatch=>{
    return {
        listChange:(value,index)=>dispatch({type:"LISTCHANGE",value,index}),
        removeList:(index)=>dispatch({type:"REMOVELIST",value:index}),
        dislist:(x)=>dispatch({type:"DISLIST",value:x})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddList);