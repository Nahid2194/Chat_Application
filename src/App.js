import './App.css';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;
  return (
    <ChatEngine

      height="100vh"
      projectID="121b74e9-cf22-468e-a932-2d4e2491056b"
      userName="Nahidjc"
      userSecret="Nahid2194"

      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}

    />
  )

}

export default App;
