import React from 'react';
import './calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      slate: '',
      value: '',
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

  onClickHandler(e){
    var value = e.target.value;
    // var arr = [].concat(this.state.value);
    // var arr = []
    // arr.push(value);
    // var arr1 = arr.join('');
    // this.setState({
      // value: arr1
    // }, () => {
    //   console.log(this.state.value);
    // })

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
                <button onClick={this.onClickHandler.bind(this)} value='7'>7</button>
                <button onClick={this.onClickHandler.bind(this)} value='8'>8</button>
                <button onClick={this.onClickHandler.bind(this)} value='9'>9</button>
              </div>
              <div className='numbers'>
                <button onClick={this.onClickHandler.bind(this)} value='6'>6</button>
                <button onClick={this.onClickHandler.bind(this)} value='5'>5</button>
                <button onClick={this.onClickHandler.bind(this)} value='4'>4</button>
              </div>
              <div className='numbers'>
                <button onClick={this.onClickHandler.bind(this)} value='3'>3</button>
                <button onClick={this.onClickHandler.bind(this)} value='2'>2</button>
                <button onClick={this.onClickHandler.bind(this)} value='1'>1</button>
              </div>
              <div className='numbers'>
                <button onClick={this.onClickHandler.bind(this)} value=''>AC</button>
                <button onClick={this.onClickHandler.bind(this)} value='0'>0</button>
                <button onClick={this.onClickHandler.bind(this)} value=''>C</button>
              </div>
            </div>
            {/* Operators */}
            <div className='operator'>
              <button onClick={this.onClickHandler.bind(this)} value='/'>/</button>
              <button onClick={this.onClickHandler.bind(this)} value='*'>*</button>
              <button onClick={this.onClickHandler.bind(this)} value='-'>-</button>
              <button onClick={this.onClickHandler.bind(this)} value='+'>+</button>
              <button onClick={this.onClickHandler.bind(this)} value='='>=</button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Calculator;