import { Typography } from "@material-ui/core";

const Title = props => {
    const { variant, component, align, color, text } = props;
    return (
        <Typography
            variant={variant}
            component={component}
            align={align}
            color={color}
            gutterBottom
        >
            {text}
        </Typography>
    )
}

export default Title;