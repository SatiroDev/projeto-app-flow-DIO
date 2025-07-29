import {pool} from '../data/connection'
import { FilterPodCastModel } from '../models/filter-podcast-model'
import { StatusCode } from '../utils/status-code'
import { PodCastModel } from '../models/podcast-model'

export const serviceFilterEpisodes = async (podcastName: string | undefined ):Promise<FilterPodCastModel>=> {

    const queryString = podcastName?.split('?p=')[1] ?? ''
    const [data] = await pool.execute<PodCastModel[]>(
        `select * from podcast
        where podcastName = ?`,
        [queryString]
    ) 
    let responseFormat: FilterPodCastModel = {
        statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NoContent,
        body: data
    }
    
    return responseFormat
}