import React from 'react';
/*
class Evaluator extends Component {
  getInitialState() {
      return {
          expression: ''
      };
  }
  reCalcValue(e) {
      if (e.key === 'Enter') {
          this.setState({
              expression: e.targert.value
          })
      }
  }
  render() {
    return (
        <div>
            <input type="text" onKeyPress={this.reCalcValue} />
            <h2>{eval(this.state.expression)}</h2>
        </div>
    );
  }
}
*/

var Evaluator  = React.createClass({
    getInitialState: function() {
        return {
            expression: ''
        };
    },
    reCalcValue: function(e) {
        console.log(e.key);
        //if (e.key === 'Enter') {
            this.setState({
                expression: e.target.value
            });
        //}
    },
    render: function() {
        return (
            <div>
                <input type="text" onChange={this.reCalcValue} />
                <h2>{this.state.expression}</h2>
            </div>
        );
    }
});

export default Evaluator;
