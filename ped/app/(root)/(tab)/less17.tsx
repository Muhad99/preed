import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

const less17 = () => {
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
                <Text style={styles.tit}>TOPIC:JESUS, OUR ATONEMENT </Text>
                <Text style={styles.tit}> TEXT:Hebrews 9: 11-28</Text>
                <Text style={styles.tit}> AIM: That Christians may learn to appreciate Jesus as our atonement, daily live with that understanding
                    worship and as a witness to the world.
                </Text>
            </View>
            <ScrollView contentContainerStyle={styles.scrollcontain}>
                <Text>  INTRODUCTION: The Atonement of Jesus is core and fundamental to the corpus of Christianity. It refers to His sacrificial death on the cross as the price for mankind's sin and it provides the basis for mankind's
                    reconciliation with a Holy God. It is a relationship characterized by guaranteed free access to God with a cleansed Conscience. This is made possible by the blood of the Lamb of God, Jesus Christ who takes away the sin of the world (John 1: 29, 36). And this is a clear reference to the reality of the things fore-shadowed in the Old Testament (e.g. Leviticus 16:15). Hebrew 9:22b declares 'and without the shedding of blood there is neither release from sin and its quilt nor the remission of the due and merited punishment for sin" (Amplified Bible). Which blood then is sufficient, superior, supreme, final and permanent solution for sin? It is the blood of the Lamb of God.{"\n"}

                    A. 	THE IDEA OF ATONEMENT{"\n"}
                    Generally, Atonement means to make payment for some wrongs, harm, crime done to another, or a 	failure to act as obligated. It is a way of making amends for a wrong done. However, in the context 	of our lesson, atonement means:{"\n"}

                    1.	'Covering over' or the 'blotting out' of sin either by reparation or expiation.{"\n"}
                    2.	Making proper/ satisfactory payment to God since sin violates His Holy character.{"\n"}
                    3.	Sin against the Holy God must be fully paid (atoned) for by man to satisfy God's holiness and 	justice (Ezekiel 18:20; Romans 6:23){"\n"}
                    4.	Forgiveness of sin is predicated only on man's properatonement-the shedding of blood.{"\n"}
                    5.	A permanent atonement is needed for the sins of humans before man can be reconciled with/to God 	his Creator against whom he has rebelled.{"\n"}
                    6.	Atonement is the restoration into fellowship of mankind to God.{"\n"}
                    B. 	UNIQUENESS OF JESUS' ATONEMENT{"\n"}
                    Jesus Christ in life, suffering, death and resurrection, provided an atonement that is unique as He 	reconciled (from enmity to friendship) man unto God. This is because:{"\n"}

                    1.	The Atonement of Jesus is sacrificial and voluntary i.e. conscious without moral blemish (John 	3:16; 15: 13). He died for the sins of the world and not for His own sin(s) for He did not commit 	any sin (2 Corinthians 5:21; Hebrew 9:26).{"\n"}
                    2.	The Atonement of Jesus is substitutionary (Hebrew 7: 27). Jesus Christ died a vicarious death-the 	righteous for the ungodly (Romans 5: 6-8; 1 Peter 3:18; 1 John 2;2; 4:10).{"\n"}
                    3.	The Atonement of Jesus is sufficient (Hebrews 4: 4; 10: 10,11).The blood of animal sacrifices and 	offerings of the Old Testament were not potent and sufficient enough to take away sin like the 	blood of Jesus (John 10:11; 1 John 1:9).{"\n"}
                    4.	The Atonement of Jesus is final (Hebrews 10: 17,18). The blood of Jesus shed for the remission of 	sin put paid to any and all forms of sacrifice. It is final because it is superior and perfect. He is 	superior/ greater than the Angels, Moses, Joshua, Aaron and the Old Testament Priesthood and its 	rituals.{"\n"}
                    5.	Atonement of Jesus is permanent (Hebrews 10; 12 -14). The quality of Jesus sacrifice (blameless, 	without blemish) and the permanency of His priesthood (i.e. after the order of endless life) made 	his sacrifice once - for - all (Hebrews 9: 28; 10; 9).{"\n"}

                    C.	SOME BENEFITS OF THE ATONEMENT OF JESUS{"\n"}
                    1.	We have access to God and can come to Him with confidence  (Hebrews 4:15 -16).{"\n"}
                    2.	We become heirs of things promised Abraham (Hebrews 6:17),{"\n"}
                    3.	We become royal priests because of the inauguration of the High Priesthood of Jesus.{"\n"}
                    4.	The Inauguration of the New Covenant or Testament frees us from beggarly elements and 	observation of traditions of men (Galatians 4:9, 10).{"\n"}

                    Our celebration of the HOLY COMMUNION should therefore be with sober reflections on Jesus, our Atonement, who willingly laid down His life for us (Matthew 26:27, 28).{"\n"}

                    MEMORY VERSE:	1John 4: 10.{"\n"}


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


export default less17;