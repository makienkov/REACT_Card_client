import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ROUTES_MODEL from "routes/routesModel.js";

const useText = (initialText) => {
  const [text, setText] = useState(initialText);
  const navigate = useNavigate();

  const update = (event) => {
    setText(event.target.value);
  }

  const reset = () => {
    setText(initialText);
  }

  const cancel = () => {
    navigate(ROUTES_MODEL.ROOT);
  }

  const onSubmit = () => {
    console.log(text);
  }

  return [text, update, reset, cancel, onSubmit];
}
export default useText; 
