export class Favorite {

  constructor(data) {
    this.id = data.id
    this.date = data.date
    this.imgUrl = data.imgUrl
    this.user = data.user
  }

  get FavCard(){
    return /*html*/`
      <div class="fav-card rounded elevation-3 selectable" onclick="app.nasaController.getApod('${this.date}')" data-bs-dismiss="offcanvas">
        <img class="img-fluid" src="${this.imgUrl}" alt="" title="${this.date}">
      </div>
    `
  }

}
