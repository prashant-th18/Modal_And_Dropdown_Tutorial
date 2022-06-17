import React from "react";
import styles from "./Modal.module.css";

function Modal(props) {
	const modalClickHandler = () => {
		// Okay so if this is called, I have to close the modal
		if (props.onClose) props.onClose();
	};

	const containerClickHandler = (event) => {
		// To stop the event bubbling(i.e. control going upwards and firing modalClickHandler as well)
		event.stopPropagation();
	};

	return (
		<div className={styles.modal} onClick={modalClickHandler}>
			{/* All the things including and excluding that block in the middle will be because of this div. */}
			<div className={styles.modal_container} onClick={containerClickHandler}>
				{/* What we see in the box will be present here! */}
				{props.children}
			</div>
		</div>
	);
}

export default Modal;
