import "./App.scss";

function App() {
  return (
    <div className="web-trello">
      <nav className="navbar app">App Bar</nav>
      <nav className="navbar board">Board Bar</nav>
      <div className="board-columns">
        <div className="column">
          <header> BrainStorm</header>
          <ul>
            <li>
              <img src="logo192.png" alt="web-alt-img"></img>
              Title: 1234
            </li>
            <li>This list has the List Limits Power-up enabled.</li>
            <li>This list has the List Limits Power-up enabled.</li>
          </ul>
          <footer>Add another card</footer>
        </div>

        <div className="column">
          <header> BrainStorm</header>
          <ul>
            <li>
              <img src="logo192.png" alt="web-alt-img"></img>
              Title: 1234
            </li>
            <li>This list has the List Limits Power-up enabled.</li>
            <li>This list has the List Limits Power-up enabled.</li>
          </ul>
          <footer>Add another card</footer>
        </div>
      </div>
    </div>
  );
}

export default App;
