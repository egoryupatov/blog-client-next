export const getShortTitle = (title: string) => {
  if (title.length > 15) {
    return title.split("").splice(0, 65).join("") + "...";
  }

  return title;
};
