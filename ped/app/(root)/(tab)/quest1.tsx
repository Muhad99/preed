import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

const quest1 = () => {
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
                <Text style={styles.tit}>Lesson1:ALL ENCOMPASS PEACE </Text>
                <Text style={styles.tit}>Text: Isaiah 26: 1-10</Text>
                <Text style={styles.tit}>Aim: That we many learn who to
                    access and enjoy the God's peace all the year round
                </Text>
            </View>
            <ScrollView contentContainerStyle={styles.scrollcontain}>
                <Text> Questionnaire{"\n"}

                    We give glory to God for the gift of His wod to us. His word is all that we need to get our world transformed. The goal of this questionnaire is to know how these lessons have been helping your Christian life, and to Know whether your Local Church effects necessary changes in response to teachings in ECWA Sunday School Manual 2025.{"\n"}

                    Please feel free to express your personal opinion. Do not write your name or phone number on this Questionnaire. We will keep all responses very confldential.{"\n"}

                    1a)	Do you consider any of these lessons difficult to understand? (Yes or No){"\n"}

                    1b)	If yes, state the number(s) and topic (s) of the lesson/lessons.{"\n"}

                    c)	State which aspects of the lesson(s) are difficult to understand?{"\n"}

                    2a)	From your participation in the Sunday school lessons, did you feel that some teaching or practice 	in your Local Church needs to be changed? (Yes or No){"\n"}

                    2b)	If your answer in (a) above is yes, specify/explain:{"\n"}



                    2c)	What do you think is the reason why those changes have not been effected in your
                    local Church?{"\n"}

                    3)	State DCC under which your ECWA Local Church is located:{"\n"}


                    THANK YOU FOR EXPRESSING YOUR CANDID OPINION. GOD BLESS YOU.{"\n"}
                    Please detach this sheet and send\post it in a sealed envelope to:{"\n"}
                    The C.E.0.{"\n"}
                    Christian Education Department,{"\n"}
                    ECWA llorin DCC Office,{"\n"}
                    Challenge, PMB 1367, lIlorin, Kwara State.{"\n"}
                    Email : dsogunniyi@hotmail.com or ceoecwaidcc@gmail.com{"\n"}

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


export default quest1;