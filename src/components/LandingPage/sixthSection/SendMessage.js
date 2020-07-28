import React, { Component } from "react";
import SubmitButton from "../../common/SubmitButton";
import FormIput from "../../common/FormInput";

class SendMessage extends Component {
  state = { email: "", subject: '', message: ''};
  onInputChange = ({target: {name, value}}) => {
    this.setState({ [name]: value });
  };


  onFormSubmit = (e) => {
    e.preventDefault();
  }
  render() {
    return (
      <div className="message-us" id="message-us">
        <h1>Message us</h1>
        <form onSubmit={this.onFormSubmit}>
          <FormIput
            type="text"
            placeholder="Your email"
            value={this.state.email}
            name="email"
            onChange={this.onInputChange}
          />
          <FormIput
            type="text"
            placeholder="Subject"
            value={this.state.subject}
            name="subject"
            onChange={this.onInputChange}
          />

          <FormIput
            type="textarea"
            placeholder="Message.."
            value={this.state.message}
            name="message"
            onChange={this.onInputChange}
          />
          <SubmitButton/>
        </form>
      </div>
    );
  }
}

export default SendMessage;
