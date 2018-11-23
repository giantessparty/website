import { h, Component } from 'preact';
import classNames from 'classnames/bind';
import { connect } from 'redux-zero/preact';

import actions from '../../actions';

import './style';

const Preview = ({ preview, hidePreviewImage }) => {
	const { show, image } = preview;

	if(image === null) { return null; }

	const { src, alt } = image;

	const previewClassName = classNames('preview', {
		'visible': show,
	});

	return (
		<div className={previewClassName}>
			<img src={src} alt={alt} />
			<a className="delete is-large" onClick={() => hidePreviewImage()} />
			<a className="button is-primary">Download/Comments</a>
		</div>
	);
};

export default connect(
	({ preview }) => ({ preview }),
	actions,
)(Preview);

