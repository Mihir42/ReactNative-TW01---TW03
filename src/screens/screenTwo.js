import { View, Text, Button} from "react-native";

const ScreenTwo = ({navigation}) => {
    return (
        <View>
            <Text>This is screen Two</Text>
            <Button title="Go to Index" 
             onPress={() => navigation.navigate('IndexScreen')}/>
            <Button title="Go to Screen one"
             onPress={() => navigation.navigate('ScreenOne')}/>
        </View>
    )
}

export default ScreenTwo;