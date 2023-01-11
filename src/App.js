import React from 'react';
import './App.css';

import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <header>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        {/*Mobile Metas*/}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {/*Site Metas*/}
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <meta name="author" content="" />

        {/*slider stylesheet*/}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.1.3/assets/owl.carousel.min.css"
        />
        {/*font stylesheet*/}
        <link
          href="https://fonts.googleapis.com/css?family=Baloo+Chettan|Dosis:400,600,700|Poppins:400,600,700&display=swap"
          rel="stylesheet"
        />
        {/*icon stylesheet*/}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </header>
      <Home />
    </div>
  );
}

export default App;
