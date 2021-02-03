import "./App.css";
import image from "./assets/image.jpg";
import video from "./assets/html-in-5-minutes-webpage-tutorial-code-in-5.mp4";
import "./style.css";
function App() {
  return (
    <div>
      <div style={{ maxWidth: 100 }}>
        <h1 className="title-red">Your name here</h1>
      </div>
      <img className="image1" src={image} alt="assets" />

      <img className="image2" src="imageInPublic.jpg" alt="jsx" />
      <video className="video" width="320" height="240" controls />

      <source src={video} type="video.mp4" />
    </div>
  );
}

export default App;
