import './App.css';

import React, {Suspense} from 'react';
import Sidebar from "./components/Sidebar/Sidebar";
import {BrowserRouter, Route, Routes, } from 'react-router-dom';

import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from './components/Header/HeaderContainer';
import {logout} from './redux/auth-reducer';
import {connect, Provider} from 'react-redux';
import {initializeApp} from './redux/app-reducer';
import Preloader from './components/common/Preloader';
import LoginContainer from './components/Login/LoginContainer';
import {compose} from 'redux';
import store from "./redux/redux-store";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));


class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {

        if (!this.props.initialized) return <Preloader />;

        return (
            <div className='app-wrapper'>
                <HeaderContainer />
                <Sidebar />
                <div className='app-wrapper-content'>
                    <Suspense fallback={<Preloader />}>
                        <Routes>
                            <Route path='/profile' element={<ProfileContainer />} >
                                <Route path=':userId' element={<ProfileContainer />} />
                            </Route>
                            <Route exact path='/users' element={<UsersContainer />} />
                            <Route exact path='/dialogs' element={<DialogsContainer />} />
                            <Route exact path='/login' element={<LoginContainer />} />
                        </Routes>
                    </Suspense>
                </div>
            </div>
        );
    };

}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
});

let AppContainer = compose(
    //withRouter,
    connect(mapStateToProps, {initializeApp, logout})
)(App);

const SamuraiJSApp = (props) => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </BrowserRouter>
    );
}

export default SamuraiJSApp;