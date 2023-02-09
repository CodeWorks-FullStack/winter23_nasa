import { appState } from "../AppState.js";
import { nasaService } from "../Services/NasaService.js";
import { Pop } from "../Utils/Pop.js";

function _drawApod() {
  console.log('do the thing....', appState.apod)
}


export class NasaController {

  constructor() {
    this.getApod()
    appState.on('apod', _drawApod)
  }


  async getApod() {
    try {
      await nasaService.getApod()
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }

}
