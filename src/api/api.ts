import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'b1356b5e-074b-4608-a733-39db627817e8'
    }
})


export const usersAPI = {
    getUsers(currentPage: any, usersCount: any) {
        return instance.get(`users?page=${currentPage}&count=${usersCount}`).then(response => response.data)
    },
    follow(userId: any) {
        return instance.delete('follow/' + userId)
    },
    unfollow(userId: any) {
        return instance.post('follow/' + userId)
    },
    getProfile(userId: any) {
        console.warn('you are using an outdated method')
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId: any) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId: any) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: any) {
        return instance.put('profile/status', {status: status})
    }

}


export const authAPI = {
    me() {
        return instance.get('auth/me')
    },
    login(email: any, password: any, rememberMe: any) {
        return instance.post('auth/login', {email, password, rememberMe})

    },
    logout(){
        return instance.delete('auth/login')
    }
}
