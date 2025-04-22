import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

// 1 - without React Navigation (only React Native)
// 2 - with React Navigation
const EXAMPLE_ROOT = 1;

// 1 - with centerContent
// 2 - with contentContainerStyle
const EXAMPLE_CONTENT = 1;

// 1 - Content1 size === Content2 size
// 2 - Content1 size !== Content2 size
const EXAMPLE_CONTENT_SIZE = 1;

//#region Styles
const styles = StyleSheet.create({
  Container: {
    backgroundColor: 'red',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },

  ScrollView: {
    //
  },

  ScrollView__1: {
    //
  },

  ScrollView__2: {
    //
  },

  ScrollView__ContentContainer: {
    backgroundColor: 'yellow',
    padding: 10,
  },

  ScrollView__ContentContainer__1: {
    justifyContent: 'center',
    flex: 1,
  },

  ScrollView__ContentContainer__2: {
    flex: 1,
  },

  Box: {
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },

  Box__1: {
    height: 150,
    width: 200,
  },

  Box__2: {
    height: EXAMPLE_CONTENT_SIZE === 1 ? 150 : 170,
    width: EXAMPLE_CONTENT_SIZE === 1 ? 200 : 220,
  },
});
//#endregion

//#region Screens
export const ScrollViewScreen1 = () => {
  const [centerContent] = useState(EXAMPLE_CONTENT === 1 ? true : false);

  return (
    <View style={styles.Container}>
      <ScrollView
        centerContent={centerContent}
        contentContainerStyle={[
          styles.ScrollView__ContentContainer,
          EXAMPLE_CONTENT === 2 && styles.ScrollView__ContentContainer__1,
        ]}
        key={'ScrollViewScreen1'}
        style={[styles.ScrollView, styles.ScrollView__1]}>
        <View style={[styles.Box, styles.Box__1]}>
          <Text>ScrollView Screen 1</Text>
          <Text>centerContent: {centerContent ? 'true' : 'false'}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export const ScrollViewScreen2 = () => {
  const [centerContent] = useState(false);

  return (
    <View style={styles.Container}>
      <ScrollView
        centerContent={centerContent}
        contentContainerStyle={[
          styles.ScrollView__ContentContainer,
          EXAMPLE_CONTENT === 2 && styles.ScrollView__ContentContainer__2,
        ]}
        key={'ScrollViewScreen2'}
        style={[styles.ScrollView, styles.ScrollView__2]}>
        <View style={[styles.Box, styles.Box__2]}>
          <Text>ScrollView Screen 2</Text>
          <Text>centerContent: {centerContent ? 'true' : 'false'}</Text>
        </View>
      </ScrollView>
    </View>
  );
};
//#endregion

//#region Example 1 - Only React Native
const Root1 = () => {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setInitialized(true);
    }, 2000);
  }, []);

  if (initialized === false) {
    return <ScrollViewScreen1 />;
  }

  return <ScrollViewScreen2 />;
};
//#endregion

//#region Example 2 - With ReactNavigation
const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setInitialized(true);
    }, 2000);
  }, []);

  return (
    <RootStack.Navigator initialRouteName={'ScrollViewScreen1'}>
      {initialized === false ? (
        <RootStack.Group>
          <RootStack.Screen
            name="ScrollViewScreen1"
            component={ScrollViewScreen1}
          />
        </RootStack.Group>
      ) : (
        <RootStack.Group>
          <RootStack.Screen
            name="ScrollViewScreen2"
            component={ScrollViewScreen2}
          />
        </RootStack.Group>
      )}
    </RootStack.Navigator>
  );
};

const Root2 = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};
//#endregion

export const App = () => {
  if (EXAMPLE_ROOT === 1) {
    return <Root1 />;
  }

  if (EXAMPLE_ROOT === 2) {
    return <Root2 />;
  }

  return null;
};
