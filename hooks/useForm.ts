import { useEffect, useState } from "react"

interface UseFormProps<T> {
  initialValues: T
  //The validate attribute is a function that takes the form values as an argument and returns an object with the error messages.
  validate: (values: T) => Record<keyof T, string>
}

//객체를 받아서 두 개의 상태를 만든다.
function useForm<T>({ initialValues, validate }: UseFormProps<T>) {
  //입력값 객체 상태관리 -1
  const [values, setValues] = useState(initialValues)
  //터치 여부 값 객체 상태관리 -2
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [errors, setErrors] = useState<Record<string, string>>({})
  //제네릭 타입으로 받은 객체의 특정 키 값을 넣으면, 해당 키의 값을 변경하는 함수를 리턴한다.
  const handleValues = (name: keyof T) => (text: string) => {
    setValues({ ...values, [name]: text })
  }
  //제네릭 타입으로 받은 객체의 특정 키 값을 넣으면, 해당 키의 값을 변경하는 함수를 리턴한다.
  const handleBlur = (name: keyof T) => {
    setTouched({ ...touched, [name]: true })
  }
  //특정 키의 값을 넣으면 1번 객체해서 해당 키의 값,
  //1번 객체에서 해당 키의 값을 변경하는 함수,
  //2번 객체에서 해당 키의 boolean값을 변경하는 함수를 리턴한다.
  const getTextInputProps = (name: keyof T) => {
    const value = values[name]
    const onChange = handleValues(name)
    const onBlur = () => handleBlur(name)
    return { value, onChange, onBlur }
  }
  //values입력 할 때마다 validate함수를 실행해서 에러메세지를 업데이트한다.
  useEffect(() => {
    const newErrors = validate(values)
    setErrors(newErrors)
  }, [validate, values])

  //객체의 값,
  //해당 폼의 에러메시지,
  //해당 폼의 작성여부,
  //각각의 텍스트 인풋에 대한 props:{값, 값 변경 함수, 작성체크 함수}리턴.
  return { values, errors, touched, getTextInputProps }
}
export default useForm
