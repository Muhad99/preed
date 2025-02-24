import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

const page25 = () => {
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
        <Text style={styles.tit}>Lesson 25: 	THE IMPORTANCE OF PRAYER

        </Text>
        <Text style={styles.tit}>Text: 1 Thessalonians 5: 17</Text>
        <Text style={styles.tit}>Aim:That we may know that prayer is of significant importance in the Christian life.



        </Text>
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.content}>
          <Text style={{ fontWeight: 'bold' }}>INTRODUCTION:</Text>: Prayer is an essential and integral part of the Christian life. It serves as a means of communication and building relationship between believers and God our Maker. It is one of the Christian practices that bring about spiritual growth as it connects believers to God sustains their faith, and enriches their spiritual journey.



        </Text>

        <Text style={styles.subtitle}>A. THE IMPORTANCE OF PRAYER</Text>
        <Text style={styles.content}>
          1. <Text>Communication with God: Prayer is a means of communication with God. It allows Christians to 	express their thoughts, feelings, needs, and desires to God and also through it, Christians seek 	guidance, comfort, strength, and wisdom from God.</Text>
        </Text>

        <Text style={styles.content}>
          2. <Text>Building Relationship: Prayer helps in fostering and deepening the relationship between Christians 	and God. Just as communication is essential in any relationship, prayer plays a crucial role in 	nurturing the spiritual connection between Christians and God.


          </Text>
        </Text>
        <Text style={styles.content}>
          3. <Text>Seeking Forgiveness: Confession of sins and asking for forgiveness is a fundamental aspect of 	Christian prayer and through it, forgiveness of sin and shortcomings is obtained and this leads to 	spiritual healing and reconciliation with God (Psalm 51:1-5).</Text>
        </Text>
        <Text style={styles.content}>
          4. <Text>Strength and Encouragement: Through prayer and the peace that results from it, Christians find 	strength, encouragement and hope that helps them during difficult times to endure challenges with 	faith and resilience.


          </Text>
        </Text>
        <Text style={styles.content}>
          5. <Text>Guidance and Direction: Prayer provides Christians with the means of obtaining guidance and 	direction. By praying for discernment and wisdom, believers trust that God will lead them on the 	right path and provide them with clarity in decision- making (Psalm 24:4,5).




          </Text>
        </Text>
        <Text style={styles.content}>
          6. <Text>Expressing Gratitude: Through Prayer Christians are able to express gratitude and thanksgiving to 	God for His blessings, provisions, and answered prayers. It helps believers to cultivate a spirit of 	gratitude and appreciation for God's goodness in their lives (Psalm 100:4,5).




          </Text>
        </Text>
        <Text style={styles.content}>
          7. <Text>Intercession for Others: Prayer also provides the platform for Christians to intercede on behalf of 	others, seeking God's intervention and blessings for their loved ones, communities, and the world 	(1 Timothy 2:1,2).


          </Text>
        </Text>
        <Text style={styles.content}>
          8. <Text>Spiritual Growth: Regular prayer practices help believers to deepen their faith, cultivate a spirit of 	humility, and align their lives with God's will.


          </Text>
        </Text>

        <Text style={styles.subtitle}>B. SOME BENEFITS OF PRAYER</Text>
        <Text style={styles.content}>

          1. <Text>Emotional Support: Engaging God through prayer provides comfort, peace of mind, and a sense of 	hope during challenging times.</Text>
        </Text>

        <Text style={styles.content}>
          2. <Text>Stress Reduction: Engaging in prayer and meditation helps reduce stress and promotes relaxation.

          </Text>
        </Text>
        <Text style={styles.content}>
          3. <Text>Community and Connection: Praying together enhances communal activity that brings people 	together, fostering a sense of belonging and unity.</Text>
        </Text>
        <Text style={styles.content}>
          4. <Text>Personal Reflection: Prayer offers an opportunity for self- reflection, introspection, and personal 	growth.


          </Text>
        </Text>
        <Text style={styles.content}>
          5. <Text>Increased Gratitude: Prayer helps individuals to cultivate a sense of gratitude for the blessings of 	God in their lives.


          </Text>
        </Text>


        <Text style={styles.subtitle}>C.EXAMPLES OF PRAYER IN THE BIBLE</Text>
        <Text style={styles.content}>
          1. <Text>The Lord's Prayer (Matthew 6: 9-13): This is a prayer that Jesus taught his disciples and is known 	as the LORD'S PRAYER.</Text>
        </Text>

        <Text style={styles.content}>
          2. <Text>The Prayer of Jabez (1 Chronicles 4: 10): In this prayer, we see the transformative power of prayer 	as Jabez prays for God's blessing and protection in his life.
          </Text>
        </Text>
        <Text style={styles.content}>
          3. <Text>Hannah's Prayer (1 Samuel 2:1-10): This is an example of a prayer of praise and thanksgiving after 	God answered Hannah's prayer for a child.</Text>
        </Text>
        <Text style={styles.content}>
          4. <Text>Solomon's Prayer for Wisdom (1 Kings 3:6-9): Here we see Solomon's supplicatory prayer for 	wisdom to rule God's people,


          </Text>
        </Text>
        <Text style={styles.content}>
          <Text>The LORD granted his prayer.


          </Text>
        </Text>
        <Text style={styles.content}>
          5. <Text>The Prayer of Jesus in Gethsemane (Matthew 26: 39): This was Jesus' prayer in the garden before 	his crucifixion.


          </Text>
        </Text>
        <Text style={styles.content}>
          6. <Text>Paul's Prayer for the Ephesians (Ephesians 1:15-23): Here we see the example of an intercessory 	prayer as Paul prays for the Ephesian believers to know God better.


          </Text>
        </Text>


        <Text style={styles.subtitle}>CONCLUSION</Text>
        <Text style={styles.content}>
          <Text>There is no doubt that Prayer is a very important aspect in the Christian's life. Our Lord Jesus Christ practiced and taught His disciples how to pray. He began His ministry with prayers and ended with prayers. He also instructed the church to wait in prayers before launching out to carry out the great commission. Christians today must recognize this and make it part of our daily lives.

          </Text>
        </Text>



        <Text style={styles.memoryVerse}>Memory Verse: 	Luke 18:1</Text>
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

export default page25;
