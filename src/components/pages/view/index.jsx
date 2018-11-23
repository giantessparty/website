import { h, Component } from 'preact';
import { connect } from 'redux-zero/preact';
import { Link } from 'preact-router';

import actions from '../../../actions';

class View extends Component {
	render({preview}) {

		const {src, alt } = preview.image;

		return (
			<div>
				<div className="container">
					<figure className="image">
						<img src={src} alt={alt} />
					</figure>
				</div>
				<div className="container">
					<div className="content">
						<p>
							Right click on image and click "Save Image As" to save to your device.
						</p>
						<h2 className="title">Comments</h2>
					</div>
					<article className="media">
						<figure className="media-left">
							<p className="image is-100x100">
								<img src="http://www.gravatar.com/avatar/880c3243c7a1d165758617ee32f78436.jpg?s=120&r=x&d=http%3A%2F%2Fgiantessbooru.com%2Fthemes%2Fgiantessbooru%2Ficons%2Fdefaultgravatar.png" />
							</p>
						</figure>
						<figure className="media-content">
							<div className="content">
								<strong><Link href="/profile/0">Pretty_Cat_Princess</Link></strong> <small>31m</small><br/>
								Knowing MGH, I wouldn't have been suprised if it was, mew~
							</div>
						</figure>
					</article>
				</div>
			</div>
		);
	}

	static defaultProps = {
		fullSizeImage: false,
	};
}

export default connect(
	({ preview }) => ({ preview }),
	actions
)(View);

