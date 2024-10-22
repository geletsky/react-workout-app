import cn from 'clsx'

import styles from './Heading.module.scss'

export default function Heading({
	heading,
	subheading,
	logo,
	isWhite = false,
	style
}) {
	return (
		<div
			className={cn(styles.headingWrapper, { [styles.white]: isWhite })}
			style={style}
		>
			{logo && <img src='/images/logo.svg' alt='Logo' />}
			<h1>{heading}</h1>
			<p>{subheading}</p>
		</div>
	)
}
