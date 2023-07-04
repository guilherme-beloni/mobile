import { ScrollView, View, Text, TextInput } from "react-native";
import { BackButton } from "../components/BackButton";

export function New () {
    return (
        <View className="flex-1 bg-background px-8 pt-16">
            <ScrollView showsHorizontalScrollIndicator={false}>
                <BackButton />

                <Text className="mt-6 text-white font-extrabold text-3xl">
                    Criar Hábito
                </Text>

                <Text className="mt-6 text-white font-semibold text-base">
                    Qual é o seu comprometimento?
                </Text>

                <TextInput className="h-12 pl-4 rounded-lg mt-3 bg bg-neutral-800 text-white focus:border-2 focus:border-violet-700">

                </TextInput>
            </ScrollView>
        </View>
    )

}