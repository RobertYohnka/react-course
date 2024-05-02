import Youtube from "./Youtube"
import MyApp from "./main"
import AnotherElement from "./main"



function App() {
  const username = "hitesh"
  return (
    <>
      <h1>Vite react {username} app {2 + 2}</h1>
      <h1>Vite react app { } </h1>
      <Youtube />
      <MyApp />
      <AnotherElement />
    </>
  )
}

export default App
