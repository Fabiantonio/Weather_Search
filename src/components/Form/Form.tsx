import { countries } from "../../data/countries";
import type { SearchType } from "../../types";
import { Alert } from "../Alert/Alert";
import styles from "./Form.module.css";
import { useState } from "react";

type FormProps = {
  fetchWeather: (search: SearchType) => Promise<void>

}

export const Form = ({fetchWeather}: FormProps) => {
  const [search, setSearch] = useState<SearchType>({
    city: "",
    country: "",
  });
  const [alert, setAlert] = useState('')  

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(Object.values(search).includes('')){
      setAlert('Campos incompletos')
      return
    }
    setAlert('')
    fetchWeather(search)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {alert && <Alert>{alert}</Alert>}
      <div className={styles.fields}>
        <label htmlFor="city">Ciudad</label>
        <input
          type="text"
          id="city"
          name="city"
          placeholder="Ingresa una ciudad"
          value={search.city}
          onChange={handleChange}
        />
      </div>
      <div className={styles.fields}>
        <label htmlFor="country">País</label>
        <select
          id="country"
          name="country"
          value={search.country}
          onChange={handleChange}
        >
          <option value="">Seleccione un Pais</option>
          {countries.map((country) => (
            <option key={country.code} value={country.code}>
              {country.name}
            </option>
          ))}
        </select>
      </div>
      <input type="submit" value="Buscar" />
    </form>
  );
};
