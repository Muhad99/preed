import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

const less18 = () => {
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
                <Text style={styles.tit}>TOPIC:	REASONS FOR HIS APPEARANCE AFTER HIS RESURRECTION</Text>
                <Text style={styles.tit}>TEXT:	1 Corinthians 15: 1-11</Text>
                <Text style={styles.tit}>AIM:	That wemay be re-assured of Christ's resurrection and have
                our faith in Him strengthened.
                </Text>
            </View>
            <ScrollView contentContainerStyle={styles.scrollcontain}>
                <Text> INTRODUCTION: After Jesus' resurrection, He appeared first to Mary Magdalene, various other women, two unnamed disciples, Peter, James and the rest of the remaining eleven apostles. He also appeared to more than five hundred of the brothers and sisters at the same time (1 Corinthians 15: 6).{"\n"}

                    A.	BRIEF OUTLINE OF HIS SUFFERING AND DEATH{"\n"}
                    1.	He was arrested and given unjust trials (Luke 23:12-25).{"\n"}
                    2.	He was mocked, tormented and led away to be crucified by the soldiers (Luke 22:63-65).{"\n"}
                    3.	Finally He was nailed to the cross and crucified between two robbers (Mark 15:21-32).{"\n"}
                    4.	He died on the cross to pay the ransom for our sins (John 19:28-30).{"\n"}
                    5.	He was laid in the grave of Joseph of Arimathaea who received permission from Pilate to bury His 	body (Luke 23:50-56).{"\n"}
                    6.	The women who had come from Galilee followed and saw where He was laid went back home to 	prepare spices they planned to use in anointing Jesus body (Luke 23:56).{"\n"}
                    7.	He resurrected on the first day of the week (Mark 16: 5, 6).{"\n"}

                    B.	THE EVIDENCES OF HIS RESURRECTION{"\n"}
                    1.	Empty Tomb (Mark 16: 5). The women found the tomb empty but saw a young man sitting on the 	right side clothed in a long white garment, who announced to them that Jesus has risen.{"\n"}
                    2.	The cover-up lie (Matthew 28: 11 - 15). The f frightened guards gave a factual account of what 	happened at Jesus' tomb to the chief priests. The Chief priests however gave them a sum of money 	and told them to cover up wiith a lie claiming that the disciples of Jesus stole his bodyl{"\n"}
                    3.	His first appearance to Mary Magdalene Jesus appeared suddenly to Mary after two angels had the 	tomb sorrowful. She mistook him for the gardener until He	 appeared to her asking her questions 	when she went back tocalled her name after which she recognized Him and went back to share the 	news of His resurrection with the disciples.{"\n"}
                    4.	The angelic announcement to the Women who stood where He was crucified and laid were 	privileged to have the angel announce to them the resurrection of Jesus. This was another evidence 	of His resurrection.{"\n"}
                    5.	The Emmaus way encounter (Mark 16: : 12, 13; Luke 24:13- 35). He also appeared to two of His 	disciples as they walked on their way to Emmaus. They didn't recognize Him initially until their 	eyes were open to recognize Him.{"\n"}
                    6.	He appeared to Peter (Luke 24: 34). On their return to the other disciples, they were told the Lord 	had also appeared to Simon Peter.{"\n"}
                    7.	He appeared to the disciples ( Mark 16: 14; Luke 24:36-43; John 20: 19 - 23). And as they were 	still speaking, Jesus himself stood in their midst and said unto them peace be unto you.{"\n"}
                    8.	He appeared also to Thomas (John 20: 24- 29). Thomas was absent when Jesus first appeared to 	the disciples. He doubted their wonderful report and insisted he would not believe unless he sees 	and touches the wounds of Jesus. Jesus appeared again and invited Thomas to feel His wounds.{"\n"}
                    9.	He appeared to seven of His disciples at the sea of Galilee (Tiberia sea) (John 21: 1 – 25). The 	resurrected Christ met with seven of his disciples by the Sea of Galilee after they had followed 	Peter to fish.{"\n"}
                    10.	He appeared to 500 people (1 Corinthians 15: 6). The appearance of Jesus to five hundred people at 	the same time brought in a lot of witnesses together at the same time.{"\n"}

                    C.	REASONS FOR HIS APPEARANCE AFTER RESURRECTION.{"\n"}
                    1.	He wanted to assure the disciples that He resurrected as he promised and for them to know that He 	 alive (John 20:19-22){"\n"}
                    2.	To pass across Great commission to His disciples (Matthew 28: 18-20). He gave them the mandate 	saying all authority in heaven and on earth has been given to Him..{"\n"}
                    3.	To give the disciples the assurance of his abiding presence (Matthew 28: 20c). His appearance also 	laid the foundation in their hearts that Jesus is alive and will be with them always as He promised.{"\n"}
                    4.	To guide them through the path of power needed to carry on the work of establishing the kingdom 	of God on earth (Luke 24: 45- 49; Acts 1: 8).{"\n"}
                    5.	To give assurance of resurrection after death to believers who die in Christ (1 Corinthians 15: 12 - 	20). Christ's resurrection assures us of the resurrection of believers.{"\n"}
                    6.	To show death has no hold over him (Acts 2: 24; Romnans 6:9). Christ's appearance shows that 	death has no hold on Him and by the power of His resurrection, believers in Christ can live new 	lives empowered by the Holy Spirit.{"\n"}

                    CONCLUSION: Jesus' appearances after his resurrection were necessary to verify his divinity, bring comfort to his disciples, commission them for mission, and to establish the church, among other reasons. These appearances continue to inspire and empower believers today.{"\n"}

                    MEMORY VERSE: 1 Corinthians 15: 14{"\n"}

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


export default less18;