import { useSession, signIn } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';

import { Wrapper, Input, Form, Button,Label,GoogleAuth,Title } from './auth.styles';

const Login: React.FC = () => {
  const { data: session } = useSession();
  const [dados, setDados] = useState({
    email: "",
    password: ""
  });
  const handleSubmit = e => {
    e.preventDefault();
    console.log(dados);
  };

  const handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    setDados(Object.assign(dados, { [name]: value }));
  };
  return (
    <div>
      <Wrapper>
        <Form onSubmit={handleSubmit}>
        <Title>Login</Title>

          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            value={dados.email}
            onChange={handleChange}
          />
           <Label>Password</Label>
          <Input
            type="password"
            name="password"
            value={dados.password}
            onChange={handleChange}
          />
          <Link href="/auth/forgot">
          <a>Forgot your password?</a>
        </Link>
          <Button>Sign in</Button>
          <Link href="/auth/register">
          <a>Create Account</a>
        </Link>
        </Form>
      </Wrapper>
      <GoogleAuth>
        Sign in with your Google Account <br />
        <button onClick={() => signIn()}>Sign in</button>
      </GoogleAuth>
    </div>
  );
};

export default Login;
