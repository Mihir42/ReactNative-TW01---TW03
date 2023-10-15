import { View, Text, Button} from "react-native";

const ScreenOne = ({navigation}) => {
    return (
        <View>
            <Text>This is screen One</Text>
            <Button title="Go to index"
             onPress={() => navigation.navigate('IndexScreen')}>
             </Button>
            <Button title="Go to Screen Two"
             onPress={() => navigation.navigate('ScreenTwo')}>
             </Button>
        </View>
    )
}

export default ScreenOne;