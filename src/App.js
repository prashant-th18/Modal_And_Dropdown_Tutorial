import { useState } from "react";
import styles from "./App.module.css";
import Dropdown from "./Components/Dropdown/Dropdown";
import Modal from "./Components/Modal/Modal";

function App() {
	const [showModal, setShowModal] = useState(false);
	// This is responsible for showing the modal
	const [showDropdown, setShowDropdown] = useState(false);

	const closeHandler = () => {
		setShowModal(false);
	};

	return (
		<div className={styles.app}>
			{showModal && (
				<Modal onClose={closeHandler}>
					<div className={styles.app_modal}>
						<p> This is sent from App.js </p>
						<button
							onClick={() => {
								closeHandler();
							}}
						>
							Close
						</button>
					</div>
				</Modal>
			)}
			<div className={styles.app_nav}>
				<div className={styles.app_dropdown}>
					{/* I Have to give the above div element position: relative, so that my dropdown appears below it */}
					<button onClick={() => setShowDropdown(true)}>Dropdown</button>
					{showDropdown && (
						<Dropdown onClose={() => setShowDropdown(false)}>
							<li>Item 1</li>
							<li>Item 2</li>
							<li>Item 3</li>
							<li>Item 4</li>
						</Dropdown>
					)}
				</div>
				<button
					onClick={() => {
						setShowModal(true);
					}}
				>
					Modal
				</button>
			</div>
		</div>
	);
}

export default App;
