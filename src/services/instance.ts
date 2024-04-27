// NextJS
import { getSession } from "next-auth/react";

// Axios
import axios from "axios";

// Services
import { refreshToken } from "./auth";

// Instance
export const instance = axios.create({
    baseURL: process.env.NEXT_API_URL || "https://d.zeler.co/api/v1",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

// Interceptors
instance.interceptors.request.use(
    async function (config) {
        const session = await getSession();

        if (session) {
            config.headers.Authorization = `Bearer ${session?.user?.access_token}`;
        }

        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (response) => response,
    async function (error) {
        const session = await getSession();

        if (error.response && error.response.status === 401 && session) {
            const response = await refreshToken({
                refresh_token: session.user.refresh_token,
            });

            if (response.status === 200) {
                const newAccessToken = await refreshToken({
                    refresh_token: session.user.refresh_token,
                });

                error.config.headers[
                    "Authorization"
                ] = `Bearer ${newAccessToken}`;

                return instance(error.config);
            }
        }

        return Promise.reject(error);
    }
);
