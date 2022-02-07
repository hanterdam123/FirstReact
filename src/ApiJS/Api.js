import * as axios from 'axios'

const instance = axios.create({
    withCredentials:true,
    headers: {
        'API-KEY':'2cf755b1-a98d-49f1-8af6-45bd787a013d'
    },
    baseURL:'https://social-network.samuraijs.com/api/1.0/'
})


export const getUsers = (currentPage = 1, pageSize = 5) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    .then(response =>{return response.data})
}
export const unfollow = (userId) => {
    return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
}

export const follow = (userId) => {
    return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
}

export const getProfile = (userId) => {
    return axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId)
}

export const authAPI = {
    me() {
        return instance.get('auth/me')
    },
    login(email, password, remember) {
        return instance.post(`auth/login`, {email, password, remember})
    },
    logOut() {
        return instance.delete(`auth/login`)
    }
}

export const profileAPI = {
    getStatus(userId) {
        return instance.get('profile/status/' + userId)
    },
    updateStatus(status) {
        return instance.put('profile/status', {status:status})
    }
}