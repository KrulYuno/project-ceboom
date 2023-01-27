import React from "react";
import PropTypes from "prop-types";

import {Marker, Tooltip, useMap} from "react-leaflet"
import L from "leaflet"

import './Markers.css'
import { useLocation } from "react-router";

// var test = [{type: "Hospitals", cords: [10.253781, 123.838469]},
// {type: "Cemetaries", cords: [10.263133, 123.839979]},
// {type: "Barangay Halls", cords: [10.563133, 123.839979]}]

var markerIcon = L.Icon.extend({
    options:{
        iconSize: [35,35],
        // opacity: 0.3
    }
});

var specialMarkerIcon = L.Icon.extend({
    options:{
        iconSize: [50,50],
        shadowSize: [68, 95],
    }
})

const 
// airportIcon = new markerIcon({iconUrl: require('../../Assets/icons/Airport.png')}),
barIcon = new markerIcon({iconUrl: require('../../Assets/icons/Bar.png')}),
barangayHallIcon = new markerIcon({iconUrl: require('../../Assets/icons/BarangayHall.png')}),
busStationIcon = new markerIcon({iconUrl: require('../../Assets/icons/BusStation.png')}),
cemetaryIcon = new markerIcon({iconUrl: require('../../Assets/icons/Cemetery.png')}),
churchIcon = new markerIcon({iconUrl: require('../../Assets/icons/Church.png')}),
cityHallIcon = new markerIcon({iconUrl: require('../../Assets/icons/CityHall.png')}),
fireStationIcon = new markerIcon({iconUrl: require('../../Assets/icons/FireStation.png')}),
healthCenterIcon = new markerIcon({iconUrl: require('../../Assets/icons/HealthCenter.png')}),
hospitalIcon = new markerIcon({iconUrl: require('../../Assets/icons/Hospital.png')}),
mallDepartmentIcon = new markerIcon({iconUrl: require('../../Assets/icons/MallDepartment.png')}),
municipalHallIcon = new markerIcon({iconUrl: require('../../Assets/icons/MunicipalHall.png')}),
policeStationIcon = new markerIcon({iconUrl: require('../../Assets/icons/PoliceStation.png')}),
portIcon = new markerIcon({iconUrl: require('../../Assets/icons/Port.png')}),
publicMarketIcon = new markerIcon({iconUrl: require('../../Assets/icons/PublicMarket.png')}),
restaurantIcon = new markerIcon({iconUrl: require('../../Assets/icons/Restaurant.png')}),
schoolIcon = new markerIcon({iconUrl: require('../../Assets/icons/School.png')}),
// templeIcon = new markerIcon({iconUrl: require('../../Assets/icons/Temple.png')}),
touristSpotIcon = new markerIcon({iconUrl: require('../../Assets/icons/TouristSpot.png')}),
defaultIcon = new markerIcon({iconUrl: require('../../Assets/icons/DefaultIcon.png')}),
startIcon = new specialMarkerIcon({iconUrl: require('../../Assets/icons/Start.png')}),
endIcon = new specialMarkerIcon({iconUrl: require('../../Assets/icons/End.png')})

export function locationChecker(location){
    // console.log(location)
    if(location == undefined){
        // console.log("bobo")
    }

    if(location === "Hospital"){
        return hospitalIcon
    }else if(location === "Health Center"){
        return healthCenterIcon
    }else if(location === "Pharmacy"){
        return hospitalIcon
    }else if(location === "Barangay Hall"){
        return barangayHallIcon
    }else if(location === "Mall/Department Store"){
        return mallDepartmentIcon
    }else if(location === "Market"){
        return publicMarketIcon
    }else if(location === "City Hall"){
        return cityHallIcon
    }else if(location === "School"){
        return schoolIcon
    }else if(location === "Bar"){
        return barIcon
    }else if(location === "Police Station"){
        return policeStationIcon
    }else if(location === "Fire Station"){
        return fireStationIcon
    }else if(location === "Church"){
        return churchIcon
    }else if(location === "Restaurant"){
        return restaurantIcon
    }else if(location === "Tourist Spot"){
        return touristSpotIcon
    }else if(location === "Cemetery"){
        return cemetaryIcon
    }else if(location === "Police Station"){
        return policeStationIcon
    }else if(location === "Municipal Hall"){
        return municipalHallIcon
    }else if(location === "Port"){
        return portIcon
    }else if(location === "Bus Terminal"){
        return busStationIcon
    }else{
        return defaultIcon
    }
}

const MarkerLayer = (data, showTooltip) => {
    const subpage = useLocation().hash
    // console.log(data)
    // return(<></>)
    if (data != undefined){
        // console.log(data.data.landmark_type)
    
    //comment out up until else to not display intersections
    // if(data.data.landmark_type == "Intersection"){
    //     return null
    // }
    if(data.data.landmark_type == "Start"){
        return(
            <div>
                <Marker
                    position = {[data.data.latitude.toString(),data.data.longitude.toString()]} 
                    icon = {startIcon}
                >
                    <Tooltip className="marker-tooltip">
                        {/* <p>{data.data.id}</p> */}
                        <b className="marker-name">{data.data.name}</b>
                        <p className="marker-type">{data.data.landmark_type}</p>
                        <p className="marker-location">{data.data.location}</p>
                    </Tooltip>
                </Marker>
            </div>
        )
    }else if(data.data.landmark_type == "End"){
        return(
            <div>
                <Marker
                    position = {[data.data.latitude.toString(),data.data.longitude.toString()]} 
                    icon = {endIcon}
                    
                >
                <Tooltip className="marker-tooltip">
                    {/* <p>{data.data.id}</p> */}
                    <b className="marker-name">{data.data.name}</b>
                    <p className="marker-type">{data.data.landmark_type}</p>
                    <p className="marker-location">{data.data.location}</p>
                </Tooltip>
                </Marker>
            </div>
        )
    } else
    { 
        return(
            <div>
                <Marker 
                    position = {[data.data.latitude.toString(),data.data.longitude.toString()]} 
                    icon = {locationChecker(data.data.landmark_type)}
                >
                    {
                        subpage !== "#addroads"?
                            <Tooltip className="marker-tooltip">
                                {/* <p>{data.data.id}</p> */}
                                <b className="marker-name">{data.data.name}</b>
                                <p className="marker-type">{data.data.landmark_type}</p>
                                <p className="marker-location">{data.data.location}</p>
                            </Tooltip>
                        :<></>
                    }
                </Marker>
            </div>
        )
    }
    }
}

// var barangayHallIcon = new markerIcon({iconUrl: require('../../Assets/icons/Airport.png')});

MarkerLayer.propTypes = {
    data: PropTypes.object,
}

export default MarkerLayer