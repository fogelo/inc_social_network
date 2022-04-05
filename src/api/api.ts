import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'e1a10142-bc6b-4db7-85fc-aa063d946841'
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
    }
}
