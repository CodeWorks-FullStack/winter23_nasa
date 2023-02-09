import { appState } from "../AppState.js";
import { nasaService } from "../Services/NasaService.js";
import { Pop } from "../Utils/Pop.js";
import { setText } from "../Utils/Writer.js";

function _drawApod() {
  // console.log('do the thing....', appState.apod)
  setText('apodTitle', appState.apod.title)
  document.body.style.backgroundImage = `url(${appState.apod.url})`
  document.body.classList.remove('debug')
}

export class NasaController {

  constructor() {
    this.getApod()
    appState.on('apod', _drawApod)
  }

  async getApod(date) {
    try {
      await nasaService.getApod(date)
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }

}
