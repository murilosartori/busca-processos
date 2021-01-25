import { Box, Grid } from "@material-ui/core"
import Texto from "../components/Texto";
import InputSearch from "../components/InputSearch";
import Register from "../components/Register";
import { useState } from "react";

const Search = () => {
    const [processo, setProcesso] = useState({});
    const [open, setOpen] = useState(false);

    return (
        <Box m={10}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                    <Texto variant="h4" component="h1" align="center" color="primary" text="Busca de Processos" />
                </Grid>
                <Grid item xs={1} sm={3}></Grid>
                <Grid item xs={10} sm={6} align="center">
                    <InputSearch nameInput="txtBuscaProcessos" />
                </Grid>
                <Grid item xs={1} sm={3}></Grid>
                <Grid item xs={12} sm={12} mt={20} align="center">
                    <Register button={false} open={open} setOpen={setOpen} processo={processo} setProcesso={setProcesso} />
                </Grid>
            </Grid>
        </Box>
    )
}

export default Search