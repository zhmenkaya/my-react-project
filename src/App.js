import './App.css';
import Headline from './components/headline/Headline';
import SectionTitle from './components/section-title/SectionTitle';
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
import icon10 from './assets/img/iconFill.png';
import avatar from './assets/img/avatar.png';
import logo from './assets/img/dailyLogo.png';
import ProfileItem from './components/profile-item/ProfileItem';
import profileIcon from './assets/img/profileIcon.png';
import profileIcon2 from './assets/img/profileIcon2.png';
import profileIcon3 from './assets/img/profileIcon3.png';
import profileIcon4 from './assets/img/profileIcon4.png';
import profileIcon5 from './assets/img/profileIcon5.png';
import profileIcon6 from './assets/img/profileIcon6.png';
import profileIcon7 from './assets/img/profileIcon7.png';



function App() {
  return (
    <div className="App">

<header className="header">
          <nav className="nav">
            <NavElement navIcon={icon7} navName="San Francisco, California"/>
            <NavElement navIcon={icon8} navName="Analysis"/>
            <NavElement navIcon={icon9} navName="Monthly"/>
          </nav>
          <div className="right-block">
            <form className="form">
              <div className="searchWrap">
                <input className="formSearch" type="search" name="q" placeholder="Search for anything…"/>
              </div>
              
            </form>
            <img className="iconFill" src={icon10} alt=""/>
            <img className="photoAvatar" src={avatar} alt=""/>
          </div>
        </header>

        <aside className="sidebar">
          <div className="logoWrap">
            <img className="dailyLogo" src={logo} alt=""/>
          </div>
         
          <div className="profileBlock">
            <ul className="profileList">
              <li className="profilePoint">
                <a className="profileItemLink">
                  <ProfileItem itemIcon={profileIcon} itemName="Home"/>
                </a>
              </li>
              <li className="profilePoint">
                <a className="profileItemLink">
                  <ProfileItem itemIcon={profileIcon2} itemName="Explore"/>
                </a>
              </li>
              <li className="profilePoint">
                <a className="profileItemLink">
                  <ProfileItem itemIcon={profileIcon3} itemName="Saved"/>
                </a>
              </li>
              <li className="profilePoint">
                <a className="profileItemLink">
                  <ProfileItem itemIcon={profileIcon4} itemName="Subscriptions"/>
                </a>
              </li>
              <li className="profilePoint">
                <a className="profileItemLink">
                  <ProfileItem itemIcon={profileIcon5} itemName="Messages"/>
                </a>
              </li>
              <li className="profilePoint">
                <a className="profileItemLink">
                  <ProfileItem itemIcon={profileIcon6} itemName="Settings"/>
                </a>
              </li>
              <li className="profilePoint">
                <a className="profileItemLink">
                  <ProfileItem itemIcon={profileIcon7} itemName="Logout"/>
                </a>
              </li>
            </ul>
            
          </div>
        </aside>

        <main className="main">

          <section className="channels">

            <SectionTitle title="Explore Channels"/>
            
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
          <SectionTitle title="Today’s Headlines"/>
            
            <div className="block-content">
              <Headline style={{backgroundColor: "lightgreen"}} title="Hate speech vs free speech" thumbnail={img1} label="BBC NEWS"/>
              <Headline title="Ontario Liberal leadership" thumbnail={img2} label="BBC NEWS"/>
              <Headline title="Victim of Scarborough" thumbnail={img3} label="BBC NEWS"/>
              <Headline title="Mother who left her baby" thumbnail={img4} label="ABC NEWS"/>
              <Headline title="Mother of Stefanie Rengel" thumbnail={img5} label="CW6 NEWS"/>
              <Headline title="World   Cup: Popular items" thumbnail={img6} label="CNN NEWS"/>
            </div>
          </section>

          <section className="newsBlock">

          <SectionTitle title="Featured News"/>

            <div className="block-content">
              <New thumbnail={img7} title="Travellers to pay more than $2K, Trudeau says" label="FOX NEWS"/>
              <New thumbnail={img8} title="Myanmar’s military seizes control of country ov  er..." label="CNN NEWS"/>
              <New thumbnail={img9} title="Pressure builds for Biden to cancel other pipeline..." label="BBC NEWS"/>
            </div>
          </section>

      </main>

      
    </div>
  );
}

export default App;
