import { Text, View, Image } from 'react-native';
import Button from './Button.js';
import HeaderPanel from "./HeaderPanels/HeaderPanel.js";
import styles from './consejosStyle';

export default function Consejos({navigation}) {
  return (
    <View style={{backgroundColor:"#EFEFEF", flex:1,}}>
      <HeaderPanel OnPressBack={() => { console.log('Vuelve a inicio') }} />
      <View style={styles.contenedorContenido}>
        <View style={styles.viewLogo}>
          <View style={styles.logo}>
            <Image style={styles.logoImg} source={require("../assets/brain.png")}/>
          </View>
        </View>
        <View style={styles.cardView}>
        <View style={styles.card}>
          <View style={styles.tituloView}>
            <Text style={styles.titulo}>Categorias</Text>
          </View>
          <View style={styles.contenido}>
            <View style={[styles.columnas, {left:"1%",}]}>
              <Button
                imageUrl={require("../assets/dish.png")}
                text="Alimentación"
                estilo="gameBtn"
                position='izquierda'
                color="textWhite"/>
              <Button
                imageUrl={require("../assets/led.png")}
                text="Estimulos"
                estilo="gameBtn"
                position='izquierda'
                color="textWhite"/> 
              <Button
                imageUrl={require("../assets/mental-health.png")}
                text="Psicologia"
                estilo="gameBtn"
                position='izquierda'
                color="textWhite"/>
            </View>
            <View style={[styles.columnas, {right:"1%",}]}>
              <Button
                imageUrl={require("../assets/sport.png")}
                text="Ejercicios"
                estilo="gameBtn"
                position='izquierda'
                color="textWhite"/> 
              <Button
                imageUrl={require("../assets/heart.png")}
                text="Cuidados"
                estilo="gameBtn"
                position='izquierda'
                color="textWhite"/>
              <Button
                imageUrl={require("../assets/discussion.png")}
                text="Cuidador"
                estilo="gameBtn"
                position='izquierda'
                color="textWhite"/> 
            </View>
          </View>
        </View>
        </View>
      </View>
    </View>
  );
}

