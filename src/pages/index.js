import React from "react"
import SEO from "../components/layout/seo"
import styled from "styled-components"

function LogInPage() {
  return (
    <LoginContainer>
      <SEO title="Home" />
      <Wrapper>
        <Logo src="/images/logos/logo.png" />
        <Text>
          <Span>The Swintons</Span>
          <Heading>Predictor League</Heading>
        </Text>
      </Wrapper>
      <Headline>Sign in to make your predictions</Headline>
      <Form>
        <Title>Your name</Title>
        <Input />
        <Title>Password</Title>
        <Input />
        <br />
        <Button type="submit">Sign In</Button>
        <br />
        <GoLink href="./page-2/">
          <Icon src="/images/icons/login-18dp.svg" />
        </GoLink>
      </Form>
    </LoginContainer>
  )
}

export default LogInPage

const LoginContainer = styled.div`
  display: block;
  margin: 0 auto;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`

const Form = styled.form`
  display: block;
  padding: 0px;
  margin: 0 auto;
  max-width: 325px;
`

const Title = styled.p`
  font-size: 14px;
  line-height: 20px;
  margin: 8px 0px;
  text-align: left;
`

const Input = styled.input`
  width: 305px;
  height: 40px;
  border-radius: 4px;
  border: none;
  display: block;
  padding: 8px 10px;

  :focus {
    outline: var(--EPL-Red) auto 1px;
  }

  @media only screen and (max-width: 900px) {
    width: 93%;
  }
`

const Button = styled.button`
  width: 100%;
  height: 56px;
  font-weight: 700;
  font-size: 16px;
  background-color: var(--EPL-Green);
  border-radius: 4px;
  border: solid 2px var(--EPL-Green);
  cursor: pointer;
  padding: 0px;
  transition: 0.7s;

  :hover {
    background-color: var(--EPL-Primary);
    color: var(--EPL-Green);
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 32px;
`

const Logo = styled.img`
  width: 82px;
`

const Text = styled.div`
  margin-top: 16px;
  font-style: normal;
  text-align: center;
`

const Span = styled.span`
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.09em;
  text-transform: uppercase;
`

const Heading = styled.h1`
  font-weight: bold;
  font-size: 32px;
  line-height: 37px;
  margin: 0;
`

const Headline = styled.p`
  color: var(--EPL-Green);
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: center;
  margin: 38px 0px;
`

const GoLink = styled.a`
  margin: 8px;
`

const Icon = styled.img`
  display: block;
  margin: 0 auto;
  width: 36px;
  border: 3px solid white;
  border-radius: 100%;
  padding: 12px;
  transition: 0.3s;
`
