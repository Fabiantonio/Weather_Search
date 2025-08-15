import type { Weather } from "../../hooks/useWeather"
import { formatTemperature } from "../helpers"
import styles from "./WeatherDetail.module.css"

type WeatherDetailProps = {
  weather: Weather
}

export const WeatherDetail = ({weather}: WeatherDetailProps) => {
  return (
    <div className={styles.weatherContainer}>
        <h2 className={styles.cityName}>{weather.name}</h2>
        <p className={styles.temperature}>{formatTemperature(weather.main.temp)}°C</p>
        <div className={styles.minMaxContainer}>
          <div className={styles.minMax}>
            <span className={styles.minMaxLabel}>Min</span>
            <span className={styles.minMaxValue}>{formatTemperature(weather.main.temp_min)}°C</span>
          </div>
          <div className={styles.minMax}>
            <span className={styles.minMaxLabel}>Max</span>
            <span className={styles.minMaxValue}>{formatTemperature(weather.main.temp_max)}°C</span>
          </div>
        </div>
    </div>
  )
}
