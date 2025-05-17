import React from "react";
import { View, StatusBar } from "react-native";
import MapView, { Marker } from "react-native-maps";
import styles from "./styles";

StatusBar.setBarStyle("dark-content");

export default function App() {
  return (
    <View style={styles.container}>

      <MapView
        style={styles.mapView}              
        showsPointsOfInterest={false}        
        showsUserLocation                    
        followsUserLocation                 
      >
        <Marker
          title="Duff Brewery"               
          description="Uma grande cervejaria artesanal"
          coordinate={{                   
            latitude: 43.0841878,
            longitude: -79.068802,
          }}
        />

        <Marker
          title="Pawtucket Brewery"          
          description="A Cervejaria Histórica" 
          coordinate={{                      
            latitude: 43.0841328,
            longitude: -79.068407,
          }}
        />

      </MapView>
    </View>
  );
}
