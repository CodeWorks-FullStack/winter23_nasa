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

    document.getElementById('datepicker').setAttribute('max', new Date().toLocaleDateString('en-CA'))
    document.getElementById('datepicker').setAttribute('min', '1995-06-16')

  }

  async getApod(date) {
    try {
      await nasaService.getApod(date)
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }


  async handleDateInput() {
    try {
      // @ts-ignore
      const date = window.event.target.value
      await this.getApod(date)
    } catch (e) {
      console.error('[Date Input]', e)
      Pop.error(e)
    }
  }

}
