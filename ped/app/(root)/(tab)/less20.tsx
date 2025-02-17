import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

const less20 = () => {
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
                <Text style={styles.tit}>TOPIC:	MAINTAINING A FAMILY ALTAR </Text>
                <Text style={styles.tit}>TEXT:	Deuteronomy 11: 18-23</Text>
                <Text style={styles.tit}>AAIM:	That believers may rekindle the fire of our family altare
                in order to enjoy the blessings of God in our families.</Text>
            </View>
            <ScrollView contentContainerStyle={styles.scrollcontain}>
                <Text> INTRODUCTION: According to Merriam Webster r dictionary, an altar is a raised structure, place or table on which sacrifices sare offered or incense is burned in worship. Therefore a family altar in simple language connotes a place where a family meets with God to commune with Him to offer Him their worship.{"\n"}

                    A.	ADVANTAGES OF MAINTAINING AN EFFECTIVE FAMILY ALTAR{"\n"}
                    1.	It brings the family members together in the presence of God their Maker (Psalm 133: 1).{"\n"}
                    2.	It provides family members the joint opportunity to hear God's voice and to receive instructions for 	growth in all aspects of the family life (Matthew4:4).{"\n"}
                    3.	It is a place of training for the young ones; a school where spiritual things are learnt. This is very 	fundamental to the spiritual growth of every child (Deuteronomy 6: 6-8).{"\n"}
                    4.	It is a place that provides the opportunity for offences to be settled, issues to be resolved and new 	decisions taken which will foster progress, peace and unity (Matthew 5: 23, 24).{"\n"}
                    5.	It is a place of intercession, affording membes the opportunity to present the requests of others and 	other general concerns to God (Ezekiel 22:30).{"\n"}
                    6.	It is a place where prayer burdens are shared and lifted up to God in prayer and this promotes 	oneness (Philippians 4: 6, 7).{"\n"}
                    7.	It is a place that helps in the shaping of destinies of family members and 	the family as a whole 	(Genesis 24: 60).{"\n"}

                    B.	DANGERS OF NOT OPERATING A FAMILY ALTAR{"\n"}
                    1.	It is a disobedience to the law of God as Christian families are expected to commune with God by 	covenant relationship (Deuteronomy 11: 27, 28).{"\n"}
                    2.	The spiritual growth of members will be limited because failure to commune with God is to 	disconnect the family from the source of life from whom al blessings flow (Ezekiel 18: 2-4).{"\n"}
                    3.	The family is prone to the attack of the devil because when it fails in this regard, it leaves itself 	open to influences from the enemy (Ephesians 6: 11-13).{"\n"}
                    4.	The unity of the family will be hampered as praying families stay together bonded in the spirit and 	in faith (Romans 8: 4-6).{"\n"}
                    5.	Families that do not observe the family altar will lack God's abiding presence and the true 	blessings of God (Jeremiah 2: 13).{"\n"}
                    6.	The culture of corporate family prayer will not be transmitted to the next generation as the family 	altar is where this culture is formed (Deuteronomy 6:6-9).{"\n"}

                    C.	HOW TO MAINTAIN A FAMILY ALTAR{"\n"}
                    1.	Prepare a place where the family meets with God in devotion (2 Chronicles 7:16).{"\n"}
                    2.	Set a time for both the morning devotion and the evening prayer and no activity should be allowed 	to interfere with this except for situations that can't be helped (Ecclesiastes 3: 1).{"\n"}
                    3.	The Bible and other devotional materials like devotional notes, hymn books, musical instruments, 	etc. should be handy for family members.{"\n"}
                    4.	Involve every family membe, including maids because everyone is important before God and has 	something significant to  contribute towards the spiritual vitality of other members of the family.{"\n"}
                    5.	A short devotional service may be organized thus having the following:{"\n"}
                    i.a brief opening prayer to invite the presence of God into the meeting{"\n"}
                    ii. singing of praise songs/Hymn{"\n"}
                    iii. reading through the Bible and devotional commentary{"\n"}
                    iv. discussion and interaction aimed at explaining the text{"\n"}
                    v. sharing prayer requests so that such can be presented to God in prayers vi. closing prayers and
                    benediction.{"\n"}

                    All of these must be done being time conscious. Too much time should not be spent to the point that it will affect other activities of the day or night.{"\n"}

                    CONCLUSION: Without a vibrant family altar we cannot reap the benefits and blessings of God in our families. As Christian families, we ought to be serious with the family altar. Any family that is not serious with the family altar is taking a dangerous path that will affect the destiny of the family. So we must all work at maintaining the family altar for maximum spiritual benefits.{"\n"}

                    MEMORY VERSE:	Joshua 1:8{"\n"}

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


export default less20;