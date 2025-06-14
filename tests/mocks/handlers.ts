import { http, HttpResponse } from 'msw';

export const handlers = [
    http.get('/character', () => {
        return HttpResponse.json([
            {
                id: 1,
                name: "Rick",
                status: "Alive",
                image: "/rick.jpg"
            },
            {
                id: 2,
                name: "Morty",
                status: "Dead",
                image: "/morty.jpg"
            },
            {
                id: 3,
                name: "John",
                status: "Unknown",
                image: "/john.jpg"
            }
        ])
    })
]