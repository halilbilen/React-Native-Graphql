
import {
    StyleSheet
} from 'react-native'

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center'
    }, filterIcon: {
        width: 23,
        height: 25,
        resizeMode: 'contain',
        marginBottom: 5,
        left: 59
    }, headerContainer: {
        flexDirection: "row",
        width: "100%",
        marginTop: 28,
        justifyContent: 'center',
        alignItems: 'center'
    }, headerText: {
        fontSize: 24,
        color: '#000000',
        fontFamily: 'Roboto-Bold',
        textAlign: 'left',
        borderStyle: 'solid'
    }, itemContainer: {
        width: 328,
        height: 265,
        margin: 5,
        marginTop: 10,
    }, image: {
        flex: 1,
        borderRadius: 10,
        resizeMode: 'cover',
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    }, itemBottomContainer: {
        width: "100%",
        height: 97,
        backgroundColor: "#FFFFFF",
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.10,
        shadowRadius: 8,
        elevation: 2,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    }, itemText: {
        fontSize: 16,
        color: '#000000',
        fontFamily: 'Roboto-Regular',
        textAlign: 'left',
        marginLeft: 16,
        marginTop: 8
    }, loading: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        left: 0,
        top: 0,
        opacity: 0.5,
        backgroundColor: 'gray',
        zIndex: 1000,
        justifyContent: 'center',
        alignItems: 'center'
    }, filterContainer: {
        width: 328,
        height: 167,
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
    }, filterHeaderContainer: {
        width: "100%",
        height: 51,
        borderBottomWidth: 0.5,
        borderColor: "#808080",
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: 16
    }, filterBodyContainer: {
        width: "100%",
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingLeft: 16,
        paddingRight: 16,
        marginTop: 15
    }, filterButton: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: "#C4C4C4",
        alignItems: 'center',
        justifyContent: 'center',
    }, filterSelectButton: {
        width: 16,
        height: 16,
        borderRadius: 8,
        backgroundColor: "#0057FF"
    }

});



export default styles;