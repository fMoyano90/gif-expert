import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrind";

const GifExpertApp = () => {
  // const categorias = ["One Punch", "Samurai X", "Dragon Ball"];
  const [categorias, setCategorias] = useState(["Dragon Ball"]);

  //   const handleAdd = () => {
  //     // Ambas formas son correctas
  //     // setCategorias([...categorias, "Hunter X"]);
  //     setCategorias((cats) => [...categorias, "Hunter X"]);
  //   };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategorias={setCategorias} />
      <hr />

      {/* <button onClick={handleAdd}>Agregar</button> */}
      <ol>
        {categorias.map((categoria) => (
          <GifGrid key={categoria} categoria={categoria} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
