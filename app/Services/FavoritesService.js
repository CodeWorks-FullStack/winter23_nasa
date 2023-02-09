import { appState } from "../AppState.js"
import { Favorite } from "../Models/Favorite.js"
import { sandboxApi } from "./AxiosService.js"

class FavoritesService {

  async getFavs() {
    const res = await sandboxApi.get(`api/${appState.user}/apods`)
    console.log('TODO handle the response data', res.data)
    
    appState.favorites = res.data.map(f => new Favorite(f))
    
    console.log('TODO verify favorites', appState.favorites)

  }

}

export const favoritesService = new FavoritesService()