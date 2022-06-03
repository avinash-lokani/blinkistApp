import { Box } from '@mui/material';
import Footer from '../../Components/Organisms/Footer/Index';
import Header from '../../Components/Organisms/Header/Index';
import MyLibrary from '../../Components/Templates/MyLibrary/Index';

const MyHomePage = () => {
    return (
        <Box>
            <MyLibrary
            header = {<Header/>}
            footer = {<Footer/>}
            />
        </Box>
    )
}

export default MyHomePage;