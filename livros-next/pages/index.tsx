import React from 'react';
import Head from 'next/head';
import Menu from '../componentes/Menu';

const Home: React.FC = () => {
  return (
    <div className="container">
      <Head>
        <title>Loja Next</title>
      </Head>
      <Menu />
      <main style={styles.main}>
        <h1 style={styles.title}>Página Inicial</h1>
      </main>
    </div>
  );
};

export default Home;

const styles: { [key: string]: React.CSSProperties } = {
  main: {
    marginTop: '50px',
    textAlign: 'center',
  },
  title: {
    fontSize: '2rem',
  },
};
