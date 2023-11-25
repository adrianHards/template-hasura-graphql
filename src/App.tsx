import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Emails from "./components/Emails/Emails";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Emails />
    </QueryClientProvider>
  );
};

export default App;
