import { useEffect, useRef, useState } from 'react'

export const useOnClickOutside = initialValue => {
	const [isShow, setIsShow] = useState(initialValue)
	const ref = useRef(null)

	const handleOutsideClick = event => {
		if (ref.current && !ref.current.contains(event.target)) {
			setIsShow(false)
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleOutsideClick, true)

		return () => {
			document.removeEventListener('click', handleOutsideClick, true)
		}
	})

	return { ref, isShow, setIsShow }
}
