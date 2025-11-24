import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

// Type assertions to fix React 18 compatibility
const Map = ComposableMap as any;
const Geos = Geographies as any;
const Geo = Geography as any;
const Pin = Marker as any;

const markers: {
  markerOffset: number;
  name: string;
  coordinates: [number, number];
}[] = [
  {
    markerOffset: 0,
    name: "Alagoas",
    coordinates: [-35.7844, -9.5713],
  },
  {
    markerOffset: 0,
    name: "Amapá",
    coordinates: [-51.0725, 1.4302],
  },
  {
    markerOffset: 0,
    name: "Amazonas",
    coordinates: [-65.856, -3.4168],
  },
  {
    markerOffset: 0,
    name: "Bahia",
    coordinates: [-41.7007, -12.5796],
  },
  {
    markerOffset: 0,
    name: "Ceará",
    coordinates: [-39.5267, -5.1994],
  },
  {
    markerOffset: 0,
    name: "Distrito Federal",
    coordinates: [-47.8645, -15.7998],
  },
  {
    markerOffset: 0,
    name: "Goiás",
    coordinates: [-49.2647, -16.6868],
  },
  {
    markerOffset: 0,
    name: "Maranhão",
    coordinates: [-45.2853, -5.4803],
  },
  {
    markerOffset: 0,
    name: "Mato Grosso",
    coordinates: [-56.9236, -12.6658],
  },
  {
    markerOffset: 0,
    name: "Mato Grosso do Sul",
    coordinates: [-54.6201, -20.4697],
  },
  {
    markerOffset: 0,
    name: "Minas Gerais",
    coordinates: [-44.5558, -18.5122],
  },
  {
    markerOffset: 0,
    name: "Pará",
    coordinates: [-52.4417, -3.7167],
  },
  {
    markerOffset: 0,
    name: "Paraíba",
    coordinates: [-36.7828, -7.0558],
  },
  {
    markerOffset: 0,
    name: "Pernambuco",
    coordinates: [-35.9212, -8.2825],
  },
  {
    markerOffset: 0,
    name: "Piauí",
    coordinates: [-42.7289, -7.7183],
  },
  {
    markerOffset: 0,
    name: "Rio de Janeiro",
    coordinates: [-42.6906, -22.2584],
  },
  {
    markerOffset: 0,
    name: "Rio Grande do Sul",
    coordinates: [-51.2177, -30.0346],
  },
  {
    markerOffset: 0,
    name: "Rondônia",
    coordinates: [-63.5806, -11.5057],
  },
  {
    markerOffset: 0,
    name: "Santa Catarina",
    coordinates: [-50.2189, -27.2423],
  },
  {
    markerOffset: 0,
    name: "São Paulo",
    coordinates: [-46.6333, -23.5505],
  },
  {
    markerOffset: 0,
    name: "Sergipe",
    coordinates: [-37.3857, -10.5741],
  },
];

const WhereAreWeMap = () => {
  const t = useTranslations("who-we-are.WhereAreWe");
  const [geoData, setGeoData] = useState(null);

  useEffect(() => {
    fetch("/assets/geo/custom.geo.json")
      .then((response) => response.json())
      .then((data) => setGeoData(data));
  }, []);

  if (!geoData) {
    return <div>{t("mapLoading")}</div>;
  }

  return (
    <Map
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [53, 15, 0],
        scale: 600,
      }}
    >
      <Geos geography={geoData}>
        {({ geographies }: any) =>
          geographies.map((geo: any) => (
            <Geo
              key={geo.rsmKey}
              geography={geo}
              className="fill-primary-500"
            />
          ))
        }
      </Geos>
      {markers.map(({ name, coordinates }) => (
        <Pin key={name} coordinates={coordinates}>
          <g
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(-12, -24)"
            className="fill-none stroke-secondary-700 stroke-2"
          >
            <path
              d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z"
              fill="#fff"
            />
            <circle cx="12" cy="10" r="3" fill="#eddc11" />
          </g>
          <text
            textAnchor="middle"
            y={-30}
            style={{ fontFamily: "system-ui", fill: "#5D5A6D", fontSize: "0px" }}
          >
            {name}
          </text>
        </Pin>
      ))}
    </Map>
  );
};

export default WhereAreWeMap;
