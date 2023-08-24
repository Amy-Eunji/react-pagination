import { QueryClientProvider, QueryClient } from "react-query";
import Main from "./components/pages/Main";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Main />;
    </QueryClientProvider>
  );
};

export default App;
