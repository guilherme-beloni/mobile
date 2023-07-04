import { View, ScrollView, Text } from "react-native";
import { useRoute } from '@react-navigation/native'
import { BackButton } from "../components/BackButton";
import dayjs from 'dayjs';


interface Params {
    date: string;
}

export function Habit () {

    const route = useRoute();
    const { date } = route.params as Params;

    const parsedDate = dayjs(date);
    const dayOfWeek = parsedDate.format('dddd');
    const dayAndMouth = parsedDate.format('DD/MM');

    console.log(date);

    return (
        <View className="flex-1 bg-background px-8 pt-16 ">
            <ScrollView contentContainerStyle={{ paddingBottom: 100 }} showsHorizontalScrollIndicator={false}>
                <BackButton />

                <Text className="mt-6 text-neutral-400 font-semibold text-base lowercase">
                    {dayOfWeek}
                </Text>
                <Text className="text-white font-extrabold text-3xl">
                    {dayAndMouth}
                </Text>
                
            </ScrollView>
        </View>
    )

}