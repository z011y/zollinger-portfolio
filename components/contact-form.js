import styled from "styled-components";
import { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [inputs, setInputs] = useState({
    email: "",
    message: "",
  });

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        email: "",
        message: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };

  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify(inputs));
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    const res = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    });
    console.log(res);
    const text = await res.text();
    handleResponse(res.status, text);
  };

  return (
    <>
      <InfoForm onSubmit={handleOnSubmit}>
        <Title>
          <b style={{ color: "#2f80ed", fontSize: 20, fontFamily: "DM Sans" }}>
            I'm available for hire!
          </b>
          <br />
          Freelance === <span style={{ color: "green" }}>true</span>
          <br />
          Full-time === <span style={{ color: "green" }}>true</span>
        </Title>
        <Email>
          <label htmlFor="email">Email</label>
          <Input
            id="email"
            type="email"
            onChange={handleOnChange}
            required
            value={inputs.email}
          />
        </Email>
        <Message>
          <label htmlFor="message">Message</label>
          <Textarea
            id="message"
            onChange={handleOnChange}
            required
            value={inputs.message}
          />
        </Message>
        <Button type="submit" disabled={status.submitting}>
          {!status.submitting
            ? !status.submitted
              ? "Submit"
              : "Submitted"
            : "Submitting..."}
        </Button>
        <Result>
          {status.info.error && (
            <div className="error" style={{ color: "red" }}>
              Error: {"Oops! Your email did not send."}
            </div>
          )}
          {!status.info.error && status.info.msg && (
            <div className="success" style={{ color: "green" }}>
              {"Your email was sent successfully!"}
            </div>
          )}
        </Result>
      </InfoForm>
    </>
  );
};

export default ContactForm;

//STYLES__________________________
const InfoForm = styled.form`
  height: 500px;
  width: 600px;
  position: absolute;
  top: 30%;
  font-size: 18px;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: space-around;
  background-color: white;
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 20px;
  font-family: "DM Mono", monospace;

  span {
    font-family: "DM Mono", monospace;
    font-weight: 400;
  }

  @media (max-width: 650px) {
    width: 400px;
    height: 550px;
  }
  @media (max-width: 600px) {
    top: 25%;
  }

  @media (max-width: 500px) {
    width: 250px;
    left: 75px;
  }
`;

const Title = styled.h1`
  font-size: 18px;
  font-family: "DM Mono", monospace;
  font-weight: 400;
`;

const Input = styled.input`
  border-radius: 5px;
  border: 1px hidden black;
  height: 40px;
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.1);
  padding: 10px;
  font-size: 14px;

  &:active,
  &:focus {
    box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.2);
    outline: none;
  }
`;

const Textarea = styled.textarea`
  border-radius: 5px;
  border: 1px hidden black;
  height: 80px;
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.1);
  transition: 0.25s ease-in-out;
  padding: 10px;
  font-size: 14px;

  &:active,
  &:focus {
    box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.2);
    outline: none;
  }
`;

const Button = styled.button`
  font-family: "DM Mono", monospace !important;
  height: 50px;
  background: #ffffff;
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ease-in-out 0.25s;
  position: relative;
  border: 1px hidden black;

  &:hover {
    cursor: pointer;
    box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.2);
  }

  &:active {
    outline: none;
  }
`;

const Result = styled.div`
  height: 40px;
  width: 500px;
  font-size: 14px;
`;

const Email = styled.div`
  display: flex;
  flex-direction: column;
`;

const Message = styled.div`
  display: flex;
  flex-direction: column;
`;
