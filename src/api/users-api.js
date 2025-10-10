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

    followUser: async (userId) => {
        return instance
            .post(`follow/${userId}`)
            .then((response) => response.data);
    },

    unFollowUser: async (userId) => {
        return instance
            .delete(`follow/${userId}`)
            .then((response) => response.data);
    },

    authProfile: async () => {
        return instance.get(`auth/me`).then((response) => response.data);
    },

    getProfileByUserId: async (userId) => {
        // переделегирование
        return ProfileAPI.getProfileByUserId(userId).then(
            (response) => response.data
        );
    },
};

export const ProfileAPI = {
    getProfileByUserId: async (userId) => {
        return instance.get(`profile/` + userId);
    },

    getStatus: async (userId) => {
        return instance.get(`profile/status/${userId}`);
    },

    updateStatus: async (status) => {
        return instance.put(`profile/status`, {
            status: status,
        });
    },
};


export const AuthAPI = {
    me() {
        return UsersAPI.authProfile();
    },

    login(email, password, rememberMe = false) {
        return instance.post("auth/login", { email, password, rememberMe });
    },

    logout() {
        return instance.delete("auth/login");
    },
};
