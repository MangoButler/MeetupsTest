import { Fragment } from "react";
import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="meetups"
          content="Add your own meetups create fun parties or networking events"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const client = await MongoClient.connect(
    "mongodb+srv://christianhegi:nY0GE1QqBGx35ETk@reactcluster.d7gxulp.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 3600,
  };
}

//always needs to return an object with a props property
//this props item is an object that will be received by the Home page as props
//if a function called getStaticProbs is defined in a page component (only in a page component),
//then nex.js will execute the function during the built process
//revalidate the page on the server ever n seconds so that static html content is repregenerated after deployment
// all this code in the getStaticProps will never be excecuted on the client side, this is why it can also be used to connect to a data base

// export async function getServerSideProps (context) {
//     const req = context.req;
//     const res = context.res;
//     return {
//         props: {
//             meetups: dummyMeetups
//         }
//     }
// };

//!!!!!!Will run on the server after deployment, means you need to wait for the data before page is loaded, get static props is better if you dont need data that changes frequently
//only should be used if access to the req and res object is needed, fe if auth is important

export default HomePage;
