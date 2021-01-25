import { Box, Grid } from "@material-ui/core";
import InputSearch from "../components/InputSearch";
import ListProcesses from "../components/Processes/List";
import Register from "../components/Register";
import Title from "../components/Texto";
import api from "../services/api";
import { useEffect, useState } from "react";

const ResultProcesses = props => {
    const [processos, setProcessos] = useState([]);
    const [processo, setProcesso] = useState({});
    const [open, setOpen] = useState(false);
    const valueSearch = props.match.params.value;
    const URL_Processos = !valueSearch ? '/processo' : `/processo?q=${valueSearch}`;

    useEffect(() => {
        getProcessos();
    }, []);

    const getProcessos = async () => {
        try {
            const response = await api.get(URL_Processos);
            setProcessos(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleExcluir = (id) => {
        api.delete(`/processo/${id}`)
            .then(() => getProcessos());
    }
    const handleEditar = (processo) => {
        setProcesso(processo);
        setOpen(true);
    }

    return (
        <Box m={5}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={1}>
                    <Title component="h6" text="Busca de Processos" />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <InputSearch nameInput="txtBuscaProcessos" />
                </Grid>
                <Grid item xs={12} sm={7}>
                    <Register button={true} open={open} setOpen={setOpen} processo={processo} setProcesso={setProcesso} />
                </Grid>
                <Grid item xs={12} sm={12}>
                    {processos.map((processo) => (
                        <>
                            <ListProcesses processo={processo} excluir={handleExcluir} editar={handleEditar} />
                        </>
                    ))}
                </Grid>
            </Grid>
        </Box>
    )
}

export default ResultProcesses;