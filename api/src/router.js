
import { version } from '../package.json'
class AppRouter {

  constructor(app) {

    this.app = app
    this.setUpRouter();
  }

  setUpRouter() {
    const app = this.app

    // Root routing
    app.get('/', (req, res, next) => {
      return res.status(200).json({
        version
      })
    })

    app.post('/api/upload', (req, res, next) => {
      return res.json({
        upload: 'uploading...'
      })
    })

    console.log('Initialising app router')
  }



}

export default AppRouter