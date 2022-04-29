import '@riotjs/hot-reload'
import { component } from 'riot'
import App from './app.riot'
import registerGlobalComponents from './register-global-components'
import './libs/itemstore'

// register
registerGlobalComponents()

// mount the root tag
component(App)(document.getElementById('root'))
