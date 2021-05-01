import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: '100%',
        top: 50,
        zIndex: 100,
        flexDirection: 'row',
        justifyContent: 'space-between', 
        paddingHorizontal: 20,
    },
    logo: {
        width: 100,
        height: 20,
        resizeMode: 'contain',
    },
    menu: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    }
});

export default styles;