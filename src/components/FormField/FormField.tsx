import React, { useId } from 'react';
import {
  Controller,
  ControllerFieldState,
  ControllerRenderProps,
  FieldPath,
  FieldValues,
  // FormState,
  UseControllerProps,
  UseFormReturn,
  // UseFormStateReturn,
} from 'react-hook-form';
import { FormFieldStyle as S } from './FormField.style';

export const FormField: React.FC<{
  form: UseFormReturn<any, object>;
  controller: UseControllerProps<any>;
  label?: string;
  helpText?: string;
  infoContent?: string | React.ReactNode;
  children?:
    | React.ReactNode
    | ((props: {
        field: ControllerRenderProps<FieldValues, FieldPath<FieldValues>> & { id: string };
        fieldState: ControllerFieldState;
        // formState: UseFormStateReturn<FormState<FieldValues>>;
      }) => React.ReactNode);
  className?: string;
}> = ({ form, controller, label, helpText, infoContent, children, className }) => {
  const id = useId();
  return (
    <S.Container className={className}>
      <S.Header>
        {label && (
          <S.Label htmlFor={id}>
            {label}
            {controller.rules?.required && <S.RequiredStar>*</S.RequiredStar>}
          </S.Label>
        )}
        {infoContent && <S.InfoContent>{infoContent}</S.InfoContent>}
      </S.Header>
      <S.Content>
        {typeof children === 'function' ? (
          <Controller
            control={form.control}
            {...controller}
            render={props => (
              <>
                {children({ field: { ...props.field, id }, fieldState: props.fieldState })}
                {!!props.fieldState?.error?.message && (
                  <S.ErrorText>{props.fieldState.error.message}</S.ErrorText>
                )}
              </>
            )}
          />
        ) : (
          children
        )}
      </S.Content>
      {helpText && <S.HelpText>{helpText}</S.HelpText>}
    </S.Container>
  );
};
