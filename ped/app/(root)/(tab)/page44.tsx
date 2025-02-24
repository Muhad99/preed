import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

const page44 = () => {
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
        <Text style={styles.tit}>Lesson 44: 	PRACTISING SELF - DISCIPLINE

        </Text>
        <Text style={styles.tit}>Text: 1Corinthians 9: 24-27</Text>
        <Text style={styles.tit}>Aim: That we may learn to cultivate self-discipline as a lifestyle so we can live effectively as believers.
        </Text>
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.content}>
          <Text style={{ fontWeight: 'bold' }}>INTRODUCTION:</Text>It is easy to be distracted from living a purpose driven life if one is not intentional and disciplined. God calls us to be intentional and purposeful, knowing that we are created for a purpose and have a goal to achieve as His children. We therefore need to focus on the goal continuously. The Apostie Paul compares the Christian life to a race, highlighting the significance of self-discipline in achieving our God-given goals (1 Corinthians 9: 24- 27). Without SELF-DISCIPLINE, this won't be possible.
        </Text>

        <Text style={styles.subtitle}>SIGNS OF LACKOF SELF-DISCIPLINE</Text>
        <Text style={styles.content}>
          1.<Text>People who lack self-discipline often-times manifest some of the
            following signs:

          </Text>
        </Text>
        <Text style={styles.content}>
          2. <Text>Manage their time badly</Text>
        </Text>
        <Text style={styles.content}>
          3. <Text>Have difficulty setting goals.
          </Text>
        </Text>
        <Text style={styles.content}>
          4. <Text>Can be impulsive
          </Text>
        </Text>
        <Text style={styles.content}>
          5.  <Text>Struggle with personal responsibility</Text>
        </Text>
        <Text style={styles.content}>
          6.  <Text>Have difficulty maintaining relationships</Text>
        </Text>
        <Text style={styles.content}>
          5.  <Text>Lack persistence
          </Text>
        </Text>

        <Text style={styles.subtitle}>EXAMPLES OF PEOPLE WHO DID NOT EXERCISE SELF-DISCIPLINE</Text>
        <Text style={styles.content}>
          1.<Text>King Ahab (1 Kings 21: 1-5, 25).
          </Text>
        </Text>
        <Text style={styles.content}>
          2.<Text>Gehazi (2 Kings 5:19-27).
          </Text>
        </Text>
        <Text style={styles.content}>
          3.<Text>Esau (Genesis 25: 29-34).
          </Text>
        </Text>
        <Text style={styles.content}>
          4.<Text>Judas (John 12:6).
          </Text>
        </Text>
        <Text style={styles.content}>
          5.<Text>Demas (2 Timothy 4: 10).
          </Text>
        </Text>
        <Text style={styles.content}>
          <Text>Briefly discuss how King Ahab, Gehazi, Esau, Judas, and Demas did not exercise self-discipline and relate it to our modern-day living.</Text>
        </Text>
        <Text style={styles.subtitle}>HOW TO BE SELF-DISCIPLINED</Text>
        <Text style={styles.content}>
          1.<Text>Understand that you cannot help your life (Jeremiah 10:23; John 15:5).
          </Text>
        </Text>
        <Text style={styles.content}>
          2.<Text>Surrender to God (Matthew 11: 28-30)
          </Text>
        </Text>
        <Text style={styles.content}>
          3.<Text>Be filled and be led by the Holy Spirit (Romans 8: 14; Galatians 5:22-24)
          </Text>
        </Text>
        <Text style={styles.content}>
          4.<Text>Plan your time and make the most of it (Proverbs 21: 5; Ephesians 5: 15- 17)
          </Text>
        </Text>
        <Text style={styles.content}>
          5.<Text>Know how to control your body and train it (1 Thessalonians 4:4,5; 1 Corinthians 9: 24-27)
          </Text>
        </Text>
        <Text style={styles.content}>
          6.<Text>Be focused and avoid distractions (Romans 12:2; Hebrews 12: 1, 2)</Text>
        </Text>
        <Text style={styles.content}>
          7.<Text>Avoid yielding to negative societal pressures and avoid bad company (1 Corinthians 15:33).</Text>
        </Text>
        <Text style={styles.subtitle}>BENEFITS OFA DISCIPLINED LIFE</Text>
        <Text style={styles.content}>
          1.<Text>It leads to accomplishment of goals in life (Colossians 3: 24)
          </Text>
        </Text>
        <Text style={styles.content}>
          2.<Text>It leads to increased productivity (Matthew 6: 33)
          </Text>
        </Text>
        <Text style={styles.content}>
          3.<Text>It leads to personal growth and development (2 Peter 1:5- 7)
          </Text>
        </Text>
        <Text style={styles.content}>
          4.<Text>It leads to spiritual growth (2 Peter 1:5-11)
          </Text>
        </Text>
        <Text style={styles.content}>
          5.<Text>It leads to a life of holiness (Romans 12:1,2)
          </Text>
        </Text>
        <Text style={styles.content}>
          6.<Text>It leads to cultivation of traits that allow us to bear the fruit of the Holy Spirit (Galatians 5: 22 -23)
          </Text>
        </Text>
        <Text style={styles.content}>
          7.<Text>It helps us to fulfill God's calling upon our lives (Ephesians 2: 10)
          </Text>
        </Text>
        <Text style={styles.content}>
          <Text>The benefits of a disciplined life are listless. Can you mention others? Ultimately, a disciplined life helps us to fulfill God's calling upon our lives as it helps in aligning ouractions with His. purposes and plans.

          </Text>
        </Text>

        <Text style={styles.subtitle}>CONCLUSION</Text>
        <Text style={styles.content}>
          <Text>: We can see that self-discipline is not only an essential virtue for achieving our goals but also critical for living a life that honours God by submitting our lives to God and allowing the Holy Spirit to guide us. When we do this, we will be able to break free from the cycle of indiscipline and experience the numerous benefits ofa disciplined life. As we conclude this lesson, you are encouraged to take actions towards developing self-discipline. Surrender your life to God and allow His Holy Spirit to empower you live a life that reflects His character and purposes. May your life be a testament to the transforming power of self-discipline.
          </Text>
        </Text>
        <Text style={styles.memoryVerse}>Memory Verse: Proverbs 25: 28

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

export default page44;
