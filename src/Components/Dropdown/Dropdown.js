import React, { useEffect, useRef } from "react";
import styles from "./Dropdown.module.css";

function Dropdown(props) {
	const dropdownRef = useRef(null);

	const handleClick = (event) => {
		// console.log(dropdownRef); // When our dropdown is clicked then, dropdownRef is activated
		if (dropdownRef && !dropdownRef.current.contains(event.target)) {
			// We will reach this block of code if we clicked at a part other than the dropdown list
			console.log("Called");
			if (props.onClose) props.onClose();
		}
	};

	useEffect(() => {
		// Now, I can listen on the whole window
		document.addEventListener("click", handleClick, { capture: true });

		// During unmount/removal of components, it is a good practice to remove the event listeners we have applied
		return () => {
			document.removeEventListener("click", handleClick, { capture: true });
		};
	});

	return (
		<div ref={dropdownRef} className={styles.dropdown}>
			{props.children}
		</div>
	);
}

export default Dropdown;
