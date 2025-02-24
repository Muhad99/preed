import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

const page22 = () => {
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
        <Text style={styles.tit}>Lesson 22: 	CARING FOR WIDOWS

        </Text>
        <Text style={styles.tit}>Text: 1 Timothy 5: 3 - 16</Text>
        <Text style={styles.tit}>Aim:That the church may learn better ways to care for widows.



        </Text>
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.content}>
          <Text style={{ fontWeight: 'bold' }}>INTRODUCTION:</Text>The number of widows is on the increase today and many factors are responsible for this. Health issues, road accidents, life expectancy disparity, economic stress, and poor healthcare systems are among some of these factors. Widows face variety of challenges that affect their survival and general wellbeing. These come in a number of wavs ranging from loneliness, lack of support and in some instances hostility from in-laws Who are after the property of the deceased or want to take advantage of the vulnerable widow. In view of these challenges, the church is enjoined to do more for them as taughtin the Bible.



        </Text>
        <Text style={styles.content}>
          <Text>The Bible gives some qualities widows that the church should take care of are to possess. These guidelines include widows with good deeds (1Timothy 5: 10), widows who do not live for pleasure (1 Timothy 5: 6, 7), widows not young but are more than sixty years of age (1 Timothy 5:9a, 11), widows who have a testimony of being faithful to their husbands while they were alive (1 Timothy 5: 9b). With these guidelines, there are two categories namely:</Text>
        </Text>

        <Text style={styles.subtitle}>A. CATEGORIES OF WIDOWS</Text>


        <Text style={styles.content}>
          <Text>Widows who are really in need: these include widows who are more than sixty (60) years and who do not have children to take care of them (1 Timothy 5: 3, 4) and Other widows: (i) those who are financially incapable, (ii) those who are subjected to harmful practices, (ii) those who are widowed due to wars and uprisings, Most times these are relatively young.
          </Text>
        </Text>

        <Text style={styles.subtitle}>B. SOME CHALLENGES FACING WIDOWS IN THE FAMILY</Text>
        <Text style={styles.content}>

          1. <Text>Sexual harassment from relatives or outsiders. This is a common challenge faced by many young 	widows .</Text>
        </Text>

        <Text style={styles.content}>
          2. <Text>Emotional pains and trauma. This is caused by the pain of the demise and the reality of treatments 	meted out to widows by family and society at large.</Text>
        </Text>
        <Text style={styles.content}>
          3. <Text>Lack of companionship. One of the purposes for marriage is lifelong companionship between 	couples. When one dies, it creates a vacuum.</Text>
        </Text>
        <Text style={styles.content}>
          4. <Text>Subjugation to harmful widowhood rites. Despite the preaching and teaching in the church, 	Christian widows are still being subjected to widowhood rites such as forcing some to drink the 	water their dead husbands were washed with; forcing them to sit with the dead bodies for days on 	end, forbidding them from taking their bath for several days etc.


          </Text>
        </Text>
        <Text style={styles.content}>
          5. <Text>Widows' disinheritance: Denied the right to inherit the deceased husband's property.


          </Text>
        </Text>
        <Text style={styles.content}>
          6. <Text>Fear and worries. Fears and worries make it difficult for some widows to resist giving in to other 	practices such as wife-inheritance.




          </Text>
        </Text>
        <Text style={styles.content}>
          7. <Text>Lack of stable income. Many widows have no stable source of income and so find it difficult 	looking after their children as they struggle with family responsibilities like house rent, children's 	school fees, medical bills etc.</Text>
        </Text>
        <Text style={styles.content}>
          8. <Text>The demand for the bride price. The situation becomes more challenging when the widow has no 	child. In some cultures in Nigeria, such widows are often asked to return the bride price
            paid by the deceased husband.
          </Text>
        </Text>



        <Text style={styles.subtitle}>C.HOW TO CARE FOR WIDOWS</Text>
        <Text style={styles.content}>
          1. <Text>It is very essential for churches to know their widows and their needs. This will help the church in 	knowing how to support them holistically.</Text>
        </Text>

        <Text style={styles.content}>
          2. <Text>The church should have a plan of ministering to widows according to the different needs:
          </Text>
        </Text>
        <Text style={styles.content}>
          a. <Text>Provision should be made for basic needs like food, shelter, medical care, clothing and others.</Text>
        </Text>
        <Text style={styles.content}>
          b. <Text>Prayers should be organized for them and counseling sessions held when there is a need to advise 	on emotional needs; for example some who may want to re-marry.


          </Text>
        </Text>
        <Text style={styles.content}>
          c. <Text>Fellowship among widows should be encouraged as this will allow for better understanding and 	sharing of experiences that will help especially from the elderly ones.


          </Text>
        </Text>
        <Text style={styles.content}>
          d. <Text>Participation in church programmes should be encouraged. This will help to overcome the 	withdrawal tendency that comes with times like this.




          </Text>
        </Text>
        <Text style={styles.content}>
          3. <Text>The church should seek to empower widows who are jobless. They can be trained to acquire skills 	and given soft loans to start their businesses. Also, scholarships can be given to their children.


          </Text>
        </Text>
        <Text style={styles.content}>
          4. <Text>Family members should be encouraged to care for widows of their relatives.




          </Text>
        </Text>
        <Text style={styles.content}>
          5. <Text>Church should encourage grown children to be responsible and take adequate care of their parents.


          </Text>
        </Text>
        <Text style={styles.content}>
          6. <Text>Finally, widows should not be neglected, but should be given adequate love, care and protection 	from churches as a way of covering their nakedness. This support will give such widows a proper 	sense of belonging within the society they live.




          </Text>
        </Text>

        <Text style={styles.memoryVerse}>Memory Verse: 	James 1: 27</Text>
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

export default page22;
