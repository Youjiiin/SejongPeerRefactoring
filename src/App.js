import Header from "./components/Header/Header.js";
import Matching from "./components/Form/Matching.js";

import './App.css';


function App() {
  // const [menuIsShown, setMenuIsShown] = useState(false);

  // const shwoMenuHandler = () => {
  //   setMenuIsShown(true);
  // };

  // const hideMenuHandler = () => {
  //   setMenuIsShown(false);
  // }

  return (
    <div className="wrapper">
      <div className="inner_wrapper">
        <Header />
        <main>
          <Matching />
        </main>
      </div>
    </div>
  );
}

export default App;