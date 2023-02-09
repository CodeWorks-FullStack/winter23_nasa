import { FavoritesController } from './Controllers/FavoritesController.js';
import { NasaController } from './Controllers/NasaController.js';
import { ThemeController } from './Controllers/ThemeController.js';

class App {
  themeController = new ThemeController()
  nasaController = new NasaController()
  favoritesController = new FavoritesController()
}

window["app"] = new App();
