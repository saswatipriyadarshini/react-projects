import React from 'react';
import './calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      slate: '',
    }
  }

  //slate onchange 
  slateOnchangeHandler(e) {
    var value = e.target.value;
    this.setState({
      slate: value
    }, () => {
      console.log('the slate value is', value)
    })
  }

  onClickHandler(){

  }

  render() {
    return (
      <React.Fragment>
        <div className='calculator-container'>
          <div className='input-container'>
            {/* <input value={this.state.slate} onChange={this.slateOnchangeHandler.bind(this)} /> */}
          </div>
          <div className='body-container'>
            {/* number pad */}
            <div className='number-pad'>
              <div className='numbers'>
                <button onClick={this.onClickHandler.bind(this)} id='seven'>7</button>
                <button onClick={this.onClickHandler.bind(this)} id='eight'>8</button>
                <button onClick={this.onClickHandler.bind(this)} id='nine'>9</button>
              </div>
              <div className='numbers'>
                <button onClick={this.onClickHandler.bind(this)} id='six'>6</button>
                <button onClick={this.onClickHandler.bind(this)} id='five'>5</button>
                <button onClick={this.onClickHandler.bind(this)} id='four'>4</button>
              </div>
              <div className='numbers'>
                <button onClick={this.onClickHandler.bind(this)} id='three'>3</button>
                <button onClick={this.onClickHandler.bind(this)} id='two'>2</button>
                <button onClick={this.onClickHandler.bind(this)} id='one'>1</button>
              </div>
              <div className='numbers'>
                <button onClick={this.onClickHandler.bind(this)} id='delete'>AC</button>
                <button onClick={this.onClickHandler.bind(this)} id='zero'>0</button>
                <button onClick={this.onClickHandler.bind(this)} id='clear'>C</button>
              </div>
            </div>
            {/* Operators */}
            <div className='operator'>
              <button onClick={this.onClickHandler.bind(this)}>/</button>
              <button onClick={this.onClickHandler.bind(this)}>*</button>
              <button onClick={this.onClickHandler.bind(this)}>-</button>
              <button onClick={this.onClickHandler.bind(this)}>+</button>
              <button onClick={this.onClickHandler.bind(this)}>=</button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Calculator;