import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";
import {useEffect, useState} from "react";
import axios from "axios";
import {drugApi} from "@/utilities/api";
import NewsSection from "@/components/news/NewsSection";
import {useAppDispatch, useAppSelector} from "@/utilities/hooks";
import {fetchHealthTip} from "@/features/globalSlice";
import Ionicons from "@expo/vector-icons/Ionicons";

const Index = () => {

  const healthTip = useAppSelector(state => state.global.results.healthTip)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchHealthTip())
  }, []);

  return (
    <ScrollView style={styles.container}>
      {healthTip &&
      <View style={styles.healthTipContainer}>
        <View style={styles.heading}>
          <Ionicons name="fitness-sharp" size={24} color="red" />
          <Text style={styles.title}>Health tip of the day</Text>
        </View>
        <Text style={styles.text}>{healthTip}</Text>
      </View>
      }

      <NewsSection />
    </ScrollView>
 );
};

const styles = StyleSheet.create({
  container: {
    padding: 6,
    gap: 16
  },
  healthTipContainer: {
    gap: 6,
    backgroundColor: "white",
    padding: 12,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 6,
    marginVertical: 12
  },
  heading: {
    flexDirection: "row",
    gap: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "600"
  },
  text: {
    fontSize: 16,
    lineHeight: 22
  }
});

export default Index;