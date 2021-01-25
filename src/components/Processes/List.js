import { Grid, makeStyles, Paper, SwipeableDrawer, Typography } from "@material-ui/core";
import { Fragment, useState } from "react";
import DetailProcesses from "./Detail";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '5px',
        display: 'flex',
        marginTop: '20px',
        cursor: 'pointer'
    },
    noneBorderCell: {
        borderBottom: 'none'
    },
    cellHead: {
        fontWeight: 'bold',
        color: '#757575'
    },
    imgCell: {
        width: 50,
        height: 50,
        backgroundColor: '#CCC'
    },
    cursorTable: {
        cursor: 'pointer'
    }
}));

const ListProcesses = props => {
    const classes = useStyles();
    const { processo, excluir, editar } = props;
    const [detalheProcesso, setDetalheProcesso] = useState({ right: false });

    const toggleDrawer = (open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setDetalheProcesso({ ...detalheProcesso, right: open });
    };

    return (
        <Paper elevation={2} className={classes.root} onClick={toggleDrawer(true)}>
            <Fragment key={processo.id}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={2}>
                        <Typography className={classes.cellHead}>Imagem</Typography>
                        <Typography></Typography>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <Typography className={classes.cellHead}>Número</Typography>
                        <Typography>{processo.numero}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <Typography className={classes.cellHead}>Assunto</Typography>
                        <Typography>{processo.assunto}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Typography className={classes.cellHead}>Interessado</Typography>
                        {processo.interessados.map((interessado) => (
                            <>
                                <Typography>{interessado}</Typography>
                            </>
                        ))}
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Typography className={classes.cellHead}>Descrição</Typography>
                        <Typography noWrap>{processo.descricao}</Typography>
                    </Grid>
                </Grid>
                <SwipeableDrawer
                    anchor={'right'}
                    open={detalheProcesso['right']}
                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}
                >
                    <DetailProcesses processo={processo} excluir={excluir} editar={editar} toggleDrawer={toggleDrawer} />
                </SwipeableDrawer>
            </Fragment>
        </Paper>
    )
}

export default ListProcesses;