export interface TaskModal {
  open: boolean;
  onClose: () => void;
  id: number;
  text: string;
  isHighPriority: boolean;
  checked: boolean;
}
