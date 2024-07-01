import { StyleSheet, ScrollView, Text, View, Touchable, TouchableOpacity } from "react-native";
import Product from './Product';
import { productsData } from "./Products";

const CheckOut = ({ cart, setCart,setActiveWindow }) => {
    const itemsInCart = productsData.filter((product) => cart.includes(product.id));
    return (
        <>
            <View style={style.container}>
                {cart.length == 0 ?
                    <View style={{ alignItems: "center", flex: 1, justifyContent: "center" }}>
                        <Text style={{ fontSize: 24 }}>Your cart is currently empty, try adding some items on the product page</Text>
                    </View>
                    :
                    <>
                        <ScrollView contentContainerStyle={style.productsContainer}>
                            <View style={style.contentContainer}>
                                <Text style={{ textAlign: "left", width: "95%" }}>Products in cart</Text>
                                {itemsInCart.map((item) => {
                                    return (
                                        <Product key={item.id} name={item.name} id={item.id} setCart={setCart} cart={cart} image={item.src} />

                                    )
                                })}
                            </View>
                        </ScrollView>
                        
            <TouchableOpacity style={style.checkoutButton} onPress={()=>{setActiveWindow("success")}}>
                <Text style={{textAlign:"center",color:"#fff"}}>Check Out</Text>
            </TouchableOpacity>
                    </>
                }

            </View >
        </>
    )
}

const style = StyleSheet.create({
    productsContainer: {
        alignItems: "center",
        width: "95%",
        marginHorizontal: "auto",
    },
    contentContainer: {
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 10,
        flexDirection: "row",
    },
    container: {
        flex: 1,
        width: "95%",
    },
    checkoutButton:{
        backgroundColor:"#148567",
        paddingVertical:15,
        borderWidth:1,
        borderColor:"#555",
        marginVertical:10,
        width:150,
        marginHorizontal:"auto",
        borderRadius:10,
    }
})
export default CheckOut;