// Para poder ver la variables de redux creamos un almacenamiento de variables con el archivo store.js
import { createStore, applyMiddleware } from 'redux'
// 
import thunk from 'redux-thunk'
// le indicamos a redux donde se encuentra el archivo "index.js" de la carpeta reducers
import rootReducer from './redux/reducers'
// nos permite hacer que redux este disponible y poder llamarlo para trabajar con el
import { composeWithDevTools } from 'redux-devtools-extension'

// Estado inicial que sera llenado con las variables que redux puede acceder
const initialState = {}

// 
const middleware = [thunk]

// con la constante "store" llenaremos el inicialState
const store = createStore(
    rootReducer,
    initialState,
    // con esta configuraicon la extencion de redux no puede leer las variables
    // applyMiddleware(...middleware)
    // usada en el modo de desarrollo con esta configuracion la extencion de redux puede leer las variables
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store