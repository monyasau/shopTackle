import { ScrollView, StyleSheet, Text, View } from "react-native";
import Product from "./Product";
const productsData = [
    { id: 0, src: "../assets/productImages/gucciBag.jpg", name: "Gucci Bag" },
    { id: 1, src: "../assets/productImages/iphone13pro.jpg", name: "Iphone 13 pro" },
    { id: 2, src: "../assets/productImages/LG43LK5000PTA.jpg", name: "LG 43LK5000PTA TV" },
    { id: 3, src: "../assets/productImages/louisVuitonshoe.jpg", name: "Louis Vuiton Shoe" },
    { id: 4, src: "../assets/productImages/macbookair.jpg", name: "Mac book Air" },
    { id: 5, src: "../assets/productImages/macbookpro.jpg", name: "Mac book Pro" },
    { id: 6, src: "../assets/productImages/nikeShoe.jpg", name: "Nike Shoe" },
    { id: 7, src: "../assets/productImages/ps5.jpg", name: "Playstation 5(PS5)" },
    { id: 8, src: "../assets/productImages/rolexWatch.jpg", name: "Rolex Watch" },
    { id: 9, src: "../assets/productImages/RoyalBlender.jpg", name: "Royal Blender" },
    { id: 10, src: "../assets/productImages/samsungS24Ultra.jpg", name: "Samsung S24 Ultra" },
    { id: 11, src: "../assets/productImages/sandiskSSd.jpg", name: "1 TB Sandisk SSD" },
    { id: 12, src: "../assets/productImages/surfacepro7.jpg", name: "Surface Pro 7" },
]

const Products = () => {
    return (
        <>
            <Text>Available products</Text>

            <ScrollView contentContainerStyle={styles.productsContainer}>
                {productsData.map((item)=>{
                    return (
                        <Text>jje</Text>
                    )
                })}
                {/* <Product name={"Gucci belt"} id={0} image={require("../assets/testitem.jpg")} /> */}
            </ScrollView>
        </>
    )
}
const styles = StyleSheet.create({
    productsContainer: {
        justifyContent: "space-evenly",
        gap: 10,
        // width: "90%",
        padding: 10,
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor: "#eee"
    }
})
export default Products;