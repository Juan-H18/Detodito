import { Alert, Button, Snackbar } from "@mui/material";
import { useState } from "react";

function BotonAlerta(){

const [open, setOpen] = useState(false);

    return (
        <>
            <h1>Home</h1>

            <Button
                onClick={() => setOpen(true)}
                variant="contained"
            >
                Open
            </Button>

            <Snackbar
                open={open}
                autoHideDuration={5000}
                onClose={() => setOpen(false)}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
                <Alert
                    severity="warning"
                    variant="filled"
                >
                    Esto es una alerta
                </Alert>
            </Snackbar>
        </>
    );
}
export default BotonAlerta