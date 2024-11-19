import Navbar from "./Navbar";
import { styled } from "@mui/material"
import { AppBar } from "@mui/material";
const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: "red",
    height: "80px",
    width: "100%",
    
}))


export default function Header() {
    return (
        <>
            <StyledAppBar>
                <Navbar />
            </StyledAppBar>
        </>
    )
}