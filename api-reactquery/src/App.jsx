import Users from "./components/Users/Users.jsx";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const App = () => {
  const client = new QueryClient({ defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnmount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 5*60*1000,
    },}});

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Users />
      </QueryClientProvider>
    </div>
  );
};

export default App;
