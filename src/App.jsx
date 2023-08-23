import Enthusiast from "./components/Enthusiast"
import PeopleChoice from "./components/PeopleChoice"
import RangeFlavors from "./components/RangeFlavors"
import Watermelon from "./components/Watermelon"
import Header from "./components/Header"
import "./styles/sections.css"
import "./styles/header.css"
import "./styles/compOfAnimation.css"
import TransitionPagesAnimationContext from "./context/TransitionPagesAnimationContext"



function App() {  
  
  return (
    <section className="container">
      <Header></Header>
      <div className="container-page">
        <TransitionPagesAnimationContext>
          <Enthusiast></Enthusiast>
          <PeopleChoice></PeopleChoice>
          <RangeFlavors></RangeFlavors>
          <Watermelon></Watermelon>
        </TransitionPagesAnimationContext>
      </div>
    </section>
  )
}

export default App

