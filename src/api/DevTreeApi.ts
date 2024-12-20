import { isAxiosError } from "axios"
import api from "../config/axios"
import { ProfileForm, User } from "../types";


export async function getUser () {
    try {
            const { data } = await api<User>('/user')
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

export async function updateProfile (formDate: User) {
    try {
        const { data } = await api.patch<string>('/user', formDate)
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

export async function uploadImage (file : File) {
    let formData = new FormData();
    formData.append('file', file)
    try {
        const { data } = await api.post('/user/image', formData)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

export async function getUserByHandle (handle: string) {
    try {
        const { data } = await api(`/${handle}`)
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}