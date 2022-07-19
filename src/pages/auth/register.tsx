import { useSession, signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

import {
  Wrapper,
  Input,
  Form,
  Button,
  Label,
  GoogleAuth,
  Title,
} from "./auth.styles";

const Register: React.FC = () => {
  const { data: session } = useSession();
  const [dataForm, setDataForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    console.log(dataForm);
  };

  const handleChange = (e: React.FormEvent<EventTarget>) => {
    let target = e.target as HTMLInputElement;
    e.preventDefault();
    const { name, value } = target;
    setDataForm(Object.assign(dataForm, { [name]: value }));
  };
  return (
    <div>
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          <Title>Register</Title>
          <Label>First Name</Label>
          <Input
            type="text"
            name="firstName"
            value={dataForm.firstName}
            onChange={handleChange}
            placeholder="First Name"
          />
          <Label>Last Name</Label>
          <Input
            type="text"
            name="lastName"
            value={dataForm.lastName}
            onChange={handleChange}
            placeholder="Last Name"
          />
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            value={dataForm.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <Label>Password</Label>
          <Input
            type="password"
            name="password"
            value={dataForm.password}
            onChange={handleChange}
            placeholder="Password"
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

export default Register;
