export default class  BaseClass {
  constructor() {

  }
  async localtionSearch(keyword) {
    return ({
      city: '南昌',
      area: ['东华理工','东莞', '东华理工抚州校区']
    })
  }
  async fetch (url ='', data ={}, typr='GET', resType ='JSON'){

  }
}