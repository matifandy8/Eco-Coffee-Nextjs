import { useAuth } from "@/context/auth";
import { useSession, signIn } from "next-auth/react";
import Link from "next/link";
import Head from "next/head";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import {
  Wrapper,
  Input,
  Form,
  Button,
  Label,
  GoogleAuth,
  Title,
  ButtonGoogle,
  ErrorBox,
} from "./auth.styles";


type UserSubmitForm = {
  password: string;
  email: string;
};

const Login: React.FC = () => {
  const { data: session } = useSession(); 
  const { login } = useAuth();
  const [wrongPassword, setWrongPassword] = useState(false);
  const [loading, setLoading] = useState(false)

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Email is invalid")
    .matches(
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      "Email is invalid"
    ),
  password: Yup.string()
    .required("Password is required")
    .min(9, "Password must be at least 9 numbers"),
});

const {
  register,
  handleSubmit,
  reset,
  formState: { errors },
} = useForm<UserSubmitForm>({
  resolver: yupResolver(validationSchema),
});

const onSubmit = async (dataForm: UserSubmitForm) => {
  const jwt = await login(dataForm); 
  if (!jwt) return setWrongPassword(true);
  setWrongPassword(false);
};



  return (
    <div>
       <Head>
        <title>Eco-Coffe - Login</title>
      </Head>
      <Wrapper>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Title>Login</Title>

          <Label>Email</Label>
          <Input
            type="email"
            placeholder="Email"
            {...register("email")}
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
          />
          <ErrorBox>{errors.email?.message}</ErrorBox>
          <Label>Password</Label>
          <Input
            type="password"
            {...register("password")}
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
            placeholder="Password"
          />
           <ErrorBox>{errors.password?.message}</ErrorBox>
          <Link href="/auth/forgot">
            <a>Forgot your password?</a>
          </Link>
          <Button type="submit" >Sign in</Button>
          <Link href="/auth/register">
            <a>Create Account</a>
          </Link>
        </Form>
      </Wrapper>
      <GoogleAuth>
        <ButtonGoogle onClick={() => signIn()}>Sign in with your Google </ButtonGoogle>
      </GoogleAuth>
    </div>
  );
};

export default Login;
