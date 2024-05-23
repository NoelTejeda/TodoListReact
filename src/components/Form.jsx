
export const Form = ({ handleChange, handleSubmit, task }) => {
  return (
    <>
      <form >
        <input type="text"
          placeholder="Add a task"
          onChange={handleChange}
          value={task} />

        <input type="submit"
          className="btn"
          placeholder="Add a task"
          value="Add"
          onClick={handleSubmit} />
      </form>

    </>
  );
}