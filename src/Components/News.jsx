import React, { useState } from "react";
import Moment from "moment";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

const News = ({
  author,
  category,
  country,
  description,
  image,
  language,
  published_at,
  source,
  title,
  url,
}) => {
  const [visible, setVisible] = useState(false);

  const header = (
    <img
      alt={title}
      src={
        image === null
          ? "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
          : image
      }
    />
  );

  const footer = (
    <>
      <span>Autor: {author}</span>
      <span>
        <br />
        Publicado: {Moment(published_at).format("LLLL")}
      </span>
    </>
  );

  const modalVisible = () => {
    setVisible(true);
  };

  return (
    <div className="col-12 md:col-6 lg:col-3 xl:col-2">
      <Card footer={footer} header={header} title={title}>
        {description}
        <Button
          label="Leer más..."
          onClick={() => modalVisible()}
          className="p-button-text"
        />
      </Card>
    </div>
  );
};

export default News;
