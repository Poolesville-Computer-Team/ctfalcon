import { defineConfig } from 'vite'


export default defineConfig({
    build: {
        rollupOptions: {
            input: { // TODO: Add html files in project directory automatically
                main: 'index.html',
                challenges: 'challenges.html',
                leaderboard: 'leaderboard.html',
                "team-info": 'team-info.html',
            }
        }
    }
})