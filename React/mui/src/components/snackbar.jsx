import { Alert, Button, Snackbar } from "@mui/material";
import { useState } from "react";
import { useSnackbar } from "notistack";

function Snackbars(){

const { enqueueSnackbar } = useSnackbar();

const handleClick = () => {
    enqueueSnackbar("Product added to cart", {
        variant: "success",
        anchorOrigin: {
            vertical: "top",
            horizontal: "right",
        },
    });
};
    return(
        <>
            <Button
                variant="contained"
                onClick={handleClick}
            >
                Add cart
            </Button>
        </>
    )
}

export default Snackbars