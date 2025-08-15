export const formatTemperature = (temp: number) => {
  return (temp - 273.15).toFixed(1)
}