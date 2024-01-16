interface thumbnailMoverArgs {
  fileMover: Function;
  imageId: string;
  isGood: boolean;
}

export const thumbnailMover = async ({
  fileMover,
  imageId,
  isGood,
}: thumbnailMoverArgs) => {
  const sourceImageLocation = `./images/backlog/${imageId}`;
  const rating = isGood ? "good" : "bad";
  const destinationImageLocation = `./images/${rating}/${imageId}`;
  await fileMover(sourceImageLocation, destinationImageLocation);
};
