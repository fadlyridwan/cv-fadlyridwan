import Contact from "./component/Contact";
import Main from "./component/Main";
import Projects from "./component/Projects";
import Sidenav from "./component/Sidenav";
import Work from "./component/Work";

function App() {
  return (
    <div>
      <Sidenav />
      <Main />
      <Work />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
