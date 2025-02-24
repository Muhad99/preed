import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

const page37 = () => {
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
        <Text style={styles.tit}>Lesson 37: 	THE WORLD IN THE CHURCH

        </Text>
        <Text style={styles.tit}>Text: 1 Corinthians 3: 1 -4</Text>
        <Text style={styles.tit}>Aim: That we may know how worldliness affects the church and how to avoid it.


        </Text>
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.content}>
          <Text style={{ fontWeight: 'bold' }}>INTRODUCTION:</Text>: : Worldliness is a situation relating to or consisting of physical things and ordinary life rather than spiritual things (Cambridge Advanced Learner's Dictionary). It refers to the fallen state of man, self, greed, and pride. It is therefore very surprising to see the rate at which the church is becoming worldly nowadays! The presence of the world in the church today is felt much more than we see the church in the world. Instead of the church to transform the world as light with the gospel of Christ, it is the 'world' that we see coming into the church despite clear biblical admonishments against such (2 Corinthians 6: 17; 1 John 2: 15). In this lesson we shall be looking at the presence of the world in the church. alienated from God and His truth, which Satan heads and is based upon



        </Text>

        <Text style={styles.subtitle}>CHARACTERISTICS OF A WORLDLY CHURCH</Text>
        <Text style={styles.content}>
          1.<Text>A church that is worldly feeds on milk be cause it cannot take solid food or sound doctrine as they 	are infants in Christ (1 Corinthians 3: 2).
          </Text>
        </Text>
        <Text style={styles.content}>
          2. <Text>A church that is worldly is full of jealousy and quarreling (1Corinthians 3:3). Such a church is also 	full of ceremonial activities rather than spiritual activities.</Text>
        </Text>
        <Text style={styles.content}>
          3. <Text>Division among brethren characterizes a church that is woridly (1Corinthians 3: 4). 5.

          </Text>
        </Text>
        <Text style={styles.content}>
          4. <Text>A worldly church is also characterized by immoral behavibur (1Corinthians 5: 1-3).</Text>
        </Text>
        <Text style={styles.content}>
          5.  <Text>Ungodly behaviours are common features of a church that is worldly. Worldliness could be 	recognized by certain behaviours  such as: in the desire to wear indecent and loose dressings that 	expose sensitive body parts; the desire to do and wear hair styles that make one look irresponsible 	with no sense of decency and godliness; adornment with jewelry that make one look like an 	unbeliever, passion for worldly music, movies and a host of others all in the name of being under 	the dispensation of grace and liberty. </Text>
        </Text>
        <Text style={styles.content}>
          6.  <Text>A worldly church is a mere entertainment centre. The world has its own entertainment and 	diversions that permeate the social space and make the way of the Cross seem irrelevant. In much 	of the entertainment media, the name of God is profaned, sex is glamorized, and Christian moral 	standards are ridiculed.</Text>
        </Text>

        <Text style={styles.subtitle}>DANGERS OF WORLDLINESS IN THE CHURCH</Text>
        <Text style={styles.content}>
          1.<Text>Lack of spiritual growth.</Text>
        </Text>
        <Text style={styles.content}>
          2.<Text>Invitation of God's judgement.

          </Text>
        </Text>
        <Text style={styles.content}>
          3.<Text>Loss of integrity.

          </Text>
        </Text>
        <Text style={styles.content}>
          4.<Text>Loss of power (Acts 19: 11- 16).
          </Text>
        </Text>
        <Text style={styles.content}>
          5.<Text>Loss of relevance.

          </Text>
        </Text>

        <Text style={styles.subtitle}>HOW TO AVOID WORLDLINESS IN THE CHURCH</Text>
        <Text style={styles.content}>
          1.<Text> Preachers should always preach sound doctrine even if it hurts (2Timothy 4: 2). How different the church was in the olden days! Ministers preached passionate sermons that warned against the dangers of worldliness.
          </Text>
        </Text>
        <Text style={styles.content}>
          2.<Text> Always desire the solid spiritual food of the Word of God (Psalm 42:1-2; 1 Corinthiarns 3: 2).
          </Text>
        </Text>
        <Text style={styles.content}>
          3.<Text> Pray for true revival (Psalm 139:23, 24). Do not love or imitate the world (1 John 2: 15).
          </Text>
        </Text>
        <Text style={styles.content}>
          4.<Text> Do not be conformed to this world (Romans 12: 2). The Bible says, "Whoever therefore wants to be a friend of the world makes himselfan enemy of God" (James 4:4).
          </Text>
        </Text>
        <Text style={styles.content}>
          5.<Text> Prioritize evangelism. The church is commanded to go and make  disciples of all nations (Matthew 28: 19).
          </Text>
        </Text>
        <Text style={styles.content}>
          6.<Text>Separate yourself. The church must make intentional efforts to come out of the world (2 Corinthians 6: 17).
          </Text>
        </Text>
        <Text style={styles.subtitle}>CONCLUSION</Text>
        <Text style={styles.content}>
          <Text>:The sad truth is that the lives of a number of those inside the church today are almost identical with those outside the church. Instead of being a counter-force to worldliness challenging and even condemning worldly passions, churches with such members seem to be either tolerating or adopting the same values and goals with the world. May God deliver us from the effect of worldliness in Jesus name.
          </Text>
        </Text>

        <Text style={styles.memoryVerse}>Memory Verse: 1 Corinthians 6: 17.

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

export default page37;
