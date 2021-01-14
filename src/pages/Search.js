import { Box, Grid } from "@material-ui/core"
import Title from "../components/Title"

const Search = () => {
    return (
        // <div>Teste</div>
        <Box m={10}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                    <Title variant="h4" component="h1" align="center" color="primary" text="Busca de Processos" />
                </Grid>
            </Grid>
            {/* <Typography variant="h2" component="h1" align="center" gutterBottom color="textSecondary">
                Gestão de Alunos
            </Typography>

            <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                    <Cadastro aluno={aluno} setAluno={setAluno} alunos={alunos} setAlunos={setAlunos}></Cadastro>
                </Grid>

                <Grid item xs={12} sm={12}>
                    <Listagem aluno={aluno} setAluno={setAluno} alunos={alunos} setAlunos={setAlunos}></Listagem>
                </Grid>
            </Grid> */}
        </Box>
    )
}

export default Search