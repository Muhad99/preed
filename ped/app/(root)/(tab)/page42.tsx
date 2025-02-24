import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

const page42 = () => {
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
        <Text style={styles.tit}>Lesson 42: 	HOW TO AVOID GREED (Part 1)

        </Text>
        <Text style={styles.tit}>Text: Proverbs 1:17-19</Text>
        <Text style={styles.tit}>Aim: That we nay learn how to avoid greed and its consequences.

        </Text>
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.content}>
          <Text style={{ fontWeight: 'bold' }}>INTRODUCTION:</Text>: : Greed is an intense and selfish desire for something especialiy wealth, power, position, food, etc. Greed denotes an extreme desire for something, often more than one's proper share. It is an avid desire for gain or wealth that is definitely uncomplimentary in implication, Greed could also mean the inordinate, insatiable desire to accumuiate money, power and security to the level that supersedes moral and spiritual integrity. The Bible condemns greed in clear terms. The consequences of those that were greedy in the Bible were fatal. The example of Gehazi quickly comes to mind here (2 Kings 5: 21-27). The leprosy of Naaman cleaved unto him and his seed (generations) forever.
        </Text>

        <Text style={styles.subtitle}>CAUSES OF GREED</Text>
        <Text style={styles.content}>
          1.<Text>Inordinate Carnal Desire (Galatians5: 17): Greed is a product of the flesh which the Bible warns us 	to flee away from. The desire of the flesh is always contrary to the desire of the Spirit. Excessive 	desire for something causes greed.
          </Text>
        </Text>
        <Text style={styles.content}>
          2. <Text>Lack of gratitude for what you have: Human needs are insatiable. Therefore, we need to thank God 	always for meeting our needs so that He could meet the other needs that are yet to be met. Not 	doing this regularly can lead one to become ungrateful and be selfish thinking he/she doesn't have 	enough yet and so become greedy.</Text>
        </Text>
        <Text style={styles.content}>
          3. <Text>Lack of contentment (1 Timothy 6:6-10): Not being satisfied with what you have is a cause of 	greed. It is good to have aspirations in life, but when done with an ungrateful heart, one becor
            susceptible to greed.
          </Text>
        </Text>
        <Text style={styles.content}>
          4. <Text>Evil Rivalry (Genesis 4: 3-5): The sky is spacious enough for flying by all birds without their 	disturbing one another. Evil competition with others over things leads to greed. Such competition is 	not needed. This was the error of Cain.</Text>
        </Text>
        <Text style={styles.content}>
          5.  <Text>Inordinate ambition (James 4: 1-3): To be ambitious is good, but undue/unreasonable ambition can 	lead to lust which eventually leads to greed.</Text>
        </Text>
        <Text style={styles.content}>
          6.  <Text>Lack of social security and support: Everyone needs good food, money, clothing8, Shelter,  	mobility, security etc. However, excessive desire of these leads to greed.</Text>
        </Text>

        <Text style={styles.subtitle}>AREAS OF GREED</Text>
        <Text style={styles.content}>
          1.<Text>Greed for money (2 Kings 5: 20-27): The love of money is the root of all evil (1 Timothy 6: 10). It 	is popularly said "God made man; man made money, money made man crazy." (Anonymous). We
            all need money, even the Church of God needs money but the love of it leads to greed/sin. This was 	the error of Gehazi.
          </Text>
        </Text>
        <Text style={styles.content}>
          2.<Text>Greed for materialism (1 Kings 21: 1-5): King Ahab had enough material things as a King in Israel, 	but greed made him to want more even to the point of killing an innocent man to achieve his evil 	ambition. No one can possess the whole world, it is better to be contented with what you have, and 	if you want to aspire for more, make sure you do it ina morally and godly way.
          </Text>
        </Text>
        <Text style={styles.content}>
          3.<Text>Greed for Sex (2 Samuel 13: 1-3): God created sex for human enjoyment and procreation. Any 	crave for sex outside marriage is a grievous sin. Amnon cunningly/forcefully slept with Tamar (his 	halfsister). The consequence was bloody.
          </Text>
        </Text>
        <Text style={styles.content}>
          4.<Text>Greed for Spiritual Power (Acts 8: 18-24): Simon was greedy for power to the point he wanted to 	pay money to get godly power. Power is good, but seeking it at all cost is evil. Many so called men 	of God have become victims of this as well.
          </Text>
        </Text>
        <Text style={styles.content}>
          5.<Text>Greed for position (Judges 9: 1-6): Many politicians, especially in Africa have become victims of 	greed as a result of their agitations for political positions. They want to win election at all cost and 	so they engage in all forms of illicit acts to achieve their aims. The example of Abimelech in our 	text is a very clear one.
          </Text>
        </Text>
        <Text style={styles.content}>
          6.<Text>Greed for Supremacy: The desire to rise to the top and be in charge with others as subordinates is a 	good ambition but must be pursued with caution. It must be God's way. It must be without greed.          </Text>
        </Text>

        <Text style={styles.subtitle}>CONCLUSION</Text>
        <Text style={styles.content}>
          <Text>:As Christians, we must avoid greed at all cost. We brought nothing into this World and we shall not take anything out of it the day we die. So, it is imperative that we stop "running after things that should be running after us". God is our sufficiency. We must learn to be contented with what God has given us. This is not a call to be lazy, but a call to avoid greed in all our pursuits in life.
          </Text>
        </Text>
        <Text style={styles.memoryVerse}>Memory Verse: Proverb 15:27

        </Text>
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

export default page42;
