import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

const page41 = () => {
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
        <Text style={styles.tit}>Lesson 41: 	GIVING IN A DIFFICULT ECONOMIC ENVIRONMENT

        </Text>
        <Text style={styles.tit}>Text: Luke 21:1-4</Text>
        <Text style={styles.tit}>Aim:That we may always give to the work of God irrespective of our economic circumnstances.


        </Text>
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.content}>
          <Text style={{ fontWeight: 'bold' }}>INTRODUCTION:</Text>: Most people continuaily seek to acquire money or wealth in large amounts. Once this is acquired, many find it difficult to part with such money or other material acquisition. It is even more
          difficult for many people to give or part with money in a period of economic depression. However, we must realise that the Lord God who asks us to give, is Himseii a Giver. He gave us His only Son as atonement for our sins. In like manner, He commands us to give tithes and offerings for the sustenance of His work, His servants and the needy. We are expected to give when it is convenient and when it is not convenient. In other words, we are required to give when the economy is buoyant and when the economy is depressed. This lesson will encourage us as believers to give irrespective of the economic circumstances.


        </Text>

        <Text style={styles.subtitle}>SOME BIBLICAL TEACHINGS ABOUT GIVING</Text>
        <Text style={styles.content}>
          1.<Text>Give in secret (Matthew 6: 1 -4). Jesus Christ teaches us to give in secret and to give without 	ostentation, avoiding all attempts to draw attention to ourselves.
          </Text>
        </Text>
        <Text style={styles.content}>
          2. <Text>Give freely (Matthew 10: 8). As we receive freely, we are expected to give freely. Furthermore, the 	Bible tells us that we received all that we have (1 Corinthians 4: 7).</Text>
        </Text>
        <Text style={styles.content}>
          3. <Text>Give and it will be given to you (Luke 6: 38). Jesus Christ promises us that when we give, it will 	be given back to us. God is  more than able to replenish us in multiple folds whatever we give to 	His work, His servants and the needy.</Text>
        </Text>
        <Text style={styles.content}>
          4. <Text>It is more blessed to give than to receive (Acts 20: 35). According to the scripture, we should be 	eager to give than to receive because the giver has more blessings.</Text>
        </Text>
        <Text style={styles.content}>
          5.  <Text>Give cheerfully, not grudgingly (2 Corinthians 9:5-7). Althouph we are encouraged to give, we are 	not being compelled to give because the Lord loves a cheerful giver (2 Corinthians 9:7).</Text>
        </Text>

        <Text style={styles.subtitle}>EXAMPLES OF GIVING</Text>
        <Text style={styles.content}>
          1.<Text>The poor widow commended by Jesus (Lu ke 21: 1 -4). The gift of the widow commended by 	Jesus Christ was sacrificial because she gave all she had to live on. This shows us that we do not 	have to be rich or have abundance of wealth before we can give.  </Text>
        </Text>
        <Text style={styles.content}>
          2.<Text>Widow of Zarepath (1 Kings 17: 10-16). The widow of Zarepath was generous enough to share her 	little supply of meal and oil meant for herself and her son with Elijah. Interestingly, the Lord 	rewarded her with greater resources. Her action shows that no matter how small our resources are, 	there is always room to share with others, and to give to support the Lord's work. We must not use 	paucity of funds or lackas excuse for not giving.

          </Text>
        </Text>
        <Text style={styles.content}>
          3.<Text>The boy who gave out his food pack for Jesus to feed the multitude (John 6: 6- 14). From the 	scripture, it can be inferred that the boy confided in Andrew that he brought some loaves and fish, 	and he gave it all away unselfishly. Giving requires that a person must be generous and unselfish. It 	is noteworthy the number of persons fed because of the generosity and unselfishness of one person 	(the little boy). Never underestimate what God can do with your giving!

          </Text>
        </Text>
        <Text style={styles.content}>
          4.<Text>The Macedonian Church (2 Corinthians 8: 1 - 5). The Macedonian Church gave generously and 	regarded the opportunity to give as a privilege. This was not difficult for them because they first 	gave themselves to the Lord and  demonstrated their faith not only in words but in their deeds as 	well. Does our giving demonstrate our faith?
          </Text>
        </Text>
        <Text style={styles.content}>
          5.<Text>The woman who poured a jar of oil on Jesus (Mark 14:1-8). The woman, named as Mary in John 	12: 2, 3, demonstrated love for the Lord by sacrificing a very expensive oil she anointed the Lord 	with. Judas Iscariot rebuked her but she was vindicated by Jesus Christ (John 12: 4-8).
          </Text>
        </Text>
        <Text style={styles.content}>
          6.<Text>Women who supported Jesus' ministry (Luke 8:2 -3). Some of these women were healed of 	infirmities and they ministered to Jesus out of gratitude and devotion. They were not necessarily 	rich but used their resources to serve the Lord's ministry. It is worthwhile to respond to Psalm 116: 	12 which says "How can I repay the Lord for all His goodness to me?"
          </Text>
        </Text>

        <Text style={styles.subtitle}>BENEFITS OF GIVING</Text>
        <Text style={styles.content}>
          <Text> 	When you give, it will be given back to you (Luke 6: 38). It is the Lord's promise that we will 	receive back what we give to Him. You are blessed (Acts 20: 35). This Scripture encourages us to 	give as it is more blessed to give than to receive. Generosity will result in praise and thanksgiving 	to God (2 Corinthians 9: 11- 14). Giving generously fulfills certain needs for which the Lord will 	be praised. Also, giving enables us to experience joy (2 Corinthians 8: 2). Giving is a means of 	storing our treasures in heaven (Matthew 6:19- 21). There is no treasure stored in the world that is 	safe. Giving to the Lord's work is a means of storing our treasures in heaven. Giving enables us to 	fight materialism (Luke 12: 15; 1 Timothy 6:10). Giving shifts our focus from the mere 	accumulation of wealth.
          </Text>
        </Text>
        <Text style={styles.memoryVerse}>Memory Verse: 2 Corinthians 9: 7

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

export default page41;
