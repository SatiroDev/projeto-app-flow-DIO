import { PodCastModel } from "./podcast-model";

export interface FilterPodCastModel {
    statusCode: number;
    body: PodCastModel[]
}