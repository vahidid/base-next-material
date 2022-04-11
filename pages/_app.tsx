import { ThemeProvider } from "@mui/material"
import type { AppProps } from "next/app"

import theme from "../styles/theme"

const MyApp = ({ Component, pageProps }: AppProps) => (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    )

export default MyApp
