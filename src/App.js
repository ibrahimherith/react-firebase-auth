import { useState } from "react";
import Auth from "./components/Auth";
import Loading from "./components/Loading";
import Intro from "./components/Intro";
import LoginPage from "./components/LoginPage";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return (
      <main className="loading-page">
        <Loading />
      </main>
    );
  }

  return (
    <main className="">
      <LoginPage />
    </main>
  );
}

export default App;
