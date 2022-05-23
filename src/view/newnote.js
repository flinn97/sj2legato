import React, { Component } from 'react';

class Newnote extends Component {
    constructor(props) {
        //create state
        super(props);

        this.state = {
            
        };
    }
    
  
    
    render() {
        return (
            <div className="smallcardbottomRight" style={{marginTop:this.props.state.styles.margins.margin1}}>
                <p onClick={this.props.handleclose}>X</p>
                <textarea type="text" className="form-control" rows="3" id="description" onChange={this.props.handleChange} placeholder={this.props.note?.description} name="description" ></textarea>
                <button  className="btn  btn-block"  onClick={this.props.handlenotes.bind(this, this.props.note? this.props.note:false, this.props.myswitch)} style={{ background: "#696eb5", height: "30px", color: "#F0F2EF", width: "200px", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>+ Notes</button>

            </div>   
        );
    }
}

export default Newnote;