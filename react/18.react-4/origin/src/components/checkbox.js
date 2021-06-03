import React from "react";

class BeingHungry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLove: true,
      isStatus: true,
      isSushi: true,
      numberOfSushi: 999,
      isPizza: false,
      numberOfPizza: 0,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div class="checkbox_form">
        <form>
          <label>
            Всегда ли Вы голодны?
            <input
              name="isStatus"
              type="checkbox"
              checked={this.state.isStatus}
              onChange={this.handleInputChange}
            />
          </label>
        </form>

        <form>
          <label>
            Испытываете ли Вы истинную любовь к вкусной еде?
            <input
              name="isLove"
              type="checkbox"
              checked={this.state.isLove}
              onChange={this.handleInputChange}
            />
          </label>
        </form>

        <form>
          <label>
            Заказываете суши?
            <input
              name="isSushi"
              type="checkbox"
              checked={this.state.isSushi}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Количество:
            <input
              name="numberOfSushi"
              type="number"
              value={this.state.numberOfSushi}
              onChange={this.handleInputChange}
            />
          </label>
        </form>

        <form>
          <label>
            Заказываете пиццу?
            <input
              name="isPizza"
              type="checkbox"
              checked={this.state.isPizza}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Количество:
            <input
              name="numberOfPizza"
              type="number"
              value={this.state.numberOfPizza}
              onChange={this.handleInputChange}
            />
          </label>
        </form>
      </div>
    );
  }
}

export default BeingHungry;
