import {ActivityIndicator, Pressable, SafeAreaView, StyleSheet, Text, View} from "react-native";
import {useAppDispatch, useAppSelector} from "@/utilities/hooks";
import Slider from "@react-native-community/slider";
import {setAge, setSex, setHeight, setHip, setWaist, setWeight, fetchBmiResults} from "@/features/globalSlice";
import {Ionicons} from "@expo/vector-icons";
import {Link, router} from "expo-router";
import Button from "@/components/Button";

const BmiForm = () => {

  const dispatch = useAppDispatch()
  const loading = useAppSelector(state => state.global.loading)
  const age = useAppSelector(state => state.global.profile.age)
  const sex = useAppSelector(state => state.global.profile.sex)
  const height = useAppSelector(state => state.global.profile.height)
  const weight = useAppSelector(state => state.global.profile.weight)
  const waist = useAppSelector(state => state.global.profile.waist)
  const hip = useAppSelector(state => state.global.profile.hip)

  const handleSubmit = async () => {
    await dispatch(fetchBmiResults())
    router.navigate("/ai/bmiResults")
  }

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>

        <View style={styles.sliderContainer}>
          <Text style={styles.heading}>Select your Age</Text>
          <Text style={styles.ageValue}>{age} years</Text>
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
              minimumValue={36}
              maximumValue={96}
              step={1}
            />
          </View>
        </View>

        <View style={styles.sliderContainer}>
          <Text style={styles.heading}>Select your Weight</Text>
          <Text style={styles.ageValue}>{weight} lbs</Text>
          <View style={styles.ageSlider}>
            <Slider
              style={styles.slider}
              value={weight}
              onValueChange={(value) => dispatch(setWeight(value))}
              minimumValue={60}
              maximumValue={500}
              step={1}
            />
          </View>
        </View>

        <View style={styles.sliderContainer}>
          <Text style={styles.heading}>Select your waist size</Text>
          <Text style={styles.ageValue}>{waist} in</Text>
          <View style={styles.ageSlider}>
            <Slider
              style={styles.slider}
              value={waist}
              onValueChange={(value) => dispatch(setWaist(value))}
              minimumValue={18}
              maximumValue={52}
              step={1}
            />
          </View>
        </View>

        <View style={styles.sliderContainer}>
          <Text style={styles.heading}>Select your hip size</Text>
          <Text style={styles.ageValue}>{hip} in</Text>
          <View style={styles.ageSlider}>
            <Slider
              style={styles.slider}
              value={hip}
              onValueChange={(value) => dispatch(setHip(value))}
              minimumValue={18}
              maximumValue={52}
              step={1}
            />
          </View>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        {loading ? <ActivityIndicator /> : <Button onPress={handleSubmit}><Text>Calculate BMI</Text></Button>}
      </View>
    </SafeAreaView>
 );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    gap: 16
  },
  container: {
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#FFFFFF",
    width: "100%",
    gap: 12,
  },
  sliderContainer: {
    width: "70%",
  },
  heading: {
    fontSize: 18,
    alignSelf: "center",
  },
  ageValue: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "700"
  },
  ageSlider: {

  },
  slider: {

  },
  sexContainer: {
    alignItems: "center",
    gap: 4,
  },
  sexSelections: {
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 56
  },
  sexSelection: {
    alignItems: "center",
    justifyContent: "center",
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
    backgroundColor: "blueBright",
    borderColor: "black",
    borderWidth: 1,
  },
  sexIcon: {
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
  },
  sexText: {
    alignItems: "center",
    justifyContent: "center"
  },
  buttonContainer: {
    width: "80%",
  }
});

export default BmiForm;