
import { icons } from '@/constants/icons';
import { images } from '@/constants/images';
import { Tabs } from 'expo-router';
import React from 'react';
import { Image, ImageBackground, Text } from 'react-native';

const TabIcon = ({focused,icon,title}:any)=>{
    return (
        <ImageBackground
            source={images.highlight}
            className='felx flex-row w-full flex-1 min-w-[112px] min-h-14 mt-4 justify-center
            items-center rounded-full overflow-hidden'>
               <Image source={icon}
               tintColor={"#151312"} className='size-5'/>
               <Text className='text-secondary text-base font-semibold ml-2'>{title}</Text>

            </ImageBackground>
    )
}


const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon:({focused})=>(
        
            <TabIcon
            focused={focused}
            icon={icons.home}
            title="home"/>
           
          )
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'search',
          headerShown: false,
          tabBarIcon:({focused})=>(
            <TabIcon
            focused={focused}
            icon={icons.search}
            title="search"/>
          )
        }}
      />

      

      <Tabs.Screen
        name="saved"
        options={{
          title: 'saved',
          headerShown: false,
          tabBarIcon:({focused})=>(
            <TabIcon
            focused={focused}
            icon={icons.save}
            title="saved"/>
          )
        }}
      />

      

      <Tabs.Screen
        name="profile"
        options={{
          title: 'profile',
          headerShown: false,
          tabBarIcon:({focused})=>(
            <TabIcon
            focused={focused}
            icon={icons.person}
            title="Profile"
            />
          )
        }}
      />
    </Tabs>
  );
};

export default _layout;
