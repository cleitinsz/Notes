import logo from "./assets/Logo.svg";
import { NewNoteCard } from "./components/new-note-card";
import { NoteCard } from "./components/note-card";

const note = {
  date: new Date(),
  content: "Hello World!",
};

export function App() {
  return (
    <div className="mx-auto max-w-6xl md:p-6 sm:p-4 my-12 space-y-6">
      <img src={logo} alt="NLW expert" />
      <form className="w-full">
        <input
          type="text"
          placeholder="Busque as suas notas..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tight placeholder:text-slate-500 outline-none"
        />
      </form>

      <div className="h-px bg-slate-400"></div>
      <div className="grid grid-cols-3 auto-rows-[250px] gap-6">
        <NewNoteCard />
        <NoteCard note={note} />
        <NoteCard note={note} />
        <NoteCard note={note} />
      </div>
    </div>
  );
}
