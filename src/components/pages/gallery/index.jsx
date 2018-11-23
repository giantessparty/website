import { h, Component } from 'preact';
import { connect } from 'redux-zero/preact';

import actions from '../../../actions';

import Item from './item';

import './style';

class Gallery extends Component {

	onSelectImage = image => {
		this.props.setPreviewImage(image);
	};

	render() {
		const { gallery } = this.props;
		const { images } =gallery;

		return (
		<div className="gallery">
			{images.map((img, i) => ( <Item key={i} image={img} onSelect={this.onSelectImage} />))}
		</div>
		);
	}
}

export default connect(
	({ gallery }) => ({ gallery }),
	actions
)(Gallery);
