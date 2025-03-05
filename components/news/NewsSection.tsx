import {FlatList, StyleSheet, Text, View} from "react-native";
import axios from "axios";
import {useEffect, useState} from "react";
import FeaturedArticle from "@/components/news/FeaturedArticle";
import NewsTile from "@/components/news/NewsTile";

type articleProps = {
  source: { name: string };
  title: string;
  description: string;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
}

const NewsSection = () => {

  const [articles, setArticles] = useState<articleProps[]>([])

  const fetchNewsArticles = async () => {
    try {
      const responseHealth = await axios("https://newsapi.org/v2/everything?q=health", {
        headers: {
          "X-Api-Key": process.env.EXPO_PUBLIC_X_API_KEY
        }
      })
      let { articles: healthArticles } = responseHealth.data
      const filteredHealthArticles = healthArticles.filter((article: articleProps) => article["urlToImage"] !== null)
      setArticles(filteredHealthArticles)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchNewsArticles()
  }, [])

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Top Medical News</Text>

      <FeaturedArticle
        source={articles[0]?.source.name}
        title={articles[0]?.title}
        description={articles[0]?.description}
        url={articles[0]?.url}
        urlToImage={articles[0]?.urlToImage ?? ''}
        date={articles[0]?.publishedAt}
      />
      <FeaturedArticle
        source={articles[1]?.source.name}
        title={articles[1]?.title}
        description={articles[1]?.description}
        url={articles[1]?.url}
        urlToImage={articles[1]?.urlToImage ?? ''}
        date={articles[1]?.publishedAt}
      />
      <FeaturedArticle
        source={articles[2]?.source.name}
        title={articles[2]?.title}
        description={articles[2]?.description}
        url={articles[2]?.url}
        urlToImage={articles[2]?.urlToImage ?? ''}
        date={articles[2]?.publishedAt}
      />
      <FlatList
        style={styles.list}
        horizontal={true}
        initialNumToRender={4}
        data={articles.slice(3)}
        renderItem={({item}) =>
          <NewsTile
            source={item.source.name}
            title={item.title}
            description={articles[0]?.description}
            url={item.url}
            urlToImage={item.urlToImage ?? ''}
            date={item.publishedAt}
          />
        }
      />
    </View>
 );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  list: {

  }
});

export default NewsSection;