import React, { useState, useEffect } from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import ImportOptions from "./ImportOptions";
import Post from "./Post";
import { db } from "./Firebase";
import firebase from "firebase";

function Feed() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snapShot) => {
        setPosts(
          snapShot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    // db.collection("posts").add({
    //   name: "jhabindra Rayamajhi",
    //   description: "this is test",
    //   message: input,
    //   photoUrl: "",
    //   timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    // });

    // setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              value={input}
              type="text"
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" onClick={sendPost}>
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <ImportOptions Icon={ImageIcon} title="Photo" color="#7085F9" />
          <ImportOptions
            Icon={SubscriptionsIcon}
            title="Video"
            color="#E7A33E"
          />
          <ImportOptions Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <ImportOptions
            Icon={CalendarViewDayIcon}
            title="Write Article"
            color="#7FC15E"
          />
        </div>
      </div>

      {/* posts */}
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}

      {/* <Post
        name="jhabindra Rayamajhi"
        description="This is test decsription for post head"
        message="test message"
        imageUrl="image.jpg"
      /> */}
    </div>
  );
}

export default Feed;
