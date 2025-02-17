import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

const less13 = () => {
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
                <Text style={styles.tit}>TOPIC: EXERCISE CARE WITH THE :CONSUMPTION OF SALT AND SUGAR</Text>
                <Text style={styles.tit}> TEXT: Proverbs 25:16</Text>
                <Text style={styles.tit}>AIM: That we would learn to exercise consumption of salt and sugar, and be mindful of their effects on our overall health
                </Text>
            </View>
            <ScrollView contentContainerStyle={styles.scrollcontain}>
                <Text>  INTRODUCTION: The discovery of salt and sugar were beautiful discoveries to humanity. But as time went by, medical research began to show that there was the need for consumers to be careful with these two 'white dangers.' Increase in salt intake is associated with increased risk of hypertension, and other health issues around the heart, kidney, and general human health. Increase in sugar intake on the other hand is directly linked to increased risk of diabetes, obesity, and liver disease among others. High intake of both salt and sugar are directly linked to medical conditions that pose a threat to healthy living. There is no harm in moderate consumption of salt and sugar, however, reduction in the consumption of both can substantially reduce the risk of these diseased Conditions.{"\n"}

                    A.	SUGAR AND ITS IMPLICATIONS{"\n"}
                    1.	Sugar occurs naturally in all foods that contain carbohydrates, such as fruits and vegetables, grains, 	and dairy.{"\n"}

                    2.	Consuming foods that contain natural sugar is okay.{"\n"}

                    3.	Too much sugar causes tooth decay.{"\n"}

                    4.	Problemns occur when you consume too much added sugar i.e processed sugar that food 	manufacturers add to products to increase flavour or extend shelf life.{"\n"}

                    5.	Excess sugar is implicated in weight gain, diabetes and cancers.{"\n"}

                    6.	Other sources of additional sugar are from soda, energy and sports drinks, fruit drinks, sweets and 	ready-to-eat cereals.{"\n"}

                    B. 	SALT ANDITS IMPLICATIONS{"\n"}
                    1.	As with many substances consumed in excess, too much salt in your diet can cause health issues.{"\n"}

                    2.	The importance of salt- The human body requires salt (sodium) to function properly. It is involved 	in the transmission of signals from the brain to the nerves and muscles, and also controls fluid 	levels, such as the total blood volume, which subsequently affects blood pressure.{"\n"}

                    3.	Salt also stimulates the adrenal glands that help regulate body metabolism, immune system, blood 	pressure and response to stress.{"\n"}

                    4.	Only a small amount of salt is needed on a daily basis to perform these essential functions.{"\n"}

                    5.	Increased levels of sodium in the bloodstream reduce the kidneys' ability to remove water.{"\n"}

                    6.	Excess intake of salt may lead to high blood pressure which also, may lead to stroke and 	congestive heart failure.{"\n"}

                    7.	As the kidneys constantly work overtime to flush out.excess salt, they can develop kidney disease.{"\n"}

                    8.	Note that many seasonings contain sodium and so, they should be used sparingly.{"\n"}

                    C.	HOW TO MAINTAIN A HEALTHY SALT AND SUGAR INTAKE{"\n"}
                    1.	The first step in maintaining a healthy level of salt consumption is to know which foods are high in 	sodium. Snacks such as chips, dried seafood or meats, and salted nuts are high in sodium. Often 	canned foods (beans, vegetables, and soups) have added salt in the form of flavour enhancers or 	preservatives, as do pre-packaged foods.{"\n"}

                    2.	For sugar intake, cut down your consumption rate of sugar usage, sugary drinks, added sugars, and 	read nutrition labels.{"\n"}

                    3.	Eat more of whole foods such as fruits, vegetables, lean proteins and whole grains that are 	naturally low in added sugars.{"\n"}

                    4.	Reduce eating foods (especially fast foods) that are not prepared at home. The amount of salt and 	sugar in foods prepared home can be controlled.{"\n"}

                    5.	Mention other ways from your experience.{"\n"}

                    CONCLUSION: Keep in mind that high intake of salt (sodium) and sugar have negative effects on your health. Your health care provider can advise on how much salt and sugar is safe for your consumption - whether it is the standard recommended amount or less. This will depend on your health.{"\n"}

                    MEMORY VERSE:	3 John 1: 2{"\n"}

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


export default less13;