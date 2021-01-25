import { Typography } from "@material-ui/core";

const Texto = props => {
    const { variant, component, align, color, text, classe, noWrap, children } = props;
    return (
        <Typography
            variant={variant}
            component={component}
            align={align}
            color={color}
            gutterBottom
            className={classe}
            noWrap={noWrap}
        >
            {text}
            {children}
        </Typography>
    )
}

export default Texto;