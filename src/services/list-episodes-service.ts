import {pool} from '../data/connection'
import { FilterPodCastModel } from '../models/filter-podcast-model'
import { PodCastModel } from '../models/podcast-model'
import { StatusCode } from '../utils/status-code'

export const serviceListEpisodes = async (): Promise<FilterPodCastModel> => {

    const [data] = await pool.query<PodCastModel[]>(
        `select * from podcast`
    )

    let responseFormat: FilterPodCastModel = {
        statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NoContent,
        body: data
    }

    return responseFormat
}