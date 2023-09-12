import {
    StyleSheet,
    Dimensions,
  } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default styles = StyleSheet.create({

    contenedorContenido:{
        display:"flex",
    },
    contenido: {
      bottom:"2%",
      width:"100%",
      height:"80%",
      flexDirection: 'row',
    },
    card: {
      backgroundColor: '#FFFFFFE3',
      justifyContent: 'flex-start',
      alignItems: 'center',
      borderRadius: 40,
      elevation: 8,
      width:windowWidth*0.92,
      height:windowHeight*0.7,
      display:"flex",
      flexDirection:"column",
    },
    titulo: {
      fontSize: 35,
      color: '#000000BF',
    },
    brain: {
      height: 101,
      width: 87,
    },
    viewLogo:{
        width:windowWidth,
        height:windowHeight*0.096,
        alignItems:"center",
    },
    logo:{
        top:-windowHeight*0.024,
        height:windowHeight*0.12,
        width:windowWidth*0.3,
    },
    logoImg:{
        height:"100%",
        width:"100%",
    },
    cardView:{
        alignItems:"center",
    },
    tituloView:{
        width:"100%",
        height:"15%",
        justifyContent:"center",
        alignItems:"center",
    },
    columnas:{
        width:"50%",
        height:"100%",
    },
  });