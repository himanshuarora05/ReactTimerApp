var React = require('react');
var CountdownForm = React.createClass({
  onSubmit:function(e){
    e.preventDefault();
    var secondsVal = this.refs.seconds.value;
    if(secondsVal.length > 0 && secondsVal.match(/^[0-9]*$/)){
      this.refs.seconds.value = '';
      this.props.onSetCountdown(parseInt(secondsVal, 10));
    }else{
      alert("Wrong Input Value");
    }
  },
  render: function(){
      return(
        <div>
            <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
                <input type="text" ref="seconds" placeholder="Enter Time in Seconds"></input>
                <button className="button expanded">Start</button>
            </form>
        </div>
      );
    }
});
module.exports = CountdownForm;
