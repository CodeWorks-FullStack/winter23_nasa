export class Apod {
  constructor(data) {
    this.date = data.date
    this.explanation = data.explanation
    this.hdurl = data.hdurl
    this.url = data.url
    this.title = data.title
    this.copyright = data.copyright
    this.media_type = data.media_type
  }

  get template(){
    return `
      
    `
  }
}