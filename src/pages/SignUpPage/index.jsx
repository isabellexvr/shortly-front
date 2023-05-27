import { FaUserPlus } from "react-icons/fa";
import Input from "../../components/Input/index.jsx";
import { useState } from "react";
import usePostUser from "../../services/hooks/api/usePostUser.js";
import useSignInUser from "../../services/hooks/api/useSignInUser.js";
import { Form, Title, StyledLink, Button } from "../styles.js";
import useUserInfo from "../../contexts/hooks/useUserInfo.js";
import { useNavigate } from "react-router-dom";

export default function SignUpPage() {
  const [form, setForm] = useState({});
  const { postUserLoading, postUserError, postUser } = usePostUser();
  const { signInUserLoading, signInUserError, signInUser } = useSignInUser();
  const { setUserInfo } = useUserInfo();
  const navigate = useNavigate();

  const handleForm = ({ target: { value, name } }) => {
    setForm({ ...form, [name]: value });
  };

  const sendForm = async (e) => {
    e.preventDefault();
    console.log(form);
    if (form?.password !== form?.confirmPassword) {
      alert("As senhas não estão iguais");
      return;
    }
    if (form?.password.length < 6) {
      alert("A senha precisa ter 6 caracteres ou mais.");
      return;
    }
    try {
      await postUser(form);
      alert("Cadastro realizado com sucesso! Fazendo login...");
      delete form.name;
      delete form.confirmPassword;
      const userInfo = await signInUser(form);
      setUserInfo(userInfo);
      navigate("/home");
      console.log(userInfo);
    } catch (err) {
      console.log(err);
      alert(err.response.data);
    }
  };

  return (
    <>
      <Title>
        <h1>Cadastro</h1>
        <FaUserPlus />
      </Title>
      <Form onSubmit={sendForm}>
        <Input
          type={"text"}
          id={"name"}
          htmlFor={"name"}
          name={"name"}
          handleEvent={handleForm}
        >
          Nome
        </Input>
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
        <Input
          type={"password"}
          id={"confirmPassword"}
          htmlFor={"confirmPassword"}
          name={"confirmPassword"}
          handleEvent={handleForm}
        >
          Confirme a Senha
        </Input>
        <StyledLink to={"/sign-in"}>Já está registrado? Faça login!</StyledLink>
        <Button
          type="submit"
          fontColor="white"
          disabled={postUserLoading || signInUserLoading}
        >
          Confirmar
        </Button>
      </Form>
    </>
  );
}
