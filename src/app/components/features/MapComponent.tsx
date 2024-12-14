'use client';

import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export default function MapComponent() {
  return (
    <YMaps query={{ apikey: process.env.YANDEX_API_KEY }}>
      <Map
        defaultState={{
          center: [51.568884, 39.122646],
          zoom: 17,
        }}
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '10px',
          overflow: 'hidden',
        }}
      >
        <Placemark
          geometry={[51.568884, 39.122646]}
          options={{
            iconLayout: 'default#image',
            iconImageHref: '/images/location.svg',
            iconImageSize: [120, 120],
            iconImageOffset: [-60, -110],
          }}
        />
      </Map>
    </YMaps>
  );
}
