import styles from './Layout.module.scss'
import Header from './header/Header'

export default function Layout({
	children,
	bgImage,
	heading = '',
	backLink = '/',
	isVisible = true
}) {
	return (
		<section
			className={`${styles.wrapper} ${!isVisible ? styles.hidden : ''}`}
			style={{ backgroundImage: `url(${bgImage})` }}
		>
			{isVisible && <Header backLink={backLink} />}
			
			{heading && <h1>{heading}</h1>}
			{children}
		</section>
	)
}
