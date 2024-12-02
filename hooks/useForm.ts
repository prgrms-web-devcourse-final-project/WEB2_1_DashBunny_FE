import { ChangeEvent, useEffect, useState } from "react"

interface UseFormProps<T> {
  initialValues: T
  validate: (values: T) => Record<keyof T, string>
}

function useForm<T>({ initialValues, validate }: UseFormProps<T>) {
  const [values, setValues] = useState(initialValues)
  //터치됐는지 체크
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  const [errors, setErrors] = useState<Record<string, string>>({})
  //제네릭 타입으로 받은 객체의 특정 키 값을 넣으면, 해당 키의 값을 변경하는 함수를 리턴한다.
  const handleValues = (name: keyof T) => (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value
    setValues({ ...values, [name]: text })
  }

  //터치
  const handleBlur = (name: keyof T) => {
    setTouched({ ...touched, [name]: true })
  }
  //특정 키의 값을 넣으면 1번 객체해서 해당 키의 값,
  //1번 객체에서 해당 키의 값을 변경하는 함수,
  //2번 객체에서 해당 키의 boolean값을 변경하는 함수를 리턴한다.
  const getTextInputProps = (name: keyof T) => {
    const value = values[name]
    const onChange = handleValues(name)
    //이름 받아서 폼에서 해당 키의 값을 작성하는 input이 터치됐는지 체크. 포커스를 잃으면 실행
    const onBlur = () => handleBlur(name)
    return { value, onChange, onBlur }
  }
  //values입력 할 때마다 validate함수를 실행해서 에러메세지를 업데이트한다.
  useEffect(() => {
    const newErrors = validate(values)
    setErrors(newErrors)
  }, [validate, values])

  //에러가 없고, 모든 폼이 클릭되었다면 true를 리턴한다.
  const isValid =
    Object.values(errors).every((error) => error === "") &&
    Object.values(touched).every((touched) => touched === true)

  //객체의 값,
  //해당 폼의 에러메시지,
  //해당 폼의 작성여부,
  //각각의 텍스트 인풋에 대한 props:{값, 값 변경 함수, 작성체크 함수}리턴.
  return { values, touched, errors, getTextInputProps, isValid }
}
export default useForm
