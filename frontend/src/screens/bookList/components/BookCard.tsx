import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import theme from "../../../theme";
import { Book } from "../../../types/types";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { bookImageURL } from "../constants/cardData";

export default function BookCard({ id, title, author, description }: Book) {
  return (
    <Card
      sx={{
        background: "white",
        margin: 1,
        borderRadius: "5%",
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
        transition: "transform 0.3s",
        "&:hover": {
          transform: "scale(1.03)",
        },
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={bookImageURL}
        alt={title}
        sx={{ objectFit: "cover", borderRadius: "8px 8px 0 0" }}
      />
      <CardContent>
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            fontWeight: 600,
            color: theme.palette.primary.main,
            marginBottom: 1,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="subtitle2"
          gutterBottom
          color={theme.palette.text.secondary}
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {author}
        </Typography>
        <Divider sx={{ marginBottom: 1 }} />
        <Typography variant="body2" noWrap>
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-end", padding: 1 }}>
        <Link to={`/${id}`}>
          <Button size="small" color="primary" startIcon={<VisibilityIcon />}>
            View
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
