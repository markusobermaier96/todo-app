import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });
  let note = "";

  return (
    <div>
      <TodoForm name={"todo"} done={false}></TodoForm>
      <TodoList name={"todo"} done={false}></TodoList>
    </div>
  );
};

export default Home;

type Todo = {
  name: string;
  done: boolean;
};

const TodoForm = ({ name, done }: Todo) => {
  return (
    <form action="addTodo" autoComplete="off" onSubmit={addTodo()}>
      <div className="flex justify-center p-7">
        <input
          placeholder="was steht an?"
          id="input"
          type="text"
          className="rounded-md border-2 text-center text-lg"
        />
      </div>
    </form>
  );
};

const TodoList = ({ name, done }: Todo) => {
  return <div className="flex h-screen"></div>;
};

function addTodo():
  | import("react").FormEventHandler<HTMLFormElement>
  | undefined {
  return;
}
