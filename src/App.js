import './App.css';
import Headline from './components/headline/Headline';
import img1 from './assets/img/image1.jpg';
import img2 from './assets/img/image2.jpg';
import img3 from './assets/img/image3.jpg';
import img4 from './assets/img/image4.jpg';
import img5 from './assets/img/image5.jpg';
import img6 from './assets/img/image6.jpg';
import New from './components/new/New';
import img7 from './assets/img/image7.jpg';
import img8 from './assets/img/image8.png';
import img9 from './assets/img/image9.png';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
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
          <section>
          <h2 className="block-title">Featured News</h2>
          <div className="block-content">
          <New titleStyle={{backgroundColor:"red"}} thumbnail={img7} title="Travellers to pay more than $2K, Trudeau says" label="FOX NEWS"/>
          <New thumbnail={img8} title="Myanmar’s military seizes control of country ov  er..." label="CNN NEWS"/>
          <New thumbnail={img9} title="Pressure builds for Biden to cancel other pipeline..." label="BBC NEWS"/>
          </div>
          
          </section>

      </main>



      
      </div>
      
    </div>
  );
}

export default App;
