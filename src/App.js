import { BrowserRouter } from "react-router-dom";

import Layout from "layout\\Layout"; 

import Router from "routes\\Router";
import ThemeProvider from "providers/ThemeProvider";
import SnackBarProvider from "providers/SnackBarProvider";
import UserProvider from "users/providers/UserProvider";


function App() {



  return (

    <BrowserRouter>

      <UserProvider>

        <SnackBarProvider>

          <ThemeProvider>

            <Layout>
              <Router />
            </Layout>

          </ThemeProvider>

        </SnackBarProvider>

      </UserProvider>

    </BrowserRouter>

  );

}

export default App;
