import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import AndroidIcon from "@mui/icons-material/Android";

export default function Boton2 () {
    return (
        <>
        <br />
        <Container>
            <Button
                variant="contained"
                color="info"
                startIcon={<AirplanemodeActiveIcon />}
            >
                Botón personalizado
            </Button>

            <Button
                variant="contained"
                color="secondary"
                endIcon={<AndroidIcon />}
            >
                Botón 2
            </Button>
        </Container>
        </>
    );
}
