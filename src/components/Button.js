import { Button } from "@material-ui/core";

const ButtonGeneric = props => {
    const { variant, color, href, disabled, text, disableElevation, click } = props;
    return (
        <Button variant={variant} color={color} href={href} disabled={disabled} disableElevation={disableElevation} onClick={click}>{text}</Button>
    )
}

export default ButtonGeneric;