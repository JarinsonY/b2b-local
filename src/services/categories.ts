// Axios
import { instance } from "./instance";

export async function getCategories() {
    return await instance.get("/categories");
}

export async function getOneCategory(id: string) {
    return await instance.get(`/categories/${id}`);
}

export async function createCategory(data: DtoCreateCategory) {
    return await instance.post("/categories", data);
}

export async function updateCategory(id: string, data: DtoUpdateCategory) {
    return await instance.put(`/categories/${id}`, data);
}

export async function deleteCategory(id: string) {
    return await instance.delete(`/categories/${id}`);
}

export async function updateStatusCategory(id: string, data: DtoUpdateStatus) {
    return await instance.post(`/categories/${id}/status`, data);
}
