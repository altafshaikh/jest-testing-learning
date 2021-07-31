import axios from "axios";

export function AxiosGetCall(url) {
  return new Promise(async (resolve) => {
    const result = await axios.get(url);
    resolve(result);
  });
}
