// Axios
import { instance } from "./instance";

export async function signIn(data: DtoSignIn) {
    return await instance.post("/auth/login", data);
}

export async function signUp(data: DtoSignUp) {
    return await instance.post("/users/signup", data);
}

export async function refreshToken(data: DtoRefreshToken) {
    return await instance.post("/auth/refresh", data);
}

export async function changePassword(data: DtoChangePassword) {
    return await instance.post("/auth/confirm-password-reset", data);
}

export async function resetPassword(data: DtoResetPassword) {
    return await instance.post("/auth/request-password-reset", data);
}
