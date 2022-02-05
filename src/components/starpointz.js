import React, { Component } from 'react';
//import Gif from "./starsvid.mp4";
import Gif from "./stars.gif"

//allows me to create a dialog box to pop up for adding students with names and emails.
class Starpointz extends Component {
    constructor(props) {
        super(props);
        this.wrapperRef = React.createRef();

        
        this.handleChange = this.handleChange.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.setWrapperRef = this.setWrapperRef;
        
        
        this.state = {
           
            ttempDescription:""
        }
       

    }
    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
        
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }
    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
            this.handleClose();
            
        }
    }
    handleClose(){
        window.location.reload();
        this.props.handleClose()
    }

   
  

    handleChange = (event) => {
        const { name, value } = event.target

        this.setState({
            [name]: value,
        })

    }

    
  

    render() {

        return (
            <div className="popup-box to-front" style={{zIndex: "3000"}}>
                <div ref={this.wrapperRef} className="diapicboxa">
                    <span className="close-icon-2" onClick={this.handleClose}>x</span>

                   <div>
                    <div style={{display:"flex", flexDirection:"row", justifyContent: "center", marginTop:"20px", }}>
                      

                        <h5>You got star points!</h5>
                        </div>
                        
                              


                                    <div style={{display:"flex", flexDirection:"row", justifyContent: "center",  }}>
                                    <img src={Gif} alt="starpoints" style={{width:"300px", height:"270px" }}/>
                                    </div>



                                    
                                   



                               


                                    
                              

                                


                    </div>
                    
                   
                </div>
            </div>
        )

    }
}

export default Starpointz;