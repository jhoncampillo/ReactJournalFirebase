//iconos
//import { MailOutline } from "@mui/icons-material";
//maneja los  tama;o de las fuentes
//import { Typography } from "@mui/material";
import { AddOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { JournalLayout } from "../layout/JournalLayout";
import { NotingSelectedView, NoteView } from "../view";

export const JournalPage = () => {
  return (
    // Uso el JournalLayout
    <JournalLayout>
      {/* NothingSelected */}
      {/* <NotingSelectedView /> */}
      {/* <Typography variant="h4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
        aliquid, reprehenderit facere optio est sit soluta maiores adipisci
        quaerat necessitatibus!
           </Typography> */}
      <NoteView />
      <IconButton
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: "0.9" },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};
