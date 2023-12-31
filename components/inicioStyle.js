import { StyleSheet, Dimensions } from 'react-native';
const windowHeigh = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;
export default styles = StyleSheet.create({
    contenedor: {
      flex: 1,
      minHeight:windowHeigh,
      minWidth:windowWidth,
      backgroundColor: '#02C78F',
      alignItems: 'center',
      justifyContent: 'center',
    },
    olaView:{
        flex:1,
        width:windowWidth,
    },
    olaImg:{
        position:"absolute",
        width:"100%",
        height:windowHeigh*0.23,
    },
    superior:{
        flex:2.75,
        width:windowWidth,
    },
    inferior:{
        flex:9,
    },
    consejosContenedor:{
        flex:5.5,
        backgroundColor:"#EFEFEF",
        alignItems:"center",
    },
    logoView:{
        width:windowWidth*0.18,
        height:windowWidth*0.18,
    },
    logoImg:{
        width:"100%",
        height:"100%",
    },
    logo:{
        flex:0.25,
        alignItems:"center",
    },
    categoria:{
        flex:0.75,
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
    },
    categoriaTitulo:{
        width:windowWidth*0.40,
        alignItems:"center",
    },
    categoriaText:{
        color:"#FFFFFF",
        fontSize:windowWidth*0.055,
    },
    lineahorizontal:{
        width:windowWidth*0.27,
        marginHorizontal:windowWidth*0.01,
        backgroundColor:"#FFFFFF",
        height:1.25,

    },
    titulo:{
        flex:1,
        display:"flex",
        flexDirection:"row",
        marginTop:windowHeigh*0.05,
    },
    viewTitulo:{
        width:windowWidth*0.6,
        height:"100%",
        justifyContent:"center",
        alignItems:"center"
    },
    back:{
        width:windowWidth*0.2,
        height:"100%",
        justifyContent:"center",
        alignItems:"center",
    },
    campana:{
        width:windowWidth*0.2,
        height:"100%",
        justifyContent:"center",
        alignItems:"center",
    },
    backImg:{
        width:windowWidth*0.1,
        height:windowWidth*0.1,
    },
    campanaImg:{
        width:windowWidth*0.1,
        height:windowWidth*0.1,
    },
    tituloText:{
        color:"#FFFFFF",
        fontSize:windowWidth*0.12,
    },
    viewConsejos:{
        backgroundColor:"#FFFFFFE3",
        width:windowWidth*0.88,
        height:windowHeigh*0.19,
        borderRadius:20,
    },
    consejosRow:{
        display:"flex",
        flexDirection:"column",
        gap:windowHeigh*0.03,
    },
    consejosViewText:{
        flex:1,
        margin:"5%",
        display:"flex",
        flexDirection:"row",
        gap:windowWidth*0.01,
    },
    consejoViewBoton:{
        flex:0.6,
        justifyContent:"flex-start",
        alignItems:"center",
    },
    consejoViewBotonFondo:{
        backgroundColor:"#2FD2A3",
        width:windowWidth*0.6,
        height:"70%",
        borderRadius:windowWidth*0.02,
        justifyContent:"center",
        alignItems:"center",
    },
    consejoText:{
        color:"#FFFFFF",
    },
    puntito:{
        width:windowWidth*0.025,
        height:windowWidth*0.025,
    },
    puntitoImg:{
        width:"100%",
        height:"100%",
        top:"75%",
    },
    consejosText:{
        color:"#00000087",
        fontSize:20,
    },
  });