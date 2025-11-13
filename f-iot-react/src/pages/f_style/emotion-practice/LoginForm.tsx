import styled from "@emotion/styled";
import React, { useState } from "react";
import { Input } from "./input";
import { Button } from "./Button";
import { theme } from "./theme";

function LoginForm() {
  const [mode, setMode] = useState<"login" | "signup">("login");

  return (
    <Container>
      <Card>
        {mode === "login" ? (
          <>
            <Title>로그인</Title>
            <SubTitle>모임 생성 시스템에 접속하세요.</SubTitle>
            <Form>
              <Input />
              <Input />
              <Button>로그인</Button>
            </Form>
            <Footer>No Account?
              <LinkText onClick={() => setMode('signup')}>Sign Up</LinkText>
            </Footer>
          </>
        ) : (
          <>
            <title>회원가입</title>
            <SubTitle>모임 생성 시스템을 시작하세요</SubTitle>
            <Form>
              <Input type="text" placeholder="이름" />
              <Input type="password" placeholder="비밀번호" />
              <Input type="test" placeholder="이름" />
              <Input type="email" placeholder="이름" />
              <Button>회원가입</Button>
            </Form>
            <Footer>Already have an account? 
              <LinkText onClick={() => setMode('login')}>Sign In</LinkText>
            </Footer>
          </>
        )}
      </Card>
    </Container>
  );
}

export default LoginForm;

export const SignUpForm = () => {
  return (
    <Container>
      <Card></Card>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(160deg, #f6d365 0%, #fda085 100%);
  padding: clamp(1rem, 5vw, 3rem);
`;

const Card = styled.div`
  display: grid;
  gap: 1.5rem;
  background-color: ${theme.colors.background};
  padding: clamp(2rem, 5vw, 4rem);
  width: min-content(100% 420px);
  border: 1px solid #ddd;
  border-radius: var(--radius-md);

  /* align-items + justify-items */
  place-items: center;
`;

const Title = styled.h1`
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  color: ${theme.colors.text};
`;

const SubTitle = styled.p`
  font-size: clamp(0.9rem, 2vw, 1rem);
  color: #666;
  text-align: center;
`;

const Form = styled.form`
  display: grid;
  gap: 1rem;
  width: 100%;
`;

const Footer = styled.p`
  font-size: 0.9rem;
  color: #888;
  text-align: center;
`;

const LinkText = styled.span`
  color: ${theme.colors.primary};
  font-weight: 600;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;