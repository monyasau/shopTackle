import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

const Product=({name,id,image})=>{
    return(
        <View style={style.container}>
            <TouchableOpacity style={{position:"absolute",top:0}}>
                <Text>Add to cart</Text>
            </TouchableOpacity>
            <Image style={style.image} alt={name} resizeMode="cover" source={image}/>
            <View style={style.projectInfo}>
            <Text style={{color:"#6a6a6a",textAlign:"center"}}>{name}</Text>
            </View>
        </View>
    )
}
const style=StyleSheet.create({
    container:{
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        borderBottomLeftRadius:2,
        borderBottomRightRadius:2,
        borderWidth:1,
        borderColor:"#000",
        width:130,
        padding:1
        
    },
    image:{
        borderTopLeftRadius:9,
        borderTopRightRadius:9,
        width:"100%",
        height:120,
    },
    projectInfo:{
        padding:2,
        backgroundColor:"#efefef",
        borderColor:"#000",
        borderTopWidth:1,
        
    }
})
export default Product;