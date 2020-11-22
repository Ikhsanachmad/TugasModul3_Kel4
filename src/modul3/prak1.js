import React, { Component } from "react";
class Prak1 extends Component {
    state = {
        nama: "Yudhi"
    }
    componentDidMount() {
        alert(`Mount triggered!`)
    }
    ubahNama = () => {
        this.setState((state) => { 
            if (state.nama === "Yudhi") {
                return {nama : "Ikhsan"}
            } else {
                return { nama: "Yudhi"}                 
            }
        })
    }
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     alert(`Component Updates! State nama sebelumnya: ${prevState.nama}`)
    // }
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     return window.confirm('Haruskah Component ini di-Update?');
    // }
    componentWillUnmount() {
        alert('praktikan 1 akan hilang :(')
    }
    render() {
        return (
            <div>
                <h4>Praktikan 1</h4>
                <button onClick={this.ubahNama}>Ubah nama!</button>
                <br />
                <h4>{this.state.nama}</h4>
            </div>
        );
    }
}
export default Prak1;
