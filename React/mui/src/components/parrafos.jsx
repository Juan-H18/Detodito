import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

function Parrafos() {
    return (
        <>
        <br />
            <Container>
                <Grid
                    container
                    spacing={2}
                >
                <Grid
                    item
                    md={4}
                >
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
                        aspernatur perferendis ipsum veniam, nostrum eos quaerat sequi sed,
                        quisquam minima provident, ad magnam saepe impedit voluptatem
                        ratione quas molestias! Nisi.
                    </p>
                </Grid>
                <Grid
                    item
                    md={4}
                >
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
                        aspernatur perferendis ipsum veniam, nostrum eos quaerat sequi sed,
                        quisquam minima provident, ad magnam saepe impedit voluptatem
                        ratione quas molestias! Nisi.
                    </p>
                </Grid>
                <Grid
                    item
                    md={4}
                >
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
                        aspernatur perferendis ipsum veniam, nostrum eos quaerat sequi sed,
                        quisquam minima provident, ad magnam saepe impedit voluptatem
                        ratione quas molestias! Nisi.
                    </p>
                </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default Parrafos;