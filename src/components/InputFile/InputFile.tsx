import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { InputFileStyle as S } from './InputFile.style';
import { useClassNames } from 'hooks/useClassNames';
import { PButton } from 'components/prime/PButton/PButton';
import { removeDuplicatesBy } from 'utils/removeDuplicatesBy';

const FileItem: React.FC<{ file: File; onRemove?: () => void; preview?: boolean }> = ({
  file,
  onRemove,
  preview,
}) => {
  const [previewImg, setPreviewImg] = useState<string | null>(null);

  useEffect(() => {
    let reader: FileReader | undefined;
    if (preview && file) {
      reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImg(reader?.result as string);
      };
      reader.readAsDataURL(file);
    }
    return () => {
      reader?.abort();
    };
  }, [preview, file]);

  return (
    <S.FileItem>
      {preview && (
        <span className="preview-img-wrapper">{previewImg && <img src={previewImg} />}</span>
      )}
      <p>{file?.name || 'no name'}</p>
      <PButton size="small" variant="tertiary" label="Eliminar" onClick={onRemove} type="button" />
    </S.FileItem>
  );
};

export const InputFile: React.FC<{
  files: File[] | null;
  accept: string;
  maxFileSizeLabel?: string;
  maxFileSize?: number;
  maxFiles?: number;
  onChange: (files: File[] | null) => void;
  // customFileValidator?: (files: File[] | null) => boolean;
  invalid?: boolean;
  disabled?: boolean;
  multiple?: boolean;
  className?: string;
  withFilePreview?: boolean;
}> = ({
  files,
  accept,
  maxFileSizeLabel,
  maxFiles,
  maxFileSize,
  multiple,
  invalid,
  disabled,
  onChange,
  withFilePreview,
  className,
}) => {
  const ref = useRef<HTMLInputElement>(null);
  const numberOfFilesSelected = useMemo(() => Array.from(files || []).length, [files]);
  const [appendFilesEnabled, setAppendFilesEnabled] = useState(false);
  const containerClassNames = useClassNames(
    {
      'input-invalid': invalid,
      'input-disabled': disabled,
    },
    className
  );

  const limitNumberOfFiles = useCallback(
    (files: File[]) => (multiple ? files.slice(0, maxFiles || 10) : files),
    [multiple, maxFiles]
  );
  const filterBigFiles = useCallback(
    (files: File[]) => (maxFileSize ? files.filter(f => f.size <= maxFileSize) : files),
    [maxFileSize]
  );

  return (
    <S.Container className={containerClassNames}>
      {(multiple || maxFileSizeLabel) && (
        <S.Rules>
          {multiple && (
            <span>
              {files?.length || 0} de {maxFiles || 10} archivos
            </span>
          )}
          {maxFileSizeLabel && <span>{maxFileSizeLabel}</span>}
        </S.Rules>
      )}
      {files?.map(current => (
        <FileItem
          file={current}
          key={current.name}
          onRemove={() => onChange(files.filter(file => file !== current))}
          preview={withFilePreview}
        />
      ))}
      {numberOfFilesSelected === 0 && (
        <PButton
          size="small"
          variant="tertiary"
          label="Elegir archivos"
          onClick={() => ref.current?.click()}
          type="button"
          disabled={disabled}
        />
      )}
      {multiple && numberOfFilesSelected > 0 && (
        <S.MultipleActions>
          <PButton
            size="small"
            variant="tertiary"
            label="Eliminar todos"
            onClick={() => onChange([])}
            type="button"
          />
          <PButton
            size="small"
            label="Elegir más"
            onClick={() => {
              setAppendFilesEnabled(true);
              ref.current?.click();
            }}
            type="button"
            disabled={files?.length === (maxFiles || 10)}
          />
        </S.MultipleActions>
      )}
      <input
        type="file"
        accept={accept}
        multiple={multiple}
        ref={ref}
        onChange={e => {
          onChange(
            filterBigFiles(
              limitNumberOfFiles(
                !appendFilesEnabled
                  ? Array.from(e.target.files || [])
                  : removeDuplicatesBy(
                      [...(files || []), ...Array.from(e.target.files || [])],
                      'name'
                    )
              )
            )
          );
          setAppendFilesEnabled(false);
          if (ref.current?.value) {
            ref.current.value = '';
          }
        }}
      />
    </S.Container>
  );
};
