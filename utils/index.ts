

export default async function fetchCars() {
    const headers = {
		'X-RapidAPI-Key': 'fb3ffa8c13msh24745b183f59cb7p18062ejsnfcfb488ffae6',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',{headers:headers})
    const data = response.json()
  return data
}
