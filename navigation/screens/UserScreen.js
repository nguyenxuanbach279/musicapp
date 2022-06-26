import * as React from 'react';
import { View, Text } from 'react-native';

export default function UserScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('Music')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>User Screen</Text>


        </View>
    );
}