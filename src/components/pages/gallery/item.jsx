import { h, Component } from 'preact';

class Item extends Component {
	shouldComponentUpdate({ image, onSelect }) {
		return image !== this.props.image || onSelect !== this.props.onSelect;
	}

	selectEvent = () =>{
		const { onSelect, image } = this.props;
		onSelect(image);
	}

	render({image}) {

		const { src, alt } = image;

		const style = {
			backgroundImage: `url(${src})`
		};

		return (<div className="item" style={style} onClick={this.selectEvent} alt={alt} />);
	}
}

export default Item;
