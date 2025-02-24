import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

const page43 = () => {
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
        <Text style={styles.tit}>Lesson 43: 	HOW TO AVOID GREED (Part 2)

        </Text>
        <Text style={styles.tit}>Text: Proverbs 1:17-19</Text>
        <Text style={styles.tit}>Aim: That when may learn how to avoid greed and its consequences.
        </Text>
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.content}>
          <Text style={{ fontWeight: 'bold' }}>INTRODUCTION:</Text>Greed is evil. It is a sin the Bible has warned us against in clear terms. This is because it has serious consequences here on Earth and in Eternity. We are to do everything possible to run away from it. In this lesson, we would study the consequences of greed and how we can avoid it.
        </Text>

        <Text style={styles.subtitle}>CONSEQUENCES OF GREED</Text>
        <Text style={styles.content}>
          1.<Text>It leads to anxiety and depression. Anxiety is a state of worry and nervousness. t is a very bad state 	of mind that can lead to depression. Depression brings about sadness, hopelessness, despair and 	can lead to sudden death or suicide. Jesus warned us against this in Matthew 6: 31. Anxiety cannot 	solve any mater, it only adds to the problem.
          </Text>
        </Text>
        <Text style={styles.content}>
          2. <Text>It breeds lies and deceits. Gehazi lied to Elisha his master as a result of greed (2 Kings 5:25-26). To 	cover a sin, one looks for another sin to cover it. Sin eventually multiplies. Deception and lies must 	not be mentioned among Christians.</Text>
        </Text>
        <Text style={styles.content}>
          3. <Text>It breeds jealousy. Greed leads to this evil that the Bible warned us against.

          </Text>
        </Text>
        <Text style={styles.content}>
          4. <Text>It can result to falsification of document and embezzlement. In trying to acquire something by all 	means, one could begin to make money illegally by using ungodly ways to get the money needed 	for that thing. The conseguence, of course would be disastrous.

          </Text>
        </Text>
        <Text style={styles.content}>
          5.  <Text>It leads to stinginess. Greed could make one to be stingy (hoarding your recourses). This makes it 	very difficult to help those that need your help because you want all to be yours.  Sharing what we 	have with those that need your help is highly commended in the Scriptures.</Text>
        </Text>
        <Text style={styles.content}>
          6.  <Text>It leads to committing evil and wicked acts (2 Samuel 12: 7-12) David killed Urriah as a result of 	lust towards Bathsheba Uriah's wife. In trying to cover his sin caused by greed, he arranged the 	death of an innocent man. The consequence was that 'sword did not depart' from his house. 	Although, God forgave him, he paid dearly for it.</Text>
        </Text>
        <Text style={styles.content}>
          5.  <Text>It stirs up conflict (Prove rbs 28: 25). Greed can lead to disagreement, quarrel, strife, and 	contention. A fight could break out and it may escalate beyond expectation.

          </Text>
        </Text>
        <Text style={styles.content}>
          5.  <Text>It might result to death (Proverbs 1: 19). In trying to acquire things in a greedy way, one can die in 	the process. This is because he would be doing himself great harm that can cause him sickness and 	untold hardship.</Text>
        </Text>
        <Text style={styles.content}>
          5.  <Text>It leads to eternal damnation (1 Corinthians 6: 10). Whatever you acquire in life either legitimately 	or illegitimately, you will leave them here on earth the very day you die. Greed leads to Hell. No 	greedy person will make heaven.</Text>
        </Text>

        <Text style={styles.subtitle}>HOW TO AVOID GREED</Text>
        <Text style={styles.content}>
          1.<Text>Be born again (John 3:3 -6). This is fundamental. This is the criterion to make heaven as well as away to be free from greed. A 'good' Christian cannot be greedy. So, being born again would help you greatly to shun greed. It will help you to always look up to Jesus alone for your needs (Psalm 121: 1-2).
          </Text>
        </Text>
        <Text style={styles.content}>
          2.<Text>Be spiritual (Romans 12: 1- 2; Colossians 3: 5). Present your body to God as a living sacrifice, doing what pleases the Master Jesus alone. Take the things of the Spirit serious. Strive to live a holy and accepta ble life on daily bases.
          </Text>
        </Text>
        <Text style={styles.content}>
          3.<Text>Be always grateful for what you have (Psalms 103: 1-2): What you have is not by your own power, 	but God's power. If you are grateful for what you already have, God will be willing to give you 	what you are yet to have according to His will for you in Christ Jesus. So be thankful.
          </Text>
        </Text>
        <Text style={styles.content}>
          4.<Text>Be contented (1 Timothy 6: 6). Human needs are insatiable. You can not possess the whole World, 	be satisfied with what vou have. There is no crime in working hard to have more, but it is sinful to 	be greedy. You need I to draw the line between struggling or working very hard and greediness. 	They are two different things.
          </Text>
        </Text>
        <Text style={styles.content}>
          5.<Text>Trust God always for your desires (Philippians 4: 6-7). God is your provider. Look unto Him for 	that which your heart desires. Call unto Him and He will answer you according to. His will for 	you. He knows what will harm us and what will be good for us. So put your trust in Him.
          </Text>
        </Text>
        <Text style={styles.content}>
          6.<Text>Be heavenly-minded (Matthew 6: 19- 20; Ephesians 5: 3). Heaven is our final destination. You 	must set your mind on the things above and not the things here on earth. You must avoid 	covetousness. </Text>
        </Text>

        <Text style={styles.subtitle}>CONCLUSION</Text>
        <Text style={styles.content}>
          <Text>:Greed never did anyone good. So it has nothing good to offer you. You must run away from it as one runs away from a snake. God is your sufficiency. He will meet your needs.
          </Text>
        </Text>
        <Text style={styles.memoryVerse}>Memory Verse: Ecclesiastes 5:10

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

export default page43;
