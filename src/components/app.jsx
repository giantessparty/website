import { h, Component } from 'preact';
import { Router } from 'preact-router';
import { Provider } from 'redux-zero/preact';

import Header from './header';
import SearchBar from './searchBar';
import Gallery from './pages/gallery';
import Preview from './preview';

import store from '../store';

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div id="app">
					<Header />
					<SearchBar />
					<Gallery />
					<Preview />
				</div>
			</Provider>
		);
	}
}
