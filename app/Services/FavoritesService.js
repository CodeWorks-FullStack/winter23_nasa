import { appState } from "../AppState.js"
import { Favorite } from "../Models/Favorite.js"
import { saveState } from "../Utils/Store.js"
import { sandboxApi } from "./AxiosService.js"


class FavoritesService {
  setUser(username) {
    if(!username){
      throw new Error('you have to have a name...')
    }
    
    appState.user = username
    saveState('user', appState.user)

  }
  
  async addFavorite() {

    const newFavoriteRawData = {
      date: appState.apod.date,
      imgUrl: appState.apod.url,
      user: appState.user
    }

    const res = await sandboxApi.post(`api/${appState.user}/apods`, newFavoriteRawData)
    const favorite = new Favorite(res.data)
    appState.favorites.push(favorite)
    appState.emit('favorites')
  }

  async getFavs() {
    const res = await sandboxApi.get(`api/${appState.user}/apods`)
    console.log('TODO handle the response data', res.data)

    appState.favorites = res.data.map(f => new Favorite(f))

    console.log('TODO verify favorites', appState.favorites)

  }

}

export const favoritesService = new FavoritesService()