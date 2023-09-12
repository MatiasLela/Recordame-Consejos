import { StyleSheet, Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default styles = StyleSheet.create({
  contenedorContenido: {
    display: "flex",
  },
  contenido: {
    width: "85%",
    height: "90%",
    flexDirection:"column",
    gap:windowHeight*0.03,
  },
  card: {
    backgroundColor: "#FFFFFFE3",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
    elevation: 1,
    width: windowWidth * 0.77,
    height: windowHeight * 0.6,
    display: "flex",
    flexDirection: "column",
  },
  titulo: {
    fontSize: 35,
    color: "#000000BF",
  },
  brain: {
    height: 101,
    width: 87,
  },
  viewLogo: {
    justifyContent: "center",
    alignItems: "center",
    width: windowWidth,
    height: windowHeight * 0.2,
    alignItems: "center",
  },
  logo: {
    top: -windowHeight * 0.024,
    height: windowHeight * 0.12,
    width: windowWidth * 0.3,
  },
  logoImg: {
    height: "100%",
    width: "100%",
  },
  cardView: {
    alignItems: "center",
  },
  tituloView: {
    width: "100%",
    height: "15%",
    justifyContent: "center",
    alignItems: "center",
  },
  columnas: {
    width: "50%",
    height: "100%",
  },
  lineahorizontal: {
    width: windowWidth * 0.27,
    marginHorizontal: windowWidth * 0.01,
    backgroundColor: "#FE87AA",
    height: 1.25,
  },
  categoria: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  categoriaText: {
    color: "#FE87AA",
    fontSize: windowWidth * 0.055,
  },
  categoriaTitulo: {
    width: windowWidth * 0.4,
    alignItems: "center",
  },
  tituloCate: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    width: windowWidth * 0.6,
    height: "100%",
    bottom: "50%",
  },
  titulocateTxt: {
    color: "#FE87AA",
    fontSize: windowWidth * 0.12,
  },
  logoCate: {
    top: windowHeight * 0.013,
    width: windowWidth * 0.18,
    height: windowWidth * 0.18,
  },
  logoCateImg: {
    width: "100%",
    height: "100%",
  },
  cardText: {
    color: "#00000087",
    fontSize: windowWidth * 0.05,
  },
  puntito: {
    width: windowWidth * 0.025,
    height: windowWidth * 0.025,
  },
  puntitoImg: {
    width: "100%",
    height: "100%",
    top: "75%",
  },
  columnasCard:{
    flexDirection:"row",
    gap:4, 
  }
});
