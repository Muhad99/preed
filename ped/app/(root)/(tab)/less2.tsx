import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

const less2 = () => {
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
                <Text style={styles.tit}>TOPIC: ENTERING INTO GOD'S PROMISES FORTHE NEW YEAR </Text>
                <Text style={styles.tit}>TEXT:Joshua 1: 1-9</Text>
                <Text style={styles.tit}>AIM: That we may learn to follow God into His plans and promises for the New Year.
                </Text>
            </View>
            <ScrollView contentContainerStyle={styles.scrollcontain}>
                <Text> INTRODUCTION: According to God's design, everyone needs help. There are two major sources of help. Help from God and that from man. The help of man is limited, vain and not reliable. When we make man our sole source of help, it brings curses on us (Psalm 108: 12; Jeremiah 17:5). On the other hand, the help of God is unlimited, glorious and dependable. It lasts long and cuts across every aspect of life. It is one of the greatest assets any one can have on earth. lt is important to note
                    that you cannot find help until you first secure it with God. To lean on His help therefore means to depend absolutely on God at all times for help in every aspect of lifek.{"\n"}

                    A. THE UNLIMITED GOD (Psalm 54:4){"\n"}
                    1. God has unlimited and ultimate power to provide help (1Chronicles 29: 11; Job 42: 2). The phrase 'ultimate power' means most important, highest, and superior and that which is in complete control over the entire universe and the resources therein. The phrase also means all powers-financial, material, physical, spiritual, mental, medical etc. The power of God is
                    unlimited and ultimate to provide help.{"\n"}

                    2. God has unlimited resources to meet our needs (Psalm 24: 1-2; Ephesians 3: 16-19). The resources of God are super-abundant. God demonstrated His unlimited resources when He fed about
                    three million Israelites in the wilderness with manna, for forty years and also gave them water and meat. Jesus fed five thousand and four thousand respectively at different times. All these provisions came from God's store house from heaven. Man's resources may be exhausted but not that of God.{"\n"}

                    3. God has unlimited capacity to provide us with maximum security (Deuteronomy 33: 12). Irrespective of the security problems confronting us as a nation, God is able and does watches over His own (Psalm 127:1). As we trust Him for safety in the journey of the year, He will keep guide us in safe paths.{"\n"}

                    4. God has unlimited wisdom to make us excel (Ephesians 1: 16, 17). God is omniscient. He knows all things. He possesses all wisdom. By wisdom He founded the earth; by understanding He
                    established the heavens. Daniel wrote, 'to you belong all wisdom and might... (Daniel 2: 20). He used His wisdom to cause Joseph, Daniel, the three Hebrew young men, Esther, Mordecai to excel
                    even in a strange land. If you trust Him, He can make you to excel even in the midst of uncertainty.{"\n"}

                    B. FORMS OF HUMAN NEEDS{"\n"}
                    Human needs are in various forms and differ from person to person and from place to place. They come under this four categories listed below. Can you mention some?{"\n"}
                    1. Spiritual needs.{"\n"}
                    2. Physical needs.{"\n"}
                    3. Economic needs.{"\n"}
                    4. Security needs.{"\n"}

                    C. STEPS TO SECURING HELP{"\n"}
                    1. Live to please God (Deuteronomy 10: 12). God promises to help those whose lives please Him.{"\n"}

                    2. Be intimate with God's word (Daniel 9: 4; 1 John 2: 5). The more intimate a child of God is with the word of God, the better the understanding of the help available to him/her. God's help kept
                    in store but can only be discovered through reading and meditating on the word.{"\n"}

                    3. Exercise faith in His word (Hebrews 11:6). It takes faith to receive from God. Abraham, Isaac, Jacob, David, Hezekiah and other patriarchs received help by faith. It ta kes faith to receive His help.{"\n"}

                    4. Be prayerful (1 Chronicles 16: 11). Prayer opens the door of help from God. In most cases, God delights to see us express confidence in Him to help us. This we do through prayer Examples of Bible characters who sought God's help through prayers include- Moses, David, Esther, Paul, Peter, Nehemiah, Gideon etc.{"\n"}

                    5. Be a giver (Acts 10: 1-4). Sowing brings reaping; this is one of the basic principles of life. A giver of help will never lack help. While trusting God for help, ensure you help someone. Your act of kindness could open your desired door.{"\n"}

                    6. Be devoted to evangelism our commitment to soul-winning brings us God's help (Matthew 28:18- 20). Paul received marvelous help in several instances because he was committed to evangelism (Acts 28:2,7, 10).{"\n"}

                    7. Be merciful (Matthew 5: 7). God is merciful and He treats us so. Like God, every believer is expected to be merciful. This should be a lifestyle notjust when seeking for His help.{"\n"}

                    CONCLUSION: The journey to a comnfortable and successful life is made possible with God's help irrespective of economic downturns. So put your confidence in God as you begin the journey of the New Year by leaning on Him and His word, and your goal will be achieved (Psalm
                    121:1,2).{"\n"}

                    MEMORY VERSE: Psalm 23:1{"\n"}


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


export default less2;