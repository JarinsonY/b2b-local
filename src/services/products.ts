// Axios
import { instance } from "./instance";

export async function getProducts() {
    return await instance.get("/products");
}

export async function getOneProduct(id: string) {
    return await instance.get(`/products/${id}`);
}

export async function createProduct(data: DtoCreateProduct) {
    return await instance.post("/products", data);
}

export async function updateProduct(id: string, data: DtoUpdateProduct) {
    return await instance.put(`/products/${id}`, data);
}

export async function deleteProduct(id: string) {
    return await instance.delete(`/products/${id}`);
}

export async function updateStatusProduct(id: string, data: DtoUpdateStatus) {
    return await instance.post(`/products/${id}/status`, data);
}
