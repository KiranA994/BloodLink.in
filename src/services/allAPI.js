import { commonAPI } from './commonAPI'
import { serverUrl } from './baseUrl'


//  api for registering user

export const registerUserApi = async (reqBody) => {
    return await commonAPI('POST', `${serverUrl}/bloodData`, reqBody)
}

// api to create a new user

export const createUserApi = async (reqBody) => {
    return await commonAPI('POST', `${serverUrl}/create`, reqBody)
} 

// api to get all user

export const getUserApi = async () => {
    return await commonAPI('GET', `${serverUrl}/create`, '')
} 

// api to get all data

export const getAllUserApi = async() => {
    return await commonAPI('GET',`${serverUrl}/bloodData`,'')
}