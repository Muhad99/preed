import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

const page47 = () => {
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
        <Text style={styles.tit}>Lesson 47: 	PEEKING INTO THE GORGEOUS CITY

        </Text>
        <Text style={styles.tit}>Text: Revelation 21:1 - 14</Text>
        <Text style={styles.tit}>Aim: That believers may know how glorious our eternal home is and aspire to be there.
        </Text>
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.content}>
          <Text style={{ fontWeight: 'bold' }}>INTRODUCTION:</Text>The Cambridge dictionary defines "gorgeous" as something which is very beautiful and pleasant. Relating this adjective to a city implies that the city is something attractive and pleasant to
          behold and will be a desire for people. There is a gorgeous city prepared by God for all who accept His offer of salvation through Jesus. This provision of God comes asa reward to motivate and encourage believers to know that the present situation cannot be compared to the glorious future God has for them.

        </Text>

        <Text style={styles.subtitle}>CHRIST PROMISED US A HEAVENLY CITY</Text>
        <Text style={styles.content}>
          1.<Text>Jesus spoke to His discipes with the assuarance that He will go to prepare us a city (John 14: 1 -4). 	During the earthly ministry of Jesus Christ, the Disciples were encouraged with the words of
            Christ that, although he was to be separated from them temporarily, he will definitely come back 	for them. This similar assurance is secured for all that come to be Disciples of Christ. Are you one?
          </Text>
        </Text>
        <Text style={styles.content}>
          2. <Text>IPaul the Apostle affirmed this promise through the inspiration of the Holy Spirit (Phiipians 3: 20). 	As one of the enviable Apostles highly regarded by Christians, Paul also emphasized the kingdom 	of God as the main deal for believers, having in mind that the stay here on earth is only temporary.</Text>
        </Text>
        <Text style={styles.content}>
          3. <Text>The writer of Hebrews confirms the promise (Hebrew 11: 16). The writer explained the desire of 	the believers for the glorious city, and the fact that God was not ashamed to be identified as
            their God.
          </Text>
        </Text>
        <Text style={styles.content}>
          4.<Text>Apostle John, at the close of the scripture, reassured the believers of the glory of the city 	(Revelation 21: 25). The promise was further reiterated towards the end of the Book of Revelation 	by John the beloved. This was aimed at establishing the importance of the 	glorious city. This 	is why it was further described as a place where night shall never be given room to function with 	the level of brightness that is available there.
          </Text>
        </Text>

        <Text style={styles.subtitle}>THE NATURE OFTHE GLORY OF THE HEAVENLY CITY</Text>
        <Text style={styles.content}>
          <Text>The heavenly materials have no equal on earth (Revelation 21:10,11, 18). Elements used in the 	Glorious City find no earthly equal. This is so because they are more beautiful and of a quality
            that does not exist here on earth. They are not processed like the earth's elements that we see.

          </Text>
        </Text>
        <Text style={styles.content}>
          1.<Text>Angels are watchmen at the gates of the city (Revelation 21: 12). Unlike cities on earth that are 	guarded by human agents and systems that 	are not immune from failing, this city is guarded by 	the angels who are not prone to such. Sometimes ago, the förmer US President Donald Trump, 	survived an attempt on his life because of failure of human systems of security even as the world's 	most powerful nation
          </Text>
        </Text>
        <Text style={styles.content}>
          2.<Text>God is the glory of the City (Revelation 21: 22-25). Without any form of contention and striving, 	God. will be the centre of attention in the city. He will be the light and temple of the city as people 	will be caught in the awe of his splendour.


          </Text>
        </Text>
        <Text style={styles.content}>
          3.<Text>Christ is the King of the City (Revelation 21: 3). Jesus Christ will be the King of this Glorious City 	where peace will reign and there will be no form of human manipulations or interference. It will be 	a just leadership for all citizens of the glorious city.
          </Text>
        </Text>
        <Text style={styles.content}>
          4.<Text>There is no sin, Satan and pain in the City (Revelation 21: 4). Before the time of the establishment 	of the new heaven and earth (the Glorious City), sin and Satan will have been condemned and 	judged. With the judgment already pronounced upon these agents, evil will have been completely 	abolished from the city.
          </Text>
        </Text>
        <Text style={styles.content}>
          5.<Text>Righteouness is the code of conduct of the city (Revelation 21:27). Citizens of the glorious city 	will righteousness. In the first place, unrighteousness and unrighteous people will not make it to 	the glorious city and as such, righteousness will thrive among the people.
          </Text>
        </Text>
        <Text style={styles.content}>
          5.<Text>It is an abode of perfect Peace (Isaiah 65: 25). The prince of peace will be in charge of the city and 	this will make peace household experience for everybody.
          </Text>
        </Text>

        <Text style={styles.subtitle}>WHAT WVILL I DO TO ENTER THE CITY</Text>
        <Text style={styles.content}>
          1.<Text>God's desire is that all men will be at this city and enjoy eternal bliss. It will however take some 	level of commitments. These are:
          </Text>
        </Text>
        <Text style={styles.content}>
          2.<Text>Be sure you are born again (John 3: 3-6).
          </Text>
        </Text>
        <Text style={styles.content}>
          3.<Text>Be Holy (Revelation 21: 8; 1 Peter 1:15)
          </Text>
        </Text>
        <Text style={styles.content}>
          4.<Text>Be committed to Worship (Romans 12:11).
          </Text>
        </Text>
        <Text style={styles.content}>
          5.<Text>Be Committed to witnessing (Matthew 24: 14).
          </Text>
        </Text>


        <Text style={styles.subtitle}>CONCLUSION</Text>
        <Text style={styles.content}>
          <Text>:: If every believer lives with eternity in view and desires to be at this glorious city, their daily lifestyle will be influenced after righteousness and holiness. They will also live with the understanding that their stay in this world isa temporary one intended to prepare them for the eternal and permanent one in the Glorious City. Will you be there? Hope to see you there.

          </Text>
        </Text>
        <Text style={styles.memoryVerse}>Memory Verse: Revelation 21: 23

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

export default page47;
