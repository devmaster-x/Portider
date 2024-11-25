import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// Map container style
const containerStyle = {
  height: "80vh",
  width: "100%"
};

// Default center of the map (e.g., Toronto)
const defaultCenter = {
  lat: 43.65107,
  lng: -79.347015,
};

// Delivery places
const deliveryPlaces = [
  { name: 'Oakville', location: { lat: 43.467517, lng: -79.687666 } },
  { name: 'Mississauga', location: { lat: 43.589045, lng: -79.64412 } },
  { name: 'Brampton', location: { lat: 43.731548, lng: -79.762418 } },
  { name: 'Milton', location: { lat: 43.518299, lng: -79.877404 } },
  { name: 'Etobicoke', location: { lat: 43.654187, lng: -79.567981 } },
  { name: 'Toronto', location: { lat: 43.70011, lng: -79.4163 } },
];


const Areas = () => {
  return (
    <div className="areas-section py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">Our Delivery Areas</h2>
        <p className="text-md md:text-xl text-center text-[#616161] mb-8">
          Explore our coverage areas. We deliver to the following locations quickly and efficiently.
        </p>
        {/* Google Map */}
        <LoadScript googleMapsApiKey={process.env.REACT_APP_MAP_KEY}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={defaultCenter}
            zoom={10}
          >
            {deliveryPlaces.map((place, index) => (
              <Marker
                key={index}
                position={place.location}
                title={place.name}
              />
            ))}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default Areas;
