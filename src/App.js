import ReactWhatsapp from "react-whatsapp";

function App() {
  return (
    <div className="App">
      <h1>REACT WHATSAPP EXAMPLE</h1>
      <ReactWhatsapp
        className="whatsapp-icon"
        number="1-111-111-1111"
        message="Hello !!!"
      >
        <img
          className="whatsapp-icon"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png"
        />
      </ReactWhatsapp>
    </div>
  );
}

export default App;
