export class Gift {
    constructor (data) {
      this.id = data.id || data._id
      this.tag = data.tag
      this.imgUrl = data.url
      this.opened = data.opened
      this.creatorId = data.creatorId
    }

    get CardHTMLTemplate() {
        return `
        <div class="col-md-4 mb-3">
          <div class="card">
          <img src="${this.imgUrl}" class="card-img-top" alt="${this.tag}">
          <div class="card-body">
            <p class="card-text">${this.tag}</p>
            <button onclick="app.GiftsController.updateGift('${this.id}')" ${this.opened ? 'disabled' : ''} class="btn btn-primary" type="button">
             ${this.opened ? 'Gift is already opened, dawg' : 'Open Gift'}
            </button>
            <button onclick="app.GiftsController.destroyGift('${this.id}')" class="btn btn-danger ${this.creatorId == AppState.account?.id ? '' : 'd-none'}">
              Delete
            </button>
          </div>
          </div>
        </div>
        `
      }
}