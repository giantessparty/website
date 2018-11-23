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
		const style = {
			backgroundImage: `url(${image.image})`
		};

		return (<div className="item" style={style} onClick={this.selectEvent} alt="" />);
	}
}

export default Item;
