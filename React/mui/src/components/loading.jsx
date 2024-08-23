import { useState } from "react";
import { useSnackbar } from "notistack";
import LoadingButton from "@mui/lab/LoadingButton";

function Loading(){
    const { enqueueSnackbar } = useSnackbar();
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            enqueueSnackbar("Product not add to cart", {
                variant: "error",
                anchorOrigin: {
                    vertical: "top",
                    horizontal: "right",
                },
            });
        }, 2000);
    };

    return(
        <LoadingButton
            variant="contained"
            onClick={handleClick}
            loading={loading}
        >
            Add cart
        </LoadingButton>
    )
}

export default Loading