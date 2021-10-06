import './App.css';
import Headline from './components/headline/Headline';
import img1 from './assets/img/image1.jpg';
import img2 from './assets/img/image2.jpg';
import img3 from './assets/img/image3.jpg';
import img4 from './assets/img/image4.jpg';
import img5 from './assets/img/image5.jpg';
import img6 from './assets/img/image6.jpg';

function App() {
  return (
    <div className="App">
      <header className="header">header</header>
      <aside className="sidebar">aside</aside>
      <main className="main">
        <section className="headlines">
          <h2 className="block-title">Today’s Headlines</h2>
          <div className="block-content">
            <Headline style={{backgroundColor: "lightgreen"}} title="Hate speech vs free speech" thumbnail={img1} label="BBC NEWS"/>
            <Headline title="Ontario Liberal leadership" thumbnail={img2} label="BBC NEWS"/>
            <Headline title="Victim of Scarborough" thumbnail={img3} label="BBC NEWS"/>
            <Headline title="Mother who left her baby" thumbnail={img4} label="ABC NEWS"/>
            <Headline title="Mother of Stefanie Rengel" thumbnail={img5} label="CW6 NEWS"/>
            <Headline title="World   Cup: Popular items" thumbnail={img6} label="CNN NEWS"/>
          </div>
        </section>

      </main>



      
    </div>
  );
}

export default App;
