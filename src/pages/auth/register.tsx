import { useAuth } from "@/context/auth";
import { useSession, signIn } from "next-auth/react";
import Link from "next/link";
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
import Head from "next/head";


type UserSubmitForm = {
  username: string;
  password: string;
  email: string;
};

const Register: React.FC = () => {
  const { data: session } = useSession();
  const { isLoggedIn, signUp, logout } = useAuth();
  const [wrongPassword, setWrongPassword] = useState(false);



const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Email is invalid")
    .matches(
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      "Email is invalid"
    ),
  username: Yup.string()
    .required("username is required")
    .min(6, "username must be at least 6 characters")
    .max(40, "username must not exceed 40 characters"),
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
  const jwt = await signUp(dataForm); // jwt sea null o sea distinto de null
  console.log(jwt);
  console.log(dataForm)
  if (!jwt) return setWrongPassword(true);
  setWrongPassword(false);
  // navigate('/');  
};

 
  return (
    <div>
       <Head>
        <title>Eco-Coffe - Register</title>
      </Head>
      <Wrapper>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Title>Register</Title>
          <Label>First Name</Label>
          <Input
            type="text"
            {...register("username")}
            placeholder="First Name"
          />
          <Label>Last Name</Label>
          <Input
            type="text"
            name="lastName"
            placeholder="Last Name"
          />
          <Label>Email</Label>
          <Input
            type="email"
            {...register("email")}
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            placeholder="Email"
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
          <Button type="submit" >Register</Button>
          <Link href="/auth/login">
            <a>Already have a account</a>
          </Link>
        </Form>
      </Wrapper>
      <GoogleAuth>
      <ButtonGoogle onClick={() => signIn()}>Sign in with your Google </ButtonGoogle>
      </GoogleAuth>
    </div>
  );
};

export default Register;
