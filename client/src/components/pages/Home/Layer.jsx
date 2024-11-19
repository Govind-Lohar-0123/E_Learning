
import styled from "@emotion/styled"
import { Box, Grid, Typography ,Link} from "@mui/material"
import {Link as routerLink} from "react-router-dom"

const BoxStyle = styled(Box)(({ theme }) => ({
    "p": {
        color: "white"
    },
    "div > div": {
        
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingBlock: "10px",
        "p": { fontWeight: "bold", fontSize: "1rem" }

    }
}))

export default function Layer({ list }) {

    return (
        <>  <BoxStyle style={{ backgroundColor: "#e74c3c" }}>
            <Grid container >
                {
                    list.map((it, idx) => <Grid key={idx} item lg={3} md={6} sm={12} xs={12} className="mx-auto"><Link to="#" className="d-flex align-item-center"component={routerLink}>{it.img}<Typography className="mx-2">{it.text}</Typography></Link></Grid>)
                }


            </Grid>
        </BoxStyle>
        </>
    )
}