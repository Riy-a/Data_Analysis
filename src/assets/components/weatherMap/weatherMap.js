import React, { useState, useEffect } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvent,
} from 'react-leaflet';
import './weatherMap.css';

const DefaultIcon = leaflet.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

leaflet.Marker.prototype.options.icon = DefaultIcon;

const SetMarkerDynamically = ({
  city,
  setCity,
  cityCoordinates,
  setCityCoordinates,
}) => {
  const [position, setPosition] = useState([
    cityCoordinates.lat,
    cityCoordinates.lon,
  ]);
  
  const map2 = useMap();

  useEffect(() => {
    map2.locate().on("locationfound", function (e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    });
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (cityCoordinates) {
      setPosition([cityCoordinates.lat, cityCoordinates.lon]);
    }
  }, [cityCoordinates]);

  const map = useMapEvent('click', (e) => {
    // fetch(
    //   `https://api.openweathermap.org/data/2.5/weather?lat=${e.latlng.lat}&lon=${e.latlng.lng}&appid=${process.env.REACT_APP_APIKEY}`
    // )
    //   .then((res) => res.json())
    //   .then((res) => {
    //     setCityCoordinates({ lat: e.latlng.lat, lon: e.latlng.lng });
    //     setCity(res.name);
    //   });
    setCityCoordinates({lat: e.latlng.lat, lon: e.latlng.lng});
    map.setView(e.latlng, map.getZoom(), { animate: true });
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${e.latlng.lat}&lon=${e.latlng.lng}&appid=${process.env.REACT_APP_APIKEY}`
    )
      .then(result => result.json())
      .then(
        (result) => {
          console.log("City changed on map");
          setCity(result.name);
        },
        );
  });

  return (
    <Marker position={[cityCoordinates.lat, cityCoordinates.lon]}>
      <Popup>{city}</Popup>
    </Marker>
  );
};

const WeatherMap = ({ city, setCity, cityCoordinates, setCityCoordinates }) => {
  const [map, setMap] = useState();
  const [position, setPosition] = useState({ Lat: 0, Long: 0, City: '' });

  useEffect(() => {
    setPosition({
      Lat: cityCoordinates.lat,
      Long: cityCoordinates.lon,
      City: city,
    });
  }, [cityCoordinates, city]);

  useEffect(() => {
    setMap(map);
  }, [map]);

  useEffect(() => {
    const mapCenter = [position.Lat, position.Long];
    if (map) {
      if (map.getZoom() < 4) {
        map.setView(mapCenter, 7);
      } else {
        map.setView(mapCenter, map.getZoom());
      }
    }
  }, [map, position]);

  return (
    <React.Fragment key="">
      <div>
        <MapContainer
          className="map"
          whenCreated={setMap}
          center={[position.Lat, position.Long]}
          doubleClickZoom
          scrollWheelZoom
          style={{ height: "500px", width: "80vw", marginLeft: "10vw", marginTop: "2rem" }}
          zoom={7}
        >
          <TileLayer
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <SetMarkerDynamically
            city={city}
            setCity={setCity}
            cityCoordinates={cityCoordinates}
            setCityCoordinates={setCityCoordinates}
          />
        </MapContainer>
      </div>
    </React.Fragment>
  );
};

export default WeatherMap;