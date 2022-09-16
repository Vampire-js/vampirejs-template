import { createApp  } from '@vampirejs/vampirejs/core'
import {App} from './app'
import './style.css'

createApp(App.state , App.ui , App.logic)
