import styles from './Layout.module.scss'
import Header from './header/Header'

export default function Layout({
	children,
	bgImage,
	heading = '',
	backLink = '/'
}) {
	return (
		<section>
			<Header backLink={backLink} />
			{heading && <h1>{heading}</h1>}
			{children && <div>{children}</div>}
		</section>
	)
}
