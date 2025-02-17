import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

const less14 = () => {
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
                <Text style={styles.tit}>TOPIC: THE SIGNIFICANCE OF MATERIALS USED ON PALM </Text>
                <Text style={styles.tit}>TEXT: Matthew 21: 6-11.</Text>
                <Text style={styles.tit}>AIM: That we may learn to use our possessions to praise andhonour Jesus.
                </Text>
            </View>
            <ScrollView contentContainerStyle={styles.scrollcontain}>
                <Text> INTRODUCTION:
                    Every year we celebrate the Palm Sunday a week before Easter. We do this using some of the materials the Jews used during the triumphant entry of Christ into Jerusalem. These materials include the Donkey (Ass), Garments, Palm tree leaves and Songs. Each is significant as they represent symbolically important aspects of Jesus' ministry and teach us what our attitude towards Christ should be.{"\n"}

                    A.	MATERIALS USED
                    1.	The Donkey (Ass): Jesus rode on a donkey as he entered Jerusalem for the Triumphant Entry. This 	was in fulfillment of Zechariah's prophecy (Zechariah 9: 9). The donkey is a service animal used to 	carry loads. It symbolized the willingness of Jesus to serve and carry all the burdens of all mankind 	(Luke 19:10). How willing are we today to offer ourselves and our belongings in service to God?{"\n"}

                    2.	Garments: These were spread on the road for Jesus to ride on.The Jews usually spread their 	garments on the road for very important personalities to show love, respect, submission and 	honour. They also give their garments and swords to a person they surrender to (1 Samuel 18: 4). 	Christ is worthy of our love, honour and total submission. How surrendered in love and honour are 	you to Jesus?{"\n"}

                    3.	Palm Tree Leaves: Palm tree leaves were used by the Jewish people to welcome and celebrate 	returning armies and won the battle. Ity was a symbol of name victory. Even though Jesus had not 	died and risen from death, conquered their enemies the actions of the disciples showed of Jesus 	over death and sin. For us, we celebrate the victorious{"\n"}


                    4.	Songs of Hosanna: The disciples praised God in songs singing Hosanna.. Hosanna was often used 	used in songs during the feast of Tabernacle to praise God and was s also recorded in Psalm118:25. 	Hosanna means 'save now'. They people people sang expecting Jesus to save them politically from 	the Roman Government. Jesus however came for a different purpose; to save mankind from their
                    sins (Luke 19:10). Each word in the Hosanna song has deep meaning :{"\n"}

                    •	Blessed: mentioned in all the gospels means happiness praise and congratulations to a person to be envied.{"\n"}
                    •	King of lsrael: refers to the Kingship of Jesus. He was of David's lineage. Even though the Israelites did not accept Him as their King then, He would rule over them in the future.{"\n"}
                    •	Comes in the name of the Lord. This shows Christ's Kingship comes from God, not men. God has ordained Him and He will be established in the future.{"\n"}

                    CONCLUSION: People with willing hearts praised Jesus Christ with their possessions. They did it willingly and joyfully testifying of His good works in their lives. May that be so of us this season and always in Jesus name.{"\n"}

                    MEMORY VERSE:	Matthew 21:9{"\n"}

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


export default less14;