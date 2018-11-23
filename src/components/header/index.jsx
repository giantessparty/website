import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

import classNames from 'classnames/bind';

class Header extends Component {

	constructor() {
		super();
		this.state = {
			isBurgerActive: false,
		};
	}

	onNavbarBurgerClick = e => {
		const { isBurgerActive } = this.state;

		this.setState({ isBurgerActive: !isBurgerActive });
	}


	render() {
		const { isBurgerActive } = this.state;

		const navbarMenuClassName = classNames('navbar-menu', { 'is-active':  isBurgerActive});
		const navbarBurgerClassName = classNames('navbar-burger', { 'is-active':  isBurgerActive});

		return (
		<nav className="navbar" role="navigation" aria-label="main navigation">
			<div className="navbar-brand">
				<a className="navbar-item" href="/">
					<h2 className="navbar-title">Giantess Party</h2>
				</a>
				<a
					className={navbarBurgerClassName}
					role="button"
					aria-label="menu"
					aria-expanded="false"
					onClick={this.onNavbarBurgerClick}
				>
					<span aria-hidden="true"/>
					<span aria-hidden="true"/>
					<span aria-hidden="true"/>
				</a>
			</div>
			<div className={navbarMenuClassName}>
				<div className="navbar-end">
					<Link activeClassName="is-active" className="navbar-item" href="/">Images</Link>
					<Link activeClassName="is-active" className="navbar-item" href="/albums">Albums</Link>
					<Link activeClassName="is-active" className="navbar-item" href="/tags">Tags</Link>
					<Link activeClassName="is-active" className="navbar-item" href="/login">Account</Link>
				</div>
			</div>
		</nav>
		);
	}
}


export default Header;
