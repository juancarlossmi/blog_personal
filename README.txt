(NOTAS CLON DE https://fireart.studio/)
NOTAS PRINCIPALES DEL: Curso Desarrollo FullStack con Django y React | Parte 1 / 3

API: muestra la informacion que hay en la base de datos de forma accesible a multiples lenguajes de programacion

¿Como compartir la informacion a multiples dipositivos? API
¿Como crear una aplicacion que consume la informacion de la pagina web y poder 

crear una app moviles en appstore y playstore? [API,  json]

NODE JS = permite trabajar con JavaScript

-----------------------------------------------

¿COMO SE CONECTA PYTHON CON EL FRAMWORK DJANGO?

    por medio de la carpeta __init__.py el framework django puede leer y procesar la informacion contenida en la carpeta (settings.py, WSGI.py, ASGI.py, urls.py) para poder crear la pagina web

-------------------------------------------------

ENVIO DE INFORMACION (archivos ASGI.py, WSGI.py):

    WSGI = procesa los request uno por uno tarde lo que tarde sin medir el tiempo de espera del usuario

    ASGI = procesa los request de la pagina web, si nota que ese request tarda cierto tiempo salta al siguiente y lo carga llega un momento en que el request en espera se carga hasta el final o hasta que este listo en cualquier momento de carga

    PAQUETE GUNICORN (paquete que permite subir la pagina web y procese los request del usuario):
        
        lee el archivo WSGI o ASGI segun la configuracion en settings en que contexto se utiliza ASGI o WSGI
    
    ASGI = cuando quieres hacer asyncrono django, paginas web en vivo (chat en vivo, livestreams, twitch)
            
    WSGI = cuando creas una pagina web

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

AMBIENTE DE DESARROLLO:

    1. crea un ambiente virtual con virtualenv
        python -m virtualenv venv
    
    2. instala django 3.2.16 dentro del ambiente de desarrollo
        
        pip install django == 3.2.16
    
    3. crea un nuevo proyecto django

        django admin startproject (nombre del proyecto nuevo o un "." si no quieres una nueva carpeta con el mismo nombre)

            para este ejemplo:
                django admin startproject core .
    
    4. crea un archivo "requirements.txt" y agregar los archivos necesarios para el funcionameinto de la pagina web

        pip install -r requirements.txt

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

PAQUETES NECESARIOS PARA ESTE PROYECTO: ejecuta el comando pip install -r 

requirements.txt

    visita la pagina pypi.org para buscar los paquetes que quieres instalar y conocer que versiones estan disponibles
    
    framework django utilizado en el proyecto
        django==3.2.16
    
    paquete que se encarga que de almacenar el archivo settings.py en una variable de ambiente
        django-environ==0.9.0

    paquete que se encarga de la conexion entrre el frontend y el backend, decide quien puede acceder y que puede hacer
        django-cors-headers==3.13.0

    paquete que se enecarga de kas apis (consumo de datos por otro tipo de lenguajes)
        djangorestframework==3.14.0

    paquete que se encarga del manejo de imagenes en nuestro proyecto
        Pillow==9.3.0

    paquete que se encarga de guardar las imagenes que pueda agregar un usuario en AWS, conexcion entre AWS y DJANGO
        django-storages==1.13.1


    paquete que permite personalizar el texto de la pagina web
        django-ckeditor==6.3.2

    paquete que permite la conexion con la base de datos de postgresql
        psycopg2==2.9.5

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

CREA UN ARCHIVO .GITIGNORE: ingresa al sitio 

https://www.toptal.com/developers/gitignore

	1. en el buscador agregar las siguientes etiquetas
		- django
		- react
		- python
	2. presiona el boton create y copia y pega en el archivo .gitignore

	3. busca la carpeta "build" y comentala

		- build

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

CONEXION DEL ARCHIVO SETTINGS.PY y .env: para poder proteger la informacion mas importante de la pagina web, crea un archivo .env y ahi agrega todas las variables de entorno que permite la

------------------------------------------------------
# paquete que permite acceder a los archivos de la app
import os
# paquete que viene de django-environ
import environ
# definicion de variables de ambiente
env = environ.Env()
# Activa environ y lee el archivo .env
environ.Env.read_env()

# apunta a la carpeta raiz del proyecto
BASE_DIR = Path(__file__).resolve().parent.parent

# proteccion de la clave secreta
SECRET_KEY = os.environ.get('SECRET_KEY')

DEBUG = os.environ.get('DEBUG')

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

CONEXION ENTRE REACT Y DJANGO: para poder conectar a react con django hay que 

seguir unos pasos

    1. abre una nueva terminal dirigete al desktop y crea un react-app

        npx create-react-app (nombre_app)
    
    2. una vez terminada la creacion de la app copia y pega los siguiente archivos en el proyecto django

        1. public
        2. src
        3. package.json

    3. con el siguiente comando crea un ambiente de desarrollo para react desde la capeta raiz en donde esta contenido el proyecto django

        npm i
    
    4. con el siguiente comando crea la carpeta build de react, debes estar en la carpeta raiz de la app python

        npm run build

    5. una vez creado build ejecuta el comando collectstatic para poder crear la carpeta "static" que visualizara la informacion de react

        python manage.py collectstatic

    6. para poder correr react desde python ve a settings.py y en la seccion TEMPLATES/DIRS agrega la direccion de la carpeta build de react
       en DIRS indicamos donde se encuentra la carpeta de react que contiene los archivos html css y js

        'DIRS': [os.path.join(BASE_DIR, 'build')],

    7. ve al archivo urls.py y agrega un urlpatterns que indica la url de donde se encuentra el archivo index.html que renderiza la app este archivo es el que se crea en la carpeta build

        urlpatterns += [re_path(r'^.*',TemplateView.as_view(template_name='index.html'))]

        donde;
            TemplateView.as_view(template_name='index.html') = renderiza el archivo index.html que se encuentra en la carpeta build

            re_path(r'^.*'), = ?
        
    8. ejecuta el servidor de django, esto debe mostrar la app de react
            
        python manage.py runserver
    
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

CARPETAS IMPORTANTES DENTRO DE SRC DE REACT:

    assets = contiene las images y videos estaticos utilizados en la pagina

    components = contiene los componentes creados

    containers = contendra las paginas creadas y los errores de las mismas

    hocs = layout de react ?

    redux = ?

    styles = contendra los estilos aplicados al proyecto

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

INSTALACION DE TAILWIND: busca tailwindcss en internet ve a get-started y selecciona el framework que estas usando para instalar tailwindcss sigue las intrucciones, ya que cambian con el timpos los comandos a utilizar

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

MANEJO DE RUTAS: para manejar las rutas de la pagina web agrega los siguientes paquetes, tambien debes instalar la extencion de redux para tu navegador

    npm i react-router-dom
    npm i redux redux-thunk react-redux redux-devtools-extension axios

    axios = permite hacer llamados al api django
    redux = guarda el estado de nuestras variables
    redux-devtools-extension = permite leer las variables de redux

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

INSTALACION DE TYPESCRIPT: lenguaje parecido a JavaScript que nos permitira indicar el url base de nuestro proyecto

    npm i typescript

        NOTAS:
            debes crear un archivo llamado tsconfig.json y agregar los siguiente

            {
                "compilerOptions": {
                    "baseUrl": "src",
                    "target": "es5",
                    "lib": [
                        "dom",
                        "dom.iterable",
                        "esnext"
                    ],
                    "allowJs": true,
                    "skipLibCheck": true,
                    "esModuleInterop": true,
                    "allowSyntheticDefaultImports": true,
                    "strict": true,
                    "forceConsistentCasingInFileNames": true,
                    "noFallthroughCasesInSwitch": true,
                    "module": "esNext",
                    "moduleResolution": "Node",
                    "resolveJsonModule": true,
                    "isolatedModules": true,
                    "noEmit": true,
                    "jsx": "react-jsx"
                },
                "include": [
                    "src"
                ]
            }


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

INSTALACION DE REDUX: Que es redux? Es un contenedor de variables de estado, en un estado mantiene las variables y estan disponibles para ser accesibles, son variables en formato json

    CONFIGURACION DE redux

        1. crear un archivo llamado "INDEX.JS" en la carpeta src/redux/reducers

        2. agrega lo siguiente en el archivo "INDEX.JS" para que redux funcione

            "index.js"
                import { combineReducers } from 'redux';

                export default combineReducers([
                ])
        3. configura y crea un almacenamiento de variables para que redux puedas trabajar con redux dentro de la carpeta "SRC" crea un archivo "STORE.JS" y agrega lo siguiente

            // Para poder ver la variables de redux creamos un almacenamiento de variables con el archivo store.js
            import { createStore, applyMiddleware } from 'redux'
            // 
            import rootReducer from './redux/reducers'
            // nos permite hacer que redux este disponible y poder llamarlo para trabajar con el
            import { composeWithDevTools } from 'redux-devtools-extension'

            const initialState = {}

            const middleware = [thunk]

            const store = createStore(
                rootReducer,
                initialState,
                // con esta configuraicon la extencion de redux no puede leer las variables
                applyMiddleware(...middleware)
                // usada en el modo de desarrollo con esta configuracion la extencion de redux puede leer las variables
                composeWithDevTools(applyMiddleware(...middleware))
            )

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

PROGRESO DEL ARCHIVO APP.JS

archivo "app.js" hasta el momento de la configuracion de redux

// BrowserRouter = se encarga del Manejo de rutas organizacion de las rutas creadas para el proyecto
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// importacion del archivo Error404.jsx
import Error404 from './containers/errors/Error404';
// importacion del archivo Home.jsx
import Home from './containers/pages/Home';
// importacin del archivo store
import store from './store'
// 
import { Provider } from 'react-redux'

function App() {
  return (
    // instalacion de redux con store almacenaremos ahi los estados de los componentes
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path = "*" element = {<Error404 />} />
          <Route path = "/" element = {<Home />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

REACT-SPINNERS: paquete de react que sirve para mejoar el frontend, utilizamos spinners para crear un boton especial que permita almacenar texto e imagenes

    NOTAS: utiliza --force para instalar el paquete sin importar los errores de dependencias

        npm i react-spinners --force

        import { DotLoader } from 'react-spinners'

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

REACT-SIMPLE-TYPEWRITER: paquete de react que otroga la funcionalidad de crear un texto que se autoescribe

    NOTAS: pagina para configurar typewriter https://www.npmjs.com/package/react-simple-typewriter

    1. instala el paqueta
        npm i react-simple-typewriter

    2. llama al componente typewriter donde quieres aplicarlo
        
        import { Typewriter} from 'react-simple-typewriter'

    3. agrega la etiqueta "typewriter"

        <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
            Data to <span> </span> 
            <Typewriter
                words={['Eat', 'Sleep', 'Code', 'Repeat!']}
                loop={0}
                cursor
                cursorStyle='_'
                typeSpeed={120}
                deleteSpeed={50}
                delaySpeed={1000}
                // onLoopDone={handleDone}
                // onType={handleType}
            />
        </h1>

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

OTRAS INSTALACIONES Y PLUGGINS DE TAILWIND

    PLUGINS DE TAILWIND

        npm i @heroicons/react @headlessui/react @tailwindcss/forms @tailwindcss/typography @tailwindcss/line-clamp @tailwindcss/aspect-ratio


    CARRUSEL PARA REACT: util para mostrar peliculas, posts, imagenes, . . .

        npm i @itseasy21/react-elastic-carousel

    SEO: paquete para poder controlar y agregar SEO a la pagina web

        npm i @types/react-helmet

    TRANSICIONES Y ANIMACIONES AL RECARGAR LA PAGINA: paquete que funciona para animar las cargas de paginas y la navegacion entre ellas

        npm i framer-motion
