/* eslint-disable @typescript-eslint/no-explicit-any */
import Header from "../component/Header";
import Heading from "../component/Heading";
import BasicTabs from "../component/Tab";
import Cards from "../component/Cards";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";


function Home() {
    const { cards, filter } = useSelector((state: any) => state.cards);

    const filteredCards = cards.filter((card: any) => {
    if (filter === "active") return card.removeStatus === true;
    if (filter === "inactive") return card.removeStatus === false;
    return true; // "All"
    });
    
   
  return (
    <div style={{ padding: 16 }}>
      <Header />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 2,
        }}
      >
        <Heading />
        <BasicTabs />
      </Box>
      <div>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)", // 3 columns
            gap: 2, // spacing between cards
            mt: 3,
          }}
        >
          {filteredCards.map((item : any) => (
            <Cards key={item.id} item={item} />
          ))}
        </Box>
      </div>
    </div>
  );
}

export default Home;
