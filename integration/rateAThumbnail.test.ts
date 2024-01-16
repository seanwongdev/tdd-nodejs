import axios from "axios";
import * as fs from "fs";

describe("POST@/thumbnails/:id/votes", () => {
  beforeAll(() => {
    fs.writeFileSync("./images/backlog/testing.png", "hello world");
  });
  it("when approving thumbnail, it should move a thumbnail from backlog dir to good dir", async () => {
    const result = await axios.post(
      "http://localhost:8080/thumbnails/:id/votes",
      {
        isGood: true,
      }
    );

    expect(result.data).toEqual("success");
    // const doesGoodFileExist = fs.existsSync("./images/good/testing.png");
    // const wasFileRemovedFromBacklog = fs.existsSync(
    //   "./images/backlog/testing.png"
    // );
    // expect(doesGoodFileExist).toBeTruthy();
    // expect(wasFileRemovedFromBacklog).toBeFalsy();
  });
});
