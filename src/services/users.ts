// Axios
import { instance } from "./instance";

export async function getUser() {
    return await instance.get("/users");
}

export async function getOneUser(id: string) {
    return await instance.get(`/users/${id}`);
}

export async function getCurrentUser() {
    return await instance.get("/users/me");
}

export async function updateUser(id: string, data: DtoUpdateUser) {
    return await instance.put(`/users/${id}`, data);
}

export async function updateStatusUser(id: string, data: DtoUpdateStatus) {
    return await instance.post(`/users/${id}/status`, data);
}
