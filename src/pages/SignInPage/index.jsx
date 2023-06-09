import Input from "../../components/Input";
import { FaUserCheck } from "react-icons/fa";
import { Form, Title, StyledLink, Button } from "../styles.js";
import { useEffect, useState } from "react";
import useSignInUser from "../../services/hooks/api/users/useSignInUser";
import useUserInfo from "../../contexts/hooks/useUserInfo";
import { useNavigate } from "react-router-dom";

export default function SignInPage() {
  const [form, setForm] = useState({});
  const { signInUserLoading, signInUserError, signInUser } = useSignInUser();
  const { setUserInfo } = useUserInfo();

  const navigate = useNavigate();

  const handleForm = ({ target: { value, name } }) => {
    setForm({ ...form, [name]: value });
  };

  const sendForm = async (e) => {
    e.preventDefault();
    try {
      const userInfo = await signInUser(form);
      setUserInfo(userInfo);
      navigate("/user/home");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Title>
        <h1>Login</h1>
        <FaUserCheck />
      </Title>
      <Form onSubmit={sendForm}>
        <Input
          type={"email"}
          id={"email"}
          htmlFor={"email"}
          name={"email"}
          handleEvent={handleForm}
        >
          E-mail
        </Input>
        <Input
          type={"password"}
          id={"password"}
          htmlFor={"password"}
          name={"password"}
          handleEvent={handleForm}
        >
          Senha
        </Input>
        <StyledLink to={"/sign-up"}>
          Ainda não tem uma conta? Cadastre-se!
        </StyledLink>
        <Button type="submit" fontColor="white">
          Confirmar
        </Button>
      </Form>
    </>
  );
}
