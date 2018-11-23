import { h, Component } from 'preact';
import { Provider } from 'redux-zero/preact';
import { Router } from 'preact-router';
import AsyncRoute from 'preact-async-route';

import Header from './header';
import SearchBar from './searchBar';
import Preview from './preview';

import store from '../store';

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div id="app">
					<Header />
					<SearchBar />
					<Router>
					<AsyncRoute
						path="/"
						getComponent={ () => import('./pages/gallery').then(module => module.default) }
					/>
					<AsyncRoute
						path="/albums"
						getComponent={ () => import('./pages/gallery').then(module => module.default) }
					/>
					<AsyncRoute
						path="/view/:id"
						getComponent={ () => import('./pages/view').then(module => module.default) }
					/>
					</Router>
					<Preview />
				</div>
			</Provider>
		);
	}
}
