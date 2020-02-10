import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'
import App from './App';
import FormSearch from './Components/FormSearch/FormSearch';
import Login from './Components/Login/Login';
import AddCode from './Components/AddCode/AddCode'
import Favorites from './Components/Favorite/Favorites'
import Historico from './Components/Historico/Historico';
import MyUploads from './Components/MyUploads/MyUploads';
import Adm from './Components/Adm/Adm';
import Usuarios from './Components/Usuarios/Usuarios';
import AddUsuario from './Components/AddUsuario/AddUsuario';
import UploadDetalhe from './Components/UploadDetalhe/UploadDetalhe'

ReactDOM.render(

    <BrowserRouter>

        <App />

        <Switch>

            <Redirect exact from="/" to="/search" />
            <Route path='/search' component={FormSearch} />
            <Route path='/addcode' component={AddCode} />
            <Route path='/login' component={Login} />
            <Route path='/favorites' component={Favorites} />
            <Route path='/historico' component={Historico} />
            <Route path='/my-uploads' component={MyUploads} />
            <Route path='/adm' component={Adm} />
            <Route path='/usuarios' component={Usuarios} />
            <Route path='/add-usuario' component={AddUsuario} />
            <Route path='/upload/detalhe/:id' component={UploadDetalhe} />

        </Switch>

    </BrowserRouter>

    , document.getElementById('root'));
