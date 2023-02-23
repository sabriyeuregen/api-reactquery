import Cities from "./components/Users/Users.jsx";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const App = () => {
  const client = new QueryClient();

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Cities />
      </QueryClientProvider>
    </div>
  );
};

export default App;
