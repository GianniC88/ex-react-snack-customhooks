import { useState } from "react";

export default function useSwitch(initialValue = false) {
	const [isOn, setIson] = useState(initialValue)
	const toggle = () => {
		setIson(curr => !curr)
	}
	return [isOn, toggle]
}
