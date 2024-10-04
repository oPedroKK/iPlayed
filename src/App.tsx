import Container from "./components/Container"
import Header from "./components/Header"
import GroupTitle from "./components/GroupTitle"
import GameListDisplay from "./components/GameListDisplay"
import GameSection from "./components/GameSection"
import SelectionBar from "./components/SelectionBar"
import Footer from "./components/Footer"
import GenreBar from "./components/GenreBar"

function App() {
  return (
    <>
      <Header/>
      <SelectionBar />
      <Container>

        <GameSection idTag="Todos">
          <GroupTitle groupTitle={'Explore toda a biblioteca!'} groupImage={'./backgrounds/genericBg.jpg'}/>
          <GameListDisplay/>
        </GameSection>

        <GameSection idTag="Play">
          <GroupTitle groupTitle={'Coleção Playstation™'} groupImage={'./backgrounds/PlayBg.jpg'}/>
          <GameListDisplay enableCategory={true} plataform={true} category={"PS4"}/>
        </GameSection>

        <GameSection idTag="Pc">
          <GroupTitle groupTitle={'Coleção PC Steam™'} groupImage={'./backgrounds/SteamBg.jpg'}/>
          <GameListDisplay enableCategory={true} plataform={true} category={"PC"}/>
        </GameSection>

        <GameSection idTag="Xbox">
          <GroupTitle groupTitle={'Coleção XBOX™'} groupImage={'./backgrounds/xboxBg.jpg'}/>
          <GameListDisplay enableCategory={true} plataform={true} category={"Xbox"}/>
        </GameSection>

        <GenreBar />
        
        <GameSection idTag="Rpg">
          <GroupTitle groupTitle={'Coleção de RPGs'} groupImage={'./backgrounds/imgBg01.jpeg'}/>
          <GameListDisplay enableCategory={true} category={"RPG"}/>
        </GameSection>

        <GameSection idTag="Adv">
          <GroupTitle groupTitle={'Coleção de Ação-Aventura'} groupImage={'./backgrounds/imgBg01.jpeg'}/>
          <GameListDisplay enableCategory={true} category={"Adv"}/>
        </GameSection>

        <GameSection idTag="Zombie">
          <GroupTitle groupTitle={'Coleção Pós-Apocaliptca '} groupImage={'./backgrounds/imgBg01.jpeg'}/>
          <GameListDisplay enableCategory={true} category={"Zombie"}/>
        </GameSection>

      </Container>
      <Footer />
    </>
  )
}

export default App
