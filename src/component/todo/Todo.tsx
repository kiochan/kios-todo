import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import styles from "./styles.module.css";

export interface TodoProps {
  content: string;
  onFinish?: () => void;
}

export default function Todo({ content, onFinish }: Readonly<TodoProps>) {
  return (
    <Card className={styles.margin}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={onFinish}>
          Done!
        </Button>
      </CardActions>
    </Card>
  );
}
