import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

const page27 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('@/assets/images/ecwa-logo.png')} style={styles.logo} />
        <View>
          <Text style={styles.title}>Sunday School Manual 2025</Text>
          <Text style={styles.motto}>Theme: If you seek me and find me.</Text>
        </View>
      </View>

      {/* Lesson Title */}
      <View style={styles.titleHead}>
        <Text style={styles.tit}>Lesson 27: 	THE HOLY SPIRIT AND PRAYER

        </Text>
        <Text style={styles.tit}>Text: Romans 8: 26- 27</Text>
        <Text style={styles.tit}>Aim:That we may learn to rely on the Holy Spirit to pray effectively.



        </Text>
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.content}>
          <Text style={{ fontWeight: 'bold' }}>INTRODUCTION:</Text>: : One of the ways the Holy Spirit helps the believer is in the place of prayer. Without this help from our Helper, the Holy Spirit, it will be difficult to follow Jesus' instruction that men ought always to pray and not to faint. A believer that does not pray will easily faint in the days of adversity. Even when there is the desire to pray as instructed by the Lord, the believer's inherent infirmities or weaknesses make it difficult to pray according to the will of God. It is through the help of the Holy Spirit that a believer can pray fervently according to the mind and will of God in the strength of the Lord.



        </Text>

        <Text style={styles.subtitle}>A. BASIC INFORMATION ABOUT THE HOLY SPIRIT</Text>
        <Text style={styles.content}>
          1. <Text>The Holy Spirit Is The Third Person Of The God head-Trinity. He is on earth as the Chief 	Executive Officer of God's programme. Several passages of the Scripture described Him as our 	Comforter, Helper (He offers services and resources to make things easy for us), Advocate (He 	helps us to present our case better than ourselves) and One just like Jesus, who convicts, instructs 	and calls attention to Jesus (John 14: 16 - 18, 26; 16: 8 - 11, 13, 14). </Text>
        </Text>

        <Text style={styles.content}>
          2. <Text>The Holy Spirit shows empathy (John 14:16). He can feel and be grieved. He speaks and gives 	counsel (Acts 8: 29; 15: 28). He possesses divine attributes such as omniscience, omnipresence, 	omnipotent and eternality (Psalm 139: 7; Zechariah 4: 6; Hebrews 9: 14).
          </Text>
        </Text>


        <Text style={styles.subtitle}>B. THE ROLE OF THE HOLY SPIRIT IN PRAYER (Romans 8: 26, 27)</Text>
        <Text style={styles.content}>

          1. <Text>He Helps With Our Infirmities. This talks about inheren Even when we think we pray, many 	times we grumble and weakness that ma kes prayer a herculean task man. mumble words like the 	heathen. It is the Holy Spirit who in our weakness and enables s us to pray in line with the will of 	God.</Text>
        </Text>

        <Text style={styles.content}>
          2. <Text>	He Searches Our Hearts. The Holy Spirit as God knows our hearts and thoughts. He knows 	everything about us. become right with God. task fora natural

          </Text>
        </Text>
        <Text style={styles.content}>
          3. <Text>He Helps Us Know The Mind Of God. It is s very important that we understand the mind of God 	when we pray. Jesus taught ue spray for the will of God to be done on earth as it is heaven Ih ie the 	Holy Spirit who fully understands what the will of God is and can guide us into it.</Text>
        </Text>
        <Text style={styles.content}>
          4. <Text>He Makes Intercession For The Saints. One other role of the Holy Spirit is the intercession He 	makes for us in line with the will of God for our lives. This is because we do not only know what 	to pray for as we should but how intense the prayer should be. The Holy Spirit comes to our aid in 	this critical aspect of our lives.


          </Text>
        </Text>
        <Text style={styles.content}>
          5. <Text>He Enables Us To Pray In The Spirit. He is our enabler in prayer especially when we do not feel 	like praying. He strengthens our feeble knees and weak hands. We can then pray with such 	intensity that we know it is not from our carnal flesh but by the enablement of the Holy Spirit.


          </Text>
        </Text>


        <Text style={styles.subtitle}>CONCLUSION</Text>
        <Text style={styles.content}>
          <Text>: For every believer to greatly benefit from the ministry of the Holy Spirit in the place of prayer, we must be aware of his presence when we pray, acknowledge His presence and ministry and agree wItn Him as we yield to Him in the place of prayer.
          </Text>
        </Text>



        <Text style={styles.memoryVerse}>Memory Verse: 	Ephesians 6: 18</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold'
  },

  motto: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#555'
  },
  titleHead: {
    padding: 15,
    backgroundColor: '#e6f7ff',
    marginBottom: 10,
  },
  tit: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333'
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    color: '#007acc'
  },
  content: {
    fontSize: 14,
    lineHeight: 22,
    color: '#333',
    marginTop: 5
  },
  memoryVerse: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#d9534f',
    marginTop: 20,
    textAlign: 'center'
  },
});

export default page27;
