import { appState } from "../AppState.js";
import { themeService } from "../Services/ThemeService.js";
import { setHTML } from "../Utils/Writer.js";

function _applyTheme() {

  let buttonIcon = appState.theme == 'light' ? '<i class="mdi mdi-weather-sunny"></i>' : '<i class="mdi mdi-moon-waning-crescent"></i>'

  document.body.className = appState.theme

  setHTML('theme-button', buttonIcon)
}


export class ThemeController {

  constructor() {
    appState.on('theme', _applyTheme)
    _applyTheme()
  }

  toggleTheme() {
    themeService.toggleTheme()
  }
}
