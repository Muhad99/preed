import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

const page39 = () => {
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
        <Text style={styles.tit}>Lesson 39: 	THE BACKSLIDING LOCAL CHURCH

        </Text>
        <Text style={styles.tit}>Text: Revelation 2: 12-17</Text>
        <Text style={styles.tit}>Aim: That we may know the characteristics of a backsliding Church and examine if we or our church is in such a state


        </Text>
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.content}>
          <Text style={{ fontWeight: 'bold' }}>INTRODUCTION:</Text>:The church in Pergamos is a typical example of a backsliding church; a church that is in the process of declining in its faith or practices. Through it we see thatjust as individual believers backslide, churches can also backslide. The church in Pergamos was at first commended by our Lord Jesus Christ but later condemned because of her gradual fall into the world. As we consider the commendations and condemnations of the church in Pergamos, may we be helped to examine ourselves and in turn re-dedicate our lives and that of our local church if this characterizes our lives and spiritual state.
        </Text>

        <Text style={styles.subtitle}>THE EXAMPLE OF THE CHURCH IN PERGAMOS </Text>
        <Text style={styles.content}>
          1. <Text>HER COMMENDATIONS (Revelations 2: 13)</Text>
        </Text>
        <Text style={styles.content}>
          i.<Text>They held fast to Christ's name and His words despite the fact that they dwelt where Satan's throne was.</Text>
        </Text>
        <Text style={styles.content}>
          ii.<Text>Despite the fact that they were going through severe persecution, they did not deny their faith in 	Christ Jesus.</Text>
        </Text>
        <Text style={styles.content}>
          2. <Text>HER CONDEMNATIONS (Revelations 2: 14-15)</Text>
        </Text>
        <Text style={styles.content}>
          i. <Text>They later welcomed the teaching of Balaam. They allowed those that held on to the teaching of 	Balaam to influence them by encouraging the eating of foods sacrificed to idols and the 	committing of fornication. By implication the church was committing spiritual fornication, mixing 	spiritual truths with ungodly teachings. There was an unequal yoking of biblical truths with 	teachings and practices that did not have biblical basis. </Text>
        </Text>
        <Text style={styles.content}>
          ii. <Text>They also allowed those who hold on to the Nicolaitan's teaching to influence them too, These 	taught that what you do with the physical body does not matter but you soul is that which matters 	to God. They also brought in unscriptural ways the world its own to the church so as to exploit the 	people of God.</Text>
        </Text>

        <Text style={styles.subtitle}>SYMPTOMS OF A BACKSLIDING CHURCH</Text>
        <Text style={styles.content}>
          1.<Text>Compromise of God's word and standards in its teachings and practices.
          </Text>
        </Text>
        <Text style={styles.content}>
          2. <Text>Lack of reverence for the presence of God during worship and in the lifestyle of members.</Text>
        </Text>
        <Text style={styles.content}>
          3. <Text>Spiritual matters in worship are giving way to ceremonies and traditions of men such as 	entertainments, Comedies, and ideas copied from otherclubs and social gatherings.

          </Text>
        </Text>
        <Text style={styles.content}>
          4. <Text>Collecting donations from sources that do not honour God.</Text>
        </Text>
        <Text style={styles.content}>
          5.  <Text>Lack of disciplining of erring members in the name of love.</Text>
        </Text>
        <Text style={styles.content}>
          6.  <Text>Disobedience to and disregard of higher authorities.
          </Text>
        </Text>
        <Text style={styles.content}>
          7.  <Text>Mention others.
          </Text>
        </Text>

        <Text style={styles.content}>
          <Text>Discussion: What are those scripturally sound teachings that have been influenced by the world in your Local church?</Text>
        </Text>
        <Text style={styles.subtitle}>CONCLUSION</Text>
        <Text style={styles.content}>
          <Text>: The desire of our Lord Jesus Christ is that we repent and turn back to Him and be ready for His coming so we will not miss our eternal rewards in Jesus name. Let us therefore examine ourselves and see if we are in the faith or have backslidden as a church (2 Corinthians 13:5).
          </Text>
        </Text>


        <Text style={styles.memoryVerse}>Memory Verse: Revelation 2: 16

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

export default page39;
