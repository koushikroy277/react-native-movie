//Component Import
import React, {useContext} from 'react';
import {View, Text, ScrollView, Button} from 'react-native';
import styled from 'styled-components/native';
import * as Progress from 'react-native-progress';

// Navigation Import
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

//Icon Import
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

// File Import
import Movies from './work/appComp/pages/Movies';
import WebSeries from './work/appComp/pages/WebSeries';
import TvShows from './work/appComp/pages/TvShows';
import MyList from './work/appComp/pages/MyList';
import {
  barBg,
  fontColor,
  regularFont,
  themeBg,
  themeColor,
} from './work/appComp/global';
import Context, {AppContext} from './work/appComp/context/Context';
import CustomHeader from './work/appComp/CustomHeader';
import Horror from './work/appComp/comp/genre/Horror';
import Action from './work/appComp/comp/genre/Action';
import Romance from './work/appComp/comp/genre/Romance';
import Comedy from './work/appComp/comp/genre/Comedy';
import {transparentBg} from './work/appComp/global';
import Documentaries from './work/appComp/comp/genre/Documentaries';
import CommonView from './work/appComp/comp/CommonView';
import CommonViewHeader from './work/appComp/comp/CommonViewHeader';
import CustomHeader2 from './work/appComp/CustomHeader2';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const SplashContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${themeBg};
  height: 100%;
`;
const SplashText = styled.Text`
  font-size: 50px;
  font-family: ${regularFont};
  text-align: center;
  color: ${themeColor};
`;
const SplashComp = () => {
  return (
    <>
      <SplashContainer>
        <Ionicons name="md-logo-firefox" size={100} color={themeColor} />
        <SplashText>Welcome to Venture!!!</SplashText>
      </SplashContainer>
    </>
  );
};

const App: React.FC = () => {
  const [isSplashVisible, setIsSplashVisible] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => setIsSplashVisible(false), 3000);
  }, [isSplashVisible]);

  return (
    <>
      {isSplashVisible ? (
        <SplashComp />
      ) : (
        <Context>
          <Home />
        </Context>
      )}
    </>
  );
};

function MoviesStack() {
  return (
    <>
      <Stack.Navigator
        initialRouteName="Movies"
        mode="modal"
        screenOptions={{
          cardOverlay: () => (
            <View style={{flex: 1, backgroundColor: themeBg}} />
          ),
          headerLeft: () => null,
          headerTransparent: true,
          headerShown: true,
          headerStyle: {
            height: 150,
            elevation: 0,
          },
        }}>
        <Stack.Screen
          name="Movies"
          component={Movies}
          options={{
            headerTitle: () => <CustomHeader headerName="Venture" />,
          }}
        />
        <Stack.Screen
          name="Horror"
          component={Horror}
          options={{
            headerTitle: () => <CustomHeader headerName="Horror" />,
          }}
        />
        <Stack.Screen
          name="Action"
          component={Action}
          options={{
            headerTitle: () => <CustomHeader headerName="Action" />,
          }}
        />
        <Stack.Screen
          name="Romance"
          component={Romance}
          options={{
            headerTitle: () => <CustomHeader headerName="Romance" />,
          }}
        />
        <Stack.Screen
          name="Comedy"
          component={Comedy}
          options={{
            headerTitle: () => <CustomHeader headerName="Comedy" />,
          }}
        />
        <Stack.Screen
          name="Documentaries"
          component={Documentaries}
          options={{
            headerTitle: () => <CustomHeader headerName="Documentaries" />,
          }}
        />
        <Stack.Screen
          name="CommonView"
          component={CommonView}
          options={{
            headerTitle: () => <CommonViewHeader />,
          }}
        />
      </Stack.Navigator>
    </>
  );
}

function WebSeriesStack() {
  const { _bgAnimation2 } = useContext(AppContext);

  return (
    <Stack.Navigator
      initialRouteName="WebSeries"
      mode="modal"
      screenOptions={{
        cardOverlay: () => <View style={{flex: 1, backgroundColor: themeBg}} />,
        headerLeft: () => null,
        headerTransparent: true,
        headerShown: true,
        headerStyle: {
          height: 150,
          elevation: 0,
        },
      }}>
      <Stack.Screen
        name="WebSeries"
        component={WebSeries}
        options={{
          headerTitle: () => <CustomHeader2 headerName="Venture" subTitle="Series" bgAnimation={_bgAnimation2} />,
        }}
      />
    </Stack.Navigator>
  );
}

function TvShowsStack() {
  const { _bgAnimation3 } = useContext(AppContext);

  return (
    <Stack.Navigator
      initialRouteName="TvShows"
      mode="modal"
      screenOptions={{
        cardOverlay: () => <View style={{flex: 1, backgroundColor: themeBg}} />,
        headerLeft: () => null,
        headerTransparent: true,
        headerShown: true,
        headerStyle: {
          height: 150,
          elevation: 0,
        },
      }}>
      <Stack.Screen
        name="TvShows"
        component={TvShows}
        options={{
          headerTitle: () => <CustomHeader2 headerName="Venture" subTitle="Shows" bgAnimation={_bgAnimation3} />,
        }}
      />
    </Stack.Navigator>
  );
}

function MyListStack() {
  return (
    <Stack.Navigator initialRouteName="MyList" screenOptions={{
      headerStyle: {
        backgroundColor: themeBg,
        height: 80
      },
      headerTitleStyle: {
        fontSize: 30,
        fontFamily: regularFont
      },
      headerTintColor: themeColor,
    }}>
      <Stack.Screen name="MyList" component={MyList} />
    </Stack.Navigator>
  );
}

function Home() {
  const icon = 24;

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="MoviesStack"
        activeColor={fontColor}
        inactiveColor="#b4acac"
        barStyle={{backgroundColor: barBg}}>
        <Tab.Screen
          name="MoviesStack"
          component={MoviesStack}
          options={{
            tabBarLabel: 'Movies',
            tabBarIcon: ({focused, color}) => (
              <MaterialCommunityIcons
                name={focused ? 'movie-open' : 'movie-open-outline'}
                color={color}
                size={icon}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Web Series"
          component={WebSeriesStack}
          options={{
            tabBarIcon: ({focused, color}) => (
              <Ionicons
                name={focused ? 'ios-albums' : 'ios-albums-outline'}
                color={color}
                size={icon}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Tv Shows"
          component={TvShowsStack}
          options={{
            tabBarIcon: ({focused, color}) => (
              <Ionicons
                name={focused ? 'ios-tv' : 'ios-tv-outline'}
                color={color}
                size={icon}
              />
            ),
          }}
        />
        <Tab.Screen
          name="My List"
          component={MyListStack}
          options={{
            tabBarIcon: ({focused, color}) => (
              <Ionicons
                name={focused ? 'ios-list-circle' : 'ios-list-circle-outline'}
                color={color}
                size={icon}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const ViewText = styled.Text`
  font-size: 30px;
  font-family: 'Oswald-Regular';
`;
export default App;
