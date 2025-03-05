import {Image, Linking, Pressable, StyleSheet, Text, View} from "react-native";

type NewsTileProps = {
  source: string,
  title: string,
  description: string,
  url: string,
  urlToImage: string,
  date: string,
}

const NewsTile = ({ source, title, description, url, urlToImage, date }: NewsTileProps) => {

  const monthString = ["January", "February","March","April","May","June","July","August","September","October","November", "December"]
  const month = Number(date.substring(5, 7))
  const day = date.substring(8, 10)
  const year = date.substring(0,4)

  return (
    <Pressable style={styles.button} onPress={() => Linking.openURL(url)}>
      <View style={styles.container}>
        <Image resizeMode="cover" style={styles.image} source={{ uri: urlToImage }} alt="news-cover"/>
        <View style={styles.textContainer} >
          <Text style={styles.title} numberOfLines={3} ellipsizeMode="tail">{title}</Text>
          <Text style={styles.source}>{source}</Text>
          <Text style={styles.date}>{monthString[month - 1]} {day}, {year}</Text>
        </View>
      </View>
    </Pressable>

 );
};

const styles = StyleSheet.create({
  button: {
    width: 160,
    marginRight: 12,
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
  },
  container: {
    flex: 1,
  },
  image: {
    height: 120,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  textContainer: {
    flex: 1,
    padding: 6,
    gap: 3,
  },
  title: {

    fontWeight: "600",
  },
  description: {

  },
  source: {
    fontSize: 13,
  },
  touchable: {

  },
  date: {
    fontSize: 12,
    fontStyle: "italic",
    color: "gray"
  }
});

export default NewsTile;