/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/lib/utils";
import { Input } from "../input";
import { Label } from "../label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../select";
import { Textarea } from "../textarea";
import { MultiSelect } from "../multi-select";
import { MultiSelectProps } from "../multi-select/multi-select";
import { ReactNode, useState, useRef } from "react";
import { MultiAddInput } from "./components/multi-add-input";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";
import { Button } from "../button";
import { format } from "date-fns";
import { CounterInput } from "./components/counter-input";
import { PasswordToggle } from "./components/password-input";
import { Calendar } from "../calendar";
import { Uploader } from "../uploader";
import { UploaderProps, UploaderRef } from "../uploader/uploader";

type FormFieldType =
  | "input"
  | "password"
  | "select"
  | "textarea"
  | "file"
  | "multi-select"
  | "custom"
  | "multi-add"
  | "year"
  | "calendar"
  | "number"
  | "date"
  | "counter"
  | "uploader";

type Option = {
  value: string;
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
};

interface FormFieldProps {
  type: FormFieldType;
  label?: string;
  name: string;
  placeholder?: string;
  value: any;
  onChange: (value: any) => void;
  className?: string;
  options?: Option[];
  error?: string | string[] | boolean | undefined;
  withErrorSpace?: boolean;
  disabled?: boolean;
  multiSelectProps?: Omit<
    MultiSelectProps,
    "options" | "onValueChange" | "defaultValue" | "placeholder"
  >;
  uploaderProps?: Omit<
    UploaderProps,
    "onFileChange" | "initialPreview" | "ref"
  > & {
    initialPreview?: string | null;
  };
  children?: ReactNode;
  suggestions?: string[];
  suggestionsLabel?: string;
  min?: number;
  max?: number;
  step?: number;
}

