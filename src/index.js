import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import SplashScreen from "./screens/SplashScreen";
import HomeScreen from "./screens/HomeScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AddTaskScreen from "./screens/AddTaskScreen";
import EditTaskScreen from "./screens/EditTaskScreen";
import React from "react";

const Stack = createNativeStackNavigator();
const Tabs = createMaterialBottomTabNavigator();

function TabsNavigation() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={"#782DE3"} size={26} />
          ),
        }}
      />
      <Tabs.Screen
        name="Adicionar Tarefa"
        component={AddTaskScreen}
        options={{
          tabBarLabel: "Adicionar Tarefa",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="bell-alert"
              color={"#782DE3"}
              size={26}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Editar Tarefa"
        component={EditTaskScreen}
        options={{
          tabBarLabel: "Editar Tarefa",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="bell-alert"
              color={"#782DE3"}
              size={26}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="TabsNavigation"
          component={TabsNavigation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#000",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="Adicionar Tarefa"
          component={AddTaskScreen}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#000",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="Editar Tarefa"
          component={EditTaskScreen}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#000",
            },
            headerTintColor: "#fff",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}