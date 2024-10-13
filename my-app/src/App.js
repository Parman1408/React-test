import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
        <div
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: '#181818',
        color: '#fff',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div
        style={{
          position: 'relative',
          paddingBottom: '56.25%',
          height: '0',
          overflow: 'hidden',
          maxWidth: '100%',
          backgroundColor: '#000',
        }}
      >
        <img
          alt="Video thumbnail showing a small bird standing next to a large metallic object in a forest setting."
          height="675"
          src="https://storage.googleapis.com/a1aa/image/pp2Ib8ojPeUFHCXoemJTGApr5Hzeo6mZURZ0EnF1hWNs1TMnA.jpg"
          width="1200"
          style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}
        />
      </div>
      <div style={{ fontSize: '18px', margin: '20px 0 10px' }}>
        How to Run Node.js iows (2024)
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <img
          alt="Channel icon"
          height="40"
          width="40"
          src="https://storage.googleapis.com/a1aa/image/ERUxeewVdJoHTktsuyLB3be6MF9US0BbYwOZ9xJ5pxDq1TMnA.jpg"
          style={{ borderRadius: '50%', marginRight: '10px' }}
        />
        <div style={{ fontSize: '14px', color: '#aaa' }}>ProgrammingKnowledge</div>
        <button
          style={{
            backgroundColor: '#cc0000',
            color: '#fff',
            border: 'none',
            padding: '10px 20px',
            fontSize: '14px',
            cursor: 'pointer',
            marginLeft: 'auto',
          }}
        >
          Subscribe
        </button>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <span style={{ marginRight: '20px', fontSize: '14px', color: '#aaa' }}>10K views</span>
        <span style={{ marginRight: '20px', fontSize: '14px', color: '#aaa' }}>1 month ago</span>
        <span style={{ fontSize: '14px', color: '#aaa' }}>#npm #VSCode #Windows11</span>
      </div>
      <div style={{ fontSize: '14px', color: '#aaa' }}>
        How to Run Node.js in Visual Studio Code | SetUp Node.js in VSCode on Windows 11
      </div>
    </div>
    </div>
  );
}

export default App;
