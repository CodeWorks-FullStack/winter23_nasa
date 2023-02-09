import { appState } from "../AppState.js"
import { Apod } from "../Models/Apod.js"
import { nasaApi } from "./AxiosService.js"

class NasaService {
  async getApod() {
    const res = await nasaApi.get('/planetary/apod')
    appState.apod = new Apod(res.data)
  }
}

export const nasaService = new NasaService()