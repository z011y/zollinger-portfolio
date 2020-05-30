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
        <label htmlFor="email">Email</label>
        <Input
          id="email"
          type="email"
          onChange={handleOnChange}
          required
          value={inputs.email}
        />
        <label htmlFor="message">Message</label>
        <Textarea
          id="message"
          onChange={handleOnChange}
          required
          value={inputs.message}
        />
        <Button type="submit" disabled={status.submitting}>
          {!status.submitting
            ? !status.submitted
              ? "Submit"
              : "Submitted"
            : "Submitting..."}
        </Button>
      </InfoForm>
      {status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && (
        <div className="success">{status.info.msg}</div>
      )}
    </>
  );
};

export default ContactForm;

//STYLES__________________________
const InfoForm = styled.form`
  height: 400px;
  width: 600px;
  position: absolute;
  top: 30%;
  font-size: 18px;
  text-align: left;
  display: grid;
  grid-template-rows: 25px 40px 25px 80px 50px;
  grid-gap: 20px;
  align-content: center;
  justify-content: center;
  background-color: white;
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 20px;
  font-family: "DM Mono", monospace;

  span {
    font-family: "DM Mono", monospace;
    font-weight: 400;
  }
`;

const Input = styled.input`
  border-radius: 5px;
  border: 1px hidden black;
  height: 40px;
  width: 500px;
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
  width: 500px;
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
  width: 100px;
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
