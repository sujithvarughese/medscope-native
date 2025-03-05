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

const Index = () => {



  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        <NewsSection />
      </ScrollView>
    </SafeAreaView>

 );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 6,
  },
});

export default Index;