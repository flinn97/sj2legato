import React, { Component } from 'react';
//allows me to create a dialog box to pop up for adding students with names and emails.
class Full extends Component {
    constructor(props) {
        super(props);

        this.state = {
           src: this.props.img,
            
        }

    }



    render() {
        return (

            <div className="popup-box to-front2">
                <span className="close-icon-2" onClick={this.props.handleClose}>x</span>
                <div className="diapicbox">

                        <img
                            src={this.state.src}
                            alt="full pic"
                           

                        />
                    </div>
                    <div>
                        
                    </div>
               

            </div>

        )

    }
}

export default Full;