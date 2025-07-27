import React, { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { FaMapPin } from 'react-icons/fa';
import { createRoot } from 'react-dom/client';

const Map = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json', 
      center: [120.936778, 14.345028], 
      zoom: 2, 
      attributionControl: false,
    });

    const markerElement = document.createElement('div');
    markerElement.className = 'custom-marker';

    const addressElement = document.createElement('div');
    addressElement.className = 'address-text';

    const root = createRoot(addressElement);
    root.render(<div className='flex justify-center items-center'><img src="/src/assets/dasma.jpg" alt="location" /> <p>Dasmariñas, Cavite, Philippines</p></div>);

    const isMarkerWithinBounds = (lngLat) => {
      const bounds = map.getBounds();
      return bounds.contains(lngLat);
    };

    const markerLngLat = [120.936778, 14.345028];
    if (isMarkerWithinBounds(markerLngLat)) {
      new maplibregl.Marker({ element: markerElement })
        .setLngLat(markerLngLat)
        .addTo(map);

      new maplibregl.Marker({ element: addressElement, offset: [0, -50] }) 
        .setLngLat(markerLngLat)
        .addTo(map);
    }

    map.on('load', () => {
      map.flyTo({
        center: [120.936778, 14.345028],
        zoom: 10,
        speed: 0.8, 
        curve: 1,
      });
    });

    return () => map.remove();
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <div ref={mapContainer} style={{ width: '100%', height: '100%' }} className='rounded-t-xl' />
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-zinc-900/100 to-transparent pointer-events-none"></div> 
    </div>
  );
};

export default Map;