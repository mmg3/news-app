import { useState, useEffect } from "react";
import "primereact/resources/themes/bootstrap4-dark-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "./App.css";
import axios from "axios";
import News from "./Components/News";
import Modal from "./Components/Modal";

import Moment from "moment";

const UrlApi = "http://api.mediastack.com/v1/news?";
const ApiKey = "de5b09bcc127045fa0d32dca9cd19343";
const ApiThemes = "es&business,-sports";
const ApiOffset = 0;
const ApiLimit = 10;

function App() {
  Moment.locale("es", {
    months:
      "Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre".split(
        "_"
      ),
    monthsShort:
      "Enero._Feb._Mar_Abr._May_Jun_Jul._Ago_Sept._Oct._Nov._Dec.".split("_"),
    weekdays: "Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado".split("_"),
    weekdaysShort: "Dom._Lun._Mar._Mier._Jue._Vier._Sab.".split("_"),
    weekdaysMin: "Do_Lu_Ma_Mi_Ju_Vi_Sa".split("_"),
  });

  const [Noticias, SetNoticias] = useState([]);

  useEffect(() => {
    axios
      .get(
        decodeURIComponent(
          UrlApi +
            new URLSearchParams({
              access_key: ApiKey,
              sources: ApiThemes,
              offset: ApiOffset,
              limit: ApiLimit,
            })
        )
      )
      .then(({ data }) => SetNoticias(data.data));
  }, []);

  return (
    <div className="grid">
      {Noticias.map((info, i) => {
        return (
          <News
            key={i}
            author={info.author}
            category={info.category}
            country={info.country}
            description={info.description}
            image={info.image}
            published_at={info.published_at}
            title={info.title}
            url={info.url}
          />
        );
      })}
      <Modal />
    </div>
  );
}

export default App;
