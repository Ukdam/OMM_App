import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SwiperProductCss } from "../css/SwiperProductcss";
import { Grid, Col, Row } from 'react-native-easy-grid';
import Swiper from 'react-native-swiper';
import { ScrollView } from "react-native-gesture-handler";
import JangBtnPay from "./JangBtnPay";


function SwiperProduct() {
    return (
        <>
            <ScrollView style={SwiperProductCss.ViewContainer}>
                <Grid style={SwiperProductCss.gridContainer}>
                    <Row>
                        <Col>
                            <TouchableOpacity style={SwiperProductCss.gridItem} onPress={() => console.log('칸 1')}>
                                <Text style={SwiperProductCss.text}>칸 1</Text>
                            </TouchableOpacity>
                        </Col>
                        <Col>
                            <TouchableOpacity style={SwiperProductCss.gridItem} onPress={() => console.log('칸 2')}>
                                <Text style={SwiperProductCss.text}>칸 2</Text>
                            </TouchableOpacity>
                        </Col>
                    </Row >
                    <Row>
                        <Col>
                            <TouchableOpacity style={SwiperProductCss.gridItem} onPress={() => console.log('칸 3')}>
                                <Text style={SwiperProductCss.text}>칸 3</Text>
                            </TouchableOpacity>
                        </Col>
                        <Col>
                            <TouchableOpacity style={SwiperProductCss.gridItem} onPress={() => console.log('칸 4')}>
                                <Text style={SwiperProductCss.text}>칸 4</Text>
                            </TouchableOpacity>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <TouchableOpacity style={SwiperProductCss.gridItem} onPress={() => console.log('칸 3')}>
                                <Text style={SwiperProductCss.text}>칸 3</Text>
                            </TouchableOpacity>
                        </Col>
                        <Col>
                            <TouchableOpacity style={SwiperProductCss.gridItem} onPress={() => console.log('칸 4')}>
                                <Text style={SwiperProductCss.text}>칸 4</Text>
                            </TouchableOpacity>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <TouchableOpacity style={SwiperProductCss.gridItem} onPress={() => console.log('칸 3')}>
                                <Text style={SwiperProductCss.text}>칸 3</Text>
                            </TouchableOpacity>
                        </Col>
                        <Col>
                            <TouchableOpacity style={SwiperProductCss.gridItem} onPress={() => console.log('칸 4')}>
                                <Text style={SwiperProductCss.text}>칸 4</Text>
                            </TouchableOpacity>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <TouchableOpacity style={SwiperProductCss.gridItem} onPress={() => console.log('칸 3')}>
                                <Text style={SwiperProductCss.text}>칸 3</Text>
                            </TouchableOpacity>
                        </Col>
                        <Col>
                            <TouchableOpacity style={SwiperProductCss.gridItem} onPress={() => console.log('칸 4')}>
                                <Text style={SwiperProductCss.text}>칸 4</Text>
                            </TouchableOpacity>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <TouchableOpacity style={SwiperProductCss.gridItem} onPress={() => console.log('칸 3')}>
                                <Text style={SwiperProductCss.text}>칸 3</Text>
                            </TouchableOpacity>
                        </Col>
                        <Col>
                            <TouchableOpacity style={SwiperProductCss.gridItem} onPress={() => console.log('칸 4')}>
                                <Text style={SwiperProductCss.text}>칸 4</Text>
                            </TouchableOpacity>
                        </Col>
                    </Row>
                </Grid>
            </ScrollView>

        </>

    )
}

export default SwiperProduct;