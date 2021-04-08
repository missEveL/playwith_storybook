import React from "react";
import Button from "@material-ui/core/Button";
import PdsComponent from "./pds-component";

class PdsButton extends React.Component {
  render() {
    const { usethemeprovider, label, ...buttonProps } = this.props;
    return (
      <PdsComponent usethemeprovider={usethemeprovider}>
        <Button
         {...buttonProps}
        >
          {label}
        </Button>
      </PdsComponent>
    );
  }
}

PdsButton.defaultProps = {
    usethemeprovider: true,
    color: 'primary',
    size: 'medium',
    variant: 'contained',
    onClick: undefined
  };

export default PdsButton;
