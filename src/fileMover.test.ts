import * as fs from "fs";
import { fileMover } from "./fileMover";

jest.mock("fs");

describe("fileMover", () => {
  beforeEach(() => {
    (fs.renameSync as jest.Mock).mockImplementation(() => null);
  });
  it("should try to move file using nodes fs", async () => {
    const src = "./source/a.jpg";
    const dst = "./destination/a.jpg";
    await fileMover(src, dst);
    expect(fs.renameSync).toHaveBeenCalledWith(src, dst);
  });
});
