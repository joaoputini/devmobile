import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import Styles from './styles';

const API_KEY = ""; 
const URL = (lat, lng) => `https://maps.google.com/maps/api/geocode/json?key=${API_KEY}&latlng=${lat},${lng}`;

export default function WhereAmI() {
  const [address, setAddress] = useState("loading...");
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();

  useEffect(() => {
    function setPosition({ coords: { latitude, longitude } }) {
      setLongitude(longitude);
      setLatitude(latitude);

      fetch(URL(latitude, longitude))
        .then((resp) => resp.json())
        .then(({ results }) => {
          if (results.length > 0) {
            setAddress(results[0].formatted_address);
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    }

    let watcher;

    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync(); 
      if (status !== "granted") {
        return;
      }

      let location = await Location.getCurrentPositionAsync({}); 
      setPosition(location);

      watcher = await Location.watchPositionAsync(
        { accuracy: Location.Accuracy.Highest }, 
        setPosition
      );
    })();

    return () => {
      watcher?.remove();
    };
  }, []);

  return (
    <View style={Styles.container}>
      <Text style={Styles.label}>Endereço: {address}</Text>
      <Text style={Styles.label}>Latitude: {latitude}</Text>
      <Text style={Styles.label}>Longitude: {longitude}</Text>
      <StatusBar style="auto" />
    </View>
  );
}
