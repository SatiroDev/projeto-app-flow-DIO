import * as http from 'http'
import dotenv from 'dotenv'
import { app } from './app'

import { createTablePodcast } from './data/table-podcast'



dotenv.config()

const server = http.createServer(app)

const port = process.env.PORT

server.listen(port, async () => {
    // await addEpisode()
    await createTablePodcast()
    console.log('Servidor rodando na porta: '+ port)
})