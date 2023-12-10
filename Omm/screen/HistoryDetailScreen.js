import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Modal,
  StyleSheet,
  Image,
  Alert,
  TouchableOpacity
} from "react-native";
import { ohstyles } from "../css/OrderHistoryCss";
import { Button, Chip, TextInput } from "react-native-paper";
import { IPContext } from "../contexts/IPContext";
import { Rating } from "react-native-ratings";
import { UserContext } from "../contexts/UserContext";
import * as ImagePicker from 'expo-image-picker';
import Toast from "react-native-toast-message";
import { useCallback } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { io } from "socket.io-client";


function HistoryDetailScreen({ route }) {
  const { itemData } = route.params;

  const { myIP } = useContext(IPContext);

  const [modalVisible, setModalVisible] = useState(false);
  const [rating, setRating] = useState(0);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [reviewText, setReviewText] = useState("");
  const { token } = useContext(AuthContext);
  const { setUserInfo, userInfo } = useContext(UserContext);

  const [image, setImage] = useState("");

  const [rData, setRData] = useState([]);
  const reviewDataCall = useCallback(async () => {
    try {
      const response = await fetch(`http://${myIP}:4000/reviewData`, {
        credentials: "include",
        headers: {
          Authorization: `Bearer ${token}`, // 로그인한 사용자의 토큰을 header에 포함시킵니다.
        },
      });
      let data = await response.json();
    // r_paymentId와 p_paymentId가 일치하는 데이터만 필터링합니다.
      console.log("페이먼트 아이디 : " + itemData._id);
      data = data.filter(review => review.r_paymentId === itemData._id);
      console.log("필터링 후 : " + JSON.stringify(data));
      setRData(data);
    } catch (error) {
      console.error(error);
    }
  }, [myIP]);
  
  useEffect(() => {
    reviewDataCall();
  }, [reviewDataCall]);
  
  useEffect(() => {
    const socket = io(`http://${myIP}:4000`);
  
    socket.on('reviewDataChanged', async () => {
      await reviewDataCall();
    });
  
    return () => {
      socket.disconnect();
    };
  }, [myIP, token]);

  const myReview = rData[0];

  // review api
  async function Review(e) {
    let response;
    const r_review = reviewText;
    const r_username = userInfo.username;
    const r_rating = rating;
    const r_ingredient = itemData.p_ingredient;
    const r_good = selectedIngredients.join(",");
    const r_paymentId = itemData._id;
    const r_userId = userInfo.id;

    // FormData 객체 생성
    let formData = new FormData();
    formData.append('r_review', r_review);
    formData.append('r_username', r_username);
    formData.append('r_rating', r_rating);
    formData.append('r_ingredient', r_ingredient);
    formData.append('r_good', r_good);
    formData.append('r_paymentId', r_paymentId);
    formData.append('r_userId', r_userId);

    // 이미지 파일 추가
    let localUri = image;  // 이미지 파일의 로컬 경로
    if (localUri) {  // 이미지가 선택되었을 때만 formData에 추가
      let filename = localUri.split('/').pop();
      let match = /\.(\w+)$/.exec(filename);
      let type = match ? `image/${match[1]}` : `image`;
      formData.append('file', { uri: localUri, name: filename, type });
    }

    try {
      response = await fetch(`http://${myIP}:4000/review`, {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
        credentials: "include",
      });
    } catch (err) {
      console.log("err", err);
    }

    try {
      if (response && response.ok) {
        setModalVisible(false);
        Toast.show({
          type: "success",
          text1: "등록 성공",
          position: "top",
          bottomOffset: 20,
          visibilityTime: 2000,
        });
      } else {
        Alert.alert("등록 실패");
      }
    } catch (e) {
      console.log("e : ", e);
    }
  }

  const selectImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <>
      <ScrollView
        style={ohstyles.detail_container}
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={ohstyles.detail__container}>
          <View style={ohstyles.detail_box1}>
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 26, fontWeight: "bold" }}>
                {itemData.p_store}
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  backgroundColor: "#d8d9da",
                  borderRadius: 8,
                  width: 70,
                  textAlign: "center",
                  marginTop: 15,
                }}
              >
                {itemData.p_kind}
              </Text>
              <Text style={{ fontSize: 14, marginTop: 15, marginBottom: 15 }}>
                2023-11-12 / 10:20
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                {itemData.p_payment}
              </Text>
              <Text style={{ fontSize: 14, marginTop: 15 }}>
                주문 번호 : 000001
              </Text>
            </View>
            <Text
              style={{
                fontSize: 24,
                width: 100,
                textAlign: "center",
                alignSelf: "center",
                height: "auto",
                letterSpacing: 2,
                borderWidth: 1.5,
                borderColor: "tomato",
                borderRadius: 10,
              }}
            >
              {itemData.p_state}
            </Text>
          </View>

          {/*  */}
          <View style={ohstyles.detail_box2}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                marginBottom: 20,
              }}
            >
              요청 사항
            </Text>
            <Text>{itemData.p_request}</Text>
          </View>

          {/*  */}

          <View style={ohstyles.detail_box2}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                marginBottom: 20,
                width: "100%",
              }}
            >
              재료
            </Text>
          </View>
          <View style={ohstyles.detail_box3}>
            {itemData.p_ingredient.split(",").map((ingredient, index) => (
              <Chip key={index} style={{ margin: 10 }} mode="flat">
                {ingredient.trim()}
              </Chip>
            ))}
          </View>

          <View style={{ marginBottom: 30, width:"100%" }}>
            {itemData.p_review ? (
              <>
                <Text style={{textAlign:"center", color:"#333", fontWeight:"bold", fontSize:16, marginBottom:20}}>후기 작성 완료</Text>
                <View style={ohstyles.review_contentBox}>
                  <View style={ohstyles.review_myBox}>
                    <Text style={{color:"#333", fontWeight:"bold"}}>{myReview?.r_review}</Text>
                  </View>
                  <View style={ohstyles.review_reBox}>
                    <Text style={{textAlign:"right", color:"white", fontWeight:"bold"}}>{myReview?.r_reply}</Text>
                  </View>
                </View>
              </>
            ) : (
              <Button
                mode="contained"
                onPress={() => setModalVisible(true)}
                icon="pencil-plus"
                style={{ width: 300, height: 50, justifyContent: "center" }}
              >
                리뷰 쓰러가기
              </Button>
            )}
          </View>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }} //안드로이드 back버튼 기능?
        >
          <ScrollView contentContainerStyle={styles.modalView}>
            {/* 제목 */}
            <View style={styles.titleContainer}>
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                후기 작성
              </Text>
            </View>

            {/* 별점 */}

            <View style={styles.ratingContainer}>
              <Rating
                type="star"
                ratingCount={5}
                imageSize={40}
                onFinishRating={(rating) => setRating(rating)}
              />
            </View>

            {/* 재료 */}
            <View style={styles.ingredientContainer}>
              <Text style={{ marginBottom: 20, textAlign: "left" }}>
                추천하는 재료들을 선택해주세요!
              </Text>
              {itemData.p_ingredient.split(",").map((ingredient, index) => (
                <Chip
                  key={index}
                  style={{ margin: 10 }}
                  mode={
                    selectedIngredients.includes(ingredient.trim())
                      ? "flat"
                      : "outlined"
                  }
                  onPress={() => {
                    const ingredientName = ingredient.trim();
                    if (selectedIngredients.includes(ingredientName)) {
                      setSelectedIngredients(
                        selectedIngredients.filter(
                          (name) => name !== ingredientName
                        )
                      );
                    } else {
                      setSelectedIngredients([
                        ...selectedIngredients,
                        ingredientName,
                      ]);
                    }
                  }}
                >
                  {ingredient.trim()}
                </Chip>
              ))}
            </View>

            {/* 이미지 */}
            <View style={styles.imgContainer}>
              <TouchableOpacity onPress={selectImage}>
                <View
                  style={{
                    width: 100,
                    height: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderColor: 'lightgray',
                    borderWidth: 3,
                    borderRadius: 10,
                  }}>
                  {image ? (
                    <Image
                      style={{ width: 100, height: 100, resizeMode: "cover", borderRadius: 10 }}
                      source={{ uri: image }}
                    />
                  ) : (
                    <>
                      <Image
                        style={{ width: 80, height: 70, resizeMode: 'cover' }}
                        source={{
                          uri: `http://${myIP}:4000/images/camera.png`,
                        }}
                      />
                      <Text>사진</Text>
                    </>
                  )}
                </View>
              </TouchableOpacity>
            </View>

            {/* 작성 */}
            <View style={styles.inputContainer}>
              <TextInput
                label="작성"
                value={reviewText}
                onChangeText={(reviewText) => setReviewText(reviewText)}
                mode="outlined"
                placeholder="자유롭게 작성해주세요"
                multiline={true}
                style={{ width: "100%", height: 250 }}
                contentStyle={{ textAlign: "left" }}
              />
            </View>

            {/* 버튼 */}
            <View style={styles.btnContainer}>
              <Button
                mode="outlined"
                style={{
                  width: 80,
                  height: 40,
                  justifyContent: "center",
                  borderRadius: 10,
                }}
                onPress={() => setModalVisible(false)}
              >
                취소
              </Button>
              <Button
                mode="contained"
                style={{
                  width: 80,
                  height: 40,
                  justifyContent: "center",
                  borderRadius: 10,
                }}
                onPress={() => { Review() }}
              >
                등록
              </Button>
            </View>
          </ScrollView>
        </Modal>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  modalView: {
    margin: 30,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  titleContainer: {
    width: "100%",
    height: 40,
  },
  ratingContainer: {
    width: "100%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  ingredientContainer: {
    width: "100%",
    height: "auto",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
  },
  imgContainer: {
    width: "100%",
    height: "auto",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  inputContainer: {
    width: "100%",
    height: 260,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  btnContainer: {
    width: "100%",
    height: 60,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 20,
  },
});

export default HistoryDetailScreen;
