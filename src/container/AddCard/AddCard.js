import React,{Component} from 'react';
import {connect} from 'react-redux'

class AddCard extends Component {
  

    render(){
        return(
            <div>
              
                <input type='text' style={{height:'50px',width:'200px'}} value={this.props.name} 
                 onChange={(e)=>this.props.cardValue(e)}  /><br></br>
                 <div style={{float:'left'}}>
                <button disabled={!this.props.name} onClick={()=>this.props.cardArr(this.props.name,this.props.index)} >Add </button>
               
                </div>
            </div>
        )
    }


}
const mapStateToProps=state=>{
    return {
        name:state.card.cardname,
      
    }
}

const mapDispatchToProps=dispatch=>{
    return {
        cardValue:(e)=>dispatch({type:"CARDVALUE",value:e.target.value}),
        cardArr:(value,index)=>dispatch({type:"CARDARR",value,index})
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddCard);