import './App.css';

import React, {Suspense} from 'react';
import Sidebar from "./components/Sidebar/Sidebar";
import {BrowserRouter, HashRouter, Route, Routes,} from 'react-router-dom';

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
import {HelloComponent} from './components/HelloComponent';

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
                            <Route exact path='/' element={<HelloComponent />} />
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

//alert (window.location.href);

const urlChecker = () => {
    const baseUrl = window.location.href;
    const afterSlashUrl = process.env.PUBLIC_URL; //process.env.PUBLIC_URL;
    const rule = baseUrl.includes(afterSlashUrl);
    if (rule) {
        return process.env.PUBLIC_URL;
    }   else    {
        return '/';
    }
}

urlChecker();
const SamuraiJSApp = (props) => {
    return (
        <HashRouter>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </HashRouter>
    );
}

export default SamuraiJSApp;