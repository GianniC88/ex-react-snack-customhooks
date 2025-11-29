import { useEffect, useState } from "react";

export default function useKeyPress(buttonClick) {
	const [isClick, setIsClick] = useState(false)
	useEffect(() => {
		const keyDown = event => {
			if (event.key === buttonClick) setIsClick(true)
		}
		const KeyUp = event => {
			if (event.key === buttonClick) setIsClick(false)
		}
		window.addEventListener("keydown", keyDown)
		window.addEventListener("keyup", KeyUp)
		return () => {
			window.removeEventListener("keydown", keyDown)
			window.removeEventListener("keyup", KeyUp)
		}

	}, [buttonClick])
	return isClick

}