import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const BottomNavigation = ({active,setActiveWindow}) => {
    return (
        <>
            <View style={style.container}>
                <TouchableOpacity style={style.pages} onPress={()=>setActiveWindow("products")}>
                    <Text style={active=="products"?style.active:style.inActive}>Products</Text>
                    </TouchableOpacity>
                <TouchableOpacity style={style.pages} onPress={()=>setActiveWindow("checkout")}>
                    <Text style={active=="checkout"?style.active:style.inActive}>Check Out</Text>
                    </TouchableOpacity>
            </View>
        </>
    )
}
const style = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        borderColor: "#000",
        borderWidth: 1,
        width: "100%",
        padding: 10,
        backgroundColor: "#eee"
    },
    pages: {
        width: "48%",
        padding: 20,
        borderColor: "#000",
        borderWidth: 1,
        backgroundColor: "#ddd",
    },
    active:{
        color:"#000",
        textAlign:"center"
    },
    inActive:{
        textAlign:"center",
        color:"#666"
    }
})
export default BottomNavigation;