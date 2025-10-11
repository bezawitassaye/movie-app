import SearchBar from "@/components/SearchBar";
import { fetchMovies } from "@/components/services/api";
import useFetch from "@/components/services/useFetch";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { useRouter } from "expo-router";
import { ActivityIndicator, FlatList, Image, ScrollView, Text, View } from "react-native";

export default function Index() {
  const router = useRouter()
  const {data:movies,
        loading:moviesloading,
        error:movieserror
  } = useFetch(() => fetchMovies({
    query:""
  }))
  return (
    <View className="flex-1 bg-primary "
    >
      <Image source={images.bg} className="absolute w-full z-0"/>
      <ScrollView className="flex-1 px-5 "
      showsVerticalScrollIndicator={false} contentContainerStyle={{
        minHeight:"100%", paddingBottom:10
      }}>
        <Image source={icons.logo} className="w-12 h-10
        mt-20 mb-5 mx-auto"/>

        {
          moviesloading ? (
            <ActivityIndicator 
            size="large"
            color="#0000ff"
            className="mt-10 self-center"
            />
          ): movieserror ?(
            <Text>
              {movieserror?.message}
            </Text>
          ):(
            <View className="flex-1 mt-5 ">
        <SearchBar 
          onPress={() => router.push("/search")}
          placeholder="search for a movie.. "
        />

        <>
        
          <Text className="text-lg text-white font-bold mt-5 mb-3">

            latest movies
          </Text>

          <FlatList data={movies}
          renderItem={({item})=>(
            <Text className="text-white text-sm">{item.title}</Text>
          )}/>

        </>
      </View >
          )
        }
     
      
      </ScrollView>
    </View>
  );
}
