import React,{Component} from 'react';
import {connect} from 'react-redux';


// It display a single card 

class DisplayCard extends Component {
    
    render() {
       console.log(this.props.index)
        let name=this.props.slices[this.props.index];
        
        return(
            <div className="SingleLine">
                {   
                    name.map((val,Insideindex)=>{
                     return (
                      <div key={Insideindex}>
                      <input type="text" style={{font:'Sans-serif'}} value={val}  onChange={(e)=>{this.props.changeCard(e,Insideindex,this.props.index)}}/>
                      <button className="button" onClick={()=>this.props.deleteCard(this.props.index,Insideindex)}>Delete</button>
                      <br></br>
                      </div>
                      
                    )})
                }
            
             
            </div>
        )
    }

}

const mapStateToProps=state=>{
    return {
        slices:state.card.cardArr
    }
}

const mapDispatchToProps=dispatch=>{
    return {
      changeCard:(e,Insideindex,index)=>dispatch({type:"CHANGECARD",Insideindex,index,value:e.target.value}),
      deleteCard:(index,Insideindex)=>dispatch({type:"DELETECARD",index,Insideindex})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DisplayCard);