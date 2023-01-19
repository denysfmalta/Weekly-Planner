import React from "react";
import * as S from "./style";
import { inputProps } from "../../types";


export const Input = ({
  labelTitle,
  placeholder,
  type,
  value,
  setValue,
  error,
}: inputProps) => {
  
  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <S.Div>
      <S.Label>{labelTitle}</S.Label>
      <S.Input
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={(e) => handleChangeValue(e)}
        erro={error}
      />
    </S.Div>
  );
};