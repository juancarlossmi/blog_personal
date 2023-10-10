// BrowserRouter = se encarga del Manejo de rutas organizacion de las rutas creadas para el proyecto
import { BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom'
import Services from 'containers/pages/Services';
import Cases from 'containers/pages/Cases';
import About from 'containers/pages/About';
import Careers from 'containers/pages/Careers';
import Blog from 'containers/pages/Blog';
import Contact from 'containers/pages/Contact';
// importacion del archivo Home.jsx
import Home from './containers/pages/Home';
// importacion del archivo Error404.jsx
import Error404 from './containers/errors/Error404';

import { AnimatePresence } from 'framer-motion'

function AnimatedRoutes() {

    const location = useLocation()
    return (
        <div>
            <Routes location={location} key={location.pathname}>
                {/*Pagina de error: se muestra cada vez que se intente ingresar a una url no existente */}
                <Route path = "*" element = {<Error404 />} />
                {/* Paginas creadas */}
                <Route path = "/" element = {<Home />} />
                <Route path = "/casos" element = {<Cases />} />
                <Route path = "/servicios" element = {<Services />} />
                <Route path = "/nosotros" element = {<About />} />
                <Route path = "/carreras" element = {<Careers />} />
                <Route path = "/blog" element = {<Blog />} />
                <Route path = "/contacto" element = {<Contact />} />
            </Routes>
        </div>
    )
}

export default AnimatedRoutes