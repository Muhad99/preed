import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

const page31 = () => {
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
        <Text style={styles.tit}>Lesson 31: 	(MORDECAI: PORTRAIT OFA GREAT MAN) REVIEW OF LESSONS 26-29

        </Text>
        <Text style={styles.tit}>Text: Esther 10: 1 -3</Text>
        <Text style={styles.tit}>Aim:That we may learn what true greatness is and volunteer ourselves for such.



        </Text>
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.content}>
          <Text style={{ fontWeight: 'bold' }}>INTRODUCTION:</Text> : Many things come to mind when greatness and becoming great are mentioned. The world associates greatness most times with fame, power wealth and availability of human
          resources to serve him or her who is great. The of Mordecai's life shows that God's way to true greatness is not like that of the world.



        </Text>

        <Text style={styles.subtitle}>A. THE MAN MORDECAI	(summary of)</Text>
        <Text style={styles.content}>
          1. <Text>His name in Persia means "little man" or worshiper of the Babylonian deity "marduk". For some 	this would have limited their capacity, but not Mordecai. He rose to become a great man 	notwithstanding the supposed limitation that the meaning of his name could have imposed upon 	him. He also was a worshipper of the true God.
          </Text>
        </Text>
        <Text style={styles.content}>
          2. <Text>His family and responsibility. It cannot be categorically stated whether Mordecai had a family of 	his own but it is clear that he took his cousin and adopted her as his own daughter (Esther 2:7). 	This was a demonstration of keen sense of responsibility and compassion.</Text>
        </Text>
        <Text style={styles.content}>
          3. <Text>His duty post and commitment to service, He was committed to his work and would not give in to 	any threat, blackmail or intimidation at his s place of work. It was s his commitment to service that 	made him discover the plot to assassinate the King (Esther 6: 2).

          </Text>
        </Text>
        <Text style={styles.content}>
          4. <Text>His faith in God. His faith in God was demonstrated in many ways which included; not bowing to 	evil and evil men once he knew their deed (Esther 3:2), speaking, confidently about deliverance 	coming for the Jews from another source when Esther was dilly dallying about what to do (Esther 	4:13,14).

          </Text>
        </Text>



        <Text style={styles.subtitle}>B. WHAT MADE MORDECAI GREAT (Esther 10: 1-3).</Text>
        <Text style={styles.content}>

          <Text>What made Mordecai great was not because he had money or connection to important and 	powerful people. Mordecai's greatness could be attributed to his attention to little things that others 	do not consider at their duty post.</Text>
        </Text>

        <Text style={styles.content}>
          1. <Text>His worship, bowing down and paying of homage were reserved for God and God alone, not for 	any man (Esther 3: 1-4).

          </Text>
        </Text>
        <Text style={styles.content}>
          2. <Text>He was faithful at his duty post. He was a doorkeeper or a gate keeper but he manned his duty post 	well. His diligence and observance at his duty post paid off eventually.

          </Text>
        </Text>
        <Text style={styles.content}>
          3. <Text>He did not forget his people when he was promoted by the king. The attitude of many is to forget 	their people when they get promoted. Mordecai cared for his people before he became great and 	used his position of influence after to seek their welfare.



          </Text>
        </Text>
        <Text style={styles.content}>
          4. <Text>He continued to do good even when he was not rewarded immediately. Mordecai had leaked the
            conspiracy of Bigthana and Teresh and he was not rewarded at the time (Esther 2:21,22). He 	continued doing good until God's appointed time to reward him.



          </Text>
        </Text>
        <Text style={styles.subtitle}>C. LESSONS FROM HIS LIFE</Text>
        <Text style={styles.content}>
          1. <Text>Be faithful to God in all circumstances (1 Samuel 12: 24). We should see our life as a gift from the 	Lord and we should therefore invest our time/talents faithfuly serving Him.


          </Text>
        </Text>
        <Text style={styles.content}>
          2. <Text>Be responsible to yourself and your family (1 Timothy 5: 8). Since our life is a gift from the Lord, 	we will give account of our stewardship of this life. This imposes on us a duty to be  responsible 	both to ourselves and family.


          </Text>
        </Text>
        <Text style={styles.content}>
          3. <Text>Be concerned about the welfare of the weak and helpless such as orphans (Exodus 22: 22). God is 	concerned about the widows and the orphans because they are vulnerable (James 1: 26, 27).


          </Text>
        </Text>
        <Text style={styles.content}>
          4. <Text>Be dutiful and loyal to your work and superiors (Romans 13: 1). Serve as unto God and not as a 	men pleaser (Colossians 3: 23). Whatever we do as believers, the desire to please and serve God 	should be our focus.


          </Text>
        </Text>
        <Text style={styles.content}>
          5. <Text>Don't team up for the downfall of any (Exodus 23: 2). It is very common and easy to team up with 	the powerful and plot the downfall of others.




          </Text>
        </Text>
        <Text style={styles.content}>
          6. <Text>Use your position and privileges to advocate for others (Esther 4: 13, 14; 10: 3). Whatever position 	and privileges God gives us, He does for the sake of the gospel and for the benefit of others.
            Greatness comes from faithful service. Proverbs 22: 29 emphasize that when we do our duty 	diligently and faithfully, it will bring us promotion before kings.




          </Text>
        </Text>
        <Text style={styles.memoryVerse}>Memory Verse: 	Matthew 20: 26

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

export default page31;
