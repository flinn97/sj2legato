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

        this.props.props.practice(this.state.checkboxValue, this.props.props.synced, this.props.day, this.props.props.prac, );
        
        


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
                                        {this.props.day==="s"?(<p style={{ position: "absolute", marginLeft: "-3px", marginTop: "-3px", fontSize: "13px" }}>S</p>
):(                                            <p style={{ position: "absolute", marginLeft: "-3px", marginTop: "-3px", fontSize: "13px" }}>{this.props.day}</p>
)}

                                            <div style={{ opacity: "0" }}>
                                                {this.props.day === "M" ?
                                                    (<h3 style={{ marginLeft: "-1px", marginTop: this.state.hstyle }}>{this.props.day}</h3>)
                                                    : (<div> {this.props.day === "W" ? (<h3 style={{ marginLeft: "-1px", marginTop: this.state.hstyle }}>{this.props.day}</h3>)
                                                        : (
                                                            <div>
                                                             {this.props.day==="s"?(<h3 style={{ marginLeft: this.state.style, marginTop: this.state.hstyle }}>S</h3>):(<h3 style={{ marginLeft: this.state.style, marginTop: this.state.hstyle }}>{this.props.day}</h3>)}

                                                            </div>
                                                        
                                                        )}</div>)}
                                            </div>
                                        </div>



                                    </div>


                                ) : (
                                        <div className="csyncbox">
                                            
                                            {this.props.day==="s"?( <p style={{ position: "absolute", marginLeft: "-3px", marginTop: "-3px", fontSize: "13px", opacity: "0" }}>S</p>):(<p style={{ position: "absolute", marginLeft: "-3px", marginTop: "-3px", fontSize: "13px", opacity: "0" }}>{this.props.day}</p>)}

                                            
                                            <div >
                                                {this.props.day === "M" ?
                                                    (<h3 style={{ marginLeft: "-1px", marginTop: this.state.hstyle }}>{this.props.day}</h3>)
                                                    : (<div> {this.props.day === "W" ? (<h3 style={{ marginLeft: "-1px", marginTop: this.state.hstyle }}>{this.props.day}</h3>)
                                                        : (
                                                            <div>
                                                            {this.props.day==="s"?(<h3 style={{ marginLeft: this.state.style, marginTop: this.state.hstyle }}>S</h3>):(<h3 style={{ marginLeft: this.state.style, marginTop: this.state.hstyle }}>{this.props.day}</h3>)}
</div>
                                                        

                                                        
                                                        )}</div>)}
                                            </div>
                                        </div>

                                    )}
                            </div>) : (<div style={{ opacity: "0" }}>


                                    <div className="csyncboxa" style={{ opacity: "0" }}>
                                    {this.props.day==="s"?( <p style={{ position: "absolute", marginLeft: "-3px", marginTop: "-3px", fontSize: "13px" }}>S</p>):( <p style={{ position: "absolute", marginLeft: "-3px", marginTop: "-3px", fontSize: "13px" }}>{this.props.day}</p>)}


                                   
                                    <div style={{ opacity: "0" }}>
                                        {this.props.day === "M" ?
                                            (<h3 style={{ marginLeft: "-1px", marginTop: this.state.hstyle }}>{this.props.day}</h3>)
                                            : (<div> {this.props.day === "W" ? (<h3 style={{ marginLeft: "-1px", marginTop: this.state.hstyle }}>{this.props.day}</h3>)
                                                : (<div>
                                                    {this.props.day==="s"?(<h3 style={{ marginLeft: this.state.style, marginTop: this.state.hstyle }}>S</h3>):(<h3 style={{ marginLeft: this.state.style, marginTop: this.state.hstyle }}>{this.props.day}</h3>)}

                                                </div>
                                                
                                                )}</div>)}
                                    </div>
                                </div>



                            </div>)}
                                     

                                     

                            <div className="tick"></div>
                        </label>
                        <div style={{ marginLeft: "10px" }}>
                            {this.props.props.synctimes ? (<div>{this.props.time ? (<div style={{fontSize:"14px"}}><b>{this.props.time} m</b></div>) : (<div style={{fontSize:"14px"}}><b>0 m</b></div>)}</div>) : (<div> </div>)}
                        </div>
                    </div>

                ) : (<div >
                        <div >
                        </div>
                        <div>
                            <input type="checkbox" checked={this.state.checkboxValue} />
                            <label className="change-label2a huv" onClick={this.markcheckbox}>
                                {this.props.day ? (<div>
                                    {this.state.p ? (
                                        <div>


                                            <div className="csyncbox">
                                            {this.props.day==="s"?(<p style={{ position: "absolute", marginLeft: "-3px", marginTop: "-3px", fontSize: "13px" }}>S</p>):(<p style={{ position: "absolute", marginLeft: "-3px", marginTop: "-3px", fontSize: "13px" }}>{this.props.day}</p>)}

                                                
                                                <div style={{ opacity: "0" }}>
                                                    {this.props.day === "M" ?
                                                        (<h3 style={{ marginLeft: "-1px", marginTop: this.state.hstyle }}>{this.props.day}</h3>)
                                                        : (<div> {this.props.day === "W" ? (<h3 style={{ marginLeft: "-1px", marginTop: this.state.hstyle }}>{this.props.day}</h3>)
                                                            : (
                                                                <div>

{this.props.day==="s"?(<h3 style={{ marginLeft: this.state.style, marginTop: this.state.hstyle }}>S</h3>):(<h3 style={{ marginLeft: this.state.style, marginTop: this.state.hstyle }}>{this.props.day}</h3>)}

                                                                </div>
                                                            )}</div>)}
                                                </div>
                                            </div>



                                        </div>


                                    ) : (
                                            <div className="csyncbox">
                                                                                            {this.props.day==="s"?(<p style={{ position: "absolute", marginLeft: "-3px", marginTop: "-3px", fontSize: "13px", opacity: "0" }}>S</p>):(<p style={{ position: "absolute", marginLeft: "-3px", marginTop: "-3px", fontSize: "13px", opacity: "0" }}>{this.props.day}</p>)}


                                                                                           
                                                <div >
                                                    {this.props.day === "M" ?
                                                        (<h3 style={{ marginLeft: "-1px", marginTop: this.state.hstyle }}>{this.props.day}</h3>)
                                                        : (<div> {this.props.day === "W" ? (<h3 style={{ marginLeft: "-1px", marginTop: this.state.hstyle }}>{this.props.day}</h3>)
                                                            : (<div>
                                                                {this.props.day==="s"?(<h3 style={{ marginLeft: this.state.style, marginTop: this.state.hstyle }}>S</h3>):(<h3 style={{ marginLeft: this.state.style, marginTop: this.state.hstyle }}>{this.props.day}</h3>)}


                                                             
                                                            </div>
                                                            
                                                            
                                                            
                                                            )}</div>)}
                                                </div>
                                            </div>

                                        )}
                                </div>) : (<div style={{ opacity: "0" }}>


                                    <div className="csyncboxa" style={{ opacity: "0" }}>
                                    {this.props.day==="s"?(<p style={{ position: "absolute", marginLeft: "-3px", marginTop: "-3px", fontSize: "13px" }}>S</p>):(<p style={{ position: "absolute", marginLeft: "-3px", marginTop: "-3px", fontSize: "13px" }}>{this.props.day}</p>)}


                                        
                                        <div style={{ opacity: "0" }}>
                                            {this.props.day === "M" ?
                                                (<h3 style={{ marginLeft: "-1px", marginTop: this.state.hstyle }}>{this.props.day}</h3>)
                                                : (<div> {this.props.day === "W" ? (<h3 style={{ marginLeft: "-1px", marginTop: this.state.hstyle }}>{this.props.day}</h3>)
                                                    : (<div>
                                                    {this.props.day==="s"?(<h3 style={{ marginLeft: this.state.style, marginTop: this.state.hstyle }}>S</h3>):(<h3 style={{ marginLeft: this.state.style, marginTop: this.state.hstyle }}>{this.props.day}</h3>)}
                                                    </div>)}</div>)}
                                        </div>
                                    </div>



                                </div>)}




                                <div className="tick"></div>
                            </label>

                           

                                       


                                 

                            <div style={{ marginLeft: "10px" }}>
                                {this.props.props.synctimes ? (<div>{this.props.time ? (<div style={{fontSize:"14px"}}><b>{this.props.time} m</b></div>) : (<div style={{fontSize:"14px"}}><b>0 m</b></div>)}</div>) : (<div></div>)}
                            </div>
                            
                            </div>
                    </div>)
                }
           </div>
            )
}
}

export default Checkedd;