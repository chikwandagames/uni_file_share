
class AppRouter {

  constructor(app) {

    this.app = app
    this.setUpRouter();
  }

  setUpRouter() {
    const app = this.app
    app.get('/', (req, res, next) => {

      return res.status(200).json({
        version: '1.0'
      })
    })
    console.log('Initialising app router')
  }



}

export default AppRouter