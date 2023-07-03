import { View, Text, TextInput, SafeAreaView, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import Styles from '../Style/Styles'


type loginUser={
  email?: string,
  phone?: number,
  username?: string,
}



const Login = (props: any) => {
  var checkEmail = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
  var checkPhone = /^\d{10}$/;
  var checkName=/^[a-zA-Z0-9_]{3,}$/;
  const [loginValue, setloginValue] = useState<loginUser>({})
  const [Username, setUsername] = useState("");
  const [Pass, setPass] = useState("");
  const loginForm =()=>{
    
    if (Username.length == 0) {
      Alert.alert("Chưa nhập username");
      return;
    }
    if (Pass.length == 0) {
      Alert.alert("Chưa nhập pass");
      return;
    }

    let usernameValue: string | number | undefined;
    if(checkEmail.test(Username)==true) {
      loginValue.email=Username;
      usernameValue = loginValue.email;
    }else if(checkPhone.test(Username)==true){
      loginValue.phone=Number(Username);
      usernameValue = 0+loginValue.phone
    }else if(checkName.test(Username)==true){
      loginValue.username=Username;
      usernameValue = loginValue.username
    }
    // thực hiện fetch để lấy dữ liệu về
    console.log(loginValue.email);
    console.log(loginValue.phone);
    console.log(loginValue);
    console.log(usernameValue);
    
    let url_check = "http://63e3a2de619fce55d41d9dab.mockapi.io/user/userr?username="+ usernameValue ;
    fetch(url_check)
      .then((res) => { return res.json(); })
      .then(async (res_login) => {
        if (res_login.length != 1) {
          Alert.alert("Username không đúng");
          return;
        }
        // số lượng lấy đc 1 bản ghi ==> kiểm tra pass
        let objU = res_login[0];
        if (objU.password!=Pass) {
           Alert.alert("Sai mật khẩu")
          return;
        }
        // đúng pass lưu thông tin
        try {
          props.navigation.navigate('HomeScreen');
          
        } catch (e) {
          // saving error
          console.log(e);
        }

      }).catch((err) => {
        Alert.alert(err);
      })
    
  }
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={Styles.viewlogin}>
        <Text style={Styles.textlogin}>Welcome Bro</Text>
        <TextInput style={Styles.inputLogin} placeholder='User name' placeholderTextColor={'#2d3436'} onChangeText={(txt) => setUsername(txt)} />
        <TextInput style={Styles.inputLogin} placeholder='PassWord' placeholderTextColor={'#2d3436'} secureTextEntry={true} onChangeText={(txt)=>setPass(txt)}/>
        <TouchableOpacity style={Styles.buttonLogin} onPress={()=>loginForm()}>
          <Text style={Styles.textbutton}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>

  )
}

export default Login