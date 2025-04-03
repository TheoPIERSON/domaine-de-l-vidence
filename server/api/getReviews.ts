export default defineEventHandler(async (event) => {
  const placeId = "ChIJAQBcfcYg3UcRDYZtCUk4ysE";
  const apiKey = "AIzaSyC4QowkuljgKTV7IspAB4BO5zMMWX7gLJU ";

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`;

  const response = await fetch(url);
  const data = await response.json();

  return data.result.reviews || [];
});
