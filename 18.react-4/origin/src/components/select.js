import React  from "react";


class  SelectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "coconut" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Выбери своё состояние сегодня: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Выбери своё cостояние сегодня:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="ちくしょう">Сhikusyou</option>
            <option value=" 行くぞ">Iku zo</option>
            <option value="食らえ">Kurae</option>
            <option value="勝負だ">Syoubu da</option>
            <option value="舐めんなよ">Namenna</option>
          </select>
        </label>
        <input type="submit" value="Отправить" />
      </form>
    );
  }
}

export default SelectForm;
