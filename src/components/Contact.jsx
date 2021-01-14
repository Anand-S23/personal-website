import React from "react";
import emailjs from "emailjs-com";
import { Container, Button } from "react-bootstrap";

class Contact extends React.Component {
  sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q15hxr8",
        "template_hpdce1u",
        e.target,
        "user_wGfOEecb4ZCzJGUTQMeWs"
      )
      .then(
        (result) => {
          document.getElementById("contact-form-id").reset();
          console.log(result.text);
        },
        (error) => {
          document.getElementById("contact-form-id").reset();
          console.log(error.text);
        }
      );
  };

  render() {
    return (
      <div className="content-space">
        <Container>
          <h2 className="header">Contact Me</h2>
          <div className="form-content">
            <form
              className="contact-form"
              id="contact-form-id"
              onSubmit={this.sendEmail}
            >
              <input type="hidden" name="contact_number" />

              <label>Name</label>
              <input type="text" name="user_name" />

              <label>Email</label>
              <input type="email" name="user_email" />

              <label>Message</label>
              <textarea name="message" className="form-message" />

              <Button type="submit" value="Send" variant="dark">
                Submit
              </Button>
            </form>
          </div>
        </Container>
      </div>
    );
  }
}

export default Contact;
