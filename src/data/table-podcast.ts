import { pool } from './connection'
export const createTablePodcast = async () => {
    await pool.query(
        `create table if not exists podcast (
            id int primary key auto_increment,
            podcastName varchar(150) not null,
            epidode varchar(100) not null,
            videoId varchar(100) not null unique,
            cover varchar(150),
            link varchar(150) not null,
            categories JSON
            )`
    )
    console.log('Tabela criada!')
}
