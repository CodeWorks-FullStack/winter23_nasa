import { appState } from "../AppState.js"
import { favoritesService } from "../Services/FavoritesService.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML, setText } from "../Utils/Writer.js"


function drawFavs() {
  let template = ''
  appState.favorites.forEach(f => template += f.FavCard)
  setHTML('favs', template)
}

function drawUser() {
  setText('favPodsLabel', 'Favorites Pictures ' + appState.user)
}


export class FavoritesController {

  constructor() {
    // HEY listen! 🧚
    appState.on('favorites', drawFavs)
    appState.on('user', drawUser)
    this.getFavs()
    drawUser()
  }


  async setUser() {
    try {
      const username = await Pop.prompt('What is your name.... Fellow human 🦒')
      favoritesService.setUser(username)
      await this.getFavs()
    } catch (error) {
      Pop.error(error)
    }
  }



  async getFavs() {
    try {
      if (!appState.user) {
        return await this.setUser()
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
