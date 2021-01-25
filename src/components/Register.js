import { Backdrop, Button, Fade, Grid, Link, makeStyles, Modal, Paper, TextField } from "@material-ui/core";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import api from "../services/api";
import ButtonGeneric from "./Button";
import InputText from "./InputText";
import Texto from "./Texto";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        width: 700
    },
    input50: {
        width: '50%'
    }
}));

const Register = props => {
    const { button, open, setOpen, processo, setProcesso } = props;
    // const [processo, setProcesso] = useState({});
    const [interessado, setInteressado] = useState("");
    const classes = useStyles();
    // const [open, setOpen] = useState(false);
    const history = useHistory();

    const handleChange = ({ name, value }) => {
        setProcesso({ ...processo, [name]: value });
    };

    const handleAddInteressado = () => {
        if (interessado) {
            let list = [];
            if (processo.interessados) {
                list = processo.interessados.map((nome) => {
                    return (nome);
                });
            }
            list.push(interessado);
            setProcesso({ ...processo, "interessados": list });
            setInteressado("");
        }
    };

    const handleSave = () => {
        if (processo.descricao && processo.interessados && processo.assunto) {
            return api.post('/processo', processo)
                .then(response => {
                    history.push("/search");
                })
                .catch(erro => {
                    throw erro;
                });
        }
    }

    const handleNovoRegistro = () => {
        setProcesso({});
        setOpen(true);
    }

    return (
        <>
            {button &&
                <>
                    <ButtonGeneric text="Novo" variant="outlined" disableElevation={true} click={handleNovoRegistro} />
                </>
            }
            {!button &&
                <>
                    <Texto text="Você pode criar um novo processo&nbsp;">
                        <Link href="#" onClick={() => setOpen(true)}>
                            clicando aqui
                        </Link>
                    </Texto>
                </>
            }
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={() => setOpen(false)}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Paper component="form" className={classes.paper}>
                        <Grid container spacing={2}>
                            <Grid item>
                                <Texto component="h3" text="Cadastro de Processos" />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <InputText label="Assunto" name="assunto" change={(e) => handleChange(e.target)} required={true} fullWidth={true} value={processo.assunto} />
                            </Grid>
                            {processo.interessados &&
                                <Grid item xs={12} sm={12}>
                                    <Texto text="Interessados" />
                                    {processo.interessados.map((nome) => (
                                        <Texto text={nome} />
                                    ))}
                                </Grid>
                            }
                            <Grid item xs={12} sm={12}>
                                <TextField label="Novo Interessado" value={interessado} onChange={(e) => setInteressado(e.target.value)} required className={classes.input50} />
                                <Button variant="contained" color="default" onClick={() => handleAddInteressado()}>Adicionar</Button>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <InputText label="Descrição" multiline={true} rows="4" name="descricao" change={(e) => handleChange(e.target)} required={true} fullWidth={true} value={processo.descricao} />
                            </Grid>
                            <Grid item>
                                <ButtonGeneric text="Salvar" variant="outlined" click={handleSave} />
                            </Grid>
                        </Grid>
                    </Paper>
                </Fade>
            </Modal>
        </>
    )
}

export default Register;