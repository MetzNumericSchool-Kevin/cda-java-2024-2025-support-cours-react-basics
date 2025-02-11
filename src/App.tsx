import "./App.css";
import { PrimaryButton } from "./components/Button/PrimaryButton";
import { Card } from "./components/Card_Version2/Card"
import PackingList from "./components/ConditionalRendering/PackingList";
import { Pokemon } from "./components/Effect/Pokemon";
import { ListExample } from "./components/List/ListExample";
import { Counter } from "./components/State/Counter";

function App() {
  return (
    <>
      {/* <Card
        title="Super Chaussure"
        buttonTxt="Acheter"
        action={[
          <PrimaryButton txt="Acheter" />,
          <PrimaryButton txt="Whishlist" />
        ]}
      >
        <strong>A ta place</strong> je ne manquerai pas de <i>l'acheter ;)</i>
      </Card> */}

      {/* <PrimaryButton txt="Cliquer ici" onButtonClicked={() => alert('bouton cliqué')} /> */}

      {/* <ListExample /> */}

      {/* <PackingList /> */}

      {/* <Counter /> */}

      {/* <Counter /> */}

      <Pokemon />
    </>
  );
}

export default App;
