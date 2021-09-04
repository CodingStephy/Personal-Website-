import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Paper, Button } from "@material-ui/core";
import { Fade } from "react-reveal";

const useStyles = makeStyles(() => ({
  card: {
    transition: "0.2s",
    height: `100%`,
    backgroundColor: ({ color }) => color,
    "&:hover": {
      transform: "scale(1.02)",
    },
    borderRadius: 16,
    minWidth: 256,
  },
  content: {
    padding: "1rem",
    backgroundColor: ({ color }) => color,
  },
  title: {
    fontSize: "1.5rem",
    color: "#fff",
    textTransform: "uppercase",
  },
  subtitle: {
    color: "#fff",
    opacity: 0.87,
    marginTop: "1.5rem",
    marginBottom: ".5rem",
    fontWeight: 500,
    fontSize: 15,
  },
}));

const ProjectCard = ({ title, subtitle, image, color, link, github }) => {
  const classes = useStyles({ color });
  return (
    <Card
      component={(p) => <Paper {...p} elevation={3} />}
      className={classes.card}
    >
      <Fade cascade bottom>
        <CardMedia
          component="img"
          className="w-100"
          style={{ aspectRatio: `1.5614035087719298` }}
          image={image}
        />
        <CardContent className={classes.content}>
          <Typography className={classes.title} variant={"h2"}>
            <b className="fw-bold">{title}</b>
          </Typography>
          <Typography className={classes.subtitle}>{subtitle}</Typography>
          {link && (
            <Button
              variant="contained"
              className="fw-bold button me-2 bg-primary"
              color="primary"
              component="a"
              href={link}
            >
              View Details
            </Button>
          )}
          {github && (
            <Button
              variant="contained"
              startIcon={<i className="fab fa-github" aria-hidden="true" />}
              className="fw-bold button bg-success"
              color="secondary"
              component="a"
              href={github}
            >
              GitHub Repo
            </Button>
          )}
        </CardContent>
      </Fade>
    </Card>
  );
};

export default ProjectCard;
