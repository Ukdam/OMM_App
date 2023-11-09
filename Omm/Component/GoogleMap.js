import { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapView from 'react-native-maps';
import { GoogleMapCss } from '../css/GoogleMapCss';
import { View } from "react-native";


function GoogleMap() {
    return (
        <View style={GoogleMapCss.screen}>
            <MapView // 셀프클로징해도 되지만 후의 마커를 위해서
                style={GoogleMapCss.map}
                initialRegion={{
                    latitude: 35.965,
                    longitude: 126.961,
                    latitudeDelta: 0.02,
                    longitudeDelta: 0.01,
                }}
                provider={PROVIDER_GOOGLE}
            >
                <Marker
                    coordinate={{
                        latitude: 35.9681,
                        longitude: 126.9587,
                    }}
                    title={"원대점"}
                    description={"원대점 1호"}
                />
                <Marker
                    coordinate={{
                        latitude: 35.96,
                        longitude: 126.9587,
                    }}
                    title={"원대점2"}
                    description={"원대점 2호"}
                />
            </MapView>
        </View>
    )
}

export default GoogleMap