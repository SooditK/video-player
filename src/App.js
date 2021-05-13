import React from "react";
import ReactPlayer from "react-player";
import "./App.css";
function App() {
  return (
    <div className="App">
      <ReactPlayer
        controls
        url="https://youtu.be/0Kl1ucZuSZ8"
        onReady={() => console.log("onReady Callback")}
        onStart={() => console.log("onStart Callback")}
        onPause={() => console.log("onPause Callback")}
        onEnded={() => console.log("onEnded Callback")}
        onError={() => console.log("onError Callback")}
      />
    </div>
  );
}
export default App;
