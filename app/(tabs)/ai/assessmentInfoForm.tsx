import {Pressable, StyleSheet, Switch, Text, View} from "react-native";
import {useAppDispatch, useAppSelector} from "@/utilities/hooks";
import {Ionicons} from "@expo/vector-icons";
import {
  addMedicalHistory,
  removeMedicalHistory,
  setActivityLevel,
  setAlcohol, setBloodSugar,
  setBmi,
  setCancer,
  setDiabetes,
  setDiastolicBloodPressure,
  setDiet,
  setExercise,
  setHeartDisease, setRestingHeartRate,
  setSleepHours,
  setSmoking,
  setStressLevel,
  setSystolicBloodPressure
} from "@/features/globalSlice";
import {useState} from "react";
import SelectorModal from "@/components/SelectorModal";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import PickerModal from "@/components/PickerModal";
import Slider from "@react-native-community/slider";
import Button from "@/components/Button";
import {router} from "expo-router";

const AssessmentInfoForm = () => {

  const dispatch = useAppDispatch()

  const medicalHistory = useAppSelector(state => state.global.profile.medicalHistory)
  const smoking = useAppSelector(state => state.global.profile.lifestyle.smoking)
  const alcohol = useAppSelector(state => state.global.profile.lifestyle.alcohol)
  const activityLevel = useAppSelector(state => state.global.profile.lifestyle.activityLevel)
  const exercise = useAppSelector(state => state.global.profile.lifestyle.exercise)
  const diet = useAppSelector(state => state.global.profile.lifestyle.diet)
  const sleepHours = useAppSelector(state => state.global.profile.lifestyle.sleepHours)
  const stressLevel = useAppSelector(state => state.global.profile.lifestyle.stressLevel)
  const diabetesHistory = useAppSelector(state => state.global.profile.familyHistory.diabetes)
  const heartDiseaseHistory = useAppSelector(state => state.global.profile.familyHistory.heartDisease)
  const cancerHistory = useAppSelector(state => state.global.profile.familyHistory.cancer)
  const systolicBloodPressure = useAppSelector(state => state.global.profile.vitals.bloodPressure.systolic)
  const diastolicBloodPressure = useAppSelector(state => state.global.profile.vitals.bloodPressure.diastolic)
  const restingHeartRate = useAppSelector(state => state.global.profile.vitals.restingHeartRate)
  const bloodSugar = useAppSelector(state => state.global.profile.vitals.bloodSugar)

  const [showMedicalHistorySelect, setShowMedicalHistorySelect] = useState(false)
  const [showSmokingSelect, setShowSmokingSelect] = useState(false)
  const [showAlcoholSelect, setShowAlcoholSelect] = useState(false)
  const [showActivityLevelSelect, setShowActivityLevelSelect] = useState(false)
  const [showExerciseSelect, setShowExerciseSelect] = useState(false)
  const [showDietSelect, setShowDietSelect] = useState(false)
  const [showSleepHoursSelect, setShowSleepHoursSelect] = useState(false)
  const [showStressLevelSelect, setShowStressLevelSelect] = useState(false)

  return (
    <View style={styles.container}>
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

      <View style={styles.sectionContainer}>
        <Text style={styles.heading}>Family History</Text>
        <View>
          <Text>Diabetes</Text>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={diabetesHistory ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={(value: boolean) => {dispatch(setDiabetes(value))}}
            value={diabetesHistory}
          />
        </View>
        <View>
          <Text>Heart Disease</Text>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={diabetesHistory ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={(value: boolean) => {dispatch(setHeartDisease(value))}}
            value={heartDiseaseHistory}
          />
        </View>
        <View>
          <Text>Cancer</Text>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={diabetesHistory ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={(value: boolean) => {dispatch(setCancer(value))}}
            value={cancerHistory}
          />
        </View>
      </View>

      <View style={styles.sliderContainer}>
        <Text style={styles.heading}>Systolic BP</Text>
        <Text style={styles.value}>{systolicBloodPressure}</Text>
          <Slider
            style={styles.slider}
            value={systolicBloodPressure}
            onValueChange={(value) => dispatch(setSystolicBloodPressure(value))}
            minimumValue={80}
            maximumValue={200}
            step={1}
          />
      </View>

      <View style={styles.sliderContainer}>
        <Text style={styles.heading}>Diastolic BP</Text>
        <Text style={styles.value}>{diastolicBloodPressure}</Text>
        <Slider
          style={styles.slider}
          value={diastolicBloodPressure}
          onValueChange={(value) => dispatch(setDiastolicBloodPressure(value))}
          minimumValue={50}
          maximumValue={150}
          step={1}
        />
      </View>

      <View style={styles.sliderContainer}>
        <Text style={styles.heading}>Resting Heart Rate</Text>
        <Text style={styles.value}>{restingHeartRate}</Text>
        <Slider
          style={styles.slider}
          value={restingHeartRate}
          onValueChange={(value) => dispatch(setRestingHeartRate(value))}
          minimumValue={40}
          maximumValue={200}
          step={1}
        />
      </View>

      <View style={styles.sliderContainer}>
        <Text style={styles.heading}>Blood Sugar</Text>
        <Text style={styles.value}>{bloodSugar}</Text>
        <Slider
          style={styles.slider}
          value={bloodSugar}
          onValueChange={(value) => dispatch(setBloodSugar(value))}
          minimumValue={50}
          maximumValue={200}
          step={1}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button onPress={() => router.navigate("/ai/assessmentGoalsForm")}>Continue</Button>
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
    </View>
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

export default AssessmentInfoForm;