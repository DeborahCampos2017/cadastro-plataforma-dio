import { useNavigate } from "react-router-dom";
import logo from "../../Assets/logo-dio.png";

import Button from "../Button";

import {
  Container,
  Wrapper,
  BuscarInputContainer,
  Input,
  Row,
  Menu,
  MenuRight,
  UserPicture,
} from "./styles";

const Header = ({ autenticado }) => {
  const navigate = useNavigate();

  const handleCadastrar = () => {
    navigate("/cadastrar");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="Logo da dio" />
          {autenticado ? (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar..." />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {autenticado ? (
            <UserPicture src="https://avatars.githubusercontent.com/u/45184516?v=4" />
          ) : (
            <>
              <MenuRight href="/">Home</MenuRight>
              <Button onClick={handleLogin} title="Entrar" />
              <Button onClick={handleCadastrar} title="Cadastrar" />
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Header;
