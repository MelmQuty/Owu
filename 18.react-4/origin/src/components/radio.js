import React from "react";

class RadioForm extends React.Component {
  setCar(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div className="radio_form" onChange={this.setCar.bind(this)}>
        <p>Select your choice</p>
        <input type="radio" value="BMW" name="car" /> BWM
        <input type="radio" value="Mersedes" name="car" /> Mersedes
        <input type="radio" value="Tesla" name="car" /> Tesla
        <input type="radio" value="Audi" name="car" /> Audi
        <input type="radio" value="Maserati" name="car" /> Maserati
      </div>
    );
  }
}

export default RadioForm;
