import { h, Component } from 'preact';
import classNames from 'classnames/bind';
import { connect } from 'redux-zero/preact';

import './style';

const Preview = ({img, id, alt}) => {
	const previewClassName = classNames('preview', {
		'visibile': (img !== null)
	});
	const src = (img !== null) ? '' : img;
	const altAttr = (img !== null) ? '' : alt;

	return (
		<div className={previewClassName}>
			<img src={src} alt={altAttr} />
		</div>
	);
};

export default connect()(Preview);

