import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo } from '@expo/vector-icons';

class Cart extends React.Component {
    constructor(props) {
        super();
    }
    navigateCheckout = () => {
        this.props.navigation.navigate("exitpage")
    }
    navigateBack = () => {
        this.props.navigation.goBack()
    }
    render() {
        return(<React.Fragment>
            <SafeAreaView style={styles.container}>
                <View style={styles.banner}>
                    <Text style={styles.foretext}>ADD TO CART</Text>
                    <Text style={styles.introText}>Consequat id porta nibh venenatis cras sed felis eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu</Text>
                </View>
                <Image style={styles.image} source={require("../assets/images/undraw_online_groceries_a02y.png")}/>
                <TouchableOpacity onPress={this.navigateCheckout} style={styles.nextbutton}>
                    <Text style={styles.buttontext}>Next</Text>
                </TouchableOpacity>
                <View style={styles.footer}>
                    <TouchableOpacity onPress={this.navigateBack} style={styles.button}>
                        <Text style={styles.footerbuttontext}>Previous</Text>
                    </TouchableOpacity>
                    <View style={styles.page}>
                        <Entypo name="dot-single" size={24} color="blue" />
                        <Entypo name="dot-single" size={24} color="black" />
                        <Entypo name="dot-single" size={24} color="black" />
                    </View>
                    <TouchableOpacity onPress={this.navigateCheckout} style={styles.button}>
                        <Text style={styles.footerbuttontext}>Skip</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </React.Fragment>)
    }
}
export default Cart
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    foretext: {
        fontSize: 30,
        fontWeight: '600'
    },
    banner: {
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    introText: {
        color: 'rgb(117, 117, 117)',
        fontSize: 15,
        marginVertical: 10
    },
    image: {
        width: 300,
        height: 400,
        alignSelf: 'center'
    },
    nextbutton: {
        backgroundColor: 'rgb(119, 111, 195)',
        width: 180,
        height:65,
        alignSelf: 'center',
        borderRadius: 30
    },
    buttontext: {
        fontSize: 30,
        paddingHorizontal: 60,
        paddingVertical: 10,
        color: 'rgb(255, 255, 255)'
    },
    page: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 15,
    },
    button: {
        backgroundColor: 'rgb(255, 254, 254)',
        width: 75,
        height: 35,
        borderWidth: 1,
        borderColor: 'rgb(178, 167, 167)',
        borderRadius: 5,
        marginVertical: 20
    },
    footerbuttontext: {
        color: 'rgb(178, 167, 167)',
        paddingHorizontal: 10,
        paddingVertical: 7,
        alignSelf: 'center'
    },
})