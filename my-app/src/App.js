import { ChatEngine, ChatFeed } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./coponents/ChatFeed";

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="85968f08-6e49-4f9d-8414-e9de39f34fe4"
      userName="kamil123"
      userSecret="123123"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
