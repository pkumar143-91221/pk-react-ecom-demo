import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/includes/Header';
import Footer from './components/includes/Footer';
import AppLoader from './components/includes/AppLoader';
import { AuthProvider } from './components/hooks/AuthContext';

class Layout extends React.Component {

  render() {
    return (
      <>
        <AuthProvider>
          <Header />
          <div id="all">
            <div id="content">
              <AppLoader />
              <Outlet />
            </div>
          </div>
          <Footer />
        </AuthProvider>

      </>
    );
  }
}

export default Layout;