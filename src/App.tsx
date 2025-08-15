import styles from "./App.module.css";
import { Alert } from "./components/Alert/Alert";
import { Form } from "./components/Form/Form";
import { Spinner } from "./components/spinner/Spinner";
import { WeatherDetail } from "./components/WeatherDetail/WeatherDetail";
import useWeather from "./hooks/useWeather";

function App() {
  const { fetchWeather, weather, hasWeatherData, loading, notFound } =
    useWeather();

  return (
    <>
      <h1 className={styles.title}>Buscador de Clima</h1>
      <div className={styles.container}>
        <div>
          <Form fetchWeather={fetchWeather} />
          {notFound && <Alert>Ciudad no encontrada</Alert>}
        </div>
        <div>
          {loading && <Spinner />}
          {!loading && hasWeatherData && <WeatherDetail weather={weather} />}
        </div>
      </div>
    </>
  );
}

export default App;
