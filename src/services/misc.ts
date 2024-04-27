// Axios
import { instance } from "./instance";

export async function getCountries() {
    return await instance.get("/countries");
}