export const FormField = (props: FormFieldProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const uploaderRef = useRef<UploaderRef>(null);

  const showErrorSpace = props.withErrorSpace !== false;
  const hasError = !!props.error;
  const disabledClass = props.disabled ? "opacity-50 cursor-not-allowed" : "";

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleFileChange = (file: File | null) => {
    props.onChange(file);
  };

  const handleFileRemove = () => {
    props.onChange(null);
  };

  const renderField = () => {
    if (props.children) {
      return (
        <div
          className={cn(
            "w-full, h-full rounded-[20px]",
            disabledClass,
            hasError && "border border-red-500",
          )}
        >
          {props.children}
        </div>
      );
    }

    switch (props.type) {
      case "uploader":
        return (
          <div className={cn("w-fit", props.className)}>
            <Uploader
              ref={uploaderRef}
              onFileChange={handleFileChange}
              onRemove={handleFileRemove}
              initialPreview={props.uploaderProps?.initialPreview}
              {...props.uploaderProps}
              className={cn(
                hasError && "border border-red-500 rounded-[12px]",
                props.uploaderProps?.className,
              )}
              dropzoneClassName={cn(
                props.uploaderProps?.dropzoneClassName,
                hasError && "border border-red-500",
              )}
            />
          </div>
        );

      case "select":
        return (
          <Select
            value={props.value}
            onValueChange={props.onChange}
            disabled={props.disabled}
          >
            <SelectTrigger
              className={cn(
                "h-[50px] w-full rounded-[12px] border-0 bg-[#F6F2EE] text-[12px] text-text-primary",
                hasError && "border border-red-500",
                disabledClass,
                props.className,
              )}
            >
              <SelectValue
                className="text-text-primary"
                placeholder={props.placeholder}
              />
            </SelectTrigger>
            <SelectContent className="flex flex-col gap-10 text-white-secondary border-0">
              {props.options?.map((option) => (
                <SelectItem
                  key={option.value}
                  value={option.value}
                  disabled={props.disabled}
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );

      case "textarea":
        return (
          <Textarea
            name={props.name}
            className={cn(
              "w-full rounded-[16px] border-0 bg-[#F6F2EE] text-[12px] h-[172px] text-text-primary",
              hasError && "border border-red-500",
              disabledClass,
              props.className,
            )}
            value={props.value}
            onChange={(e) => !props.disabled && props.onChange(e.target.value)}
            placeholder={props.placeholder}
            disabled={props.disabled}
          />
        );

      case "file":
        return (
          <Input
            type="file"
            className={cn(
              "h-[50px] w-full rounded-[12px] border-0 bg-[#F6F2EE] text-[12px] text-text-primary",
              hasError && "border border-red-500",
              disabledClass,
              props.className,
            )}
            onChange={(e) =>
              !props.disabled && props.onChange(e.target.files?.[0])
            }
            disabled={props.disabled}
          />
        );

      case "multi-select":
        return (
          <MultiSelect
            options={props.options || []}
            onValueChange={props.onChange}
            defaultValue={props.value || []}
            placeholder={props.placeholder || "Select options"}
            className={cn(
              "h-[50px] w-full rounded-[12px] border-0 bg-[#F6F2EE] text-[12px] text-text-primary",
              hasError && "border border-red-500",
              disabledClass,
              props.className,
            )}
            disabled={props.disabled}
            {...props.multiSelectProps}
          />
        );

      case "number":
        return (
          <Input
            type="number"
            name={props.name}
            className={cn(
              "h-[50px] w-full rounded-[12px] border-0 bg-[#F6F2EE] text-[12px] text-text-primary",
              hasError && "border border-red-500",
              disabledClass,
              props.className,
            )}
            value={props.value}
            onChange={(e) =>
              !props.disabled &&
              props.onChange(
                e.target.value ? Number(e.target.value) : undefined,
              )
            }
            placeholder={props.placeholder}
            disabled={props.disabled}
            min={props.min}
            max={props.max}
            step={props.step}
          />
        );

      case "counter":
        return (
          <CounterInput
            value={props.value}
            onChange={props.onChange}
            min={props.min}
            max={props.max}
            step={props.step}
            className={cn(
              hasError && "w-fit p-1 rounded-[12px] border border-red-500",
              disabledClass,
              props.className,
            )}
            disabled={props.disabled}
          />
        );

      case "input":
      default:
        return (
          <Input
            type="text"
            name={props.name}
            className={cn(
              "h-[50px] w-full rounded-[12px] border-0 bg-[#F6F2EE] text-[12px] text-text-primary",
              hasError && "border border-red-500",
              disabledClass,
              props.className,
            )}
            value={props.value}
            onChange={(e) => !props.disabled && props.onChange(e.target.value)}
            placeholder={props.placeholder}
            disabled={props.disabled}
          />
        );

      case "password":
        return (
          <div className="relative">
            <Input
              type={isPasswordVisible ? "text" : "password"}
              name={props.name}
              className={cn(
                "h-[50px] w-full rounded-[12px] border-0 bg-[#F6F2EE] text-[12px] text-text-primary pr-10",
                hasError && "border border-red-500",
                disabledClass,
                props.className,
              )}
              value={props.value}
              onChange={(e) =>
                !props.disabled && props.onChange(e.target.value)
              }
              placeholder={props.placeholder}
              disabled={props.disabled}
            />
            <PasswordToggle
              isVisible={isPasswordVisible}
              onToggle={togglePasswordVisibility}
              disabled={props.disabled}
            />
          </div>
        );

      case "multi-add":
        return (
          <MultiAddInput
            value={props.value || []}
            onChange={props.onChange}
            placeholder={props.placeholder}
            className={cn(disabledClass, props.className)}
            hasError={hasError}
            disabled={props.disabled}
            suggestions={props.suggestions || []}
            suggestionsLabel={props.suggestionsLabel}
          />
        );

      case "year": {
        const currentYear = new Date().getFullYear();
        const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

        const selectedYear =
          props.value instanceof Date
            ? props.value.getFullYear().toString()
            : typeof props.value === "string"
              ? props.value
              : "";

        return (
          <Select
            value={selectedYear}
            onValueChange={(yearStr) =>
              props.onChange(new Date(Number(yearStr), 0, 1))
            }
            disabled={props.disabled}
          >
            <SelectTrigger
              className={cn(
                "h-[50px] w-full rounded-[12px] border-0 bg-[#F6F2EE] text-[12px] text-text-primary",
                hasError && "border border-red-500",
                disabledClass,
                props.className,
              )}
            >
              <SelectValue placeholder={props.placeholder || "Select year"} />
            </SelectTrigger>
            <SelectContent className="text-text-primary border-0">
              {years.map((year) => (
                <SelectItem key={year} value={year.toString()}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      }

      case "calendar":
        return (
          <div className="w-full">
            <Popover modal={true}>
              <PopoverTrigger className="justify-baseline" asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "h-[50px] w-full rounded-[12px] border-0 bg-[#F6F2EE] pl-3 text-left text-text-primary font-normal",
                    !props.value && "text-text-primary",
                    hasError && "border border-red-500",
                    disabledClass,
                    props.className,
                  )}
                  disabled={props.disabled}
                >
                  {props.value ? (
                    <span className="text-[12px] text-text-primary">
                      {format(new Date(props.value), "PPP")}
                    </span>
                  ) : (
                    <span className="text-[12px] text-tetriary">
                      {props.placeholder || "Pick a date"}
                    </span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className="w-[var(--radix-popover-trigger-width)] p-0"
                align="start"
              >
                <Calendar
                  mode="single"
                  className="w-full"
                  selected={props.value ? new Date(props.value) : undefined}
                  onSelect={(date: Date | undefined) => {
                    if (date && !props.disabled) {
                      date.setHours(12, 0, 0, 0);
                      props.onChange(date.toISOString());
                    }
                  }}
                  initialFocus
                  required={false}
                />
              </PopoverContent>
            </Popover>
          </div>
        );
    }
  };

  return (
    <div
      className={cn(
        "flex flex-col  w-full col-span-2",
        props.type === "uploader" ? "w-fit" : "w-full",
      )}
    >
      {props.label && (
        <Label
          className={cn(
            "text-text-primary text-[12px] font-normal leading-5 mb-1",
            props.disabled && "opacity-50",
          )}
        >
          {props.label}
        </Label>
      )}

      {renderField()}

      {showErrorSpace ? (
        <div className="min-h-[20px]">
          {hasError && (
            <div className="text-red-500 text-[12px]">
              {Array.isArray(props.error)
                ? props.error.join(", ")
                : props.error}
            </div>
          )}
        </div>
      ) : (
        hasError && (
          <div className="text-red-500 text-[12px] mt-1">
            {Array.isArray(props.error) ? props.error.join(", ") : props.error}
          </div>
        )
      )}
    </div>
  );
};
