import React, { Component } from 'react';

class Checkedd2 extends Component {
    constructor(props) {
        super(props);
        this.markcheckbox = this.markcheckbox.bind(this);
        this.markcheckbox1 = this.markcheckbox1.bind(this);

        this.state = {
            checkboxValue: this.props.goal.complete,
            checkboxValue1: this.props.flag,
            practice: 0,
            p: this.props.flag,
            style: "27%",
            hstyle: "20%"
        }

    }
    

    async markcheckbox1(event) {

        event.preventDefault();

        this.setState({
            p: !this.state.p,
        })

        await this.setState({ checkboxValue: !this.state.checkboxValue, });


        this.props.props.practice(this.state.checkboxValue, this.props.props.synced, this.props.day);




    }


    async markcheckbox(goal) {
        await this.setState({
            checkboxValue1: !this.state.checkboxValue1,
        })
        
        this.props.goalStatusChange(this.state.checkboxValue1, goal, this.props.main );
        
        

    }

    render() {
        
        return (
            <div>
                {this.props.checkboxes ? (
                <div>
                    {this.props.role === "teacher" ? (<div>
                            <input type="checkbox" checked={this.state.checkboxValue1} />
                            <label className="change-label2b huv" ><div className="tick2b"></div></label>

                    </div>) : (
                            <div>
                                    <input type="checkbox" checked={this.state.checkboxValue1} />
                                    <label onClick={this.markcheckbox1.bind(this, this.props.goal)} className="change-label2b huv" ><div className="tick2b"></div></label>

                            </div>)}
                    </div>


                ) : (<div>
                        {this.props.main ? (<div>


                            <input type="checkbox" checked={this.state.checkboxValue} />
                            <label onClick={this.markcheckbox.bind(this, this.props.goal)} className="change-label2 huv" ><div className="tick2"></div></label>
                        </div>) : (<div>
                            <input type="checkbox" checked={this.state.checkboxValue} />
                            <label onClick={this.markcheckbox.bind(this, this.props.goal)} className="change-label1 huv" ><div className="tick1"></div></label>
                        </div>)}
                    </div>)
    }
                
                
            </div>

            )
           
}
}

export default Checkedd2;