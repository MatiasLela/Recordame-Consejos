import React from "react";
import { Text, View, Image, TouchableWithoutFeedback, ScrollView } from "react-native";
import styles from "./inicioStyle";
import ola from "../assets/imagenes/ola.png";
import regresar from "../assets/imagenes/regresar.png";
import campana from "../assets/imagenes/campana.png";
import Card from "./Card";

export default function ConsejosLista({ titulo, icono, categoria }) {
  return (
    <View style={styles.contenedor}>
      <View style={styles.superior}>
        <View style={styles.titulo}>
          <TouchableWithoutFeedback onPress={() => alert("regresa")}>
            <View style={styles.back}>
              <Image source={regresar} style={styles.backImg}></Image>
            </View>
          </TouchableWithoutFeedback>
          <View style={styles.viewTitulo}>
            <Text style={styles.tituloText}>Consejos</Text>
          </View>
          <TouchableWithoutFeedback onPress={() => alert("campana")}>
            <View style={styles.campana}>
              <Image source={campana} style={styles.campanaImg}></Image>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.categoria}>
          <View style={styles.lineahorizontal}></View>
          <View style={styles.categoriaTitulo}>
            <Text style={styles.categoriaText}>{titulo}</Text>
          </View>
          <View style={styles.lineahorizontal}></View>
        </View>
        <View style={styles.logo}>
          <View style={styles.logoView}>
            <Image source={icono} style={styles.logoImg}></Image>
          </View>
        </View>
      </View>
      <View style={styles.inferior}>
        <View style={styles.olaView}>
          <Image source={ola} style={styles.olaImg}></Image>
        </View>
        <View style={styles.consejosContenedor}>
          <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
            {categoria.map((consejo, index) => (
                <Card key={index} contenido={consejo.nombre}/>
              ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
