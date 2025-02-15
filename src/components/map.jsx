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
      style: 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json', // Dark mode style URL
      center: [120.9803890, 14.4141763], // Manila, Philippines
      zoom: 2, // Start zoomed out
      attributionControl: false,
    });

    // Create a custom marker element
    const markerElement = document.createElement('div');
    markerElement.className = 'custom-marker';

    // Create a custom address element
    const addressElement = document.createElement('div');
    addressElement.className = 'address-text';

    // Use createRoot to render the address element with the icon
    const root = createRoot(addressElement);
    root.render(<p>📌 Bacoor, Cavite, Philippines 🌍</p>);

    // Function to check if the marker is within the bounds of the map container
    const isMarkerWithinBounds = (lngLat) => {
      const bounds = map.getBounds();
      return bounds.contains(lngLat);
    };

    // Check if the marker is within the bounds before adding it to the map
    const markerLngLat = [120.9803890, 14.4141763];
    if (isMarkerWithinBounds(markerLngLat)) {
      new maplibregl.Marker({ element: markerElement })
        .setLngLat(markerLngLat)
        .addTo(map);

      new maplibregl.Marker({ element: addressElement, offset: [0, -50] }) // Adjust the offset as needed
        .setLngLat(markerLngLat)
        .addTo(map);
    }

    // Animate the map to zoom in
    map.on('load', () => {
      map.flyTo({
        center: [120.9803890, 14.4141763],
        zoom: 10,
        speed: 0.8, // Adjust the speed of the zoom
        curve: 1, // Adjust the curve of the zoom
      });
    });

    return () => map.remove();
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <div ref={mapContainer} style={{ width: '100%', height: '100%' }} className='rounded-t-xl' />
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-zinc-900/100 to-transparent pointer-events-none"></div> {/* Add the gradient overlay */}
    </div>
  );
};

export default Map;