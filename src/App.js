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
import Channel from './components/channel/Channel';
import icon1 from './assets/img/logoIcon1.png';
import icon2 from './assets/img/logoIcon2.png';
import icon3 from './assets/img/logoIcon3.png';
import icon4 from './assets/img/logoIcon4.png';
import icon5 from './assets/img/logoIcon5.png';
import icon6 from './assets/img/logoIcon6.png';
import NavElement from './components/nav-element/NavElement';
import icon7 from './assets/img/navIcon1.png';
import icon8 from './assets/img/navIcon2.png';
import icon9 from './assets/img/navIcon3.png';

function App() {
  return (
    <div className="App">
      <div className="wrapper">

        <header className="header">
          <nav className="nav">
            <NavElement navIcon={icon7}/>
            <NavElement navIcon={icon8}/>
            <NavElement navIcon={icon9}/>
          </nav>
          <form></form>
        </header>

        <aside className="sidebar">aside</aside>
        <main className="main">

          <section className="channels">
            <h2 className="block-title">Explore Channels</h2>
            
            <div className="channel-block">
              <Channel thumbnail={icon1} title="FOX NEWS"/>
              <Channel thumbnail={icon2} title="CW6 NEWS"/>
              <Channel thumbnail={icon3} title="ABC NEWS"/>
              <Channel thumbnail={icon4} title="AL JAZEERA"/>
              <Channel thumbnail={icon5} title="BBC NEWS"/>
              <Channel thumbnail={icon6} title="CNN NEWS"/>
            </div>

          </section>

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
              <New thumbnail={img7} title="Travellers to pay more than $2K, Trudeau says" label="FOX NEWS"/>
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
