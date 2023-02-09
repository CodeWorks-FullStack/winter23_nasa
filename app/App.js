import { NasaController } from './Controllers/NasaController.js';

class App {

  nasaController = new NasaController()

}

window["app"] = new App();
