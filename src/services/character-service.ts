import create from "./http-service"

export interface Character {
    id: number,
    name: string,
    status: string
    image: string
}

export interface ApiCharacterObject {
    info: {next : string}
    results: Character[]
}

export default create("/character");