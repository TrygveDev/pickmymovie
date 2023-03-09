import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import styles from "../styles/Trending.module.css";

function Trending() {
	const [movies, setMovies] = useState([]);

	const getTrending = () => {
		fetch(
			"https://api.themoviedb.org/3/trending/movie/day?api_key=f8840aafe93214e478792512d5efa96e"
		)
			.then((response) => response.json())
			.then((data) => {
				console.log(data.results);
				setMovies(data.results);
			});
	};

	useEffect(() => {
		getTrending();
	}, []);

	return (
		<div className={styles.container}>
			<h1>Trending</h1>
			<div className={styles.cardContainer}>
				{Object.values(movies).map((movie) => {
					return (
						<div
							className={styles.movieCard}
							key={movie.id}
							onClick={() =>
								window.open(
									`https://themoviedb.org/movie/${movie.id}`,
									"_blank"
								)
							}
						>
							<img
								src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
								alt={movie.title}
								width="100"
							/>
							<h3>{movie.title}</h3>
						</div>
					);
				})}
			</div>
			<div>
				<FontAwesomeIcon icon={faArrowLeft} />
				<FontAwesomeIcon icon={faArrowRight} />
			</div>
		</div>
	);
}

export default Trending;
