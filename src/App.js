import './App.css';
import Open from './components/Open';
import { Timeline, Tween } from 'react-gsap';
import ResponsivCall from './ResponsivCall'

const App = () => {
  
  return (
    <div className="app">

      <ResponsivCall/>      

      <Timeline
        target={
          <div className="opening">
            <Open due={.6}/>
            <Open due={.5}/>
            <Open due={.4}/>
            <Open due={.3}/>
            <Open due={.3}/>
          </div>
        }
      >
        <Tween to={{ display:'none' }} duration={.1} />
      </Timeline>
      
    </div>
  );
}

export default App;
