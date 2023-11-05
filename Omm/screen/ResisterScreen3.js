import { ResisterCss3 } from "../css/ResisterCss3";
import Logo from "../Image/logo.svg";
import { TouchableOpacity, Text, View, ScrollView, Image } from 'react-native';
import { Collapse, CollapseHeader, CollapseBody, AccordionList } from 'accordion-collapse-react-native';
import Checkbox from 'expo-checkbox';
import { useState } from "react";
import CustomButton from "../Component/CustomButton";

function ResisterScreen3({ navigation }) {
    const [Check1, setCheck1] = useState(false);
    const [Check2, setCheck2] = useState(false);
    const [Check3, setCheck3] = useState(false);
    return (
        <View style={ResisterCss3.container}>
            <Logo style={ResisterCss3.tinyLogo} />
            <View>
                <Collapse>
                    <CollapseHeader>
                        <View style={ResisterCss3.CollHeaderStyle}>
                            <Checkbox
                                style={ResisterCss3.CollHeaderStyleCheck}
                                value={Check1}
                                onValueChange={setCheck1}
                            />
                            <Text style={ResisterCss3.CollHeaderStyleText}>약관동의</Text>
                        </View>
                    </CollapseHeader>
                    <CollapseBody>
                        <View style={ResisterCss3.CollBodyStyle}>
                            <Text>약관 내용</Text>
                        </View>
                    </CollapseBody>
                </Collapse>
                <Collapse>
                    <CollapseHeader>
                        <View style={ResisterCss3.CollHeaderStyle}>
                            <Checkbox
                                style={ResisterCss3.CollHeaderStyleCheck}
                                value={Check2}
                                onValueChange={setCheck2}
                            />
                            <Text style={ResisterCss3.CollHeaderStyleText}>약관동의</Text>
                        </View>
                    </CollapseHeader>
                    <CollapseBody>
                        <View style={ResisterCss3.CollBodyStyle}>
                            <Text>약관 내용</Text>
                        </View>
                    </CollapseBody>
                </Collapse>
                <Collapse>
                    <CollapseHeader>
                        <View style={ResisterCss3.CollHeaderStyle}>
                            <Checkbox
                                style={ResisterCss3.CollHeaderStyleCheck}
                                value={Check3}
                                onValueChange={setCheck3}
                            />
                            <Text style={ResisterCss3.CollHeaderStyleText}>약관동의</Text>
                        </View>
                    </CollapseHeader>
                    <CollapseBody>
                        <View style={ResisterCss3.CollBodyStyle}>
                            <Text>약관 내용</Text>
                        </View>
                    </CollapseBody>
                </Collapse>
            </View>
            <View style={ResisterCss3.btnContainer}>
                <CustomButton
                    buttonColor={'#FF50C3'}
                    title={'완료'}
                    onPress={() => navigation.navigate("Main")} />
            </View>
        </View>
    )
}

export default ResisterScreen3;