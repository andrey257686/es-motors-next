'use client';

import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export default function MapComponent() {
  const mapCenter = [51.568884, 39.122646];
  const mapStyle = {
    width: '100%',
    height: '100%',
    borderRadius: '10px',
    overflow: 'hidden',
  };

  const placemarkOptions = {
    iconLayout: 'default#image',
    iconImageHref: '/images/location.svg',
    iconImageSize: [120, 120],
    iconImageOffset: [-60, -110],
  };

  return (
    <YMaps query={{ apikey: process.env.YANDEX_API_KEY }}>
      <Map defaultState={{ center: mapCenter, zoom: 17 }} style={mapStyle}>
        <Placemark geometry={mapCenter} options={placemarkOptions} />
      </Map>
    </YMaps>
  );
}
