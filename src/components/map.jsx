import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { createRoot } from "react-dom/client";
import {motion} from "framer-motion";
import dasmaImage from "../assets/dasma.jpg";
import flagImage from "../assets/flag.png";

const Map = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
      center: [120.936778, 14.345028],
      zoom: 2,
      attributionControl: false,
    });

    const markerElement = document.createElement("div");
    markerElement.className = "custom-marker";

    const addressElement = document.createElement("div");

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

    map.on("load", () => {
      map.flyTo({
        center: [120.936778, 14.345028],
        zoom: 16,
        speed: 1.5,
        curve: 1,
      });

      map.once("moveend", () => {
        

        const root = createRoot(addressElement);
        root.render(
          <motion.div
            className="flex justify-center space-x-2 text-xs items-center border border-white/20 p-2 shadow-md pop  text-white  backdrop-blur-md rounded-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{ WebkitBackdropFilter: "blur(20px)" }}
          >
            <img src={dasmaImage} className="size-5 ring-2  rounded-full border-2 border-zinc-800" alt="location" />
            <p className="flex justify-center items-center">Dasmariñas, Cavite, Philippines <img src={flagImage} className="size-6" alt="flag" /></p>
          </motion.div>
        );
      });
    });

    return () => map.remove();
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <div
        ref={mapContainer}
        style={{ width: "100%", height: "100%" }}
        className="rounded-t-xl"
      />
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-zinc-900/100 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default Map;
