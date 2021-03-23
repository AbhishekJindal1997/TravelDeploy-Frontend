import Travel from "./components/Travel";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Travel />
    </div>
  );
}

export default App;
