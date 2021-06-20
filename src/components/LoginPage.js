import React from 'react'
import styled from 'styled-components';

function LoginPage() {
    return (
<LoginWrapper>
    <img src="/amazonLogoBlack.svg" alt="" />

    <LoginForm>
        
        <h1>Sign in</h1>

        <form action="">
            <div className="login__input">
                <label htmlFor="">Email</label>
                <input type="text" />
            </div>
            <div className="login__input">
                <label htmlFor="">Password</label>
                <input type="text" />
            </div>

            <button className="signIn__button" type="submit">Sign in</button>

            <p>By signing-in you agree to Amazon's Conditions of Use and Sale. Please see our Privacy Notice, our Cookies Notice, and our Interest-Based Ads Notice</p>

            <button className="signUp__button" type="submit">Create your Amazon Account</button>
        </form>
    </LoginForm>
</LoginWrapper>
        )
}

export default LoginPage

const LoginWrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgb(224, 224, 224);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  img {
      height: 40px;
        margin-bottom: 50px;
  }
`;

const LoginForm = styled.div`
display: flex;

flex-direction: column;
height: 500px;
width: 400px;
background-color: rgb(238, 238, 238);
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
border-radius: 5px;

padding: 20px;

h1 {
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 40px;
}


.login__input {
    display: flex;
    flex-direction: column;

    label {
        font-weight: 700;
        font-size: 13px;
        margin-bottom: 8px;
    }

    input {
        margin-bottom: 15px;
        height: 40px;
        font-size: 18px;
        padding-left: 10px;    
    }

    
}
.signIn__button {

    border-radius: 2px;
    width: 100%;
    height: 30px;
    border: 1px solid;
    margin-top: 10px;
    background-color: #eea332;
    margin-bottom: 20px;
}

.signUp__button {
    border-radius: 2px;
    width: 100%;
    height: 30px;
    border: 1px solid;
    margin-top: 20px;
    border-color: darkgray;
}

p {
    font-size: 10px;
}
`;
