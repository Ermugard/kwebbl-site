import React from 'react';

const FORM_ELEMENTS = [
  {
    name: "name",
    label: "Name",
    placeholder: "Enter your name",
    required: true,
    half: true,
    element: "input",
    type: "text"
  },
  {
    name: "company",
    label: "Company",
    placeholder: "Enter your company name",
    required: false,
    half: true,
    element: "input",
    type: "text"
  },
  {
    name: "email",
    label: "Email Address",
    placeholder: "Enter your email",
    required: true,
    half: true,
    element: "input",
    type: "email"
  },
  {
    name: "phone",
    label: "Phone",
    placeholder: "Enter your phone number",
    required: false,
    half: true,
    element: "input",
    type: "tel"
  },
  {
    name: "subject",
    label: "Subject",
    placeholder: "Enter subject",
    required: false,
    half: false,
    element: "input",
    type: "text"
  },
  {
    name: "message",
    label: "Message",
    placeholder: "Hello ...",
    required: false,
    half: false,
    element: "textarea",
    type: "textarea"
  }
];

export default class ContactForm extends React.Component {
  state = {
    isChanged: false,
    model: {
      name: "",
      company: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      copy: false
    },
    valid: {
      name: true,
      company: true,
      email: true,
      phone: true,
      subject: true,
      message: true,
    }
  };

  isEmailValid = email => (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email));

  onChangeInput = e => {
    let
      $el     = e.target,
      type    = $el.getAttribute("type"),
      name    = $el.getAttribute("name"),
      value   = type !== "checkbox" ? $el.value : $el.checked,
      isValid = this.state.valid[name];

    if (name === 'email') {
      isValid = this.isEmailValid(value);
    } else if (name === 'name' || name === 'company') {
      isValid = !!value;
    }

    if (!this.state.isChanged) {
      this.setState({
        isChanged: true,
        valid: {
          ...this.state.valid,
          email: false,
          name: false
        }
      });
    }

    this.setState({
      model: {
        ...this.state.model,
        [name]: value
      },
      valid: {
        ...this.state.valid,
        [name]: isValid
      }
    });
  };

  checkIfValidForm = () => {
    return Object.keys(this.state.valid).every(el => {
      return this.state.valid[el] === true;
    }) && this.state.isChanged;
  };

  sendEmail = () => {
    if (!this.checkIfValidForm()) {
      alert('Not Valid Form');

      return;
    }

    console.log('send email');

    fetch("http://localhost:4000/sendEmail", {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state.model)
    });
  };

  render() {
    return (
      <div className="contact-form-wrapper">
        <div className="contact-form-white-back" />
        <div className="contact-form form">
          <div>
            <h3 className="header-orange">contact us</h3>
            <h2 className="header-tt-black">we're always glad you</h2>

            <div className="contact-form-info">
              <span className="red-text">CALL US:</span>
              <span className="black-text">+31 20 3080 700</span>
            </div>

            <div className="contact-form-main">
              {FORM_ELEMENTS.map(formElement => (
                <div key={formElement.name} className={"contact-block" + (formElement.half ? " _half" : "") + (!this.state.valid[formElement.name] ? " error-validation" : "")}>
                  <label className={formElement.required ? "required" : ""}
                         htmlFor={formElement.name}>{formElement.label}</label>
                  {(() => {
                    switch (formElement.type) {
                      case "textarea":
                        return <textarea
                          required={formElement.required}
                          name={formElement.name}
                          value={this.state.model[formElement.name]}
                          type={formElement.type}
                          onChange={this.onChangeInput}
                          className="input textarea"
                          placeholder={formElement.placeholder}
                        />;
                      default:
                        return <input
                          required={formElement.required}
                          name={formElement.name}
                          value={this.state.model[formElement.name]}
                          type={formElement.type}
                          onChange={this.onChangeInput}
                          className="input"
                          placeholder={formElement.placeholder}
                        />;
                    }
                  })()}
                </div>
              ))}

              <div className="contact-block">
                <label className="checkbox" htmlFor="copy">
                  <input type="checkbox" name="copy" id="copy" onChange={this.onChangeInput} value={this.state.model.copy}/>

                  <span className="main"/>
                  <span className="text">I would like to receive a copy of this message</span>
                </label>
              </div>

              <div className="contact-block">
                <button className="btn btn-orange" disabled={!this.checkIfValidForm()} onClick={this.sendEmail}>Send</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}