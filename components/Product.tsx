import { useState } from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

const Product = ({ name, id, image, setCart, cart }) => {
    const [inCart, setInCart] = useState(cart.includes(id))
    const addToCart = (id) => {
        setCart((cart) => [...cart, id])
        setInCart(true)
    }
    const removeFromCart = (id) => {
        // setCart((cart)=>[...cart,id])
        setCart((cart) => cart.filter((item) => item !== id));
        setInCart(false)
    }
    return (
        <View style={style.container}>

            {inCart ?
                <TouchableOpacity style={style.addToCart} onPress={() => removeFromCart(id)}>
                    <Text style={{ color: "red", }}>Remove from cart</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity style={style.addToCart} onPress={() => addToCart(id)}>
                    <Text style={{ color: "#ffe", }}>Add to cart</Text>
                </TouchableOpacity>}

            <Image style={style.image} alt={name} resizeMode="cover" source={image} />
            <View style={style.projectInfo}>
                <Text style={{ color: "#6a6a6a", textAlign: "center" }}>{name}</Text>
            </View>
        </View>
    )
}
const style = StyleSheet.create({
    container: {
        position: "relative",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 2,
        borderBottomRightRadius: 2,
        borderWidth: 1,
        borderColor: "#000",
        width: "48%",
        padding: 1
    },
    image: {
        borderTopLeftRadius: 9,
        borderTopRightRadius: 9,
        width: "100%",
        height: 120,
    },
    projectInfo: {
        padding: 2,
        backgroundColor: "#efefef",
        borderColor: "#000",
        borderTopWidth: 1,
    },
    addToCart: {
        backgroundColor: "#444",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#ddd",
        position: "absolute",
        top: 1,
        right: 1,
        padding: 3,
        zIndex: 10
    }
})
export default Product;