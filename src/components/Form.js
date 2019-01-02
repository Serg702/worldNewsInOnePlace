import React, { Component } from "react";

import { css } from "emotion";

const divStyles = css``;

const containerStyle = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  margin: 0 auto;
  text-align: center;
  label: from;
`;

const textStyles = css`
  width: 100%;
  border: 1px solid #9e9e9e;
  margin-bottom: 10px;

  label: text;

  ::-webkit-input-placeholder {
    padding-top: 20px;
    text-align: center;
    font-size: 18px;
  }
`;

const buttonStyles = css`
  background-color: #8bc34a;
  padding: 10px;
  border: 0;
  border-radius: 4px;
  :hover {
    opacity: 0.7;
  }
`;
class Form extends Component {
  state = {
    inputVal: ""
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.inputVal) {
      this.props.fetchData(this.state.inputVal);
    } else {
      alert("Input field is empty !");
    }
    this.setState({ ...this.state, inputVal: "" });
  };

  handleChange = e => {
    this.setState({ ...this.state, inputVal: e.target.value });
  };

  render() {
    const { inputVal } = this.state;

    return (
      <div className={divStyles}>
        <form className={containerStyle} onSubmit={this.handleSubmit}>
          <textarea
            rows="10"
            cols="50"
            className={textStyles}
            placeholder="Type a phrase to search for"
            value={inputVal}
            onChange={this.handleChange}
          />
          <button type="submit" className={buttonStyles}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
