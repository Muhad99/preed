import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

const less7 = () => {
  return (
    <View>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require('@/assets/images/ecwa-logo.png')}
        />
        <Text style={styles.title}>ECWA Sunday School Manual 2025</Text>
        {/* <Text style={styles.ti}>Theme:You seek me and find me</Text> */}
      </View>
      <View style={styles.head}>
        <Text style={styles.tit}>TOPIC: THE RICHMAN'S FATHER'S HOUSE </Text>
        <Text style={styles.tit}>TEXT: LUKE 16: 19-31</Text>
        <Text style={styles.tit}>AIM:That we may learn to witness and pray for the salvation of members of our father's house before it becomes too late.
        </Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollcontain}>
        <Text>  INTRODUCTION: The task of reaching out to unbelievers is usually seen by many as a task to other people in distant villages, towns among others. Many embark on this task without remembering members of their immediate family who are yet to be saved. The story of the rich
          man is typical of one who dies before knowing the truth and eventually discovers that it was too late. When he was alive, he paid no attention to his spiritual life or those of his brethren.{"\n"}

          A. THE RICH MAN ON EARTH{"\n"}
          The story of the rich man as contained in our anchor text for this lesson could be described in the following context:{"\n"}
          1. He was rich and did not lack the three basic necessities of life: food, shelter and clothing.{"\n"}
          2. He was unmindful of others in his immediate vicinity.{"\n"}
          3. He was all alone by himself and his immediate family. Nothing is said about his father's house.{"\n"}
          4. He was concerned about living well here on earth. Nothing is mentioned about his plans or prayers for the life after, for members of his father's house and others in his vicinity.{"\n"}

          B. THE RICH MAN AFTER DEATH{"\n"}
          1. After death, he found himself being tormented in Hades.{"\n"}
          2. He found himself separated from Father Abraham and Lazarus whom he knew on earth.{"\n"}
          3. He pleaded for mercy, requested for a dip of water to cool his tongue because of his anguish but was not granted any of his personal requests because in his life time, he didn't settle the  issue of his eternity.{"\n"}
          4. He remembered his father's house and the number of his brothers. He wanted them warned so they won't end up like him and prayed on their behalf, but he was told it was too late.{"\n"}

          C. LESSONS FOR US{"\n"}
          1. God makes the choice of the family we are born into, the choice of our parents and the siblings we have (Acts 17: 26). We must understand and appreciate the fact that God intentionally
          locates us in our families with each one of us having a role to play for the good of others. One of this is to show the light of salvation.{"\n"}
          2. It is possible to forget members of our father's house and not relate with them on earth and even justify this action. However in heaven, we will remember them and it will matter to us when{"\n"}
          we stand before God. May it not be too late for us and end in eternal regret.{"\n"}
          3. We must not allow any hurt or offenses to separate us from our siblings. We are to love them and pray for their salvation (1Timothy 2: 4). To err is human but to forgive is divine. This we pray every time we say the Lord's Prayer,"Father forgive us our trespasses as we forgive those who trespass against us".{"\n"}
          4. The door of Salvation remains open and the opportunity to share or hear the good news of gospel of Jesus that leads to salvation exists as long as a person is still alive. After death, it becomes close and the opportunity ceases!{"\n"}

          D. HOW TO REACH OUR FATHER'S HOUSE{"\n"}
          1. Love and pray for them (John 13:34; James 5: 16).{"\n"}
          2. Witness to those who are yet to accept Jesus Christ as Lord and Saviour (Matthew 28:19, 20). Be intentional about this for familiarity hinders many from doing this.{"\n"}
          3. Be concerned for their welfare and be there to give a helping hand within your means (1 Timothy 5:8).{"\n"}

          MEMORY VERSE: 1Timothy 2: 4{"\n"}


        </Text>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 100,
    height: 100,
  },
  less: {
    width: '100%',
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  ti: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  tit: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  scrollcontain: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,

  },
  con: {
    width: '100%',
  },
  head: {
    flexDirection: 'column',
    alignItems: 'baseline',
    padding: 10,
  },
});


export default less7;