export interface IStepData<T> {
  onChange: (value: T) => void;
  form: T;
}
