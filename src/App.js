import './App.css';

function App() {
  return (
    <div id="outer-container">
      <div className="nav">
        <ul>
          <li><a>Home</a></li>
          <li><a>About</a></li>
          <p>User</p>
        </ul>
      </div>
      <div id="sidebar">
        <p>This is sidebar</p>
      </div>
      <div id="content">
        <p>This is Content</p>
      </div>
    </div>
  );
}

export default App;