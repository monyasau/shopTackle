import { ScrollView, StyleSheet, Text, View } from "react-native";
import Product from "./Product";

// i Imported images manually due to non support of dynamic import of javascript
import gucciBag from "../assets/productImages/gucciBag.jpg";
import iphone13pro from "../assets/productImages/iphone13pro.jpg";
import LG43LK5000PTA from "../assets/productImages/LG43LK5000PTA.jpg";
import louisVuitonshoe from "../assets/productImages/louisVuitonshoe.jpg";
import macbookair from "../assets/productImages/macbookair.jpg";
import macbookpro from "../assets/productImages/macbookpro.jpg";
import nikeShoe from "../assets/productImages/nikeShoe.jpg";
import ps5 from "../assets/productImages/ps5.jpg";
import rolexWatch from "../assets/productImages/rolexWatch.jpg";
import RoyalBlender from "../assets/productImages/RoyalBlender.jpg";
import samsungS24Ultra from "../assets/productImages/samsungS24Ultra.jpg";
import sandiskSSd from "../assets/productImages/sandiskSSd.jpg";
import surfacepro7 from "../assets/productImages/surfacepro7.jpg";

const productsData = [
    { id: 0, src: gucciBag, name: "Gucci Bag" },
    { id: 1, src: iphone13pro, name: "Iphone 13 pro" },
    { id: 2, src: LG43LK5000PTA, name: "LG 43LK50PTA TV" },
    { id: 3, src: louisVuitonshoe, name: "Louis Vuiton Shoe" },
    { id: 4, src: macbookair, name: "Mac book Air" },
    { id: 5, src: macbookpro, name: "Mac book Pro" },
    { id: 6, src: nikeShoe, name: "Nike Shoe" },
    { id: 7, src: ps5, name: "Playstation 5(PS5)" },
    { id: 8, src: rolexWatch, name: "Rolex Watch" },
    { id: 9, src: RoyalBlender, name: "Royal Blender" },
    { id: 10, src: samsungS24Ultra, name: "Samsung S24 Ultra" },
    { id: 11, src: sandiskSSd, name: "1 TB Sandisk SSD" },
    { id: 12, src: surfacepro7, name: "Surface Pro 7" },
]

const Products = () => {
    return (
        <>
            <ScrollView contentContainerStyle={styles.productsContainer}>
                <View style={styles.contentContainer}>
                    <Text style={{ textAlign: "left", width: "95%" }}>Tap any product to add it to cart</Text>
                    {productsData.map((item) => {
                        return (
                            <View key={item.id}>
                                <Product image={item.src} name={item.name} id={item.id} />
                            </View>
                        )
                    })}
                </View>
            </ScrollView>
        </>
    )
}
const styles = StyleSheet.create({
    productsContainer: {
        alignItems: "center",
        width: "95%",
    },
    contentContainer: {
        justifyContent: "space-between",
        flexWrap: "wrap",
        flex: 1,
        gap: 10,
        flexDirection: "row",
        marginHorizontal: "auto"
    }
})
export default Products;