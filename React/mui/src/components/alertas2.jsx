import { Alert ,Box, AlertTitle } from "@mui/material";

function Alertas2(){

    return(
        <>
            <Box sx={{ display: "grid", gap: "1rem" }}>
                <Alert severity="error"><AlertTitle>Error</AlertTitle>Esta es una alerta</Alert>
                <Alert severity="warning"><AlertTitle>Warning</AlertTitle>This is a warning alert — check it out!</Alert>
                <Alert severity="info"><AlertTitle>Info</AlertTitle>This is an info alert — check it out!</Alert>
                <Alert severity="success"><AlertTitle>Success</AlertTitle>This is a success alert — check it out!</Alert>
            </Box>
        </>
    )
}

export default Alertas2