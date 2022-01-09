import React from "react";
import axios from "axios";

import './App.css';

class App extends React.Component {
    state = {advice: ''};

    componentDidMount() {
        this.fetchAdvice();
    }

    fetchAdvice() {
        axios.get("https://api.adviceslip.com/advice")
            .then((response) => {
                const {advice} = response.data.slip;
                console.log(advice)

                this.setState({advice});
            }).catch((error => {
            console.log(error);
        }));
    }

    render() {
        const {advice} = this.state
        return (
            <div className="app">
                <div className="card">
                    <div className="heading">{advice}</div>
                    <a type="button" className="button" href="App.js">
                        <span>GIVE ME ADVICE</span>
                    </a>
                </div>
            </div>
        );
    };
}

export default App;