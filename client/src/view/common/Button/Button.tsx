import React, { Component, ReactNode, MouseEvent } from "react";
import Button from "@mui/material/Button";

interface CommonButtonProps {
    onClick?: (event: { event: MouseEvent<HTMLButtonElement> }) => void;
    children?: ReactNode;
    variant?: "text" | "outlined" | "contained";
    className?: string;
    label?: string;
    size?: "small" | "medium" | "large";
    disabled?: boolean;
    color?: "inherit" | "primary" | "secondary" | "default" | "success" | "error" | "info" | "warning";
    type?: "button" | "submit" | "reset";
    endIcon?: ReactNode;
    startIcon?: ReactNode;
    style?: React.CSSProperties;
}

class CommonButton extends Component<CommonButtonProps> {
    static defaultProps: Partial<CommonButtonProps> = {
        className: "",
        color: "primary",
        label: "",
        size: "medium",
        variant: "contained",
        disabled: false,
        type: "button",
    };

    handlerButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
        const { onClick, disabled } = this.props;
        if (disabled) return;
        onClick && onClick({ event });
    };

    renderChildren = (label?: string, children?: ReactNode) => {
        if (label) return label;
        if (children) return children;
    };

    render() {
        const {
            children,
            label,
            className,
            color,
            size,
            type,
            variant,
            disabled,
            startIcon,
            endIcon,
            style,
        } = this.props;

        return (
            <Button
                className={className}
                size={size}
                endIcon={endIcon}
                color={color as "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning"}
                variant={variant}
                disabled={disabled}
                type={type}
                onClick={this.handlerButtonClick}
                style={style}
                startIcon={startIcon}

            >
                {this.renderChildren(label, children)}
            </Button>
        );
    }
}

export default CommonButton;
