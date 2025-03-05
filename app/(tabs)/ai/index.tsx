import {ImageBackground, SafeAreaView, StyleSheet, Text, View} from "react-native";
import {Link} from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign';
// @ts-ignore
import bg1 from "../../../assets/images/bg-1.jpeg"

const ModeSelect = () => {

  return (
    <ImageBackground source={bg1} style={styles.background}>
      <View style={styles.container}>
      <Text style={styles.title}>Powerful AI-based Health Tools</Text>

      <View style={styles.buttonContainer}>
        <Link href="/ai/symptomSelect" style={styles.link}>
          <View style={styles.linkContent}>
            <View style={styles.textContainer}>
              <View style={styles.text}><Text style={styles.heading}>Analyze Symptoms</Text></View>
              <View style={styles.text}><Text style={styles.description}>Analyze your symptoms and get a personalized health assessment</Text></View>
            </View>
            <View>
              <AntDesign name="right" size={24} color="black" />
            </View>
          </View>
        </Link>

        <Link href="/ai/assessmentProfileForm" style={styles.link}>
          <View style={styles.linkContent}>
            <View style={styles.textContainer}>
              <View style={styles.text}><Text style={styles.heading}>Get Health Recommendations</Text></View>
              <View style={styles.text}><Text style={styles.description}>Get personalized health recommendations based on your profile</Text></View>
            </View>
            <View>
              <AntDesign name="right" size={24} color="black" />
            </View>
          </View>
        </Link>

        <Link href="/ai/bmiForm" style={styles.link}>
          <View style={styles.linkContent}>
            <View style={styles.textContainer}>
              <View style={styles.text}><Text style={styles.heading}>Calculate BMI</Text></View>
              <View style={styles.text}><Text style={styles.description}>Calculate your BMI and more</Text></View>
            </View>
            <View>
              <AntDesign name="right" size={24} color="black" />
            </View>
          </View>
        </Link>
      </View>
    </View>
  </ImageBackground>




 );
};

const styles = StyleSheet.create({
  background: {
    height: "100%",
  },
  container: {
    padding: 20,
    paddingTop: 60,
    flex: 1,
    gap: 30
  },
  title: {
    fontSize: 20,
    textAlign: "center",
  },
  buttonContainer: {
    width: "100%",
    gap: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderRadius: 10,
    paddingVertical: 50,
    paddingHorizontal: 20,
    flexDirection: "row",
    textAlign: "center",

  },
  linkContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  textContainer: {
    width: "80%",
    gap: 12,
  },
  text: {
    width: "100%",
  },
  heading: {
    fontSize: 18,
    fontWeight: "700",
  },
  description: {

  }
});

export default ModeSelect;