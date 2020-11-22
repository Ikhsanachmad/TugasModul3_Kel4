import React, { Component } from "react";
class Prak2 extends Component {
    state = {
        angka: 0
    }
    componentDidMount() {
        alert(`Mount triggered!`)
    }
    tambahAngka = () => {
        this.setState((state) => { return { angka: state.angka + 1 } })
    }
    kurangiAngka = () => {
        this.setState((state) => { return { angka: state.angka - 1 } })
    }
    componentWillUnmount() {
        alert('praktikan 2 akan hilang :(')
    }
    render() {
        return (
            <div>
                <h4>Praktikan 2</h4>
                <button onClick={this.tambahAngka}>Increment</button>
                <button onClick={this.kurangiAngka}>Decrement</button>
                <br/>
                <p>{this.state.angka}</p>
            </div>
        );
    }
}
export default Prak2;
