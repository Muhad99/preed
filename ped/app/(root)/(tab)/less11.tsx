import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

const less11 = () => {
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
                <Text style={styles.tit}>TOPIC: A VOICE FOR THE VOICELESS (Part 1)</Text>
                <Text style={styles.tit}>TEXT: Psalms 82:1-4</Text>
                <Text style={styles.tit}>AIM:That we may realize that defending the cause of the voiceless in the society is one of the social
                responsibilities of every Christian.
                </Text>
            </View>
            <ScrollView contentContainerStyle={styles.scrollcontain}>
                <Text> INTRODUCTION: The importance of speaking up for the voiceless cannot be overemphasized. Examples of this are found in both the Old and the New Testaments. We see Moses, who appeared before King Pharaoh and spoke up for his people who were being oppressed in Egypt. We also see Jesus, who confronted the religious leaders of his time and became a voice for the oppressed and the marginalized in Israel. In like manner today, we are caled to rise up and be voices for the voiceless around us.{"\n"}

                    A	WHATITMEANS TO BE A VOICE FORTHE VOICELESS{"\n"}
                    1.	It is a phrase that is often used to describe a person or organization that advocates for those who 	are marginalized or oppressed and do not have a platform to speak for themselves.{"\n"}

                    2.	It means standing out against injustice and advocating on behalf of others.{"\n"}

                    3.	It means speaking up when you see something that is not right or fair, even if it may be 	uncomfortable or unpopular.{"\n"}

                    4.	It refers to advocating or defending the right and interests of individuals or groups who are 	unable to defend themselves due to various reasons, such as lack of resources, power, or 	representation.{"\n"}

                    5.	Being a voice for the voiceless can take the form of activism, journalism, legal representation or 	other form of advocacy that I dignity for all is aimed at promoting equality, justice, and is aimed 	at promoting equality, justice, and dignity for all people.{"\n"}

                    B.	SOME EXAMPLESOF THE VoICELESSIN THE SOCIETY{"\n"}
                    The voiceless are those who lack ,or platforms to speak up for themselves. Often their needs and 	not heard. These include:{"\n"}
                    1.	The poor and the homeless: This group often discrimination and struggle to access basic 	necessities food, shelter and health care.{"\n"}

                    2.	The needy and the orphans: In Bible times, the weak such as the needy, the orphans etc. were 	seen as those who those who added little value to the community. They were not allowed a voice 	at the public square.{"\n"}


                    3.	The widows: This group of people often faces a lot of frustrations when they lose their spouses. 	Most times, these frustrations come from their immediate in-laws or the either their society.{"\n"}

                    4.	Women: They face gender-based violence and discrimination and are often not included in 	decision-making processes.{"\n"}

                    5.	Children: They lack the ability to make decisions on their own.{"\n"}

                    6.	People with disabilities: These people face physical, social, and economic barriers to accessing 	education, employment and healthcare.{"\n"}

                    7.	Others include the forgotten, the oppressed, the downcast, the marginalized, and even animals 	that are often subjected tounfair treatment, including abuse, neglect and exploitation, and lack the 	ability to advocate for their own welfare. It is important to say that animals too do feel pain when 	maltreated (Proverbs 12:10).{"\n"}

                    MEMORYVERSE:	Proverbs 31:9{"\n"}
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


export default less11;