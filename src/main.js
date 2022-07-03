import App from './App.svelte'
import moment from 'moment'
import 'moment/locale/ko'
moment.locale('ko')

const app = new App({
  target: document.body
})

export default app