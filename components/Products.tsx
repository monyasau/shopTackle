import { StyleSheet, Text, View } from "react-native";

const Products =()=>{
    return (
        <>
        <View style={styles.productsContainer}>
            <Text>Available products</Text>
        </View>
        </>
    )
}
const styles = StyleSheet.create({
    productsContainer: {
        flex:1,
        width:"90%",
        padding:100,
        backgroundColor:"#eee"
    }
})
export default Products;