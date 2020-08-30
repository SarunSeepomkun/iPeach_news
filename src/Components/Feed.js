import React, { useState, useEffect } from "react";
import { GetNewsList } from "../Api/news";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Skeleton from '@material-ui/lab/Skeleton';

const useStyle = makeStyles({
  root: { maxWidth: 345 },
  media: { height: 200 },
});

function Feed(props) {
  

  const classes = useStyle();
  const [news, setNews] = useState([]);
  const [loading , setLoading] = useState(true);

  const GetFeed = async () => {
    let { articles } = await GetNewsList("");

    setNews(articles);
    
    setLoading(false);

    console.log(articles);
  };

  useEffect(() => {
    GetFeed();
  },[]);

  return (
    <div style={{ width: "100%" }}>
      <Box
        m={2}
        p={1}
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        alignItems="flex-start"
        justifyContent="center"
      >
        {(loading ? Array.from(new Array(6)) : news).map((item, index) => (
          <Box key={index} p={1}>
            {item ? (
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={item.urlToImage}
                    title={item.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {item.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Link href={item.url} target="_blank">
                    <Button size="small" color="primary">
                      Read More
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            ) : (
              <Box p={1} className={classes.root}>
                <Skeleton variant="rect" width={345} height={200} />
                <Skeleton />
                <Skeleton width="60%" />
              </Box>
            )}
          </Box>
        ))}
          <Button variant="contained" onClick={GetFeed} style={{ width: "100%" , maxWidth:'1035px' }}>
            Feed
          </Button>
      </Box>
    </div>
  );
}

export default Feed;
