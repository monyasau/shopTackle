import { StyleSheet, ScrollView, Text, View } from "react-native";
import Product from './Product';
import { productsData } from "./Products";

const CheckOut = ({ cart, setCart }) => {
    const itemsInCart = productsData.filter((product)=>cart.includes(product.id));
    return (
        <>
            <View style={style.container}>
                {cart.length == 0 ?
                    <View style={{ alignItems: "center", flex: 1, justifyContent: "center" }}>
                        <Text style={{ fontSize: 24 }}>Your cart is currently empty, try adding some items on the product page</Text>
                    </View>
                    :
                    <ScrollView contentContainerStyle={style.productsContainer}>
                        <View style={style.contentContainer}>
                            <Text style={{ textAlign: "left", width: "95%" }}>Products in cart</Text>
                            {itemsInCart.map((item) => {
                                return (
                                    <View key={item.id}>
                                    <Product name={item.name} id={item.id} setCart={setCart} cart={cart} image={item.src} />
                                    </View>
                                )
                            })}
                        </View>
                    </ScrollView>
                }
            </View >
        </>
    )
}

const style = StyleSheet.create({
    productsContainer: {
        alignItems: "center",
    },
    contentContainer: {
        justifyContent: "space-between",
        flexWrap: "wrap",
        flex: 1,
        gap: 10,
        flexDirection: "row",
    },
    container: {
        flex: 1,
        width: "95%",
    }
})
export default CheckOut;