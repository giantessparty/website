import { h, Component } from 'preact';
import { connect } from 'redux-zero/preact';

import Item from './item';

import './style';

class Gallery extends Component {
	render() {
		const { images } = this.props.gallery;

		return (
		<div className="gallery">
			{images.map((img, i) => ( <Item key={i} image={img} />))}
		</div>
		);
	}
}

export default connect(
	({ gallery }) => ({ gallery })
)(Gallery);
