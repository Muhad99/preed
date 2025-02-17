import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

const less1 = () => {
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
                <Text> INTRODUCTION: Every year comes not just as a gift, a privilege, and a blessing but with God's plans and promises for the New Year. Thesepromises come to pass as we learn to follow God and do that which He expects of us. Just as Joshua needed to be strong, courageous and wiling to follow God's plan and promises to get to the Promised Land, so are we also expected to follow God, His will, His plan and promises in the New Year. As we begin the journey of the New Year, may the Lord help us to hold onto His World/promises as we pursue His plans and promises in
                    Jesus' name. Amen.{"\n"}

                    A. GOD'S PLANS FOR US (Jeremiah 29: 11). Can you list some of God's Promises?{"\n"}

                    1. They are good plans: It may be difficult to always believe that God's plans are good when our circumstances suggest otherwise. However, believers who have larned God's ways by following Him faithfully will attest to the goodness of God's plans in all situations. For example, the larger purpose of the Exile (Jeremiah 29: 11) was to force Israel back to her God (Deuteronomy 30: 1-4). Also, Joseph was sent ahead through slavery and imprisonment in Egypt to save his family by a great deliverance, 'not by his brothers', but by God (Genesis 45: 7; 50:20).{"\n"}

                    2. They give us a future: There is no future for Christians outside the Word of God. The fulfillment of God's future promises to believers begins through our responses to what God permits in our lives in the present. God told the exiles in Babylon to settle down, build houses, and plant gardens for themselves (29: 1-6). They were to work hard and pray for the city where they are exiled beca use the period of exile will be seventy years (Jeremiah 29:4-7). These imply that Judah would begin to walk into their promised future when they believe and act on God's verdict for their slavery through dedication to their well-being and that of Babylon.{"\n"}

                    3. They give us hope: Turning tragedy into triumph involves an acceptance of our situation courageously and resting in the unfailing promises of God. The exiles seemed completely hopeless because they had lost their possessions, freedom, and means of livelihood. Yet, they were not to indulge in false hopes which would make them miss the plan of God (Jeremiah 29: 8). 
                    True hope is based on the revealed Word of God, not human desires or false prophesies (Jeremiah 29: 9). God's promises and plans are reliable. They are sources of hope, peace, and restoration from any unpalatable situation.{"\n"}

                    B. HOW TO FOLLOW GOD'S PLAN{"\n"}
                    1. Get a word from God through the reading of the Bible, praying, and meeting in felowship with other believers (Joshua 1: 8). Through these means, a child of God is reassured, re-envisioned, taught, corrected, rebuked, trained in the path of righteousness, and prepared to follow through God's plans (Psalms 32: 8; 2Timothy 3: 16) in the tasks committed into their hands.{"\n"}

                    2. Walk in wisdom (Joshua 2: 1). No efforts and cost are too much to pay in acquiring divine wisdom (Proverbs 4:7). Joshua's military strategy of sending two spies from Acacia Grove to
                    Jericho was not an indication of lack of faith but an expression of wisdom. Brethren, let us endeavor to acquire relevant knowledge and understanding about the work God has given us.{"\n"}

                    3. Be united with others in fellowship (Joshua 3: 1). The togetherness of Joshua and the Israelites in setting out to do God's mission is an example of how believers must join hands to
                    achieve the purpose of God. Little wonder, the Israelites declared their unalloyed support for Joshua as long as God was with himn (Joshua 1: 10-18). .{"\n"}

                    4. Do not forget God's interventions (Joshua 4: 6): To forget God's intervention is to forget God and fail to acknowledge His Words. The aftermath is turning to other gods and breaking God's covenant (Deuteronomy 31: 20). Since everyone has the natural instinct to forget God when we are satisfied, we should learn from Joshua and the Israelites in taking measures that will not make us and our generation to easily forget God's deeds. {"\n"}

                    5. Remain consecrated to God (Joshua 5:7, 8). God's intentions in all that He does for and through us is more than just to make us happy. He wants to develop our Christian character as we make it
                    our goal to please him every day. Believers should make every effort to be separated from the world and dedicated unto God. This is a very important approach to please God and to fulfill his
                    plans.{"\n"}

                    CONCLUSION: If You agree that every year comes as a gift and a privilege
                    from God, endeavor to appreciate these blessings of God by doing all
                    within your power to walk-in His plans.{"\n"}

                    MEMORY VERSE: Joshua 1:9{"\n"}

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


export default less1;