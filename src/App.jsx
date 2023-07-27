import React from "react"
import { Provider } from "react-redux"
import { Route, Switch } from "react-router"
import { BrowserRouter } from "react-router-dom"
import { PersistGate } from "redux-persist/integration/react"
import ThemeProvider from "@mui/styles/ThemeProvider"
import { StyledEngineProvider } from '@mui/material/styles';

import appTheme from "./theme"
import { persistor, store } from "./redux/Store"
import { ROUTE_HOMEPAGE } from "./constants"
import Home from "./pages/Home"

const App = () => {
  return <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={appTheme}>
            <BrowserRouter>
              <Switch>
                <Route exact path={ROUTE_HOMEPAGE} component={Home} />
              </Switch>
            </BrowserRouter>
          </ThemeProvider>
        </StyledEngineProvider>
      </PersistGate>
    </Provider>
  </>;
}

export default App
