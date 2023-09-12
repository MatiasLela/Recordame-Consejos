import {
  ImageBackground,
  View,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
export default function HeaderPanel({ title, navigation, OnPressBack }) {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  return (
    <>
      <ImageBackground
        source={require("../../assets/WavePanel.png")}
        style={{ width: windowWidth, height: windowHeight * 0.15 }}
      >
        <SafeAreaView
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            width: windowWidth,
          }}
        >
          <View style={{
            width:windowWidth*0.2,
            alignItems:"center",
          }}>
          <TouchableOpacity
            style={{ width: windowWidth / 20, height: windowHeight / 20 }}
            onPress={OnPressBack}
          >
            <Image
              source={require("../../assets/backArrow.png")}
              style={{ width: windowWidth / 20, height: windowHeight / 20 }}
            />
          </TouchableOpacity>
          </View>
          <View>
            <Text
              style={{
                color: "#fff",
                fontSize: 48,
              }}
            >
              {title ? title : " "}
            </Text>
          </View>
          <View style={{
            width:windowWidth*0.2,
            alignItems:"center",
          }}>
          <TouchableOpacity
            style={{ width: windowWidth / 20, height: windowHeight / 20 }}
            onPress={() => {
              console.log("HOLA");
            }}
          >
            <Image
              source={require("../../assets/notificationBell.png")}
              style={{ width: windowWidth / 15, height: windowHeight / 20 }}
            />
          </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </>
  );
}
