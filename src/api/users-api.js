import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "fb60d39d-73f4-4438-9e92-7f1dd45a2aab",
    },
});

export const UsersAPI = {
    getUsers: async (currentPage, pageSize) => {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then((response) => response.data);
    },

    unFollowUser: async (userId) => {
        return instance
            .delete(`follow/${userId}`)
            .then((response) => response.data);
    },

    followUser: async (userId) => {
        return instance
            .post(`follow/${userId}`)
            .then((response) => response.data);
    },
};
