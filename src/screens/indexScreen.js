import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function IndexScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Mario Characters</Text>
      <View styles={styles.container}>
        <Button
            title="Go to screen one"
            onPress={() => navigation.navigate('ScreenOne')}
        />
        <Button
            title="Go to screen two"
            onPress={() => navigation.navigate('ScreenTwo')}
        />
      </View>
      <ScrollView horizontal = {false}>
        <View style={styles.itemContainer}>
          <Text style={styles.nameText}>Mario</Text>
          <Image source={require('../../assets/SMBW_Mario_Jump.webp')} style={styles.img} />
        </View>

      <View style={styles.itemContainer}>
        <Text style={styles.nameText}>Luigi</Text>
        <Image source={require('../../assets/MPSS_Luigi.webp')} style={styles.img} />
        <StatusBar style="auto" />
      </View>

      <View style={styles.itemContainer}>
        <Text style={styles.nameText}>Peach</Text>
        <Image source={require('../../assets/Princess_Peach_Stock_Art.png')} style={styles.img} />
      </View>

      <View style={styles.itemContainer}>
        <Text style={styles.nameText}>Toad</Text>
        <Image source={require('../../assets/cursed.jpg')} style={styles.img} />
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create(
  {
  heading: {
    fontSize: 30, 
    fontWeight: "bold",
    color: "green",
  },
  nameText: {
    fontSize: 20,
    color: "blue",
    marginTop: 10
  },
  img: {
    width: 250,
    height: 250
  },
  itemContainer: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 4,
    padding: 5,
    marginVertical: 5,
  }
});
