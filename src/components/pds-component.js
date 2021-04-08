import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../theme";

class PdsComponent extends React.Component {
  render() {
    const { usethemeprovider, children } = this.props;

    return usethemeprovider ? (
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {children}
      </ThemeProvider>
    ) : (
      <>{children}</>
    );
  }
}

PdsComponent.defaultProps = {
  usethemeprovider: true,
};

export default PdsComponent;
