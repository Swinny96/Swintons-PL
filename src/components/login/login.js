import React from "react"
import "./login.css"

function LogIn() {
  return (
    <div className="Login">
      <div className="Login-Wrapper">
        <img className="Login-Logo" src="/images/logos/logo.png" />
        <div className="Login-Text">
          <span className="Login-Span">The Swintons</span>
          <h1 className="Login-Heading">Predictor League</h1>
        </div>
      </div>
      <p className="Login-Headline">Sign in to make your predictions</p>
      <form className="Login-Form">
        <p className="Login-Title">Your name</p>
        <input className="Login-Input" />
        <p className="Login-Title">Password</p>
        <input className="Login-Input" type="password" />
        <br />
        <button className="Login-Button" type="submit">Sign In</button>
        <br />
        <a className="Login-Link" href="./table/">
          <img className="Login-Icon" src="/images/icons/login-18dp.svg" />
        </a>
      </form>
    </div>
  )
}

export default LogIn