import React, { Component } from 'react';

class Checkedd extends Component {
    constructor(props) {
        super(props);
        this.markcheckbox = this.markcheckbox.bind(this);

        this.state = {
            checkboxValue: this.props.flag,
            practice: 0,
            p: this.props.flag,
            style: "27%",
            hstyle: "20%"
        }

    }
  
    async markcheckbox(event) {

        event.preventDefault();

        this.setState({
            p: !this.state.p,
        })

        await this.setState({ checkboxValue: !this.state.checkboxValue, });


        this.props.props.practice(this.state.checkboxValue, this.props.props.synced, this.props.day);
        
        


    }

    render() {
        
        return (

            <div>
                { this.props.props.role === "teacher" ? (
                    <div>
                        <input type="checkbox" checked={this.state.checkboxValue} />
                        <label className="change-label2a huv" >
                            {this.props.day ? (<div>
                                {this.state.p ? (
                                    <div>


                                        <div className="csyncbox">

                                            <p style={{ position: "absolute", marginLeft: "-3px", marginTop: "-3px", fontSize: "13px" }}>{this.props.day}</p>
                                            <div style={{ opacity: "0" }}>
                                                {this.props.day === "M" ?
                                                    (<h3 style={{ marginLeft: "-1px", marginTop: this.state.hstyle }}>{this.props.day}</h3>)
                                                    : (<div> {this.props.day === "W" ? (<h3 style={{ marginLeft: "-1px", marginTop: this.state.hstyle }}>{this.props.day}</h3>)
                                                        : (<h3 style={{ marginLeft: this.state.style, marginTop: this.state.hstyle }}>{this.props.day}</h3>)}</div>)}
                                            </div>
                                        </div>



                                    </div>


                                ) : (
                                        <div className="csyncbox">

                                            <p style={{ position: "absolute", marginLeft: "-3px", marginTop: "-3px", fontSize: "13px", opacity: "0" }}>{this.props.day}</p>
                                            <div >
                                                {this.props.day === "M" ?
                                                    (<h3 style={{ marginLeft: "-1px", marginTop: this.state.hstyle }}>{this.props.day}</h3>)
                                                    : (<div> {this.props.day === "W" ? (<h3 style={{ marginLeft: "-1px", marginTop: this.state.hstyle }}>{this.props.day}</h3>)
                                                        : (<h3 style={{ marginLeft: this.state.style, marginTop: this.state.hstyle }}>{this.props.day}</h3>)}</div>)}
                                            </div>
                                        </div>

                                    )}
                            </div>) : (<div style={{ opacity: "0" }}>


                                    <div className="csyncboxa" style={{ opacity: "0" }}>

                                    <p style={{ position: "absolute", marginLeft: "-3px", marginTop: "-3px", fontSize: "13px" }}>{this.props.day}</p>
                                    <div style={{ opacity: "0" }}>
                                        {this.props.day === "M" ?
                                            (<h3 style={{ marginLeft: "-1px", marginTop: this.state.hstyle }}>{this.props.day}</h3>)
                                            : (<div> {this.props.day === "W" ? (<h3 style={{ marginLeft: "-1px", marginTop: this.state.hstyle }}>{this.props.day}</h3>)
                                                : (<h3 style={{ marginLeft: this.state.style, marginTop: this.state.hstyle }}>{this.props.day}</h3>)}</div>)}
                                    </div>
                                </div>



                            </div>)}
                                     

                                     

                            <div className="tick"></div>
                        </label>
                        <div style={{ marginLeft: "10px" }}>
                            {this.props.props.synctimes ? (<div>{this.props.time ? (<div>{this.props.time} m</div>) : (<div>0 m</div>)}</div>) : (<div> {this.props.time ? (<div>{this.props.time} m</div>) : (<div></div>)}</div>)}
                        </div>
                    </div>

                ) : (<div >
                        <div >
                        </div>
                        <div>
                            <input type="checkbox" checked={this.state.checkboxValue} />
                            {this.state.p ? (
                                <label onClick={this.markcheckbox} className="change-label huv" >
                                        {this.state.p ? (

                                                                            <div className="csyncbox">

                                            <p style={{ position: "absolute", marginLeft: "-3px", marginTop: "-3px", fontSize: "13px" }}>{this.props.day}</p>
                                            <div style={{ opacity: "0" }}>
                                                {this.props.day === "M" ?
                                                    (<h3 style={{ marginLeft: "-1px", marginTop: this.state.hstyle, color: "gray" }}>{this.props.day}</h3>)
                                                    : (<div> {this.props.day === "W" ? (<h3 style={{ color: "gray", marginLeft: "-1px", marginTop: this.state.hstyle }}>{this.props.day}</h3>)
                                                        : (<h3 style={{ color: "gray", marginLeft: this.state.style, marginTop: this.state.hstyle }}>{this.props.day}</h3>)}</div>)}
                                            </div>
                                            </div>

                                        ) : (
                                                                                                                        <div className="csyncbox">
                                                <p style={{ position: "absolute", marginLeft: "-3px", marginTop: "-3px", fontSize: "13px", opacity: "0"}}>{this.props.day}</p>

                                            <div >
                                                {this.props.day === "M" ?
                                                    (<h3 style={{ marginLeft: "-1px", marginTop: this.state.hstyle, color: "gray" }}>{this.props.day}</h3>)
                                                    : (<div> {this.props.day === "W" ? (<h3 style={{ color: "gray", marginLeft: "-1px", marginTop: this.state.hstyle }}>{this.props.day}</h3>)
                                                        : (<h3 style={{ color: "gray", marginLeft: this.state.style, marginTop: this.state.hstyle }}>{this.props.day}</h3>)}</div>)}
                                                </div>
                                            </div>

                                        )}


                                    <div className="tick"></div>
                                </label>

                            ) : (<label onClick={this.markcheckbox} className="change-label huv" >
                                <div className="csyncbox">
                                    {this.state.p ? (<p style={{ position: "absolute", marginLeft: "-3px", marginTop: "-3px", fontSize: "13px" }}>{this.props.day}</p>) : (
                                        <div >
                                            {this.props.day === "M" ?
                                                (<h3 style={{ marginLeft: "-1px", marginTop: this.state.hstyle, color: "gray" }}>{this.props.day}</h3>)
                                                : (<div> {this.props.day === "W" ? (<h3 style={{ color: "gray", marginLeft: "-1px", marginTop: this.state.hstyle }}>{this.props.day}</h3>)
                                                    : (<h3 style={{ color: "gray", marginLeft: this.state.style, marginTop: this.state.hstyle }}>{this.props.day}</h3>)}</div>)}
                                        </div>
                                    )}

                                </div>

                                <div className="tick"></div>
                            </label>)}

                           
                            <div style={{ marginLeft: "10px" }}>
                                {this.props.time ? (<div>{this.props.time} m</div>) : (<div></div>)}
                            </div>
                            </div>
                    </div>)
                }
           </div>
            )
}
}

export default Checkedd;