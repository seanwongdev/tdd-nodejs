import express from "express";
const app = express();

import { fileMover } from "./fileMover";
import { thumbnailMover } from "./thumbnailMover";

app.post("./thumbnails/:id/votes", async (req, res) => {
  await thumbnailMover({
    fileMover,
    imageId: "testing.png",
    isGood: true,
  });
  res.send("success");
});

app.listen(8080);
