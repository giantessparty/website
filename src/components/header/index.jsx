import { h, Component } from 'preact';

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
					<a className="navbar-item"><i className="fas fa-image"/>&nbsp;Images</a>
					<a className="navbar-item"><i className="fas fa-images"/>&nbsp;Albums</a>
					<a className="navbar-item"><i className="fas fa-tag"/>&nbsp;Tags</a>
					<a className="navbar-item"><i className="fas fa-user"/>&nbsp;Account</a>
				</div>
			</div>
		</nav>
		);
	}
}


export default Header;
