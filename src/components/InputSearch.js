import { IconButton, InputBase, makeStyles, Paper } from "@material-ui/core"
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center'
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    }
}));

const InputSearch = props => {
    const classes = useStyles();
    const { nameInput } = props;
    return (
        <Paper component="form" className={classes.root}>
            <InputBase
                className={classes.input}
                placeholder="Pesquise por uma informação do processo"
                name={nameInput}
            />
            <IconButton type="submit" aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}

export default InputSearch;