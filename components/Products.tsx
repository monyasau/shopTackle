import { StyleSheet, Text, View } from "react-native";
import Product from "./Product";

const Products = () => {
    return (
        <>
            <Text>Available products</Text>
            
            <View style={styles.productsContainer}>
            <Product name={"Gucci belt"} id={0} image={require("../assets/favicon.png")}/>
            <Product name={"Gucci belt"} id={0} image={require("../assets/favicon.png")}/>
            <Product name={"Gucci belt"} id={0} image={require("../assets/favicon.png")}/>
            <Product name={"Gucci belt"} id={0} image={require("../assets/favicon.png")}/>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    productsContainer: {
        justifyContent:"space-evenly",
        gap:10,
        flex: 1,
        // width: "90%",
        padding: 10,
        flexDirection:"row",
        flexWrap:"wrap",
        backgroundColor: "#eee"
    }
})
export default Products;