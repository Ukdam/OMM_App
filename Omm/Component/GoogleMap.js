import { PROVIDER_GOOGLE } from 'react-native-maps';
import MapView from 'react-native-maps';
import { GoogleMapCss } from '../css/GoogleMapCss';
import { View } from "react-native";


function GoogleMap() {
    return (
        <View style={GoogleMapCss.screen}>
            <MapView // 셀프클로징해도 되지만 후의 마커를 위해서
                style={GoogleMapCss.map}
                initialRegion={{
                    latitude: 37.00000,
                    longitude: 126.00000,
                    latitudeDelta: 0.1,
                    longitudeDelta: 0.01,
                }}
                provider={PROVIDER_GOOGLE}
            >
            </MapView>
        </View>
    )
}

export default GoogleMap