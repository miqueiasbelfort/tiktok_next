import {ThemeProvider} from "styled-components"

import GlobalStyle from "../styles/Global"
import theme from "../styles/Theme"

export default function App({Component, pageProps}) {
    return (
        <>
            <GlobalStyle/>
            <ThemeProvider theme={theme}>
                <Component {...pageProps}/>
            </ThemeProvider>
        </>
    )
}