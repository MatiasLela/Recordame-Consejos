import { View, Image, Text, TouchableWithoutFeedback } from "react-native"
import styles from "./inicioStyle";
import puntito from "../assets/imagenes/puntito.png";

export default function Card({contenido}) {
    return(
        <View style={styles.consejosRow}>
              <View style={styles.viewConsejos}>
                <View style={styles.consejosViewText}>
                  <View style={styles.puntito}>
                    <Image style={styles.puntitoImg} source={puntito}></Image>
                  </View>
                  <Text style={styles.consejosText}>
                    {contenido}
                  </Text>
                </View>
                <View style={styles.consejoViewBoton}>
                  <TouchableWithoutFeedback onPress={() => alert("se amplia")}>
                    <View style={styles.consejoViewBotonFondo}>
                      <Text style={styles.consejoText}>Respuesta ampliable</Text>
                    </View>
                  </TouchableWithoutFeedback>
                </View>
              </View>
        </View>
    )
}