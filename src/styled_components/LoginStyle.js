import styled from "styled-components";

const LoginStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  width: 100vw;
  height: 100vh;
  background-color: white;
  box-sizing: border-box;

  p{
    color: #52b6ff;
    text-decoration-line: underline;
    font-size: 14px;
  }

  img{
    width: 180px;
    margin-bottom: 30px;
  }

  form{
    display: flex;
    flex-direction: column;
    width: 80vw;

    input {
      height: 45px;
      margin-bottom: 7px;
      border: 1px solid #d5d5d5;
      border-radius: 5px;
      font-size: 22px;
      padding-left: 8px;
    }

    input::placeholder {
      font-size: 21px;
      color: #dbdbdb;
      padding-left: 5px;
    }

    input:focus::placeholder {
      color: transparent;
    }

    button {
      all: initial;
      height: 45px;
      background-color: #52b6ff;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 21px;
      font-family: "Lexend Deca";
      margin-bottom: 25px;
    }
  }

`;

export default LoginStyle;