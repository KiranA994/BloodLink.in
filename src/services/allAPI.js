import {commonAPI} from './commonAPI'
import { serverUrl } from './baseUrl'


//  api for registering user

export const registerUserApi = async(reqBody) => {
    return await commonAPI('POST',`${serverUrl}/register`,reqBody)
}