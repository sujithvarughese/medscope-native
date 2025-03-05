import {Image, ImageBackground, Linking, Pressable, StyleSheet, Text, View} from "react-native";
import {Props} from "expo-system-ui/plugin/build/withAndroidUserInterfaceStyle";

type FeaturedArticleProps = {
  source: string,
  title: string,
  description: string,
  url: string,
  urlToImage: string,
  date: string,
}

const FeaturedArticle = ({ source, title, url, description, urlToImage, date }: FeaturedArticleProps) => {
  return (

    <Pressable onPress={() => Linking.openURL(url)} style={styles.button}>
      <View style={styles.container}>
        <Image style={styles.image} resizeMode="cover" source={{ uri: urlToImage }} alt="news-cover"/>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description} numberOfLines={3} ellipsizeMode="tail">{description}</Text>
          <Text style={styles.source}>{source}</Text>
        </View>
      </View>
    </Pressable>

 );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderRadius: 10,
    width: "100%",
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: "100%",
    height: 240,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  textContainer: {
    padding: 8,
  },
 title: {
    fontSize: 16,
    fontWeight: "800",
  },
  description: {

  },
  source: {
    fontSize: 14,
    fontWeight: "600",
    fontStyle: "italic",
  }
});

export default FeaturedArticle;