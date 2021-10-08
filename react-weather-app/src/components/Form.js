const Form = (props) => {
  return (
    <form onSubmit = {props.getWeather}>
      <input
        type="text"
        name="city"
        placeholder="都市名を英語で入力"
        onChange = {e => props.setCity(e.target.value)}
      />
      <button type="submit">Get Weather</button>
    </form>
  );
};

export default Form;