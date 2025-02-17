import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

const less8 = () => {
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
                <Text style={styles.tit}> TOPIC: THE TRUE GOSPEL. </Text>
                <Text style={styles.tit}>TEXT: Romans 10:8- 18</Text>
                <Text style={styles.tit}>AIM:That we may learn the Gospel truths that must be communicated and believed in for salvation
                </Text>
            </View>
            <ScrollView contentContainerStyle={styles.scrollcontain}>
                <Text> INTRODUCTION: One of the most important assignments given to believers (disciples) by the Lord Jesus Christ is the task of winning souls, known as The Great Commission as contained in Mattheww 28: 18- 20. The Great Commission is yet to be fulfilled due to a number of reasons. A major reason, which is to be handled here in this lesson, is that the true gospel message has not always been correctly and fuly proclaimed by some (Colossians 4: 2 -4).{"\n"}

                    THE TRUE GOSPEL(1 Corinthians 15: 1-4){"\n"}
                    The real message of the gospel of salvation is found clearly stated in the above passage. According to the scripture, Jesus Christ died for our sins, was buried, and was raised on the third day. The passage clearly presents the Apostle Paul as a man who received the true gospel and
                    afterwards conveyed it to his listeners without diluting it. The whole gospel message as expressed above, is the belief in{"\n"}

                    i.	The birth: that He is God incarnate, given birth to by virgin Mary with no male contribution 	to his formation.{"\n"}
                    ii.	His earthly ministry: He lived on earth, related with people, performed miracles, and was a 	great teacher.{"\n"}
                    Iii.	His death: as prophesied in the Old Testament, He died after experiencing agony and pains 	in the hands of men.{"\n"}
                    iv.	His resurrection: on the third day after His death, He resurrected from the grave, having 	conquered death (1 Corinthians 15: 54-57) and{"\n"}
                    v.	His Ascension: the Lord Jesus Christ, after His resurrection from{"\n"}
                    death, ascended to heaven with eyes beholding him (Acts 1:9-11).{"\n"}
                    This implies that the totality of the Irue Gospel is centred on the redemptive work of Christ for mankind.{"\n"}

                    B. THE SIGNIFICANT TRUTHS TO BE COMMUNICATED AND
                    BELIEVED{"\n"}
                    1.	Jesus is God (Matthew 16: 15 - 16; John 10:30).{"\n"}
                    2.	Jesus is the Messiah (Saviour) (Isaiah 61: 1-2; 7: 14).{"\n"}
                    3.	Apart from Christ, man is utterly lost in sins, helpless and doomed to destruction (Acts 4:12).{"\n"}
                    4.	Jesus did not die for His sins but ours. He was sinless: and he paid the penalty for our sins (2 	Corinthians 5:21).{"\n"}
                    5.	Jesus died physically and was bodily resurrected in order break the power of sin and Satan 	(Hebrews 2:14, 15).{"\n"}
                    6.	Jesus' shed blood on the cross provides the only sacrifica acceptable to God for the forgiveness of 	sins, redemption frorm bondage to sin, and reconciliation of man's broken relationshin to 	God(Ephesians 1:7; Hebrews 9: 12).{"\n"}
                    7.	Jesus' death on the cross was motivated by God's love (John 3: 16).{"\n"}
                    8.	Jesus is the only way to salvation (John 14:6).{"\n"}

                    C. THE REQUIREMENTS FOR SALVATION{"\n"}
                    1. To hear the Word of God is essential for a person to be saved (Romans 10: 17); Every one given birth to through the union of a man and woman is born a sinner and as such, doomed for condemnation based on the inherited or original sin of all mankind from Adam. As a result of this, the provision of an "escape route" through the Gospel message is made.{"\n"}

                    2. There must be a personal decision to receive and believe by faith the salvation provided by Jesus Christ (John 3: 3): This is the second requirement. The personal decision, freewill of each person to choose to accept Christ and believe in the salvation provided (John 3:16). hinged on the{"\n"}

                    3. Repent from one's sins, forsake them and l chose to live a holy life: This is the third requirement. One must turn away from a life of sin by the help of the Holy Spirit and daily follow the Lord in the new life of holiness and righteousness as revealed in the word of God (Romans 12: 1, 2; 1 Peter 1:15).{"\n"}

                    Conclusion: The summary of these steps is as stated in Romans 10:9:{"\n"}
                    i. confess with your mouth "Jesus is Lord."{"\n"}
                    i., believe in your heart that God raised him from the dead.{"\n"}

                    MEMORY VERSE: Acts 4:12{"\n"}

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


export default less8;