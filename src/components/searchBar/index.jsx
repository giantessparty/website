import { h, Component } from 'preact';

import './style.scss';

const SearchBar = () => {
	return (
		<div className="searchBar">
			<form>
				<input type="search" placeholder="Search by tags." />
			</form>
		</div>
	);
};

export default SearchBar;
