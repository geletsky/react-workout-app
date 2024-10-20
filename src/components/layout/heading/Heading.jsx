import styles from './Heading.module.scss'

export default function Heading({ heading, subheading, logo }) {
	return (
		<div className={styles.headingWrapper}>
			{logo && <img src='/images/logo.svg' alt='Logo' />}
			<h1>{heading}</h1>
			<p>{subheading}</p>
		</div>
	)
}
