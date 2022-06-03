import { Box } from "@mui/material";
import React from "react";
import Banner from "../../Components/Molecules/Banner/index";
import SearchBar from "../../Components/Molecules/SearchBar/Index";
import Footer from "../../Components/Organisms/Footer/Index";
import Header from "../../Components/Organisms/Header/Index";
import Entrepreneurship from "../../Components/Templates/Entrepreneurship/Index";

const EntrePage = () => {
  return (
    <Box>
      <Entrepreneurship
        header={<Header />}
        footer={<Footer />}
        banner={<Banner />}
        searchBar={<SearchBar />}
      />
    </Box>
  );
};

export default EntrePage;