import { thumbnailMover } from "./thumbnailMover";

describe("thumbnailMover", () => {
  it("if given a imageId and an argument of good, move image to 'good' directory", async () => {
    const isGood = true;
    const imageId = "my-image.jpg";
    const fileMover = jest.fn();
    await thumbnailMover({ fileMover, imageId, isGood });
    expect(fileMover).toHaveBeenCalledWith(
      `./images/backlog/${imageId}`,
      `./images/good/${imageId}`
    );
  });

  it("if given a imageId and an argument of bad, move image to 'bad' directory", async () => {
    const isGood = false;
    const imageId = "my-image.jpg";
    const fileMover = jest.fn();
    await thumbnailMover({ fileMover, imageId, isGood });
    expect(fileMover).toHaveBeenCalledWith(
      `./images/backlog/${imageId}`,
      `./images/bad/${imageId}`
    );
  });
});

//to be completed
