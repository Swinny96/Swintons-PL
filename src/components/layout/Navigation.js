import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import logo from "../../../static/images/logos/logo.png"

const Navigation = () => (
  <MyHeader>
    <Link to="/">
      <LogoWrapper className="Logo-Wrapper">
        <Logo className="Logo" src={logo} />
        <LogoText className="">
          <LogoSpan>The Swintons</LogoSpan>
          <LogoHeading>Predictions League</LogoHeading>
        </LogoText>
      </LogoWrapper>
    </Link>
    <HeaderLinks>
      <Nav href="../predictions">Predictions</Nav>
      <Nav href="../league">League standings</Nav>
      <Nav href="../table">PL Table</Nav>
      <Nav href="../fixtures">PL Fixtures</Nav>
    </HeaderLinks>
  </MyHeader>
)

export default Navigation

const MyHeader = styled.header``

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const LogoText = styled.div`
  margin-left: 12px;
  height: 100%;
  font-style: normal;
  text-align: left;
`
const LogoSpan = styled.span`
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 0.09em;
  text-transform: uppercase;
`
const LogoHeading = styled.h1`
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  margin: 0;
`
const Logo = styled.img`
  max-width: 44px;
`

const HeaderLinks = styled.div`
  overflow: auto;
  white-space: nowrap;
  padding: 0px;
  margin-top: 25px;
`

const Nav = styled.a`
  display: inline-block;
  color: white;
  text-align: center;
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  line-height: 16px;
  letter-spacing: 0em;
  margin-right: 24px;
  padding-bottom: 12px;
  transition: 0.3s;
  text-decoration: none;
  color: var(--EPL-White);

  :active {
    padding-bottom: 8px;
    border-bottom: 4px solid var(--EPL-Pink);
  }

  :hover {
    padding-bottom: 8px;
    border-bottom: 4px solid var(--EPL-Pink);
  }
`
