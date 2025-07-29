import * as http from 'http'

import { Routes } from './routes/routes'
import { HttpMethod } from './utils/http-methods'

import {getListEpisodes, getFilterEpisodes} from './controllers/podcasts-controller'


export const app = async (
    req: http.IncomingMessage, 
    res: http.ServerResponse) => {
        const baseUrl = req.url?.split("?")[0]
        if (req.method === HttpMethod.GET && baseUrl === Routes.LIST) {
            await getListEpisodes(req, res)
        }
        if (req.method === HttpMethod.GET && baseUrl === Routes.EPISODE) {
            await getFilterEpisodes(req, res)
        }
}
