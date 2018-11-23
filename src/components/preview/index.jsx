import { h, Component } from 'preact';
import classNames from 'classnames/bind';
import { connect } from 'redux-zero/preact';

import './style';

const Preview = ({ preview }) => {
	const { image, alt } = preview;

	const previewClassName = classNames('preview', {
		'visible': (image !== undefined)
	});
	const src = (image === undefined) ? '' : image;
	const altAttr = (image === undefined) ? '' : alt;

	return (
		<div className={previewClassName}>
			<img src={src} alt={altAttr} />
		</div>
	);
};

export default connect(
	({ preview }) => ({ preview })
)(Preview);

