import axios from "axios";

async function getPhone(url, cookies, findNumber) {
  const headers = { Cookie: cookies };

  const response = await axios.get(url, { headers });

  const number = findNumber(response.data);

  return formatNumber(number);
}

function formatNumber(number = "") {
  const newNumber = number.replace(/[^0-9]+/, "");

  return newNumber.length == 11 ? "+55" + newNumber : newNumber;
}

export { getPhone };

export * from "./modules";
