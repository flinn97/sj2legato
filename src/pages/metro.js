import React, { Component } from "react";
import Button from '../components/button.js';
import Slider from '../components/slider.js';
import './pages.css';
import Metro from "./metronome.png"
import Splashscreen  from "../components/splashscreen.js";


class Metronome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bpm: 100,
            playing: false,
            count: 0,
            tooSmall: false,
            marginTop: "200px",
            margint: "",
            screensize: "",
            maxHeight:"700px",
            splashscreen:true,

        }
        this.click1 = new Audio("https://daveceddia.com/freebies/react-metronome/click1.wav");
        this.click2 = new Audio("https://daveceddia.com/freebies/react-metronome/click1.wav");
        this.handleBPM = this.handleBPM.bind(this);
        this.updateInterval = this.updateInterval.bind(this);
        this.startStop = this.startStop.bind(this);
        this.playClick = this.playClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.Splashscreen = this.Splashscreen.bind(this);

        
    }
    Splashscreen(){
        this.setState({splashscreen:false})
    }
    updateWindowDimensions() {
        this.setState({screensize: window.innerWidth})
        if(parseInt(window.innerWidth) <= 550)
        this.setState({ 
            tooSmall: true,
            marginTop: "20px",
        margint: "00px", 
        maxHeight:"400px",
        margint: "50px",
    });
     }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions)
    } 
    componentDidMount() {
        window.addEventListener("resize", this.updateWindowDimensions());
    }


    updateInterval() {
        const bmpSpeed = 60 * 1000 / this.state.bpm;
        this.timer = setInterval(this.playClick, bmpSpeed);
    }

    handleBPM(event) {
        const bpm = event.target.value;
        if (this.state.playing) {
            clearInterval(this.timer);
            this.updateInterval();
            this.setState({
                count: 0,
                bpm
            });
        } else {
            this.setState({
                bpm
            });
        };
    }
    handleChange = (event) => {
        const { name, value } = event.target


        this.setState({
            [name]: value,
        })

        
        


    }

    playClick() {
        if (this.state.count === 0) this.click2.play();
        else this.click1.play();
        this.setState({
            count: this.state.count + 1
        });
    }

    startStop() {
        if (this.state.playing) {
            clearInterval(this.timer);
            this.setState({
                playing: false
            });
        } else {
            this.updateInterval();
            this.setState({
                count: 0,
                playing: true
            }, this.playClick)
        }
    }

    render() {

        
        return (
            
            <div className="z2">
                {this.state.splashscreen && (<Splashscreen closesplash={this.Splashscreen}/>)}
            <div className="columbized">

            <div className= "fill1 centerized" style={{ marginTop: this.state.marginTop, display:"flex", justifyContent:"column", padding:"5px" }}>
            <img src = {Metro} alt="metro" style={{width: '700px', maxHeight:this.state.maxHeight, position:"absolute", }}/>
                <div style={{zIndex: "1500", }}>
                    {this.state.tooSmall?(<h4 className="centerize spacer-bottom" style={{marginTop: this.state.margint}}>Metronome</h4>):(<h1 className="centerize spacer-bottom" style={{marginTop: this.state.margint}}>Metronome</h1>)}
                
                        <Slider bpm={this.state.bpm} handleChange={this.handleBPM} handleChanges={this.handleChange} tooSmall={this.state.screensize}/>
                        <Button handleClick={this.startStop} currentState={this.state.playing}  />
                        </div>
                </div>
                </div>
                </div>
        );
    }
}
export default Metronome;



