import React, { Component } from 'react';

class Checkedd2 extends Component {
    constructor(props) {
        super(props);
        this.markcheckbox = this.markcheckbox.bind(this);
        this.markcheckbox1 = this.markcheckbox1.bind(this);

        this.state = {
            checkboxValue: this.props.goal.complete,
            maincheck:false,
            //checkboxValue1: this.props.flag,
            checkboxValue1: this.props.goal.complete,

            practice: 0,
            p: this.props.flag,
            style: "27%",
            hstyle: "20%"
        }

    }
    
    componentDidMount(){
        if(this.props.main){
            this.setState({
                maincheck: this.props.goal.mainGoal.complete,
                checkboxValue1: this.props.goal.mainGoal.complete
            })
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
        console.log(this.state.checkboxValue1, goal, this.props.main)
        await this.setState({
            checkboxValue1: !this.state.checkboxValue1,
            maincheck: !this.state.maincheck,
            checkboxValue: !this.state.checkboxValue,
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


                            <input type="checkbox" checked={this.state.maincheck} />
                            <label onClick={this.markcheckbox.bind(this, this.props.goal)} className="change-label1  huv" ><div className="tick1"></div></label>
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