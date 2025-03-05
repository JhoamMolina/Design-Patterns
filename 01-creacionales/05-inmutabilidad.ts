/**
 * ! Inmutabilidad con copia
 * Aunque la inmutabilidad es una buena práctica, no siempre es posible.
 * En estos casos, se puede hacer una copia del objeto y modificar la copia.
 *
 *  * Es útil para mantener un historial de estados en aplicaciones interactivas.
 *
 */

class CodeEditorState {
  readonly content: string;
  readonly cursorPosition: number;
  readonly unsavedChanges: boolean;

  constructor(
    content: string,
    cursorPosition: number,
    unsavedChanges: boolean
  ) {
    this.content = content;
    this.cursorPosition = cursorPosition;
    this.unsavedChanges = unsavedChanges;
  }

  copyWith({
    content,
    cursorPosition,
    unsavedChanges,
  }: Partial<CodeEditorState>) {
    return new CodeEditorState(
      content ?? this.content,
      cursorPosition ?? this.cursorPosition,
      unsavedChanges ?? this.unsavedChanges
    );
  }

  displayState() {
    console.log(`Content: ${this.content}`);
    console.log(`Cursor Position: ${this.cursorPosition}`);
    console.log(`Unsave Changes: ${this.unsavedChanges}`);
  }
}

class CodeEditorHistory {
  private history: CodeEditorState[] = [];
  private currentIndex: number = -1;

  save(state: CodeEditorState) {
    if (this.currentIndex < this.history.length - 1) {
      this.history = this.history.slice(0, this.currentIndex + 1);
    }

    this.history.push(state);
    this.currentIndex++;
  }

  undo(): CodeEditorState | null {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      return this.history[this.currentIndex];
    }
    return null;
  }

  redo(): CodeEditorState | null {
    if (this.currentIndex < this.history.length - 1) {
      this.currentIndex++;
      return this.history[this.currentIndex];
    }
    return null;
  }
}

function main() {
  const history = new CodeEditorHistory();
  let editorState = new CodeEditorState("const a = 1;", 0, false);

  history.save(editorState);
  console.log("Initial State");
  editorState.displayState();

  editorState = editorState.copyWith({
    content: "const a = 2;",
    cursorPosition: 3,
    unsavedChanges: true,
  });
  history.save(editorState);

  console.log("\nState after changing content");
  editorState.displayState();

  editorState = editorState.copyWith({
    cursorPosition: 10,
  });
  history.save(editorState);

  console.log("\nState after changing cursor position");
  editorState.displayState();

  editorState = history.undo()!;
  console.log("\nState after undo");
  editorState.displayState();

  editorState = history.redo()!;
  console.log("\nState after redo");
  editorState.displayState();
}

main();
