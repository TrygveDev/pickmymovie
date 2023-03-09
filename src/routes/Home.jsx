import { useNavigate } from "react-router-dom";
import styles from "../styles/Home.module.css";

function Home() {
	const nav = useNavigate();

	return (
		<div className={styles.container}>
			<h1>pickmymovie</h1>
			<div className={styles.cardContainer}>
				<div className={styles.card} onClick={() => nav("/trending")}>
					Trending
				</div>
				<div className={styles.card} onClick={() => nav("/action")}>
					Action
				</div>
				<div className={styles.card} onClick={() => nav("/comedy")}>
					Comedy
				</div>
				<div className={styles.card} onClick={() => nav("/horror")}>
					Horror
				</div>
				<div className={styles.card} onClick={() => nav("/thriller")}>
					Thriller
				</div>
				<div className={styles.card} onClick={() => nav("/random")}>
					Random
				</div>
			</div>
		</div>
	);
}

export default Home;
