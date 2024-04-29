import {commonAPI} from './commonAPI'
import { serverUrl } from './baseUrl'


//  api for registering user

export const registerUserApi = async(reqBody) => {
    return await commonAPI('POST',`${serverUrl}/register`,reqBody)
}

// api for login

export const loginUserApi = async(reqBody) => {
    return await commonAPI('POST', `${serverUrl}/login`, reqBody)
}

// api to delete a post of a particular user

export const deleteUserApi = async(id) => {
    return await commonAPI('DELETE', `${serverUrl}/deleteUser/${id}`,{})
}