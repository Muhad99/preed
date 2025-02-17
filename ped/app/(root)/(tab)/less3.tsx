import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

const less3 = () => {
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
                <Text style={styles.tit}>TOPIC: WAITING ON THE LORD </Text>
                <Text style={styles.tit}>Text: Isaiah 40:28-31</Text>
                <Text style={styles.tit}>Aim: That we may learn to depend on God by seeking Himthrough prayers as we journey through the New Year.
                </Text>
            </View>
            <ScrollView contentContainerStyle={styles.scrollcontain}>
                <Text> INTRODUCTION: The Hebrew word for wait used by Isaiah is 'Qavah', it means to look for, hope and expect. The phrase wait on God' is used of all who feel weak, guilty and helpless and as a result put their trust in God. To 'wait on God' therefore means to trust in God, put hope/confidence in Him and to seek for His help. It is quite unfortunate that this generation is drifting away from this fundamental Christian pillar.{"\n"}

                    A. GOD'S PROMISES FOR THOSE WHO WAIT ON HIM{"\n"}
                    1. Strength for the waiter (Isaiah 40: 31). This is the first promise for those who wait on the Lord. God promises renewal, revival, restoration (change) and increase in strength in life generally to those who wait on Him.{"\n"}

                    2. He lifts them up (Psalm 73: 24-26). The second blessing for the waiter is lifting. At 17 years, David was anointed but never got to the throne until he was 30. David waited patiently for the Lord
                    and God lifted him.{"\n"}

                    3. He answers their prayers (Psalm 34: 3, 4). God promises to answer the prayers of those who wait on Him. He is sovereign; hence, He can choose whatever time to answer. Do not let impatience rob you of your miracles.{"\n"}

                    4. He blesses them (Isaiah 30: 18). There are general blessings like sunshine, air, rain etc. For everyone, but special blessings come the way of those who wait on God.{"\n"}

                    5. He protects and secures them (Psalm 46:1). God promises to also protect those who wait on Him for He is our refuge and faithful shepherd.{"\n"}

                    6. He raises the level of their spiritual life (Psalm 1: 1-3). We flourish and experience increase spiritually when we dwell God's presence and His word.{"\n"}

                    7. He opens their eyes and brings divine ideas to them (Proverbs 3:5-7). God promises to grant access and direction in life's issue to those who wait on Him by the opening of the eyes of their
                    heart to give them understanding.{"\n"}

                    B. HINDRANCES TO WAITING ON GOD{"\n"}
                    1. Secret sins (Proverbs 28:13). God is holy and abhors sin, The prayer and services of a sinner are an abomination to God confess every sin (secret or hidden) because they hinder waiting on God.{"\n"}

                    2. Uncontrolled activities and busyness (Luke 10: 38-42). Time to wait on God must be intentionally planned and prepared for or else it will be difficult to wait on Him.{"\n"}

                    3. Impatience (Psalm 37:7). It takes patience to wait for God. Moses waited until the seventh day on the mountain before God began to speak to him and was there for forty days and nights (Exodus 24: 15, 16). Many people have missed God's direction due to impatience.{"\n"}

                    4. Prayerlessness (1 Thessalonians 5: 17). persistent in prayer cannot wait on God and when
                    One who is not prayerlessness sets in, waiting on God is suspended.{"\n"}

                    5. Overeating and too much sleep (Proverbs 23: 20- 21). A believer's life is expected to be characterized by discipline. It takes discipline to fast, to eat and sleep moderately (neither
                    overeating nor over sleeping).{"\n"}

                    6. Procrastination (Ephesians 5: 15-16; Ecclesiastes 3: 1). To procrastinate means to be slow, to delay or be late in doing things that should be done. A Christian who procrastinates will find it
                    difficult waiting on God in prayers as he will delay in seeking God's face.{"\n"}

                    7. Doubt/unbelief (Hebrews 11: 6). It takes faith wait on God. It is human to doubt but when a Christian allows doubt to dominate his/her life, such will not be able to wait on God. It takes faith to wait on God. It{"\n"}

                    8. Wrong use of phones. technology and its gadgets especially the phone, hinders many
                    The wrong use or application of Christians from waiting on God. Many have become so addicted
                    to its use and distractions and cannot be away from it for a period of prayer.{"\n"}

                    C. HOW TO WAIT{"\n"}
                    If you are waiting on God, kindly learn how to wait appropriately. The following points describe how:{"\n"}

                    1. Wait patiently (Psalm 27: 14; Luke 18: 1.) Waiting patiently means to wait until God comes with a word or the answer/desired blessing. For Abraham, it was after 25yrs; David and Joseph- 13years.{"\n"}

                    2. Wait expectantly (Hebrews 11: 6). Like a pregnant woman, the expectant is often excited, hopeful, happy, and prepares to receive. This should be the attitude of a Christian waiting on God.{"\n"}

                    3. Wait confidently (Micah 7: 7). Everyone trusting God for admission, job, promotion, spouses, breakthrough and the likes are expected to wait confidently believing that God will never fail.{"\n"}

                    4. Wait quietly (Psalm 62: 1). The quietness here does not mean absence of noise or bustle but to be calm, undisturbed, untroubled, un-alarmed, not worried because you have absolute peace within about God's ability.{"\n"}

                    5. Be Intentional. The waiting time must be engaged in intentionally knowing what God wants of us.{"\n"}

                    CONCLUSION: Believers must learn the principles of waiting because it is divinely recommended and God has promised to bountifully reward those who wait on Him. Therefore, as Christians we must learn to wait on God through meditating on His word and in constant and continuous prayer so that we can enjoy the best God has in stock for us in the New Year.{"\n"}

                    MEMORY VERSE: Isaiah 40: 31{"\n"}

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


export default less3;