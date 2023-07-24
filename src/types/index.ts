export type ISelectOpt = {
  label: string;
  value: string;
};

export type ModalType = {
  title: string;
  visible?: boolean;
  onClose: () => void;
};
