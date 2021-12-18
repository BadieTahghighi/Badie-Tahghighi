import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Route } from 'react-router-dom';

function Layout({ children }) {
  const styles = {
    minHeight: '100vh',
  };
  return (
    <main style={styles}>
      <Header />
      <div className="mx-24">{children}</div>
      <Footer />
    </main>
  );
}

export default function Main({
  component: Component,
  path,
  exact,
  ...etc
}) {
  return (
    <Route
      path={path}
      exact={exact}
      {...etc}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}
