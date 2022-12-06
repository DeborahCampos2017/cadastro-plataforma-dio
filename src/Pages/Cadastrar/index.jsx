import { useNavigate, Link } from "react-router-dom";
import { MdEmail, MdLock, MdPerson } from "react-icons/md";
import Button from "../../Components/Button";
import Header from "../../Components/Header";
import Input from "../../Components/Input";
import api from "../../Services";

import { useForm } from "react-hook-form";

import {
  Container,
  Title,
  Column,
  TitleLogin,
  SubtitleLogin,
  Row,
  Wrapper,
  FazerLogin,
  TenhoConta,
  SubtitleCadastrar,
} from "./styles";

const Cadastrar = () => {
  const navigate = useNavigate();

  const handleClickLogin = () => {
    navigate("/login");
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    reValidateMode: "onChange",
    mode: "onChange",
  });

  const onSubmit = async (formData) => {
    const autoId = Math.floor(Math.random() * 1000) + 3;
    try {
      const { data } = await api.post("/users", {
        id: autoId,
        name: formData.name,
        email: formData.email,
        senha: formData.senha,
      });
      console.log(data);
      alert("Cadastro feito com sucesso!");
      handleClickLogin();
    } catch (e) {
      //TODO: HOUVE UM ERRO
    }
  };

  console.log("errors", errors);

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Comece agora grátis</TitleLogin>
            <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                placeholder="Nome completo"
                leftIcon={<MdPerson />}
                name="Nome"
                control={control}
              />
              {errors.nome && <span>Nome é obrigatório</span>}
              <Input
                placeholder="E-mail"
                leftIcon={<MdEmail />}
                name="email"
                control={control}
              />
              {errors.email && <span>E-mail é obrigatório</span>}
              <Input
                type="password"
                placeholder="Senha"
                leftIcon={<MdLock />}
                name="senha"
                control={control}
              />
              {errors.senha && <span>Senha é obrigatório</span>}
              <Button
                title="Criar minha conta"
                variant="secondary"
                type="submit"
              />
            </form>
            <Row>
              <SubtitleCadastrar>
                Ao clicar em "criar minha conta grátis", declaro que aceito as
                Políticas de Privacidade e os Termos de Uso da DIO.
              </SubtitleCadastrar>
            </Row>
            <Row>
              <TenhoConta>Já tenho conta.</TenhoConta>
              <FazerLogin>
                <Link to="/login">Fazer Login </Link>
              </FazerLogin>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export default Cadastrar;
