import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

const page33 = () => {
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
        <Text style={styles.tit}>Lesson 33: 	EPAPHRODITUS: AN UNSUNG HERO

        </Text>
        <Text style={styles.tit}>Text: Philippians 2: 25-30</Text>
        <Text style={styles.tit}>Aim:That we may learn to emulate the qualities of Epaphroditus' life that made him effective in spreading the gospel.


        </Text>
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.content}>
          <Text style={{ fontWeight: 'bold' }}>INTRODUCTION:</Text>A hero or a heroine is someone who is admired for his courage, seiflessness, and nobie qualities. He/she take risks or makes sacrifices in order to help others achieve noble goals. The Bible has
          stories of such men and women. For instance, the stories of Abraham David, Joseph, Daniel, Peter, Esther, Mary, etC are examples that were very popular in the Bible. The Bible also has some unpopular stories of
          heroes/heroines. The fact that their stories are unsung and not as popular as others does not make them less heroic before God. One of such stories is that of Epaphroditus. He is mentioned only in the Book of Philippians. Paul described him as a brother in Christ, fellow worker and a fellow soldier of Christ (Philippians 2: 25).





        </Text>

        <Text style={styles.subtitle}>QUALITIES OF EPAPHRODITUS</Text>
        <Text style={styles.content}>
          <Text>Epaphroditus was a devoted and selfless believer. He devoted himself to the work of Christ both as Paul's attendant and as his assistant in missionary work. He demonstrated this selflessness by volunteering to go to Rome and be of help to Apostle Paul in his time of need. He was interested in others and served the need of others (Philippians 2: 25). The love of Christ in Epaphroditus flowed through him to others. He made himself available as a channel of blessing to others. He esteemed others better than himself and put them first (Philippians 2: 1 - 5). Epaphroditus valued others in Christ and this enabled him to be able to serve them. He was trustworthy as a messenger of the church (Philippians 2: 25). He was sent with the church's gift to Paul during Paul's first imprisonment at Rome or at Ephesus. Epaphroditus must have been trustworthy for him to be assigned to serve as a messenger bearing gifts.


          </Text>
        </Text>
        <Text style={styles.subtitle}>SOME DANGEROUS MISSION EPAPHRODITUS UNDERTOOK.</Text>
        <Text style={styles.content}>
          <Text>Here we shall examine some dangerous missions that Epaphroditus took. All these were taken because of Christ Jesus and Paul.</Text>
        </Text>
        <Text style={styles.content}>
          <Text>He was sent to deliver money to Paul. The risk of carrying money across roads in the first century world was a dangerous mission.

          </Text>
        </Text>
        <Text style={styles.content}>
          <Text>One could be attacked by brigands or robbers. Paul himself had to fend off attacks several times during his lifetime (2 Corinthians 11:26).

          </Text>
        </Text>
        <Text style={styles.content}>
          <Text>Dangers of associating with Paul. By being associated with Paul, Epaphroditus risked imprisonment. The Roman authority could have assumed that Epaphroditus was part and parcel of the uprisings and gotten him arrested and jailed alongside Paul.

          </Text>
        </Text>
        <Text style={styles.content}>
          <Text>His illness. The real threat to Epaphroditus's life was sickness. He laboured assiduously for Christ that he lost his health (Philippians 2: 27, 30). It is possible that he fell sick because of overwork. Believers and church leaders should not overwork themselves and they should learn to rest periodically.

          </Text>
        </Text>



        <Text style={styles.subtitle}>EPAPHRODITUS' REWARDS.</Text>
        <Text style={styles.content}>

          <Text> He was recommended to be welcomed with great joy by the church (Philippians 2: 29a).
            He extended honour to other men like him (Philippians 2: 29b). As a fellow worker with Paul, Epaphroditus' name is also written in the book of life (Philippians 4: 3).

          </Text>
        </Text>
        <Text style={styles.subtitle}>CONCLUSION</Text>
        <Text style={styles.content}>
          <Text>:The life of Epaph roditus' teaches us to be devoted and selfless in service to God and to the body of Christ, to be trustworthy as faithful servants of the Lord and to learn to esteem others better than ourselves. When we imbibe these qualities, our lives too will count for Jesus and we will be channels of blessings to the body of Christ.
          </Text>
        </Text>

        <Text style={styles.memoryVerse}>Memory Verse: 1Timothy6: 12

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

export default page33;
