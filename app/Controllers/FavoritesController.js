import { appState } from "../AppState.js"
import { favoritesService } from "../Services/FavoritesService.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"


function drawFavs() {
  let template = ''
  appState.favorites.forEach(f => template += f.FavCard)
  setHTML('favs', template)
}


export class FavoritesController {

  constructor() {
    // HEY listen! 🧚
    appState.on('favorites', drawFavs)
    this.getFavs()
  }


  async setUser() {
    try {
      const username = await Pop.prompt('What is your name.... Fellow human 🦒')
      favoritesService.setUser(username)
    } catch (error) {
      Pop.error(error)
    }
  }



  async getFavs() {
    try {
      if (!appState.user) {
        await this.setUser()
      }
      await favoritesService.getFavs()
    } catch (error) {
      console.error('[Getting Favs]', error)
      Pop.error(error)
    }
  }

  async addFavorite() {
    try {
      await favoritesService.addFavorite()
    } catch (error) {
      console.error(']Error adding Favorite[')
      Pop.error(error)
    }
  }


}
