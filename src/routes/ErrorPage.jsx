import { useRouteError } from "react-router-dom";

const styles = {
	errorPage: {
		display: "flex",
		flexDirection: "column",
		height: "100vh",
		width: "100vw",
		alignItems: "center",
		justifyContent: "center",
		color: "#fff",
		backgroundColor: "#000",
	},
};

export default function ErrorPage() {
	const error = useRouteError();
	console.error(error);

	return (
		<div style={styles.errorPage}>
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
		</div>
	);
}
