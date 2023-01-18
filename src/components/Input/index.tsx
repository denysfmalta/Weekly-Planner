import { ChangeEvent } from 'react';
import * as S from '../../style';

type inputProps = {
    labelTitle: string
    placeholder: string
    type: string
    value: string
    setValue: any
}


export const Input = ({ labelTitle, placeholder, type, value, setValue,}: inputProps) => {
  const handleChange = (e:React.ChangeEvent <HTMLInputElement>) => {
    setValue(e.target.value)
  }
  
    return (
        
        <div>
            <S.inputLabel>
                {labelTitle}
            </S.inputLabel>
            <S.userInput placeholder={placeholder} type={type} value={value} onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange (e) }/>
        </div>
        
    )
}

