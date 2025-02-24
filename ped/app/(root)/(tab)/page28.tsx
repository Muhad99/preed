import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

const page28 = () => {
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
        <Text style={styles.tit}>Lesson 28: 	BIBLICAL FASTING

        </Text>
        <Text style={styles.tit}>Text: Matthew 6: 16-18</Text>
        <Text style={styles.tit}>Aim:That believers may learn and practice the discipline of spiritual fasting and enjoy its benefits.



        </Text>
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.content}>
          <Text style={{ fontWeight: 'bold' }}>INTRODUCTION:</Text> A'Fast' is the practice of abstaining from all manner of food, or the practice of only eating certain kinds of food or eating sparingly as a form of religious observance with the goal of spiritual devotion and prayer. Biblical Fasting is to choose not to partake of food, water and pleasures due to intense spiritual hunger so that quality time can be devoted to prayer. People observed this for different spiritual needs in the Bible. In all, Biblical fasting helps the believer understand and appreciate the Christian faith which is a call to self-denial, self- sacrifice, selfless service and deep devotion to God in prayer and His word.



        </Text>

        <Text style={styles.subtitle}>A. TYPES OF FASTING</Text>
        <Text style={styles.content}>
          1. <Text>Absolute Fast: In Absolute fast, total abstinence from food and Water is practised during the period 	of the fast. The person observing the fast is devoted to waiting on the Lord in meditation and 	prayer and so stays away from food and water(Esther 4: 16, Deuteronomy 9: 9-11).  </Text>
        </Text>

        <Text style={styles.content}>
          2. <Text>Partial Fast: In Partial fast, abstinence from certain types of food for a period of time is practiced. It 	is a resolution to give up a particular food or drink for an extended period of time for the purpose 	of deepening one's spiritual hunger. The typical example of this type of fasting in the Bible was in 	the days of Daniel (Daniel 10:3).
          </Text>
        </Text>
        <Text style={styles.content}>
          3. <Text>Normal Fast: This type fast is when you drink only water for the period of the fast. It is also known 	as water fast.  </Text>
        </Text>
        <Text style={styles.content}>
          4. <Text>Intermittent Fast: In this kind of fast, periods of eating and fasting are alternated at intervals to 	allow for periods of devoted prayer.

          </Text>
        </Text>


        <Text style={styles.subtitle}>B. REASONS CHRISTIANS SHOULD FAST</Text>
        <Text style={styles.content}>

          1. <Text>Jesus is our example (Matthew 4: 1). Jesus' fasting shows us the spiritual importance fasting has on 	our lives and our personal walk with God as it helps our spiritual growth and brings more 	effectiveness and spiritual strength to live daily for God. </Text>
        </Text>

        <Text style={styles.content}>
          2. <Text>	God commanded fasts for His people (Joel 1: 14; 2: 12). There are occasions in the Biblical records 	where God inspired His prophets to 	declare seasons of fasting for His people either as a call to 	repentance or spiritual preparation to welcome God's visitation.

          </Text>
        </Text>
        <Text style={styles.content}>
          3. <Text>In fasting, the desire to put God first finds expression (Daniel 9:2-3). In genuine fasts, relationship 	of the believer and the Lord is made first priority.

          </Text>
        </Text>
        <Text style={styles.content}>
          4. <Text>Fasting draws us close to God and His plans (Acts 13: 2). Fasting directs our desires to God (James 	4:8). God uses fasting as one of the tools of drawing us to His plan. We have access to divine 	revelations and receive guidance in the place of fasting accompanied with prayers.


          </Text>
        </Text>
        <Text style={styles.content}>
          5. <Text>Fasting is a spiritual weapon for warfare (Matthew 17: 21). It is a spiritual weapon for dealing with 	flesh, worldliness and Satan (Galatians 5: 16; Hebrews 12: 4). In fasting we are spiritually 	strengthened as we depend more on God and have our strength renewed.


          </Text>
        </Text>
        <Text style={styles.content}>
          6. <Text>Fasting gives additional concentration and power to Prayer (2 Chronicles 20: 3, 4). We sometimes 	need to devote more time to pray to God than our usual personal or family altar. In fasting, we find 	such opportunities.


          </Text>
        </Text>
        <Text style={styles.subtitle}>ABUSE OF FASTING</Text>
        <Text style={styles.content}>
          1.<Text>Use of fasting as a bribe. Nothing can make God give what is not in His plan. Our fasting and 	prayer only expresses our faith in receiving what He already promises to do for his children.
          </Text>
        </Text>
        <Text style={styles.content}>
          2.<Text>Fasting to impress men (Matthew 6: 16- 18). Jesus condemned the habit of fasting to impress men 	and he regards it as an act of hypocrisy.
          </Text>
        </Text>
        <Text style={styles.content}>
          3.<Text>Fasting is not compatible with:
          </Text>
        </Text>
        <Text style={styles.content}>
          a.<Text>Oppression of the poor and injustice (Isaiah 58:3,6).
          </Text>
        </Text>
        <Text style={styles.content}>
          b. <Text>Malicious talk
          </Text>
        </Text>
        <Text style={styles.content}>
          c. <Text>Rifts and lack of forgiveness (lsaiah 58:4).
          </Text>
        </Text>
        <Text style={styles.content}>
          4.<Text>Declaring a fast because there is no food at home. Fasting should be intentional with a spiritual 	purpose in mind.
          </Text>
        </Text>
        <Text style={styles.content}>
          5.<Text>Biblical fasting is not dieting but it comes with some health benefits. Though fasting can be used as 	a therapeutic approach to manage certain medical conditions, yet, the goal of biblical fasting is 	spiritual walk with God. It however has some health benefits.
          </Text>
        </Text>
        <Text style={styles.content}>
          Note: <Text>: Whether you are fasting or not, you are expected to live a holy life (1 Peter 1: 14- 15).
          </Text>
        </Text>


        <Text style={styles.subtitle}>CONCLUSION</Text>
        <Text style={styles.content}>
          <Text>: When fasting is spiritually guided, it enhances self- discipline and devotion. It helps one to achieve the goal of spiritual renewal and growth and it brings answers toour prayers.
          </Text>
        </Text>



        <Text style={styles.memoryVerse}>Memory Verse: 	Matthew 6: 16.</Text>
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

export default page28;
