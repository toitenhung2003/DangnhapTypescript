import { StyleSheet } from 'react-native'
import React from 'react'

const Styles = StyleSheet.create({
    viewlogin:{
        alignItems: 'center',
        flex:1
    },
    textlogin:{
        marginTop:150,
        fontSize:25,
        marginBottom:40,
        color:'#0984e3'
    },
    inputLogin:{
        borderRadius:25,
        borderColor:'#000000',
        borderWidth:1,
        width:360,
        marginTop:20,
        height:60,
        paddingHorizontal:15,
    },
    buttonLogin:{
        borderRadius:25,
        borderColor:'#000000',
        width:360,
        marginTop:20,
        height:60,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor:'#0984e3'
        
    },
    textbutton:{
        color:'white',
        fontSize:20,
        fontWeight:'bold'
    }
})

export default Styles