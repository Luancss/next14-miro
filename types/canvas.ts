export type CanvasState = 
  | {
     mode: CanvasMode.None;
    }
  | {
    mode: CanvasMode.SelectionNet,
   } 
  | {
    mode: CanvasMode.Translating,
  }
  | {
    mode: CanvasMode.Inserting,
  }
  | {
    mode: CanvasMode.Pencil,
  }
  | {
    mode: CanvasMode.Pressing,
  }
  | {
    mode: CanvasMode.Resizing,
  }

export enum CanvasMode {
  None,
  Pressing,
  SelectionNet,
  Translating,
  Inserting,
  Resizing,
  Pencil,
};