import { useState } from "react";
import "./App.css";

import CreatePost from "./components/CreatePost";
import Header from "./components/Header";
import PostList from "./components/PostList";
import SideBar from "./components/SideBar";
import PostContextValue from "./context/PostContext";
import Footer from "./components/Footer";

function App() {
  const [selectedTap, setSelectedTab] = useState("Home");
  return (
    <PostContextValue>
      <div className="flex items-start">
        <SideBar selectedTap={selectedTap} setSelectedTab={setSelectedTab} />
        <div className="w-full flex flex-col items-center">
          <Header />
          {selectedTap === "Home" ? <PostList /> : <CreatePost></CreatePost>}
        </div>
      </div>
      <Footer />
    </PostContextValue>
  );
}

export default App;
