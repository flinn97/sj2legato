import React, { Component } from 'react';

class Checkedd extends Component {
    constructor(props) {
        super(props);
        this.markcheckbox = this.markcheckbox.bind(this);

        this.state = {
            checkboxValue: this.props.flag,
            practice: 0,
            
        }

    }
    
    async markcheckbox(event) {
        event.preventDefault();
        
        await this.setState({ checkboxValue: !this.state.checkboxValue, });
        
        this.props.props.practice(this.state.checkboxValue);
        
        

    }

    render() {
        
        return (

            <div>
                { this.props.props.role === "teacher" ? (
                    <div>
                        <input type="checkbox" checked={this.state.checkboxValue} />
                        <label className="change-label huv" ><div className="tick"></div></label>
                    </div>) : (<div>
                        
                        <input type="checkbox" checked={this.state.checkboxValue} />
                        <label onClick={this.markcheckbox} className="change-label huv" ><div className="tick"></div></label>
                    </div>)
                }
           </div>
            )
}
}

export default Checkedd;