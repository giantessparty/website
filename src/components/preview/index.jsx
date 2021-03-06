import { h, Component } from 'preact';
import classNames from 'classnames/bind';
import { connect } from 'redux-zero/preact';
import { Link } from 'preact-router';

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
			<Link className="button is-primary" onClick={() => hidePreviewImage()} href="/view/0">Download/Comments</Link>
		</div>
	);
};

export default connect(
	({ preview }) => ({ preview }),
	actions,
)(Preview);

