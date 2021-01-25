import ResultProcesses from "../pages/Result";
import Search from "../pages/Search";

const rotas = [
    {
        path: "/",
        component: Search,
        exact: true
    },
    {
        path: "/search",
        component: Search
    },
    {
        path: "/result/:value?",
        component: ResultProcesses
    }
]

export default rotas;
