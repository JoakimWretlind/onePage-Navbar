import { GlobalStyle } from './globalStyle';
import { Home, About, Work, Contact, Navbar } from './components/index';

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Home />
      <About />
      <Work />
      <Contact />
    </>
  );
}

export default App;
