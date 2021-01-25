import { Button, Grid, Icon, Link, makeStyles } from "@material-ui/core";
import { HighlightOff } from "@material-ui/icons";
import ButtonGeneric from "../Button";
import Texto from "../Texto";

const useStyles = makeStyles((theme) => ({
    cellHead: {
        fontWeight: 'bold',
        color: '#757575'
    },
    list: {
        width: 800
    }
}));

const DetailProcesses = (props) => {
    const classes = useStyles();
    const { processo, excluir, editar, toggleDrawer } = props;

    return (
        <Grid container spacing={2} className={classes.list}>
            <Grid item xs={12} sm={12}>
                <Grid container>
                    <Grid item xs={1} sm={1}></Grid>
                    <Grid item xs={10} sm={10}>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={6}>
                                <Texto text="Processo" classe={classes.cellHead} />
                                <Texto text={processo.numero} noWrap={true} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Grid container spacing={2} direction="row" justify="space-between" alignItems="flex-start">
                                    <Grid item>
                                        <Texto text="Data" classe={classes.cellHead} />
                                        <Texto text={processo.entrada} noWrap={true} />
                                    </Grid>
                                    <Grid item xs={1}>
                                        <Icon name="closeButton" onClick={(e) => toggleDrawer(false)}><HighlightOff titleAccess="Press Esc to close" /></Icon>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <Texto text="Assunto" classe={classes.cellHead} />
                                <Texto text={processo.assunto} noWrap={true} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={12}>
                <Texto text="Interessados" classe={classes.cellHead} />
                <Grid container spacing={2}>
                    {processo.interessados.map((interessado) => (
                        <Grid item xs={12} sm={6}>
                            <Texto text={interessado} />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
            <Grid item xs={12} sm={12}>
                <Texto text="Descrição" classe={classes.cellHead} />
                <Texto text={processo.descricao} />
            </Grid>
            <Grid item xs={12} sm={12}>
                <Grid container spacing={2} justify="flex-end">
                    <Grid item>
                        <ButtonGeneric text="Remover" variant="outlined" click={() => excluir(processo.id)} />
                    </Grid>
                    <Grid item>
                        <ButtonGeneric text="Editar" variant="outlined" click={() => editar(processo)} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default DetailProcesses;