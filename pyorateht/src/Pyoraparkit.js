import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Pyoraparkit = () => {
  const [pyoraparkit, setPyoraparkit] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await axios.get('https://services1.arcgis.com/sswNXkUiRoWtrx0t/arcgis/rest/services/Helsingin_ja_Espoon_kaupunkipy%C3%B6r%C3%A4asemat/FeatureServer/0/query?where=1%3D1&outFields=ID,Nimi,Name,Osoite,Kaupunki,Kapasiteet,x,y,Operaattor&outSR=4326&f=json');
      console.log(res.data)
      setPyoraparkit(res.data.features)
    }
    getData();
  });

  return (

    <div>
      {pyoraparkit.map(pyoraparkki => {
        return (
          <li>
            Parkin osoite: {pyoraparkki.attributes.Osoite} -
            Parkin kapasiteetti: {pyoraparkki.attributes.Kapasiteet}
          </li>
        )
      })}
    </div>
  )
}

export default Pyoraparkit;
