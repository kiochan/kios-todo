import * as React from "react";
import { useCallback } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import styles from "./styles.module.css";

export interface CreateNewTodoProps {
  onAddNewTodo: (content: string) => void;
}

export default function CreateNewTodo({
  onAddNewTodo,
}: Readonly<CreateNewTodoProps>) {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const sendTodoContent = useCallback(() => {
    onAddNewTodo(inputRef.current?.value ?? "");
  }, [onAddNewTodo]);

  const resetContent = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }, [inputRef]);

  return (
    <Card className={styles.margin}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          New Todo
        </Typography>
        <TextField
          label="Your task..."
          variant="outlined"
          inputRef={inputRef}
        />
      </CardContent>
      <CardActions>
        <Button size="small" onClick={resetContent}>
          reset
        </Button>
        <Button size="small" onClick={sendTodoContent}>
          add
        </Button>
      </CardActions>
    </Card>
  );
}
