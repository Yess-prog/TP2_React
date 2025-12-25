import React, { useState } from 'react'; 
import { View, Text, Image, TextInput, Button, ScrollView, FlatList, TouchableOpacity } from 'react-native'; 
const App = () => { 
  const [text, setText] = useState(''); 
  const data = [ 
{ key: 'Élément 1' }, 
{ key: 'Élément 2' }, 
{ key: 'Élément 3' }, 
{ key: 'Élément 4' }, 
{ key: 'Élément 5' }, 
];
  return ( 
	<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}> 
	  <Text>Bienvenue dans React Native !</Text> 
    <Text style={{ fontSize: 20, color: 'blue' }}>Hello, React 
Native!</Text> 
<Image  
source={require('./assets/icon.png')} 
style={{ width: 200, height: 200 }} 
/> 
<TextInput 
style={{ height: 40, borderColor: 'gray', borderWidth: 1 }} 
placeholder="Entrez du texte" 
onChangeText={(newText) => setText(newText)} 
value={text} 
/> 
<Text>Vous avez écrit : {text}</Text>
<Button 
title="Appuyez ici" 
onPress={() => alert('Bouton appuyé')} 
/> 
<ScrollView> 
<View style={{ padding: 20 }}> 
<Text>Élément 1</Text> 
<Text>Élément 2</Text> 
<Text>Élément 3</Text> 
<Text>Élément 4</Text> 
<Text>Élément 5</Text> 
</View> 
</ScrollView>
<FlatList 
data={data} 
renderItem={({ item }) => <Text>{item.key}</Text>} 
/> 

<TouchableOpacity onPress={() => alert('Pressé')}> 
<Text style={{ fontSize: 20, color: 'blue' }}>Appuyez ici</Text> 
</TouchableOpacity> 
	</View> 
  ); 
}; 

export default App;