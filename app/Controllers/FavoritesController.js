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
    console.log('hello favs')

    // HEY listen! 🧚
    appState.on('favorites', drawFavs)


    this.getFavs()


  }


  async getFavs() {
    try {
      await favoritesService.getFavs()
    } catch (error) {
      console.error('[Getting Favs]', error)
      Pop.error(error)
    }
  }


}
