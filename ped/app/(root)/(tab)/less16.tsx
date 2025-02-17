import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

const less16 = () => {
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
                <Text style={styles.tit}>TOPIC:	JESUS, THE LAMB OF GOD </Text>
                <Text style={styles.tit}>TEXT:		John 1:29-34</Text>
                <Text style={styles.tit}>AIM:		That we may know and appreciate Jesus as the Lamb of God who takes away the sins of the world.
                </Text>
            </View>
            <ScrollView contentContainerStyle={styles.scrollcontain}>
                <Text>  INTRODUCTION: The Bible has so many names and images for Jesus. One not in common use today is the name 'The Lamb of God'. This may not be unconnected with the fact that in the contemporary world, a lamb is seen as frail, helpless, warm and a woolly animal. Simply put, it does not represent that which holds much significance. Without the sacrifice of lambs in the temple and the offering of their blood, worship for the Jew was of no significance. It was the blood poured out on the altar that was offered as sacrifice to cover their sin. In the laying down of Jesus' life to die for us and the shedding of His blood for us at Calvary, God gave Jesus as a lamnb to be offered for our redemption and the forgiveness of our sins (Ephesians 1: 7).{"\n"}

                    A.	THE IDENTITY OFA LAMB{"\n"}
                    1.	A lamb is a young sheep that is about a year and whose flesh is eaten as meat when sacrificed.{"\n"}
                    2.	Metaphorically, a lamb is used to refer to a person who is easily cheated or outsmarted.{"\n"}
                    3.	A lamb symbolizes gentleness, meekness, innocence, purity, sweetness, forgiveness, harmless, love 	and friendship.{"\n"}
                    4.	The term "Lamb of God" also refers to the Passover Lamb. Jesus is our Passover Lamb (1 	Corinthians 5: 7b).{"\n"}

                    B.	THE FIGURES OF LAMB IN THE BIBLE{"\n"}
                    There are four instances in the Bible where lambs are used for description: These are{"\n"}
                    1. 	The Passover lamb: Christ is the ultimate fulfillment of the Passover lamb (1 Corinthians 5: 7).{"\n"}

                    2.	Sacrificial lambs used for the following:{"\n"}
                    a.	Sin-offering lamb (Numbers 6: 14: Hebrews 9: 13).{"\n"}
                    b.	Guilt offering: (Leviticus 21; Number 5: 8 Ezra 10:19).{"\n"}
                    c.	Lambs used for Morning and Evening sacrifices (Exodus 29:38-42).{"\n"}
                    d.	The Ram of Genesis 22: 13: In Abraham tells his son that a lamb will be provided for the sacrifice 	they were to make.{"\n"}
                    e.	Other Sacrificial Lambs: These include lambs that were Genesis 22: 8, offered at the ordination of 	a priest (Exodus the birth of a child (Leviticus 12:6) at the cleansing of a leper (Leviticus 14: 10); 	at the harvest festival  Leviticus 23:12) and in connection with a vow (Number 15:5).{"\n"}


                    3.	The lamb of Isaiah 53: Christ is the fulfillment of Isaiah 53.He is the sufferer and the sin bearer as 	the Lamb of God who takes away the sins of the whole world{"\n"}

                    4.	Israel as a flock: The image of Israel as a flock and the sheep of God's pasture were quite common 	in the Old Testament (Number 27:17; Isaiah 63: 11; Psalm 23; 77: 20).{"\n"}

                    C.	JESUS AS THE LAMB OF GOD{"\n"}
                    1.	Jesus was declared as the Lamb of God who takes away the sins of the world (John 1: 29).{"\n"}
                    2.	Jesus willingly offered His body as a sacrifice for our sin (Hebrews 10:5-10).{"\n"}
                    3.	Jesus as the Lamb, came as sin (1 Peter 3: 18;2 Corinthians 5: 21).{"\n"}
                    4.	As the Lamb of God, Jesus was willing to be sacrificed. Never did a lamb go willingly to the 	sacrificial altar,  except the Lord Jesus Christ. He not only became our substitute, but He was a 	joyful and willing substitute! He did not protest in His suffering (John 10:11, 15, 17 – 18).{"\n"}
                    5.	As our sacrificial lamb, His sacrifice was once and perfect forever (Hebrews 10: 14).
                    6.	Only the blood of Jesus Christ is acceptable and sufficient for the cleansing of sin and for our 	redemption (Ephesians 1:7; Hebrews 10:4).{"\n"}
                    7.	By His sacrificial death on the cross as the Lamb of God, Jesus paid the price for sin so that all 	men who put their trust in Him will be saved (Romans 6: 23, 1 Peter 1: 18-21).{"\n"}

                    CONCLUSION: Without the shedding of blood, there will be no remission of sins (Hebrews 9: 24). This the blood of bulls and rams could not do as the sacrifices were repeated every year. But thanks be to Jesus, who gave Himself as the Lamb of God that was found worthy to be slain (Revelations 5: 12). Let us conclude by singing. "Worthy, worthy is the Lamb/3ce, that was slain".{"\n"}

                    MEMORY VERSE:	John 1:29{"\n"}

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


export default less16;