import React from 'react';
import './App.css';
import SignUp from './components/SignUp';
import SignInSide from "./components/SignInSide";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import CssBaseline from "@material-ui/core/CssBaseline";
import NewSignIn from "./components/NewSignIn";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {MuiThemeProvider} from "@material-ui/core";

const myTheme = createMuiTheme({
    overrides: {
        MuiCssBaseline: {
            '@global': {
                body: {
                    backgroundColor: '#353755',
                },
            },
        },
    },
    palette: {
        primary: {
            main: '#ffffff',
            light: '#353755'
        },
        secondary: {
            main: '#5bd3c7',
            light: '#e0e4ee',
        }

    }
});

function App() {
    return (
        <MuiThemeProvider theme={myTheme}>
            <CssBaseline/>
            <SignInSide/>
            <SignUp/>
        </MuiThemeProvider>
    );
}

export default App;
