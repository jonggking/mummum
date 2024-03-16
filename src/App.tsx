import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GlobalStyle from './styles/GlobalStyles';
import Router from './routes';
import { ThemeProvider } from 'styled-components';

import theme from './styles/theme';

function App() {
  const queryClient = new QueryClient();

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <Router />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
