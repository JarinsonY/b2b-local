// Axios
import { instance } from "./instance";

export async function getPriceList() {
    return await instance.get("/price-lists");
}

export async function getOnePriceList(id: string) {
    return await instance.get(`/price-lists/${id}`);
}

export async function createPriceList(data: DtoCreatePriceList) {
    return await instance.post("/price-lists", data);
}

export async function updatePriceList(id: string, data: DtoUpdatePriceList) {
    return await instance.put(`/price-lists/${id}`, data);
}

export async function deletePriceList(id: string) {
    return await instance.delete(`/price-lists/${id}`);
}

export async function updateStatusPriceList(id: string, data: DtoUpdateStatus) {
    return await instance.post(`/price-lists/${id}/status`, data);
}
