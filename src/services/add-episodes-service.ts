import {pool} from '../data/connection'
export const addEpisode = async () => {
    await pool.execute(
        `insert into podcast (podcastName, epidode, videoId, cover, link, categories)
        values(?, ?, ?, ?, ?, ?)`,
        ["podTest", "BATALHA DA ALDEIA ", "semId", "https://i.ytimg.com/vi/e2laV-0pImg/maxresdefault.jpg", "https://www.youtube.com/watch?v=e2laV-0pImg", '["Rima", "Batalha de rima"]']
    )
}
