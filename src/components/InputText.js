import { TextField } from "@material-ui/core"

const InputText = props => {
    const { name, label, multiline, rows, defaultValue, value, change, required, fullWidth } = props;
    return (
        <>
            <TextField name={name} label={label} multiline={multiline} rows={rows} defaultValue={defaultValue} value={value} onChange={change} required={required} fullWidth={fullWidth} />
        </>
    )
}

export default InputText;