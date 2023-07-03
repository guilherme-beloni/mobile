import { ScrollView, View, Text } from "react-native";
import { BackButton } from "../components/BackButton";

export function New () {
    return (
        <View className="flex-1 bg-background px-8 pt-16">
            <ScrollView showsHorizontalScrollIndicator={false}>
                <BackButton />
            </ScrollView>
        </View>
    )

}