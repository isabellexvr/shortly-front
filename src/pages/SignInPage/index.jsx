import Input from "../../components/Input";
import { FaUsers } from "react-icons/fa";
import { Form, Title, StyledLink, Button } from "../styles.js";

export default function SignInPage() {
  return (
    <>
      <Title>
        <h1>Login</h1>
        <FaUsers />
      </Title>
      <Form>
        <Input
          type={"email"}
          id={"email"}
          htmlFor={"email"}
          name={"email"}
          handleEvent={"handleForm"}
        >
          E-mail
        </Input>
        <Input
          type={"password"}
          id={"password"}
          htmlFor={"password"}
          name={"password"}
          handleEvent={"handleForm"}
        >
          Senha
        </Input>
        <StyledLink to={"/sign-up"}>
          Ainda não tem uma conta? Cadastre-se!
        </StyledLink>
        <Button
          type="submit"
          fontColor="white"
        >
          Confirmar
        </Button>
      </Form>
    </>
  );
}
