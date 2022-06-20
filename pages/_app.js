import { ThemeProvider } from 'next-themes';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider attribute="class">
    <div>
      <h1>NAVBAR</h1>
      <Component {...pageProps} />
      <h1>FOOTER</h1>
    </div>
  </ThemeProvider>

);

export default MyApp;
