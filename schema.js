const axios = require("axios");
const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLSchema
} = require("graphql");

// Launch Type
const LaunchType = new GraphQLObjectType({
  name: "Launch",
  fields: () => ({
    flight_number: { type: GraphQLInt },
    mission_name: { type: GraphQLString },
    launch_year: { type: GraphQLString },
    launch_date_local: { type: GraphQLString },
    links: { type: LinkType },
    launch_success: { type: GraphQLBoolean },
    rocket: { type: RocketType }
  })
});

// Rocket Type
const RocketType = new GraphQLObjectType({
  name: "Rocket",
  fields: () => ({
    rocket_id: { type: GraphQLString },
    rocket_name: { type: GraphQLString },
    rocket_type: { type: GraphQLString }
  })
});

// Link Type
const LinkType = new GraphQLObjectType({
  name: "Link",
  fields: () => ({
    video_link: { type: GraphQLString }
  })
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    launches: {
      type: new GraphQLList(LaunchType),
      resolve(parent, args) {
        return axios
          .get("https://api.spacexdata.com/v3/launches")
          .then(res => res.data);
      }
    },
    launch: {
      type: LaunchType,
      args: {
        flight_number: { type: GraphQLInt }
      },
      resolve(parent, args) {
        return axios
          .get(`https://api.spacexdata.com/v3/launches/${args.flight_number}`)
          .then(res => res.data);
      }
    },
    rockets: {
      type: new GraphQLList(RocketType),
      resolve(parent, args) {
        return axios
          .get("https://api.spacexdata.com/v3/rockets")
          .then(res => res.data);
      }
    },
    rocket: {
      type: RocketType,
      args: {
        flight_number: { type: GraphQLInt }
      },
      resolve(parent, args) {
        return axios
          .get(`https://api.spacexdata.com/v3/rockets/${args.id}`)
          .then(res => res.data);
      }
    },
    missionLaunches: {
      type: new GraphQLList(LaunchType),
      args: {
        mission_name: { type: GraphQLString }
      },
      resolve(parent, args) {
        return axios
          .get(`https://api.spacexdata.com/v3/launches`)
          .then(res =>
            res.data.filter(launchItem =>
              launchItem.mission_name
                .toLowerCase()
                .includes(args.mission_name.toLowerCase())
            )
          );
      }
    },
    rocketLaunches: {
      type: new GraphQLList(LaunchType),
      args: {
        rocket_name: { type: GraphQLString }
      },
      resolve(parent, args) {
        return axios
          .get(`https://api.spacexdata.com/v3/launches`)
          .then(res =>
            res.data.filter(launchItem =>
              launchItem.rocket.rocket_name.includes(args.rocket_name)
            )
          );
      }
    },
    yearLaunches: {
      type: new GraphQLList(LaunchType),
      args: {
        launch_year: { type: GraphQLInt }
      },
      resolve(parent, args) {
        return axios
          .get(`https://api.spacexdata.com/v3/launches`)
          .then(res =>
            res.data.filter(
              launchItem => launchItem.launch_year == args.launch_year
            )
          );
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
