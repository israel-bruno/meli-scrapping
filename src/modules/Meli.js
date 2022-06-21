import * as cheerio from "cheerio";

function findMeliNumber(page) {
  const $ = cheerio.load(page);
  const textArray = $(".sc-title-subtitle-action__sublabel").text().split(" ");

  const index =
    textArray.findIndex((text) => {
      return text == "Tel.:";
    }) + 1;

  if (index > 0) {
    return textArray[index];
  }

  return "";
}

export { findMeliNumber };
