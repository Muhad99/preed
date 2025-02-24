import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

const page51 = () => {
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
        <Text style={styles.tit}>Lesson 51: 	THINGS TO REMEMBER AT CHRISTMAS

        </Text>
        <Text style={styles.tit}>Text: Luke 2: 4-19</Text>
        <Text style={styles.tit}>Aim: That we may know the things we should keep in focus during the Christmas celebration.
        </Text>
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.content}>
          <Text style={{ fontWeight: 'bold' }}>INTRODUCTION:</Text>What is Christmas? The English word Christmas is a shortened form ofChrist's Mass (the mass of Christ). It is the celebration of the birth of Jesus Christ into the world. The true meaning of Christmas is God's love which is indescribable (2 Corinthians 9: 15, John 3: 16-17). God demonstrated His love to man by sending Jesus, His only begotten Son to become man, to suffer and die on the Cross in order to take the punishment for our sins (Romans 5:8).
        </Text>

        <Text style={styles.subtitle}>BRIEF HISTORY OF CHRISTMAS</Text>
        <Text style={styles.content}>
          1.<Text>The celebration first began to be observed in the early fourth century. However, some traditions 	associated with Christmas actually began as part of a pagan culture. These were "Christianized" 	and given new meaning by the Church.

          </Text>
        </Text>
        <Text style={styles.content}>
          2. <Text>At the time of Christ, Roman Culture already celebrated a holiday in December called "Saturnalia". 	This was observed to honourthe god Saturn and was celebrated from December 17 to about 	December 24. Later, the Romans began celebrating "Sol Invictus" or the "Unconquered Sun," 	associated with the winter solstice and observed on December 25.</Text>
        </Text>
        <Text style={styles.content}>
          3. <Text>When Rome eventually instituted Christianity as the state religion in the fourth century, the Roman 	Church converted "Saturnalia" and "Sol Invictus" to a Christian holiday, the Feast of the Nativity, 	in order to commemorate Jesus' birth, thus providing a spiritually positive alternative to a  pagan 	celebration. The sinful customs and debauchery associated with "Saturnalia" were "cleaned up and 	some of the customs were absorbed into the celebration of Christmas.
          </Text>
        </Text>
        <Text style={styles.content}>
          4. <Text> Christians have "redeemed" December 25 and have celebrated it as the birth of Christ ever since 	the fourth century.
          </Text>
        </Text>

        <Text style={styles.subtitle}>	THE GOAL OF CHRISTMAS CELEBRATION (Matthew 1:21)</Text>
        <Text style={styles.content}>
          <Text>The goal of Christmas celebration includes-
          </Text>
        </Text>
        <Text style={styles.content}>
          1.<Text>To remember and appreciate God's love.
          </Text>
        </Text>
        <Text style={styles.content}>
          2.<Text>To share God's love by evangelizing to the lost.
          </Text>
        </Text>
        <Text style={styles.content}>
          3.<Text>To minister in a special way to the poor and less fortunate.
          </Text>
        </Text>
        <Text style={styles.content}>
          4.<Text>To reciprocate God's love by showing love to others- spouse, children, relations, extended family, 	neighbours, ministers etc
          </Text>
        </Text>
        <Text style={styles.content}>
          5.<Text>To worship God and give Him special thanksgiving offerings.
          </Text>
        </Text>

        <Text style={styles.subtitle}>THINGS TO REMEMBER AT CHRISTMAS</Text>
        <Text style={styles.content}>
          1.<Text>The Incarnation Of Jesus (John 1: 1 -5, 2: 10-12). God assumed a human nature and became a man 	in the form of Jesus Christ i.e. God was "in-carnated" in human flesh.
          </Text>
        </Text>
        <Text style={styles.content}>
          2.<Text>The Joy Of Eternal Salvation (Matthew 1: 21). A man that is rescued from a burning house/car or 	saved from drowning in water will know the joy of salvation which means deliverance. Jesus is the
            Saviour who delivers us from sin, power of darkness, death and hell (eternal fire).
          </Text>
        </Text>
        <Text style={styles.content}>
          3.<Text>The Victory Over The Devil (Luke 1 : 68- 71). From time immemorial, the arch enemy of man is 	the devil and he has been believers. Jesus brought victory for mankind. Satan knew he was about to 	be defeated that was why he attempted to kill Jesus a number of times before God's appointed time. 	But at God's appointed time Jesus laid down His life and His death bought the victor.
          </Text>
        </Text>
        <Text style={styles.content}>
          4.<Text>Reconciliation, Peace And Love In Christ (Isaiah 9: 6). As a result of the fall of Adam, the 	relationship between God and man was destroyed but Jesus, by His death and resurrection, brought 	reconciliation and restoration of all- friendship, joy, peace and love.
          </Text>
        </Text>
        <Text style={styles.content}>
          5.<Text>Joy Of Answered Prayers (Luke 1: 37, Romans 8: 32). Since the barrier between God and man had 	been removed by the Lord Jesus Christ, believers have access to God through Jesus to receive His 	blessings.
          </Text>
        </Text>
        <Text style={styles.content}>
          6.<Text>Holiness In The Merriment And Celebration Of Christmas (1Peter 1: 14, 15). In the name of 	celebration, some people act contrary to God's word and will be indulging in sinful and worldly 	activities (can you mention some?). A believer should not forget that Jesus is the reason for the 	season. Hence the celebration we do in His honour, must be done in a godly way.</Text>
        </Text>
        <Text style={styles.content}>
          7.<Text>Sharing God's love with others (1 John 1: 1-3). This is a usual practice for few bodies and local 	Churches. In addition, every believer is encouraged to share the good news and trust God for great 	harvest of souls as we share the joy with others during Christmas.

          </Text>
        </Text>


        <Text style={styles.subtitle}>CONCLUSION</Text>
        <Text style={styles.content}>
          <Text>:: Christians simply celebrate Christmas to remember the birth of our Lord and Saviour, Jesus Christ. We therefore remember and celebrate Christmas because the coming of Jesus through the virgin birth by Mary was the demonstration of God's eternal love for mankind. Jesus' coming brought to mankind the good news of God's love, peace, joy, victory over darkness and eternal salvation.
          </Text>
        </Text>
        <Text style={styles.memoryVerse}>Memory Verse: Luke 2:11.

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

export default page51;
