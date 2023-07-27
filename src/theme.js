/*
import createMuiTheme from "@material-ui/core/styles/createMuiTheme"

const appTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#b9151b"
    }
  }
})
export default appTheme
*/


import {
  createTheme,
  responsiveFontSizes,
} from '@mui/material/styles';

const appTheme = responsiveFontSizes(createTheme({}));
export default appTheme

/*
import {
  ThemeProvider,
  StyledEngineProvider,
  CssBaseline,
} from '@mui/material';
import {
  createTheme,
  responsiveFontSizes,
} from '@mui/material/styles';

/*
export default withJssAndCustomTheme = Component => props => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <Component
          {...props}
        />
      </ThemeProvider>
    </StyledEngineProvider>
  );
};
*/