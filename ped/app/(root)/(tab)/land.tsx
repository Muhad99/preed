import { View, ScrollView, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from "expo-router";

const land = () => {
  const router = useRouter();

  const less1 = () => {
    router.push('/less1'); // Navigates to '/homesplash1' on press
  };
  const less2 = () => {
    router.push('/less2'); // Navigates to '/homesplash1' on press
  };
  const less3 = () => {
    router.push('/less3'); // Navigates to '/homesplash1' on press
  };
  const less4 = () => {
    router.push('/less4'); // Navigates to '/homesplash1' on press
  };
  const less5 = () => {
    router.push('/less5'); // Navigates to '/homesplash1' on press
  };
  const less6 = () => {
    router.push('/less6'); // Navigates to '/homesplash1' on press
  };
  const less7 = () => {
    router.push('/less7'); // Navigates to '/homesplash1' on press
  };
  const less8 = () => {
    router.push('/less8'); // Navigates to '/homesplash1' on press
  };
  const less9 = () => {
    router.push('/less9'); // Navigates to '/homesplash1' on press
  };
  const quest1 = () => {
    router.push('/quest1'); // Navigates to '/homesplash1' on press
  };
  const less10 = () => {
    router.push('/less10'); // Navigates to '/homesplash1' on press
  };
  const less11 = () => {
    router.push('/less11'); // Navigates to '/homesplash1' on press
  };
  const less12 = () => {
    router.push('/less12'); // Navigates to '/homesplash1' on press
  };
  const less13 = () => {
    router.push('/less13'); // Navigates to '/homesplash1' on press
  };
  const less14 = () => {
    router.push('/less14'); // Navigates to '/homesplash1' on press
  };
  const less15 = () => {
    router.push('/less15'); // Navigates to '/homesplash1' on press
  };
  const less16 = () => {
    router.push('/less16'); // Navigates to '/homesplash1' on press
  };
  const less17 = () => {
    router.push('/less17'); // Navigates to '/homesplash1' on press
  };
  const less18 = () => {
    router.push('/less18'); // Navigates to '/homesplash1' on press
  };
  const less19 = () => {
    router.push('/less19'); // Navigates to '/homesplash1' on press
  };
  const less20 = () => {
    router.push('/less20'); // Navigates to '/homesplash1' on press
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require('@/assets/images/ecwa-logo.png')}
        />
        <Text style={styles.title}>ECWA Sunday School Manual 2025</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollcontain}>
        <TouchableOpacity style={styles.con} onPress={less1}>
          <Image
            style={styles.less}
            source={require('@/assets/images/less1.jpg')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.con} onPress={less2}>
          <Image
            style={styles.less}
            source={require('@/assets/images/less2.jpg')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.con} onPress={less3}>
          <Image
            style={styles.less}
            source={require('@/assets/images/less3.jpg')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.con} onPress={less4}>
          <Image
            style={styles.less}
            source={require('@/assets/images/less4.jpg')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.con} onPress={less5}>
          <Image
            style={styles.less}
            source={require('@/assets/images/less5.jpg')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.con} onPress={less6}>
          <Image
            style={styles.less}
            source={require('@/assets/images/less6.jpg')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.con} onPress={less7}>
          <Image
            style={styles.less}
            source={require('@/assets/images/less7.jpg')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.con} onPress={less8}>
          <Image
            style={styles.less}
            source={require('@/assets/images/less8.jpg')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.con} onPress={less9}>
          <Image
            style={styles.less}
            source={require('@/assets/images/less9.jpg')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.con} onPress={quest1}>
          <Image
            style={styles.less}
            source={require('@/assets/images/Questions.jpg')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.con} onPress={less10}>
          <Image
            style={styles.less}
            source={require('@/assets/images/less10.jpg')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.con} onPress={less11}>
          <Image
            style={styles.less}
            source={require('@/assets/images/less11.jpg')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.con} onPress={less12}>
          <Image
            style={styles.less}
            source={require('@/assets/images/less12.jpg')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.con} onPress={less13}>
          <Image
            style={styles.less}
            source={require('@/assets/images/less13.jpg')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.con} onPress={less14}>
          <Image
            style={styles.less}
            source={require('@/assets/images/less14.jpg')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.con} onPress={less15}>
          <Image
            style={styles.less}
            source={require('@/assets/images/less15.jpg')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.con} onPress={less16}>
          <Image
            style={styles.less}
            source={require('@/assets/images/less16.jpg')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.con} onPress={less17}>
          <Image
            style={styles.less}
            source={require('@/assets/images/less17.jpg')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.con} onPress={less18}>
          <Image
            style={styles.less}
            source={require('@/assets/images/less18.jpg')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.con} onPress={less19}>
          <Image
            style={styles.less}
            source={require('@/assets/images/less19.jpg')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.con} onPress={less20}>
          <Image
            style={styles.less}
            source={require('@/assets/images/less20.jpg')}
          />
        </TouchableOpacity>
        <Image
          style={styles.less}
          source={require('@/assets/images/less21.jpg')}
        />
        <Image
          style={styles.less}
          source={require('@/assets/images/less22.jpg')}
        />
        <Image
          style={styles.less}
          source={require('@/assets/images/less23.jpg')}
        />
        <Image
          style={styles.less}
          source={require('@/assets/images/less24.jpg')}
        />
        <Image
          style={styles.less}
          source={require('@/assets/images/less25.jpg')}
        />
        <Image
          style={styles.less}
          source={require('@/assets/images/less26.jpg')}
        />
        <Image
          style={styles.less}
          source={require('@/assets/images/less27.jpg')}
        />
        <Image
          style={styles.less}
          source={require('@/assets/images/less28.jpg')}
        />
        <Image
          style={styles.less}
          source={require('@/assets/images/less29.jpg')}
        />
        <Image
          style={styles.less}
          source={require('@/assets/images/less30.jpg')}
        />
        <Image
          style={styles.less}
          source={require('@/assets/images/less31.jpg')}
        />
        <Image
          style={styles.less}
          source={require('@/assets/images/less32.jpg')}
        />
        <Image
          style={styles.less}
          source={require('@/assets/images/less33.jpg')}
        />
        <Image
          style={styles.less}
          source={require('@/assets/images/less34.jpg')}
        />
        <Image
          style={styles.less}
          source={require('@/assets/images/less35.jpg')}
        />
        <Image
          style={styles.less}
          source={require('@/assets/images/less36.jpg')}
        />
        <Image
          style={styles.less}
          source={require('@/assets/images/less37.jpg')}
        />
        <Image
          style={styles.less}
          source={require('@/assets/images/less38.jpg')}
        />
        <Image
          style={styles.less}
          source={require('@/assets/images/less39.jpg')}
        />
        <Image
          style={styles.less}
          source={require('@/assets/images/less40.jpg')}
        />
        <Image
          style={styles.less}
          source={require('@/assets/images/less41.jpg')}
        />
        <Image
          style={styles.less}
          source={require('@/assets/images/less42.jpg')}
        />
        <Image
          style={styles.less}
          source={require('@/assets/images/less43.jpg')}
        />
        <Image
          style={styles.less}
          source={require('@/assets/images/less44.jpg')}
        />
        <Image
          style={styles.less}
          source={require('@/assets/images/less45.jpg')}
        />
        <Image
          style={styles.less}
          source={require('@/assets/images/less46.jpg')}
        />
        <Image
          style={styles.less}
          source={require('@/assets/images/less47.jpg')}
        />
        <Image
          style={styles.less}
          source={require('@/assets/images/less48.jpg')}
        />
        <Image
          style={styles.less}
          source={require('@/assets/images/less49.jpg')}
        />
        <Image
          style={styles.less}
          source={require('@/assets/images/less50.jpg')}
        />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 100,
    height: 100,
  },
  less: {
    resizeMode: 'center',
    width: '100%',
    marginBottom: -90,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  scrollcontain: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,

  },
  con: {
    width: '100%',
  },
});

export default land;