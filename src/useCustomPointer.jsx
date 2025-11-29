import { useEffect, useState } from "react";

export default function useCustomPointer(icon) {
	const [position, setPosition] = useState({ x: 0, y: 0 })
	useEffect(() => {
		const mouseMove = event => {
			setPosition({ x: event.clientX, y: event.clientY })
		}
		document.addEventListener("mousemove", mouseMove)


	}, [])

	return (
		<div
			style={{
				position: "fixed",
				top: position.y,
				left: position.x,
				transform: "translate(-50%, -50%)",
				cursor: "none",
				pointerEvents: "none"

			}}
		>
			{icon}
		</div>
	)
}