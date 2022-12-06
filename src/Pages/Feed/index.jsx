import Card from "../../Components/Card";
import UserInfo from "../../Components/UserInfo";
import Header from "../../Components/Header";

import { Container, Column, Title, TitleHighlight } from "./styles";

const Feed = () => {
  return (
    <>
      <Header autenticado={true} />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
          <UserInfo
            nome="Pablo Henrique"
            image="https://avatars.githubusercontent.com/u/45184516?v="
            percentual={25}
          />
          <UserInfo
            nome="Pablo Henrique"
            image="https://avatars.githubusercontent.com/u/45184516?v="
            percentual={65}
          />
          <UserInfo
            nome="Pablo Henrique"
            image="https://avatars.githubusercontent.com/u/45184516?v="
            percentual={45}
          />
          <UserInfo
            nome="Pablo Henrique"
            image="https://avatars.githubusercontent.com/u/45184516?v="
            percentual={72}
          />
        </Column>
      </Container>
    </>
  );
};

export default Feed;
