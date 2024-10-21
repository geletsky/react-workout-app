import styles from './Heading.module.scss'

import cn from 'clsx'

export default function Heading({ heading, subheading, logo, isWhite = false }) {
	return (
		<div className={cn(styles.headingWrapper, {[styles.white] : isWhite})}>
			{logo && <img src='/images/logo.svg' alt='Logo' />}
			<h1>{heading}</h1>
			<p>{subheading}</p>
		</div>
	)
}
