
import React from 'react';
class Convertisseur extends React.Component {
    state = {
        number: '', h: 0, m: 0, s: 0
    }
    handlechange = (e) => {
        this.setState({
            number: e.target.value
        })

    }
    timer = () => {
        this.setState({
            h: Math.floor(this.state.number / 3600),
            m: Math.floor(((this.state.number % 3600) / 60)),
            s: Math.floor(this.state.number % 60)
        })
    }
    render() {
        return (
            <div className='containre'>
                <center>
                    <input type="text" className='input' onChange={this.handlechange} /><br /><br />

                    <button className='button' onClick={this.timer} >Convertir</button>
                    <p > {this.state.h + "   hour(s) ," + this.state.m + " minute(s) and  " + this.state.s + " second(s)"} </p>
                </center>
            </div>
        );
    }
}
export default Convertisseur;








