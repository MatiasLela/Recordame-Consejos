import React from "react";
import { TouchableOpacity, Text, StyleSheet, Image, View } from "react-native";
/* Componente botón: descripcion de props
    text: el texto mostado en el botón
    onPress: accion a ejecutar en el onPress del botón (TouchableOpacity)
    estilo: tamaño, color y sombra del botón
    key: identificador key del botón
    color: color del texto del botón
    imageUrl: url de la imagen del botón
    position: si la imagen va a la izquierda o derecha del texto del botón
*/
const Button = ({ text, onPress, estilo, key, color, imageUrl }) => {
  const renderIcon = () => {
    if (imageUrl) {
      return (
        <Image
          source={imageUrl}
          style={styles.icon}
          resizeMode="contain"
        />
      );
    }
    return null;
  };

  const renderContent = () => {
    return (
      <View style={styles.gameBtn}>
        <TouchableOpacity>
          <View style={styles.iconoContainer}>
            {renderIcon()}
          </View>
          <View style={styles.TextView}>
            <Text style={styles[color]}>{text}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.buttonContainer}>      
        {renderContent()}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flex:1,
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",

  },
  textWhite: {
    fontSize: 20,
    color: "#ffffff",
  },
  gameBtn: {
    width:"90%",
    height:"85%",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor: '#FF7FA5',
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 4,
  },
  icon: {
    
  },
});

export default Button;


