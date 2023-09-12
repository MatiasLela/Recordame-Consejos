import { Text, View, Image } from "react-native";
import HeaderPanel from "./HeaderPanels/HeaderPanel.js";
import styles from "./consejosAmpliaStyle.js";
import puntito from "../assets/imagenes/puntito.png";

export default function ConsejosAmplia({titulo, contenido, icono}) {
  return (
    <View style={{ backgroundColor: "#EFEFEF", flex: 1 }}>
      <HeaderPanel
        OnPressBack={() => {
          console.log("Vuelve a inicio");
        }}
      />
      <View style={styles.contenedorContenido}>
        <View style={styles.viewLogo}>
          <View style={styles.tituloCate}>
            <Text style={styles.titulocateTxt}>Consejos</Text>
          </View>
          <View style={styles.categoria}>
            <View style={styles.lineahorizontal}></View>
            <View style={styles.categoriaTitulo}>
              <Text style={styles.categoriaText}>{titulo}</Text>
            </View>
            <View style={styles.lineahorizontal}></View>
          </View>
          <View style={styles.logoCate}>
            <Image source={icono} style={styles.logoCateImg}></Image>
          </View>
        </View>
        <View style={styles.cardView}>
          <View style={styles.card}>
            <View style={styles.contenido}>
              <View style={styles.columnasCard}>
              <View style={styles.puntito}>
                <Image style={styles.puntitoImg} source={puntito}></Image>
              </View>
              <Text style={styles.cardText}>
                {contenido.consejo}
              </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
