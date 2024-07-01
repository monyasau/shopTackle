import { Image, StyleSheet, Text, View } from "react-native"

const Product=({name,id,image})=>{
    return(
        <View style={style.container}>
            <Image style={style.image}  source={image}/>
            <View style={style.projectInfo}>

            <Text>{name}</Text>
            <Text>{id}</Text>
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
        width:"45%",
    },
    image:{
        borderTopLeftRadius:9,
        borderTopRightRadius:9,
        width:"100%",
        height:120,
    },
    projectInfo:{
        backgroundColor:"#efefef",
        borderColor:"#000",
        borderTopWidth:1,
        flexDirection:"row",
        justifyContent:"space-between"
    }
})
export default Product;