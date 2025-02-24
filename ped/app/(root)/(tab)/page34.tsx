import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

const page34 = () => {
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
        <Text style={styles.tit}>Lesson 34: 	THE SAMARITAN WOMAN AT THE WELL

        </Text>
        <Text style={styles.tit}>Text: John 4: 4-29; 39-42.</Text>
        <Text style={styles.tit}>Aim:That we may learn to avoid prejudice and share testimony about our encounter with God 		with other people


        </Text>
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.content}>
          <Text style={{ fontWeight: 'bold' }}>INTRODUCTION:</Text>: It is not unusual to exercise extra caution when we meet people who are different from us on account of race, tribe, gender or social class. It is possible that we may even have stereotyped opinion about others. When such an attitude is carried far, it may lead to prejudice which tends to make evangelism difficult. To carry out the Great Commission given by Jesus Christ (Matthew 28:19, 20), we must have open minds that will enable us to share our testimony and the gospel with other people. The encounter of a Samaritan woman at a well with Jesus Christ illustrates how ethnic prejudice was overcome. She nbelieved Jesus and made Him known to her people.





        </Text>

        <Text style={styles.subtitle}>THE SAMARITAN WOMAN AND JESUS CHRIST</Text>
        <Text style={styles.content}>
          1.<Text>Jesus discussed with a Samaritan woman at Jacob's well near Sychar in Samaria (John 4: 5). Most 	Jews would rather not visit Samaria because the two people groups do not associate. Samaritans 	are the people bred from inter-marriage between Jews and non-Jews after the Babylonian captivity.


          </Text>
        </Text>
        <Text style={styles.content}>
          2. <Text>Jesus initiated a discussion with the woman (John 4: 7). In discussing with the Samaritan woman, 	Jesus demonstrated that He came to call sinners to repentance (Luke 5: 32). No matter how sinful 	we think we are, the grace and mercy of Jesus is available for us.</Text>
        </Text>
        <Text style={styles.content}>
          3. <Text>The woman questioned Jesus about the propriety of a Jew discussing with a Samaritan due to racial 	differences between them (John 4:9). Do we harbour in our minds people groups that we should 	not associate with because of our differences or because of negative stories we heard about such 	groups?

          </Text>
        </Text>
        <Text style={styles.content}>
          4. <Text>Jesus' motive in discussing with the woman was to save her. The Samaritan woman took a literal 	interpretation of the water of life that Jesus promised her (John 4: 11, 12). However, the offer of 	Jesus Christ was the gift of Living Water, which leads to eternal life.

          </Text>
        </Text>
        <Text style={styles.content}>
          5. <Text>The woman has had five husbands, this was not complimentary. When Jesus told the woman about 	her past life, she referred to Jesus as a prophet (John 4: 16- 19).

          </Text>
        </Text>
        <Text style={styles.content}>
          6. <Text>Eventually, Jesus revealed Himself 	to the woman as the Messiah (John 4:26)



          </Text>
        </Text>



        <Text style={styles.subtitle}>.  LESSONS FROM THE DISCUSSION BETWVEEN JESUS AND THE SAMARITAN WOMAN</Text>
        <Text style={styles.content}>
          1. <Text> Jesus avoided prejudice in dealing with people He came to save. Although the woman's social 	status showed her to be at the lower rung of the ladder, Jesus discussed with her as equals. She was 	female, Samaritan and not living right. It is possible that the woman was socially excluded as she 	went to fetch water alone, instead of being in a group of women. Jesus did not base his discussion 	with her on the basis of the woman's past experience or stereotypes. If Jesus did not disregard the 	woman's prejudice, she would have missed the divine blessings she received from Jesus. Jesus was 	loving and compassionate as He dealt with the Samaritan woman as an individual. He offers 	salvation to anyone who genuinely seeks Him.

          </Text>
        </Text>
        <Text style={styles.content}>
          2. <Text> The love of Jesus breaks social and ethnic barriers. His encounter with the Samaritan woman 	shows that His love is available to all who accept Him.

          </Text>
        </Text>
        <Text style={styles.content}>
          3. <Text> The woman surrendered to Jesus. When Jesus confronted the woman with the facts about her past 	life, she surrendered herself without arguing or justifying herself. Do we always surrender to the 	truth of God's words?

          </Text>
        </Text>
        <Text style={styles.content}>
          4. <Text> OnlyJesus offers salvation that brings transformation in our lives. The living water Jesus offered 	her is a form of divine grace which satisfies the soul, leads to relationship with God and eternal 	life. We must know that only Jesus can offer salvation, It is assumed that the woman accepted the 	offer of Jesus and her life was transformned (John 4: 28,29).

          </Text>
        </Text>
        <Text style={styles.content}>
          5. <Text> Our encounters with Jesus are what we are called to witness to others. After Jesus told her about 	her past life, she went to town to share her meeting with Jesus. Through her testimony, many 	people believed in Jesus Christ (John 4: 39). Despite their differences, Samaritans from Sychar 	begged Jesus to stay with them. It is important that we share our testimony with people so that they 	can be won to Jesus Christ.

          </Text>
        </Text>
        <Text style={styles.content}>
          6. <Text> When Jesus is involved, there is no room for shame. The woman was not ashamed about Jesus' 	revelation of her past life. She was courageous enough to inform the town's people about these 	revelations. Do we honestly share our salvation experience?

          </Text>
        </Text>

        <Text style={styles.memoryVerse}>Memory Verse: Romans 1: 16

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

export default page34;
