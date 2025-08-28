import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Switch } from "@mui/material";
import { removeCard, toggleRemoveStatus } from "../store/slice/card.slice";
import { useAppDispatch } from "../hooks/redux";

type CardProps = {
  item: {
    id: number;
    title: string;
    description: string;
    image: string;
    removeStatus: boolean;
  };
};

const Cards: React.FC<CardProps> = ({ item }) => {
  const dispatch = useAppDispatch();
  return (
    <Card sx={{ maxWidth: 400, backgroundColor: "white" }}>
      {" "}
      {/* wider card for row layout */}
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        {/* Image */}
        <CardMedia
          component="img"
          alt={item.title}
          sx={{ padding: 3, width: 80, height: 80, objectFit: "cover" }} // fixed width for row
          image={item.image}
        />

        {/* Text */}
        <CardContent sx={{ flex: 1 }}>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {item.description}
          </Typography>
        </CardContent>
      </Box>
      {/* Actions */}
      <CardActions sx={{ justifyContent: "space-between", px: 2, pb: 2 }}>
        <Button
          sx={{
            border: 1,
            background: "red",
            borderRadius: 10,
            px: 3,
            color: "white",
          }}
          onClick={() => dispatch(removeCard(item.id))}
          size="small"
        >
          Remove
        </Button>
        <Switch
          checked={item.removeStatus}
          onChange={() => {
            dispatch(toggleRemoveStatus(item.id));
          }}
        ></Switch>
      </CardActions>
    </Card>
  );
};

export default Cards;
