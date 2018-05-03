import React,{Component} from 'react';
import './DisplayList.css';
import AddCard from '../AddCard/AddCard';
import {connect} from 'react-redux';
import DisplayCard from './DisplayCard';


class DisplayList extends Component{

render()
{  let show;
    if(this.props.pos===this.props.index)
    {
        show=<AddCard index={this.props.index}/>    // Add a card to a Existing Card
    }
  
    else
    {
        show=<p style={{color:'Red'}} onClick={()=>this.props.select(this.props.index)}>Add a Card...</p>
    }

return(
    <div style={{marginLeft:"10px"}} className="OneLine ">
        <input  type="text" style={{fontWeight:'bold'}}  value={this.props.arr} onChange={(e)=>this.props.changeClicked(e)}/>
        <button className="button" onClick={this.props.clicked}>close</button><br></br>
        <DisplayCard index={this.props.index}/>   {/* Render a particular card */}
        <span>{show}</span>
        
     </div>

)
}}

const mapStateToProps=state=>{
    return {
        pos:state.list.pos,
        cardArrSlice:state.card.cardArr
    }
}


export default connect(mapStateToProps,null)(DisplayList);