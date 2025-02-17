import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

const less6 = () => {
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
        <Text style={styles.tit}>TOPIC:THE NEW BIRTH PROCESS (Part 2) </Text>
        <Text style={styles.tit}>TEXT:Matthew 7: 21 -23</Text>
        <Text style={styles.tit}>AIM:That we may follow the process laid down by JesusChrist
        for being born-again.
        </Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollcontain}>
        <Text> INTRODUCTION: A person who has a good knowledee of a matter does not automatically attain the blessings that the matter offers. Often, he has to cross on the bridge (an action, obedience or
          the blessing. The process) that links the knowledge with the Lord Jesus Christ says, "If you know these things, you are blessed if you do them"(John 13:17). So, merely knowing the process of being born-again did nothing in them. does not qualify anyone to enter the Kingdom of God. Everyone has to for the process. Those prominent "Christians" in our Bible text for this lesson failed to follow the process. Consequently, at the end of their following the earthly life, though they were prominent on earth, they were rejected and refused entry into the Kingdom of Heaven. To follow the process is a matter of life and death!{"\n"}

          A. MERE PROFESSORS OF THE CHRISTIAN FAITH{"\n"}
          1. Sadly, many church people merely profess to be followers of Jesus, while Jesus does not recognize or register them as His followers because they are not "born of water and the Spirit" (John 3: 5).

          2a. In the case of those we read about in Matthew 7: 21 - 23, it is note-worthy that Jesus, who is omniscient, disowned them, saying, "I never knew you!" This certainly meant that they did not meet the ternms and conditions for being born of water and the Spirit. They were tares that looked very much like wheat (Matthew 13: 24-30). The name of Jesus did a lot for t them,{"\n"}

          b. Even though they were very reality they were not assets but very active and"useful" to the e Church, in reality they were not assets but liabilities to the Church. That was why, in Verse 23 of our text, Jesus described them as"ye that work iniquity" (KJV); or "you who practise lawlessness" (New American Standard Bible - NASB): or "you who break God's laws' (New Living Translation-NLT); or "you evildoers' (NIV).{"\n"}

          3. Numerous professing "Christians" are not born-again, yet they manage to entrench themselves in the services and leadership of local churches. Concerning such "Christians," Charles Spurgeon wrote: "Inconsistent professors injure the gospel more than the sneering critic or the infidel!"{"\n"}

          4. At the gate of Heaven, a tragic. last-minute and irreversible disappointment awaits professing "Christians" who do not follow the process of being born of water and the Spirit. But praise God, the tragedy is avoidable. Itis a matter of choice.{"\n"}

          B. LIKE A CONTRACTUALAGREEMENT{"\n"}
          The divine terms on which a natural man is translated from his dark prison of sin into the glorious eternal life is comparable to a contractual agreement between two parties. For such an agreement to be valid, its document must clearly state:{"\n"}

          a) the names and the residential addresses of the parties in
          the agreement;{"\n"}
          b) the services and favours that each party will give to and receive from the other;{"\n"}
          c) the date on which the agreement begins to take effect;{"\n"}
          d) the period of time during which the agreement will be valid;{"\n"}
          e) the signature, thumb print or other signs indicating that the parties consent to the agreement. (Often, a third party is required to sign as a witness. Each party then keeps his own copy of the agreement.){"\n"}

          C. EXCHANGE OF VALUES{"\n"}
          Being born-again involves a similar transaction.{"\n"}

          1. The two parties are the sinner on the one hand, and the Lord Jesus Christ on the other.{"\n"}

          2. The values they exchange are:{"\n"}
          a)The SINNER will give up his sinful lifestyle and surrender the control of his life to Jesus Christ as Lord. In exchange, the sinner will receive forgiveness for his sins, freedom from his guilt, a new life that is everlasting, and the gift of the HolySpirit to dwell permanently in him.{"\n"}

          b) CHRIST has freely given His own life out of love. He died sacrificially for our sins on the cross, that the sinner who repents and believes in Him may have eternal life through Him. In return, Christ demands life-long, unalloyed allegiance from the redeemed sinner (2Corinthians 5: 15).{"\n"}

          c)This transaction must occur at a point in time. It is dated in the annals of Heaven. For the sinner saved by grace, the date of this wonderful experience is unforgettable.{"\n"}

          3. Obviously, all these did not happen in the case of those mere professors of the Christian faith. If they did happen, Jesus would not have said to them:{"\n"}
          "I never knew you; depart from me, you who practise lawlessness" (Matthew 7:23). For them, it was a tragic and irreversible end. But it was preventable by following the process laid down by the Lord Jesus Christ! i everlasting, and thhe gift of the Holy Spirit to dwell permanently in him.{"\n"}

          CONCLUSION: Now that you understand how to be born of water and the Spirit, that kind of tragedy we read in Matthew 7: 23 needs not happen in your life. Therefore, be sure you can answer the following questions in the affirmative:{"\n"}
          1. Have you been born of water and the Spirit, as Jesus demands in John 3:5?{"\n"}
          2. Does Jesus know you because He has baptized you through the Holy Spirit into His Body – the invisible Church (1Corinthians 12:13)? Have you become bonded to Him through an agreement?{"\n"}

          MEMORY VERSE: Mark 1:8{"\n"}


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


export default less6;