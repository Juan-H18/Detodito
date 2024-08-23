import {Box,Typography} from "@mui/material"


function Texto() {

    return(
        <>
        <br />
            <Box
                sx={{
                    border: 4,
                    borderColor: 'green',
                    p: 2,
                    bgcolor: "#000000",
                    color: "white",
                    }}
            >
                <Typography align="center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum saepe quas
                    laudantium, enim praesentium maiores beatae impedit vero dolorum
                    dignissimos, assumenda ipsam? Similique, mollitia commodi ducimus aliquid
                    voluptate molestias laborum!
                </Typography>
            </Box>
        </>
    )
}

export default Texto