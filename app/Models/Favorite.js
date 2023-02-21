export class Favorite {

  constructor(data) {
    this.id = data.id
    this.date = data.date
    this.imgUrl = data.imgUrl
    this.user = data.user
  }

  get FavCard() {
    return /*html*/`
      <div class="fav-card" onclick="app.nasaController.getApod('${this.date}')" data-bs-dismiss="offcanvas">
        <div class="text-center on-hover">
          <i class="mdi mdi-pinwheel mdi-spin"></i>  ${this.date.split('-').join('/')}
        </div>
        <img src="${this.imgUrl}" alt="" class="rounded elevation-2 selectable">
      </div>
    `
  }

}
