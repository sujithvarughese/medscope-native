import {Pressable, SafeAreaView, StyleSheet, Text, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import {useState} from "react";
import {useAppDispatch, useAppSelector} from "@/utilities/hooks";
import {setAge, setSex, setHeight, setWeight, setBmi} from "@/features/globalSlice";
import {Link, router} from "expo-router";
import Button from "@/components/Button";

const AssessmentProfileForm = () => {

  const dispatch = useAppDispatch()
  const age = useAppSelector(state => state.global.profile.age)
  const sex = useAppSelector(state => state.global.profile.sex)
  const height = useAppSelector(state => state.global.profile.height)
  const weight = useAppSelector(state => state.global.profile.weight)
  const bmi = useAppSelector(state => state.global.profile.bmi)

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>

        <View style={styles.sliderContainer}>
          <Text style={styles.heading}>Select your Age</Text>
          <Text style={styles.ageValue}>{age}</Text>
          <View style={styles.ageSlider}>
            <Slider
              style={styles.slider}
              value={age}
              onValueChange={(value) => dispatch(setAge(value))}
              minimumValue={18}
              maximumValue={120}
              step={1}
            />
          </View>
        </View>

        <View style={styles.sexContainer}>
          <Text style={styles.heading}>Select Sex</Text>

          <View style={styles.sexSelections}>
            <Pressable style={[styles.sexSelection, sex === "male" && styles.sexSelected]} onPress={() => dispatch(setSex("male"))}>
              <Ionicons style={styles.sexIcon} name="male-outline" size={64} color="black" />
              <Text style={styles.sexText}>Male</Text>
            </Pressable>

            <Pressable style={[styles.sexSelection, sex === "female" && styles.sexSelected]} onPress={() => dispatch(setSex("female"))}>
              <Ionicons style={styles.sexIcon} name="female-outline" size={64} color="black" />
              <Text style={styles.sexText}>Female</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.sliderContainer}>
          <Text style={styles.heading}>Select your Height</Text>
          <Text style={styles.ageValue}>{Math.floor(height / 12)}' {height % 12}"</Text>
          <View style={styles.ageSlider}>
            <Slider
              style={styles.slider}
              value={height}
              onValueChange={(value) => dispatch(setHeight(value))}
              minimumValue={18}
              maximumValue={96}
              step={1}
            />
          </View>
        </View>

        <View style={styles.sliderContainer}>
          <Text style={styles.heading}>Select your Weight</Text>
          <Text style={styles.ageValue}>{weight}</Text>
          <View style={styles.ageSlider}>
            <Slider
              style={styles.slider}
              value={weight}
              onValueChange={(value) => dispatch(setWeight(value))}
              minimumValue={18}
              maximumValue={500}
              step={1}
            />
          </View>
        </View>

        <View style={styles.sliderContainer}>
          <Text style={styles.heading}>Select your BMI</Text>
          <Text style={styles.ageValue}>{bmi}</Text>
          <View style={styles.ageSlider}>
            <Slider
              style={styles.slider}
              value={bmi}
              onValueChange={(value) => dispatch(setBmi(value))}
              minimumValue={2}
              maximumValue={40}
              step={1}
            />
          </View>
        </View>

        <View>
          <Button onPress={() => router.navigate("/ai/assessmentInfoForm")}><Text>Next</Text></Button>
        </View>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    alignItems: "center",
    justifyContent: "space-evenly",
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
    width: "90%",
    height: "90%",
  },
  sliderContainer: {
    width: "60%",
    gap: 8,
  },
  heading: {
    fontSize: 18,
    alignSelf: "center",
  },
  ageValue: {
    alignSelf: "center",
    fontSize: 24,
    fontWeight: "700"
  },
  ageSlider: {

  },
  slider: {

  },
  sexContainer: {
    alignItems: "center",
    gap: 8,
  },
  sexSelections: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 36,
  },
  sexSelection: {
    alignItems: "center",
    justifyContent: "center",
    padding: 6,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderRadius: 8,
  },
  sexSelected: {

  },
  sexIcon: {
    alignItems: "center",
    justifyContent: "center"
  },
  sexText: {
    fontSize: 16,
    alignItems: "center",
    justifyContent: "center"

  }
});

export default AssessmentProfileForm;