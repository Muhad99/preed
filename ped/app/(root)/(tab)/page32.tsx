import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

const page32 = () => {
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
        <Text style={styles.tit}>Lesson 32: 	NAOMl: FROM BITTERNESS TO CHEERFULNESS

        </Text>
        <Text style={styles.tit}>Text: Ruth 1:1- 22</Text>
        <Text style={styles.tit}>Aim:That we may learn not to be discouraged when we face unfavourable change of circumstances.


        </Text>
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.content}>
          <Text style={{ fontWeight: 'bold' }}>INTRODUCTION:</Text>: A man from Bethlehem named Elimelech took his wife, Naomi, and their two sons (Mahlon and Chilion) to the land of Moab because of famine in Judah. While in the land of Moab, Elimelech died, and his tWo sons married Moabite women (Orpah and Ruth). Unfortunately, Mahlon and Chilon also died, leaving Naomi with her daughters-in-lawW. Naomi decided to return to Judah when she heard that living conditions had improved in Judah. She persuaded Orpah and Ruth to return to their families, but Ruth insisted that she would follow Naomi to wherever she went. The loss of husband and two sons led
          Naomi to believe that God had dealt bitterly with her. The way God changed the story of Naomi and Ruth is a lesson for believers to trust in God always and not to be discouraged when faced with adverse
          circumstances.




        </Text>

        <Text style={styles.subtitle}>A. NAOMI'S PROFILE</Text>
        <Text style={styles.content}>
          1. <Text>She was married to Elimelech, an Ephrathite man from Bethlehem (Ruth 1:2).
          </Text>
        </Text>
        <Text style={styles.content}>
          2. <Text>Along with her husband and two sons, she moved to Moab because of famine (verse 1). Although 	Moab was a pagan territory, Naomi had little or no control in the husband's decision for the family 	to move. Famine and economic hardship are some of the reasons people emigrate. At the Lord's 	prompting, Abram moved (Genesis 12:1); Jacob fled from possible retribution from Esau (Genesis 	27:41-45); Joseph and Mary carried baby Jesus to Egypt to avoid the murderous rage of Herod 	(Matthew 2: 13).</Text>
        </Text>
        <Text style={styles.content}>
          3. <Text>She suffered the loss of her husband and two sons (Ruth 1:3 -5). The extent of her loss was 	devastating, and she believed that God had dealt bitterly with her. It is worth noting that with her 	husband and sons dead, Naomi considered it to mean the end of Elimelech's lineage and she had no 	one to support her. Also, she complained to people that she went out full but returned home empty.

          </Text>
        </Text>
        <Text style={styles.content}>
          4. <Text>Naomi returned to Judah on hearing of improvement in the living conditions of the people. God 	demonstrated His grace by bringing Ruth to the field of Boaz who was kinsman-redeemer to 	Elimelech.

          </Text>
        </Text>
        <Text style={styles.content}>
          5. <Text>Naomi discouraged her daughters-in-law from following her but Ruth clung to her (Ruth 1:9-18). 	The behaviour of Ruth was a demonstration of loyalty and commitment.

          </Text>
        </Text>
        <Text style={styles.content}>
          6. <Text>She asked to be called Mara instead of Naomi beca use of the losses she suffered. She attributed 	her losses to God (Ruth 1: 20, 21).

          </Text>
        </Text>



        <Text style={styles.subtitle}>B. GOD'S INTERVENTION IN NAOMI'S STORY</Text>
        <Text style={styles.content}>

          1. <Text> God demonstrated His grace by bringing Ruth to the field of Boaz who was kinsman-redeemer to 	Elimelech.</Text>
        </Text>

        <Text style={styles.content}>
          2. <Text>Boaz was kind to Ruth (Ruth 2: 8-10). Despite his wealth, Boaz acted with integrity and did not 	take undue advantage of Ruth. This is another evidence of God's grace in the life of Ruth, and by 	extension, Naomi.

          </Text>
        </Text>
        <Text style={styles.content}>
          3. <Text>Naomi instructed Ruth on how to make her appearance attractive to Boaz (Ruth 3:3, 4)

          </Text>
        </Text>
        <Text style={styles.content}>
          4. <Text>Ruth married Boaz; through her marriage to Boaz, Naomi was deol provided for (Ruth 4: 9-13).


          </Text>
        </Text>

        <Text style={styles.subtitle}>C. LESSONS FROM THE STORY OF NAOMI</Text>
        <Text style={styles.content}>
          1. <Text>When Naomi thought her life was over because of her losses, God came over to rescue her. We 	must not limit the power of ot God to bring about improvement in our circumstances. In times of 	difficulty, we must be careful not to accuse God (Ruth 1:20b). Rather, we should follow the 	Biblical instruction to give thanks in all circumstances (1 Thessalonians 5:18)

          </Text>
        </Text>
        <Text style={styles.content}>
          2. <Text>God restored to her a family (Ruth 4: 14-17). God brought joy and fulfillment to Naomi, who had 	experienced famine and the loss of her husband and two sons. The turnaround of her experience is 	like the restoration of the years of locust and cankerworm (Joel 2: 25).


          </Text>
        </Text>
        <Text style={styles.content}>
          3. <Text>God uses humans to work out his plans. In this case, David was born from the lineage of Ruth and 	Boaz, and eventually, Jesus Christ (Ruth 4:18-22).

          </Text>
        </Text>
        <Text style={styles.memoryVerse}>Memory Verse: 	Jeremiah 29: 11

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

export default page32;
