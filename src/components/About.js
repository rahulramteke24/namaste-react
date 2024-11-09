import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is my about us page.</h2>
      <User name={"Rahul(functional)"} />
      <UserClass name={"Rahul(class)"} />
    </div>
  );
};

export default About;
