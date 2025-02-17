import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

const less12 = () => {
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
                <Text style={styles.tit}>TOPIC:	A VOICE FORTHE VOICELESS (Part 2) </Text>
                <Text style={styles.tit}>TEXT: Psalms 82:1-4</Text>
                <Text style={styles.tit}>AIM: That we may learn practical ways to be the voice for the voiceless in the society.
                </Text>
            </View>
            <ScrollView contentContainerStyle={styles.scrollcontain}>
                <Text>  INTRODUCTION: In our society today, there are so many cases of unfair treatments based on race, colour, ethnicity, status, gender, religion, nnolitical parties etc. Therefore, it is important for every Christian and the church as a whole to rise and speak up for those whose voices have been silenced because they are often neglected by society's systems.{"\n"}

                    A	SOME EXAMPLES OF VOICES FORTHE VOICELESS{"\n"}
                    1.	Jesus Christ: On many occasions, when He was on the earth, Jesus defended the voiceless such 	as 	sinners (John 8:3-11).{"\n"}

                    2.	Miss Katryn Dick of Oro Ago, Kwara State. As an S.I.M. missionary, Kathryn Dick was a voice 	for orphans, women and youths. She was instrumental to the setting up of orphanages to cater for 	such children and youth camps for programs to spiritually edify the youths. She established the 	Nigerian Youth Camp, Eiyen Korin in Kwara State.{"\n"}

                    3.	Mary Mitchell Slessor: A Scottish missionary to Nigeria became a voice for women through the 	promotion of their rights and protection of native children. Mary was most famous for her role in 	helping to stop the common practice of killing of twins (infanticide) in Cross River State.{"\n"}

                    4.	Mother Theresa: As the founder of the Missionaries of Charity, Mother Theresa during her life 	time defended the course of the poor, children, orphans and people dying of HIV/AIDS, leprosy,
                    and tuberculosis.{"\n"}

                    5.	Martin Luther King: Luther, an American minister, activist and political philosopher was a 	prominent leader in the civil rights movement from 1955 until his assassination in 1968. He 	spoke for the black people who were discriminated against and advanced civil rights for people 	of 	colour racial inequality.{"\n"}

                    B.	SOME POSSIBLE CONSEQUENCES OF E BEING A VOICE FOR THE VOICELESS{"\n"}
                    To be a voice for the voiceless Comes with Consequences, Examples include:{"\n"}
                    1.	Blackmail: Such a person may be blackmailed for being a voice to the voiceless.{"\n"}
                    2.	Loss of job and denial of promotion a at the place of work.{"\n"}
                    3.	Loss of precious and productive time.{"\n"}
                    4.	Arrest: It may also lead to arrest and molestation.{"\n"}
                    6.	Loss of friends:{"\n"}
                    7.	Mockery: It is always discouraging when those who are the beneficiaries of our advocacy join 	those advocated against to mock the advocates.{"\n"}
                    8.	Loss of life: Being a voice for the voiceless 6 sometimes comes with risk to life and even loss of 	life.{"\n"}

                    C.	SOME PRACTICAL WAYS TO BE A VOICE FORTHE VOICELESS{"\n"}
                    Here are some practical ways a Christian can be a voice for the voiceless.{"\n"}
                    1.	Prayer: Prayer plays an integral role when advocating on behalf of those without voices. Queen 	Esther's call for prayers in Esther 4:16 is an example{"\n"}

                    2.	Speak out against injustices based on religion, race, colour, gender etc. By speaking up and not 	keeping quiet for the voiceless, we can work towards creating a more just and equitable society 	for all.{"\n"}

                    3.	Volunteering our time to defend the voiceless when it is necessary.{"\n"}

                    4.	Donate money towards charities that will better weakand the vulnerable in the society.{"\n"}
                    the lives of the

                    5.	Protect the rights of the voiceless and ensure that their voices are heard. By standing up for the 	voiceless, we can make a difference and create a better world for everyone.{"\n"}

                    6.	Help out with the basic necessities of life such as food, water, shelter, and medicals (Proverbs 	3:27, 28). Jesus healed the sick, fed the hungry, showed compassion to those the scciety deemed 	unworthy leaving us an example.{"\n"}

                    7.	Advocate for policies that will better the welfare of the voiceless at governmental platforms.{"\n"}

                    8.	Use social media platforms to raise awareness about issues affecting marginalized people.{"\n"}

                    9.	Organize enlightenment campaigns. By organizing enlightenment campaigns for different groups 	of the voiceless the society, we can help educate others about important issues that often go 	unnoticed.{"\n"}

                    10.	Rightly use your influence to empower, liberate or lift up the voiceless. The natural inclination is 	for those who have power use it for their own benefit. But we need to remember that God calls on 	the powerful to speak, not only for their good, but for the good of the powerless and voiceless 	(Psalm 82:3, 4).{"\n"}

                    11.	Appeal to the desire of the powerful in the society and in government. The prophet Nathan drew 	King David's attention by appealing to his desire to do justice for the weak when the later
                    acted unjustly (2 Samuel 12: 1-15).{"\n"}

                    12.	Uphold the teaching and values of Christianity such as love, compassion, justice, kindness, and 	generosity towards your neighbours.{"\n"}

                    13.	Advocate for individuals or groups who are subjected to unjust treatment or discrimination.{"\n"}

                    14. 	The church should take a leading role in providing a voice for the voiceless{"\n"}

                    CONCLUSION: We have seen in this lesson that God is passionate about
                    the well-being of the weak and voiceless. Let us therefore learn from the
                    examples of Jesus, others mentioned and many others not mentioned
                    here who have become a voice for voiceless.{"\n"}

                    MEMORY VERSE:	Psalm 82:4{"\n"}

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


export default less12;