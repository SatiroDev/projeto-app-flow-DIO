import { RowDataPacket } from "mysql2";

export interface PodCastModel extends RowDataPacket{
    podcastName: string;
    episode: string;
    videoId: string;
    categories: string[]
}