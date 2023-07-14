import Joke from "../joke";

const ChuckJoke: React.FC<Joke> = ({ joke, id }) => (
  <p>
    {id} {joke}
  </p>
);

export default ChuckJoke;
