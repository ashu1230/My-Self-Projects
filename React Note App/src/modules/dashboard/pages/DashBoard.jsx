import { Container } from "@mui/material"
import { Header } from "../../../shared/components/Header"
import { NavBar } from "../../../shared/components/NavBar"
import { Main } from "../components/Main"
import Grid from '@mui/material/Grid';

export const DashBoard = ()=>{
    return (<Container fixed >
        <Header/>
        <Grid container spacing={2}>
        <Grid className="navbar" item xs={3}>
        <NavBar/>
        </Grid>
        <Grid item xs={8}>
        <Main/>
        </Grid>
        </Grid>
        </Container>
    )
}