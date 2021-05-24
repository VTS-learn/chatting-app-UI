import './App.css';
import ChatList from './components/chatList/ChatList';
import ChattingArea from './components/chattingArea/ChattingArea';
import ChattingInfo from './components/chattingInfo/ChattingInfo';
import Open from './components/Open';
import { Timeline, Tween } from 'react-gsap';

const App = () => {
  return (
    <div className="app">
      <ChatList/>
      <ChattingArea/>
      <ChattingInfo/>

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
