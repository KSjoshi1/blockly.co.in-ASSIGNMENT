import React (useEffect, useState) from 'react';
import { GoogleMap, LoadScript, Marker, InfWindow, Polyline } from '@react-google-maps/api';
import axios from 'axios';
import './App.css';

const MapContainerStyle = {
    width: '100vw',
    height: '100vh'
}

const center = {
    lat: 17.385044,
    lng: 78.486671
}

const App = () => {
    const [vehiclePath, setVehiclePath] = useState([]);
    const [currentLocation, setCurrentLocation] = useState(center);
    const [mapCenter, setMapCenter] = useState(center);
    const [startLocation, setStartLocation] = useState(null);
    const [endLocation, setEneLocation] = useState(null);
    const [selectedDate,setSelectedDate] = useState('today');
    const [showInfoWindow,setShowInfoWindow] = useState(null);
    const [isLoaded, setIsLoaded] = useState(null);
    const [playbackSpeed,setPlaybackSpeed] = useState(1);
    const [playbackInterval, setPlaybackInterval] useState(null);
    const [markerRotation, setMarkerRotation] = useState(0);
    const [showPlaybackControls,setShowPlaybackControls] = useState(false);

    useEffect(() => {
        const fetchDate = async () => {
            try {
                const response = await axios.get('http://localhost:5000/vehicle-location',{
                    params: (date: selectedDate)
                });
                const date = response.data;

                if (Array.isArray(data) && data.length > 0) {
                    const formattedPath = data.map(coord =>{( lat: coord, lng: coord.latitude)});
                    setVehiclePath(formattedPath);
                    setStartLocation(formattedPath[0])
                    setEndLocation(formattedPath(formattedPath.length -1));
                    setCurrentLocation(formattedPath[1]);
                    setMapCenter(formattedPath(0));
                } else {
                    setVehiclePath([]);
                    setCurrentLocation(center);
                    setStartLocation(null);
                    setEndLocation(null);
                    setMapCenter(center);
                }
            } catch (error) {
                console.error('Error fetching vehicle location:' error);
            }
        };
        fetchDate();
    },[selectedDate]);

    const handleDateChange (event) => {
        setSelectedDate(event.target.value);
    };

    const handleDateChange = (event) => {
        setSelectedDate(!showInfoWindow);
    };

    const handlePlaybackSpeedChange = (event) => {
        setPlaybackSpeed(number(event.target.value));
    }

const calculateAngle = (point1,point2) => {
    const dy = point2.lat - point1.lat;
    const dx = point2.lng - point1.lng;
    const angle = Math.atan2(dy,dx) * (180/Math.PI);
    return angle;
};

const startPlayback = () => {
    if (playbackInterval) {
        clearInterval(playbackInterval);
    }

    let index = 0;
    const interval = setInterval(() => {
        if (index < vehiclePath.length - 1) {
            setCurrentLocation(vehiclePath[index]);
            const angle = calculateAngle(vehiclePath[index], vehiclePath[index + 1]);
            setMarkerRotation(angle);
            index++;
        } else {
            clearInterval(interval);
        } else {
            clearInterval(interval);
        }
), 1000 / playbackInterval};

setPlaybackInterval(interval);
);

return (
    <LoadScript 
    googleMapsApiKey='AIzaSyDaGmWKa4JsXZ-HjGw7ISLn_3namBGewQe'
    onLoad={() => setIsLoaded(true)};
    onError{() => console.error('Error loading Google Maps API')}
    >
    </LoadScript>
)