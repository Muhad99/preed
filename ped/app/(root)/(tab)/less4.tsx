import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

const less4 = () => {
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
                <Text style={styles.tit}>TOPIC:REVIEW OF LESSONS 1 -3 THE NEW BIRTH PROCESS (Part 1) </Text>
                <Text style={styles.tit}>TEXT:John 3:1-7</Text>
                <Text style={styles.tit}>AIM:That we may know the process Lord Jesus Christ for being born-again
                </Text>
            </View>
            <ScrollView contentContainerStyle={styles.scrollcontain}>
                <Text> INTRODUCTION: Many people listen to the preaching of the gospel of Christ, yet they are not saved! Many others participate actively in church programmes, yet they are not born-again! The reason is because THEY DO NOT UNDERSTAND (Matthew 13: 19). A large number of church people profess to be followers of the Lord Jesus Christ without understanding and meeting the terms and conditions on which Jesus Christ would accept and register them as His followers. lgnorance often leads to tragedy, and in this case, eternal tragedy! That was the case with the professing "Christians'" we read about in Matthew 7: 21-23.{"\n"}

                    THE SPIRITUAL BIRTH{"\n"}
                    The Lord Jesus said, "Truly, truly I say to you, unless one is born-again, he cannot see the Kingdom of God" When Nicodemus asserted the physical impossibility for an adult to be born the second time, Jesus explained that the rebirth He was talking about is a spiritual experience (vs. 5, 6). Jesus then stated the two agents through which the spiritual rebirth must be effected. He said, "Unless one is born of WATER and The SPIRIT, he cannot enter into the Kingdom of God" (v. 5).{"\n"}

                    BEING BORN OF WATER{"\n"}
                    1. SIGNIFICANCE OF "WATER"{"\n"}
                    a.  WATER signifies the need for cleansing  from sin, and being sanctified for God (See Matthew 3:6 -8; Mark 1: 4, 5).{"\n"}

                    b. If anyone professes to be a follower of Jesus Christ, and does not allow Jesus to apply this WATER to wash him clean from sin, such a person does not really belong to Jesus (John 13:8).{"\n"}

                    c. The washing with the WATER signifies that those who are so washed have repented of their sin (Matthew 3: 4 -6, 11a). That was what the baptism by John the Baptist signified. That also explains why John condemned unrepentant Pharisees and Sadducees who approached him for baptism (Matthew 3:7-10).{"\n"}

                    d. The Water also represents the Word of God, the Bible (John 15:3; 17: 17; Ephesians 5: 25, 26).
                    Reading/hearing, understanding and obeying the teachings of the Bible transform the lives of people who so engage themselves (Jeremiah 23: 18, 22, 28, 29).{"\n"}

                    SUMMARY ON "WATER": For a sinner to be born-again,{"\n"}
                    i. He must listen to the word of God (the Bible) and Without a understand what it says on the. proper knowledge of God's written law, man cannot have a proper knowledge of sin (Romans 7:7).
                    He must not reject the convicting impact of the word of God on his sinful heart. Usually, a sinner does not have a genuine experience of the new birth until he is exposed to the word of God, no matter how brief or indirect them exposure may be. It is the word of God that the Holy Spirit uses to convict man of sin, resulting in genuine repentance that leads to salvation.{"\n"}

                    ii. Having been convicted of his sin, he must repent, forsake his sins and turn to God for mercy and pardon. These done, he has been "BORN OF WATER." This is the first stage in the process of being born-again. Note that in the process of being born-again. being BORN
                    of God, the Bible, has to{"\n"}


                    B. BEING BORN OF THE SPIRIT (John 3:5){"\n"}
                    WATER comes first. That is, the word of God{"\n"}
                    first do its work of making the sinner aware and convicted of his sin. This conviction leads the sinner to repentand mercy and pardon. Then he is ready to be BORN OF which is the second part.{"\n"}

                    1. On the one hand, men facilitate BEING BORN OF teaching God's word (the Bible) to the sinner, until he understands. On the other hand, BEING BORN OF THE SPIRIT is solely a divine work of grace. It is a work that God | assigns to no man. God does it Himself, so no man can rightly claim any credit for it. John the Baptist said that he commenced the procese of the new birth by baptizing repentant sinners with water. He said Jesus would complete the process by baptizing repentant
                    sinners with the Holy Spirit and fire (Luke 3: 16).{"\n"}

                    2. At the point when the sinner gets BORN OF THE SPIRIT, he experiences what ought to be properly understood as BAPTISM OF THE HOLY SPIRIT (1 Corinthians 12: 13, 18). This is a one-
                    time divine work of grace by which the repentant sinner, at this point of his conversion, is incorporated or inducted into the Body of Christ, the invisible Church.{"\n"}

                    3. Many believers confuse THE BAPTISM OF THE HOLY SPIRIT with being filled with the Holy Spirit. The latter is a spiritual experience that is facilitated by the believer's total yielding to the control of the Holy Spirit. Unlike BAPTISM OF THE HOLY SPIRIT, being filled with the Holy Spirit can be a continual or continuous experience, depending on the believer.{"\n"}

                    4. By this singular exercise, i.e. BAPTISM OF THE HOLY SPIRIT, the new believer becomes:{"\n"}
                    a). born-again (John 3: 5).{"\n"}
                    b). a child of God (John 1: 12).{"\n"}
                    c). ajoint heir with Jesus Christ (Romans 8: 17).{"\n"}
                    d). one whose name is written in the Book of Life (Luke 10:20; Revelation 20: 15).{"\n"}
                    e). sealed with the Holy Spirit (Ephesians 1: 13; 4:30).{"\n"}
                    f). seated with Christ in the Heavenly places, far above principalities and powers (Ephesians 1: 20, 21; 2:6).{"\n"}
                    g). entitled to all the privileges, and can claim all the promises of God for the redeemed (2 Peter 1:3, 4), etc.{"\n"}

                    MEMORY VERSE: John 3:5{"\n"}


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


export default less4;