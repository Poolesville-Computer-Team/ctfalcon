import { defineConfig } from 'vite'


export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                challenges: 'challenges.html',
                leaderboard: 'leaderboard.html',
                "team-info": 'team-info.html',
            }
        }
    }
})