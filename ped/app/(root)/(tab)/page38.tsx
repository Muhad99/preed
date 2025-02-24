import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

const page38 = () => {
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
        <Text style={styles.tit}>Lesson 38: 	THE CHURCH IN THE WORLD

        </Text>
        <Text style={styles.tit}>Text: Matthew 28: 18 - 20</Text>
        <Text style={styles.tit}>Aim: That we may know the purpose of the church in the world and live to fulfill it.


        </Text>
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.content}>
          <Text style={{ fontWeight: 'bold' }}>INTRODUCTION:</Text>:The Church exists in the world for a purpose and has a unique mission it pursues for the Kingdom of God. Like Adam and Eve who were put in the Garden to be God's representatives (having
          dominion over all of creation, subduing and filling the earth by being fruitful) so the Church exists as Christ's body on earth to bear witness to her Head and Master Jesus (representing Him as the Salt and Light of the world and as His dwelling place) so others can comne to know Him as the Saviour of the world.

        </Text>

        <Text style={styles.subtitle}>THE RELATIONSHIP BETWEEN THE CHURCH ANDTHE WORLD</Text>
        <Text style={styles.content}>
          <Text>The church is not of the world (John 15: 19; 17: 14, 16).</Text>
        </Text>
        <Text style={styles.content}>
          <Text>The church is hated by the world (John 17: 14).</Text>
        </Text>
        <Text style={styles.content}>
          <Text>The church is not to love the world (1 John 2: 15)</Text>
        </Text>
        <Text style={styles.content}>
          <Text>The church overcomes the world (1 John 5:4).</Text>
        </Text>
        <Text style={styles.content}>
          <Text>The church is light, while the world is darkness (Matthew 5: 14-16)</Text>
        </Text>

        <Text style={styles.subtitle}>THE PURPOSE OFTHE CHURCH IN THE WORLD:</Text>
        <Text style={styles.content}>
          1.<Text>Evangelism. The purpose of the church is to first be witnesses of Jesus and to go into the world to 	make disciples of all nations (Matthew 28: 19; Acts 1:8). Its purpose is to bring people (the lost) 	into God's  Kingdom so they can become all that Christ intended fortheir lives.
          </Text>
        </Text>
        <Text style={styles.content}>
          2. <Text>To baptize believers in Christ (Matthew 28: 19). By commission, the Church serves as Jesus' agent 	through whom the Holy Spirit brings men into union with Christ and into the new life.</Text>
        </Text>
        <Text style={styles.content}>
          3. <Text>To disciple believers by teaching them to obey all things taught  by Jesus Christ (Matthew 28: 20a).

          </Text>
        </Text>
        <Text style={styles.content}>
          4. <Text>Worship. The mission of the Church is to worship the Lord and prepare the way for the final 	establishment of the Kingdom of God on earth.</Text>
        </Text>
        <Text style={styles.content}>
          5.  <Text>Fellowship (Acts 2: 42). Through its existence in the world and by the expression of its kingdom 	life in breaking of bread, studying, nthe word and prayers, men are brought into fellowship with 	God and with fellow men.</Text>
        </Text>
        <Text style={styles.content}>
          6.  <Text>To transform society so that the world may be a better and more
            peacefulplace to live.
          </Text>
        </Text>

        <Text style={styles.subtitle}>HOW THE CHURCH CAN FULFIL HERPURPOSEIN THE WORLD</Text>
        <Text style={styles.content}>
          <Text>The church can fulfil her mission by understanding she is divinely put here in the world as agents of the Kingdom of God to carry out the following as Salt (Matthew 5:13):</Text>
        </Text>
        <Text style={styles.content}>
          i.<Text>Salt improves the taste of food as seasoning agent. The church adds flavour to the earth just as salt 	is capable of enhancing the flavour (sweetening) of food by its fruit and character (Matthew 5: 13).

          </Text>
        </Text>
        <Text style={styles.content}>
          ii.<Text>Salt, as a therapeutic agent, heals the "sickly" earth. As salt has the potency to heal wounds so 	Christians can bring healing to the society that is battling with social, political and economic 	challenges.

          </Text>
        </Text>
        <Text style={styles.content}>
          Iii.<Text>Salt preserves and in like manner, Christians by their attitudes and the presence of the Holy Spirit 	that works in themn to will and to act can preserve the society from corruption, decadence and 	many other social vices present in it.
          </Text>
        </Text>
        <Text style={styles.content}>
          iv.<Text>Salt also acts as cleansing agent. Through their lifestyle of purity and holiness, Christians can wash 	the society clean of its rots and dirt by their righteous lifestyle and living according to Word of 	God.

          </Text>
        </Text>

        <Text style={styles.content}>
          <Text>The church can fulfill her mission by being the light of the world (Matthew 5: 14). Christ lights up the life of Christians (John 1: 4) and as they live the new life, they express the light of God in the
            world through the following

          </Text>
        </Text>
        <Text style={styles.content}>
          1.<Text> Light provides illumination into or lights up areas of darkness. The Church by its existence is to 	show others the way to God and the way to live.
          </Text>
        </Text>
        <Text style={styles.content}>
          ii.<Text> Light gives direction. When people see, they are able to go in the right direction.
          </Text>
        </Text>
        <Text style={styles.content}>
          iii.<Text> Light exposes and brings to light the secret things of the darkness.
          </Text>
        </Text>
        <Text style={styles.content}>
          3.<Text> The church can fulfill her mission by being Christ's ambassadors (2 Corinthians 5: 20).
          </Text>
        </Text>
        <Text style={styles.content}>
          i.<Text>To be a witness for Christ in the world (2 Corinthians 5:20a)
          </Text>
        </Text>
        <Text style={styles.content}>
          ii.<Text>To represent (being the image of) Christ here on earth just like an ambassador of a nation.
          </Text>
        </Text>
        <Text style={styles.content}>
          Iii.<Text>By carrying out her corporate social responsibility in loving and caring for her neighbour.
          </Text>
        </Text>

        <Text style={styles.memoryVerse}>Memory Verse: John 17: 18

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

export default page38;
