import React, { useContext, useEffect, useState } from "react";
import { View, Text, ScrollView, Modal, StyleSheet, Image } from "react-native";
import { ohstyles } from "../css/OrderHistoryCss";
import { Button, Chip, TextInput } from "react-native-paper";
import { IPContext } from "../contexts/IPContext";
import { Rating } from "react-native-ratings";

function HistoryDetailScreen({ route }) {

  const { itemData } = route.params;

  const { myIP } = useContext(IPContext);

  const [modalVisible, setModalVisible] = useState(false);
  const [rating, setRating] = useState(0);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [reviewText, setReviewText] = useState("");

  

  return (
    <>
    <ScrollView
      style={ohstyles.detail_container}
      contentContainerStyle={{ alignItems: "center", justifyContent: "center" }}
    >
      <View style={ohstyles.detail__container}>
        <View style={ohstyles.detail_box1}>
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontSize: 26, fontWeight: "bold" }}>{itemData.p_store}</Text>
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
          <Text>
            {itemData.p_request}
          </Text>
        </View>

        {/*  */}

        <View style={ohstyles.detail_box2}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              marginBottom: 20,
              width: '100%',
            }}
          >
            재료
          </Text>
        </View>
        <View style={ohstyles.detail_box3}>
          {itemData.p_ingredient.split(',').map((ingredient, index) => (
            <Chip key={index} style={{margin: 10}} mode="flat">
              {ingredient.trim()}
            </Chip>
          ))}
          </View>
          
          <View style={{marginBottom:30}}>
          {itemData.p_review ? 
          <Text>후기 작성 완료</Text> 
          :
           <Button mode="contained" onPress={() => setModalVisible(true)} icon="pencil-plus" style={{width:300, height:50, justifyContent:"center"}}>
              리뷰 쓰러가기
            </Button>
          }
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
          <Text style={{fontWeight:"bold", fontSize:20}}>후기 작성</Text>
        </View>

        {/* 별점 */}

        <View style={styles.ratingContainer}>
        <Rating
          type='star'
          ratingCount={5}
          imageSize={40}
          onFinishRating={(rating) => setRating(rating)}
        />
        </View>

        {/* 재료 */}
        <View style={styles.ingredientContainer}>
          <Text style={{marginBottom:20, textAlign:"left"}}>추천하는 재료들을 선택해주세요!</Text>
          {itemData.p_ingredient.split(',').map((ingredient, index) => (
            <Chip 
            key={index}
            style={{margin: 10}}
            mode={selectedIngredients.includes(ingredient.trim()) ? "flat" : "outlined"}
            onPress={() => {
              const ingredientName = ingredient.trim();
              if (selectedIngredients.includes(ingredientName)) {
                setSelectedIngredients(selectedIngredients.filter(name => name !== ingredientName));
              } else {
                setSelectedIngredients([...selectedIngredients, ingredientName]);
              }
            }}
            >
              {ingredient.trim()}
            </Chip>
          ))}
        </View>

        {/* 이미지 */}
        <View style={styles.imgContainer}>
          <View style={{width: 100, height:100, justifyContent:"center", alignItems:"center", borderColor:"lightgray", borderWidth:3, borderRadius:10}}>
          <Image
            style={{width:80,height:80,resizeMode:"cover"}}
            source={{
              uri: `http://${myIP}:4000/images/tomato.png}`,
            }}
          />
            <Text>사진</Text>
          </View>
        </View>

        {/* 작성 */}
        <View style={styles.inputContainer}>
          <TextInput
            label="작성"
            value={reviewText}
            onChangeText={reviewText => setReviewText(reviewText)}
            mode="outlined"
            placeholder="자유롭게 작성해주세요"
            multiline= {true}
            style={{width:"100%", height:250}}
            contentStyle={{textAlign:"left"}}
          />
        </View>

        {/* 버튼 */}
        <View style={styles.btnContainer}>
          <Button mode="outlined" style={{width:80, height:40, justifyContent:"center", borderRadius:10}} onPress={() => setModalVisible(false)}>취소</Button>
          <Button mode="contained" style={{width:80, height:40, justifyContent:"center",borderRadius:10}}>등록</Button>
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
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
  },
  titleContainer: {
      width:"100%",
      height:40,
  },
  ratingContainer: {
    width:"100%",
    height:60,
    alignItems:"center",
    justifyContent:"center",
    marginTop:10,
  },
  ingredientContainer: {
    width:"100%",
    height:"auto",
    alignItems:"center",
    justifyContent: "space-around",
    flexDirection : "row",
    flexWrap:"wrap",
    marginTop:20,
  },
  imgContainer: {
    width:"100%",
    height: "auto",
    alignItems:"center",
    justifyContent:"center",
    marginTop:30,
  },
  inputContainer: {
    width:"100%",
    height: 260,
    alignItems:"center",
    justifyContent:"center",
    marginTop:30,
  },
  btnContainer: {
    width:"100%",
    height: 60,
    alignItems:"center",
    justifyContent:"space-between",
    flexDirection:"row",
    marginTop:20,
    marginBottom:20,
  },
});

export default HistoryDetailScreen;
