// Axios
import { instance } from "./instance";

export async function getOneBusiness(id: string) {
    return await instance.get(`/businesses/${id}`);
}

export async function updateBusiness(id: string, data: DtoUpdateBusiness) {
    return await instance.put(`/businesses/${id}`, data);
}

export async function updateStatusBusiness(id: string, data: DtoUpdateStatus) {
    return await instance.post(`/businesses/${id}/status`, data);
}
