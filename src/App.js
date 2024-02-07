import './App.css';

function App() {

  const handleSelect = () => {
    const { ipcRenderer } = window.require('electron');
    ipcRenderer.send('send-video');
  }

  return (
    <div className="App">
      <button onClick={handleSelect}>选择图片</button>
    </div>
  );
}

export default App;
