import { useQuery } from "react-query"

const StarWar = () => {

	const fetchPlants = async ({queryKey}) => {
		console.log(queryKey)
		const response = await fetch(`https://swapi.dev/api/planets/`)

		return response.json()
	}

}