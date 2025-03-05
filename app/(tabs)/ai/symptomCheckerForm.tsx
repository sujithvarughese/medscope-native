import {
  ActivityIndicator,
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View
} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "@/utilities/hooks";
import {
  setAge,
  setSex,
  setHeight,
  setWeight,
  addMedicalHistory,
  removeMedicalHistory,
  removeCurrentMedications,
  addCurrentMedications,
  removeAllergies,
  addAllergies,
  setAlcohol,
  setActivityLevel, setExercise, setDiet, setSleepHours, setStressLevel, fetchSymptomAssessment, setSmoking
} from "@/features/globalSlice";
import {Link, router} from "expo-router";
import PickerModal from "@/components/PickerModal";
import SelectorModal from "@/components/SelectorModal";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Button from "@/components/Button";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const SymptomCheckerForm = () => {

  const dispatch = useAppDispatch()
  const loading = useAppSelector(state => state.global.loading)
  const age = useAppSelector(state => state.global.profile.age)
  const sex = useAppSelector(state => state.global.profile.sex)
  const height = useAppSelector(state => state.global.profile.height)
  const weight = useAppSelector(state => state.global.profile.weight)
  const medicalHistory = useAppSelector(state => state.global.profile.medicalHistory)
  const currentMedications = useAppSelector(state => state.global.profile.currentMedications)
  const allergies = useAppSelector(state => state.global.profile.allergies)
  const smoking = useAppSelector(state => state.global.profile.lifestyle.smoking)
  const alcohol = useAppSelector(state => state.global.profile.lifestyle.alcohol)
  const activityLevel = useAppSelector(state => state.global.profile.lifestyle.activityLevel)
  const exercise = useAppSelector(state => state.global.profile.lifestyle.exercise)
  const diet = useAppSelector(state => state.global.profile.lifestyle.diet)
  const sleepHours = useAppSelector(state => state.global.profile.lifestyle.sleepHours)
  const stressLevel = useAppSelector(state => state.global.profile.lifestyle.stressLevel)


  const [showMedicalHistorySelect, setShowMedicalHistorySelect] = useState(false)
  const [showCurrentMedicationsSelect, setShowCurrentMedicationsSelect] = useState(false)
  const [showAllergiesSelect, setShowAllergiesSelect] = useState(false)

  const [showSmokingSelect, setShowSmokingSelect] = useState(false)
  const [showAlcoholSelect, setShowAlcoholSelect] = useState(false)
  const [showActivityLevelSelect, setShowActivityLevelSelect] = useState(false)
  const [showExerciseSelect, setShowExerciseSelect] = useState(false)
  const [showDietSelect, setShowDietSelect] = useState(false)
  const [showSleepHoursSelect, setShowSleepHoursSelect] = useState(false)
  const [showStressLevelSelect, setShowStressLevelSelect] = useState(false)

  const handleSubmit = async () => {
    await dispatch(fetchSymptomAssessment())
    router.navigate("/ai/symptomResults")
  }

  return (
    <ScrollView style={styles.page}>
      <View style={styles.container}>

        <View style={styles.sectionContainer}>
          <Text style={styles.heading}>Age</Text>
          <View style={styles.sliderContainer}>
            <Text style={styles.value}>{age} years</Text>
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

        <View style={styles.sectionContainer}>
          <Text style={styles.heading}>Sex</Text>

          <View style={styles.sexSelections}>
            <Pressable style={[styles.sexSelection, sex === "male" && styles.sexSelected]} onPress={() => dispatch(setSex("male"))}>
              <Ionicons style={styles.sexIcon} name="male-outline" size={36} color="black" />
              <Text style={styles.sexText}>Male</Text>
            </Pressable>

            <Pressable style={[styles.sexSelection, sex === "female" && styles.sexSelected]} onPress={() => dispatch(setSex("female"))}>
              <Ionicons style={styles.sexIcon} name="female-outline" size={36} color="black" />
              <Text style={styles.sexText}>Female</Text>
            </Pressable>
          </View>

        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.heading}>Height</Text>
          <View style={styles.sliderContainer}>
            <Text style={styles.value}>{Math.floor(height / 12)}' {height % 12}"</Text>
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

        <View style={styles.sectionContainer}>
          <Text style={styles.heading}>Weight</Text>
          <View style={styles.sliderContainer}>
            <Text style={styles.value}>{weight} lbs</Text>
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

        <View>
          <View style={styles.sectionContainer}>
            <Text style={styles.heading}>Medical History</Text>
            <Pressable onPress={() => setShowMedicalHistorySelect(true)}>
              <Ionicons name="add-circle-sharp" size={24} color="black" />
            </Pressable>
          </View>
          {medicalHistory.map(item =>
          <View key={item} style={styles.listItem}>
            <Pressable onPress={() => dispatch(removeMedicalHistory(item))}>
              <Ionicons name="remove-circle-sharp" size={24} color="black" />
            </Pressable>
            <Text>{item}</Text>
          </View>
          )}
        </View>

        <View>
          <View style={styles.sectionContainer}>
            <Text style={styles.heading}>Current Medications</Text>
            <Pressable onPress={() => setShowCurrentMedicationsSelect(true)}>
              <Ionicons name="add-circle-sharp" size={24} color="black" />
            </Pressable>
          </View>
          {currentMedications.map(item =>
          <View key={item} style={styles.listItem}>
            <Pressable onPress={() => dispatch(removeCurrentMedications(item))}>
              <Ionicons name="remove-circle-sharp" size={24} color="black" />
            </Pressable>
            <Text>{item}</Text>
          </View>
          )}
        </View>

        <View style={styles.dropdownContainer}>
          <View style={styles.sectionContainer}>
            <Text style={styles.heading}>Allergies</Text>
            <Pressable onPress={() => setShowAllergiesSelect(true)}>
              <Ionicons name="add-circle-sharp" size={24} color="black" />
            </Pressable>
          </View>
          {allergies.map(item =>
          <View key={item} style={styles.listItem}>
            <Pressable onPress={() => dispatch(removeAllergies(item))}>
              <Ionicons name="remove-circle-sharp" size={24} color="black" />
            </Pressable>
            <Text>{item}</Text>
          </View>
          )}
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.heading}>Smoking</Text>
          <Pressable onPress={() => setShowSmokingSelect(true)} style={styles.dropdown}>
            <Text>{smoking}</Text>
            <FontAwesome6 name="chevron-down" size={16} color="black" />
          </Pressable>

        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.heading}>Alcohol</Text>
          <Pressable onPress={() => setShowAlcoholSelect(true)} style={styles.dropdown}>
            <Text>{alcohol}</Text>
            <FontAwesome6 name="chevron-down" size={16} color="black" />
          </Pressable>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.heading}>Activity Level</Text>
          <Pressable onPress={() => setShowActivityLevelSelect(true)} style={styles.dropdown}>
            <Text>{activityLevel}</Text>
            <FontAwesome6 name="chevron-down" size={16} color="black" />
          </Pressable>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.heading}>Exercise</Text>
          <Pressable onPress={() => setShowExerciseSelect(true)} style={styles.dropdown}>
            <Text>{exercise}</Text>
            <FontAwesome6 name="chevron-down" size={16} color="black" />
          </Pressable>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.heading}>Diet</Text>
          <Pressable onPress={() => setShowDietSelect(true)} style={styles.dropdown}>
            <Text>{diet}</Text>
            <FontAwesome6 name="chevron-down" size={16} color="black" />
          </Pressable>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.heading}>Sleep Hours</Text>
          <Pressable onPress={() => setShowSleepHoursSelect(true)} style={styles.dropdown}>
            <Text>{sleepHours}</Text>
            <FontAwesome6 name="chevron-down" size={16} color="black" />
          </Pressable>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.heading}>Stress Level</Text>
          <Pressable onPress={() => setShowStressLevelSelect(true)} style={styles.dropdown}>
            <Text>{stressLevel}</Text>
            <FontAwesome6 name="chevron-down" size={16} color="black" />
          </Pressable>
        </View>

        <PickerModal
          visible={showSmokingSelect}
          close={() => setShowSmokingSelect(false)}
          onSelect={(item) => {
            dispatch(setSmoking(item))
            setShowSmokingSelect(false)
          }}
          title="Select Smoking Status"
          list={["none", "sometimes", "often"]}
        />

        <PickerModal
          visible={showAlcoholSelect}
          close={() => setShowAlcoholSelect(false)}
          onSelect={(item) => {
            dispatch(setAlcohol(item))
            setShowAlcoholSelect(false)
          }}
          title="Select Alcohol"
          list={["none", "low", "moderate", "high"]}
        />

        <PickerModal
          visible={showActivityLevelSelect}
          close={() => setShowActivityLevelSelect(false)}
          onSelect={(item) => {
            dispatch(setActivityLevel(item))
            setShowActivityLevelSelect(false)
          }}
          title="Select Activity Level"
          list={["sedentary", "moderate", "active"]}
        />
        <PickerModal
          visible={showExerciseSelect}
          close={() => setShowExerciseSelect(false)}
          onSelect={(item) => {
            dispatch(setExercise(item))
            setShowExerciseSelect(false)
          }}
          title="Select Exercise Level"
          list={["low", "moderate", "high"]}
        />
        <PickerModal
          visible={showDietSelect}
          close={() => setShowDietSelect(false)}
          onSelect={(item) => {
            dispatch(setDiet(item))
            setShowDietSelect(false)
          }}
          title="Select Diet"
          list={["poor", "mixed", "balanced", "excellent"]}
        />
        <PickerModal
          visible={showSleepHoursSelect}
          close={() => setShowSleepHoursSelect(false)}
          onSelect={(item) => {
            dispatch(setSleepHours(Number(item)))
            setShowSleepHoursSelect(false)
          }}
          title="Select Sleep Hours"
          list={["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]}
        />
        <PickerModal
          visible={showStressLevelSelect}
          close={() => setShowStressLevelSelect(false)}
          onSelect={(item) => {
            dispatch(setStressLevel(item))
            setShowStressLevelSelect(false)
          }}
          title="Select Stress Level"
          list={["low", "moderate", "high"]}
        />

        <SelectorModal
          visible={showMedicalHistorySelect}
          close={() => setShowMedicalHistorySelect(false)}
          category="conditions"
          onSelect={(item) => {
            dispatch(addMedicalHistory(item))
            setShowMedicalHistorySelect(false)
          }}
        />
        <SelectorModal
          visible={showCurrentMedicationsSelect}
          close={() => setShowCurrentMedicationsSelect(false)}
          category="drugs"
          onSelect={(item) => {
            dispatch(addCurrentMedications(item))
            setShowCurrentMedicationsSelect(false)
          }}
        />
        <SelectorModal
          visible={showAllergiesSelect}
          close={() => setShowAllergiesSelect(false)}
          category="drugs"
          onSelect={(item) => {
            dispatch(addAllergies(item))
            setShowAllergiesSelect(false)
          }}
        />
        <View style={styles.buttonContainer}>
          {loading ? <ActivityIndicator /> : <Button onPress={handleSubmit}>Get Results</Button>}
        </View>

      </View>
    </ScrollView>
 );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  container: {
    alignItems: "center",
    justifyContent: "space-evenly",
    gap: 8,
    padding: 16,
    backgroundColor: "#FFFFFF",
  },
  sectionContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sliderContainer: {
    flexDirection: "row",
    gap: 8,
  },
  heading: {
    fontSize: 16,
    alignSelf: "center",
  },
  value: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "700"
  },
  slider: {
    width: 200
  },
  sexContainer: {
    alignItems: "center",
    gap: 8,
  },
  sexSelections: {
    flexDirection: "row",
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
    borderWidth: 1,
    borderColor: "#0000001A",
  },
  sexIcon: {
    alignItems: "center",
    justifyContent: "center"
  },
  sexText: {
    fontSize: 16,
    alignItems: "center",
    justifyContent: "center"
  },
  dropdownContainer: {

  },
  dropdown: {
    flexDirection: "row",
    gap: 4,
    borderWidth: 1,
    borderColor: "#0000001A",
    width: 100,
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 6,
  },
  listItem: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#0000001A",
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
});

export default SymptomCheckerForm;